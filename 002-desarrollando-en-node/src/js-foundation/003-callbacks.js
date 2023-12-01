const listOfUsers = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Camilo" },
  { id: 3, name: "Carolina" },
];

const getUserById = (id, callback) => {
  const user = listOfUsers.find((user) => user.id === id);
  user ? callback(null, user) : callback(`User not found with ID ${id}.`);
};

module.exports = { getUserById };
