import { Collection } from "./models/Collection";
import { User } from "./models/User";
import { UserForm } from './views/UserForm';

const collection = User.buildUserCollection();

collection.on('change', () => { console.log(collection); });
collection.fetch();

const user = User.buildUser({ name: 'Edgardo', age: 53 });
const root = document.getElementById('root');
if (root) {
    const userForm = new UserForm(root, user);
    userForm.render();

}