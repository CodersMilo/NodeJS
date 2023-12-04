const { emailTemplate } = require("./js-foundation/001-template");
const { getUserById } = require("./js-foundation/003-callbacks");
const { makeBuildPerson } = require("./js-foundation/004-factory-functions");
const { pokemonByID } = require("./js-foundation/006-promises");

require("./js-foundation/002-destructuring");

console.log(emailTemplate);
console.log("Hola mundo desde app.js");

getUserById(1, (err, res) => {
  if (err) throw new Error(err);
  console.log(res);
});

console.log(makeBuildPerson({ name: "Jhon", birthDate: "2003-12-12" }));
pokemonByID(56);