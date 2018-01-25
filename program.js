const dir = process.argv[2];
const ext = process.argv[3];
const ls = require("./ls");

ls(dir, ext, (err, result) => {
  if (err) console.log(err);
  else result.map(file => console.log(file));
});
