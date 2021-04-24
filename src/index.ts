import { User } from './models/User';

const user = new User({ name: "John", age: 34 });

console.log(user.get('name'));
console.log(user.get('age'));
// user.save();
user.events.on('test', () => { console.log('test!'); });
user.events.trigger('test');

const user1 = new User({ id: 1 });
user1.fetch();

