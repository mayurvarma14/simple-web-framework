import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const collection = User.buildUserCollection();

collection.on('change', () => { console.log(collection); });
collection.fetch();

const user = User.buildUser({ name: 'Edgardo', age: 53 });
const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
}