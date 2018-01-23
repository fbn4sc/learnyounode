const fs = require("fs");
const path = process.argv[2];

fs.readFile(path, "utf8", (error, data) => {
  if (error) throw error;

  const lineCount = data.split("\n").length - 1;

  console.log(lineCount);
});
