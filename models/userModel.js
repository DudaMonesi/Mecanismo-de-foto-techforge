let users = []; 

function addUser(user) {
  users.push(user);
}

function findByUsername(username) {
  return users.find(user => user.username === username);
}

function getAllUsers() {
  return users;
}

module.exports = {
  addUser,
  findByUsername,
  getAllUsers
};
