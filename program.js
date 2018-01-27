const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let content = "";
  if (req.method === "POST") {
    req.on("data", data => {
      content += data.toString();
    });

    req.on("end", () => {
      res.end(content.toUpperCase());
    });
  }
});

server.listen(process.argv[2]);
