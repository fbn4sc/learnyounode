const fs = require("fs");
const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (error, files) => {
  if (error) throw error;

  const re = new RegExp(`\.${ext}$`);

  files.map(file => {
    if (file.match(re)) console.log(file);
  });
});
