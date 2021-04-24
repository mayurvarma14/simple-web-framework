import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';
export class User {

    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>;

    constructor(attributes: UserProps) {
        this.attributes = new Attributes<UserProps>(attributes);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProps) {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch() {
        const id = this.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }
        this.sync.fetch(id).then((response: AxiosResponse) => {
            this.set(response.data);
        });
    }
    save(): void {

        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }
}