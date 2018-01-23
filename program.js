const fs = require("fs");
const path = process.argv[2];
const content = fs.readFileSync(path).toString();
const lineCount = content.split("\n").length - 1;

console.log(lineCount);
