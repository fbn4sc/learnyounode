const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === "/api/parsetime") {
    const date = new Date(reqUrl.query.iso);

    res.end(
      JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      })
    );
  }

  if (reqUrl.pathname === "/api/unixtime") {
    res.end(JSON.stringify({ unixtime: Date.parse(reqUrl.query.iso) }));
  }
});

server.listen(process.argv[2]);
