let users = [];

function addUser(user) {
    users.push(user);
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

module.exports = {
    addUser,
    getUserById
};