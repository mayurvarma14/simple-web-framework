import { User } from './models/User';

const user = new User({ name: "John", age: 34 });

console.log(user.get('name'));
console.log(user.get('age'));
// user.save();
user.events.on('change', () => { console.log('User was changed'); });

user.set({ age: 22 });
const user1 = new User({ id: 1 });
user1.events.on('change', () => { console.log('User was changed', user1); });
user1.fetch();


const user2 = new User({ name: 'Leo', age: 46 });
user2.on('save', () => {
    console.log('User was saved', user2);
});
// user2.save();