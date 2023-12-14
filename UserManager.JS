
class User {
  constructor(id, name, photo, email) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.email = email;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(id, name, photo, email) {
    const newUser = new User(id, name, photo, email);
    this.users.push(newUser);
    this.displayUsers();
  }

  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
    this.displayUsers();
  }

  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  getAllUsers() {
    return this.users;
  }

  createUser(data) {
    const { id, name, photo, email } = data;
    this.addUser(id, name, photo, email);
  }

  displayUsers() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';

    this.users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <img src="${user.photo}" alt="${user.name}" style="max-width: 100px; max-height: 100px;">
        <p>Email: ${user.email}</p>
        <button onclick="removeUser(${user.id})">Remove</button>
        <hr>
      `;
      userListElement.appendChild(userDiv);
    });
  }
}

const userManager = new UserManager();

function removeUser(userId) {
  userManager.removeUser(userId);
}

userManager.createUser({ id: 1, name: 'User 1', photo: 'images/user1.jpg', email: 'user1@example.com' });
userManager.createUser({ id: 2, name: 'User 2', photo: 'images/user2.jpg', email: 'user2@example.com' });
