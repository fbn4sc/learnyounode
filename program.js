const net = require("net");
const port = process.argv[2];

const padNumber = number => (number < 10 ? "0" + number : number);

const server = net.createServer(socket => {
  let now = new Date();

  const year = now.getFullYear();
  const month = padNumber(now.getMonth() + 1);
  const date = padNumber(now.getDate());
  const hours = now.getHours();
  const minutes = padNumber(now.getMinutes());

  now = `${year}-${month}-${date} ${hours}:${minutes}\n`;

  socket.end(now);
});

server.listen(port);
