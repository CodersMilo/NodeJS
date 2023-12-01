const makeBuildPerson = ({ name, birthDate }) => {
  return {
    id: new Date().getTime(),
    name,
    birthDate,
    age: new Date().getFullYear() - new Date(birthDate).getFullYear(),
  };
};

module.exports = { makeBuildPerson }