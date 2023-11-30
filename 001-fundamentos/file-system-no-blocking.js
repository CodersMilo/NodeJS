const fs = require("fs");

fs.readFile("./README-React.md", { encoding: "utf-8" }, (err, res) => {
  if (err) throw new Error("Error with read this file.");

  const wordCount = res.split(" ");
  const reactWordCount = res.match(/react/gi ?? []).length;

  console.log("Total of words", wordCount.length);
  console.log("Total of word React", reactWordCount);
});

console.log("Pasa primero por no ser bloqueante!");
