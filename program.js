const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs
    .createReadStream(process.argv[3])
    .on("data", data => res.write(data))
    .on("end", () => res.end());
});

server.listen(process.argv[2]);
