const { emailTemplate } = require("./js-foundation/001-template");
const { getUserById } = require("./js-foundation/003-callbacks");

require("./js-foundation/002-destructuring");

console.log(emailTemplate);
console.log("Hola mundo desde app.js");

getUserById(1, (err, res) => {
  if (err) throw new Error(err);
  console.log(res);
});
