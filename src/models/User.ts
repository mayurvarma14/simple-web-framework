import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Models';
import { ApiSync } from './ApiSync';
interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
    static buildUser(attributes: UserProps): User {
        return new User(
            new Attributes<UserProps>(attributes),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }
    // constructor(attributes: UserProps) {
    //     this.attributes = new Attributes<UserProps>(attributes);
    // }


}