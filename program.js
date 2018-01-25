const http = require("http");

const fetchContent = url => {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      let content = "";

      response.setEncoding("utf8");

      response.on("data", data => (content += data));

      response.on("end", () => {
        resolve(content);
      });
    });
  });
};

const main = async () => {
  for (i = 2; i <= 4; i++) {
    console.log(await fetchContent(process.argv[i]));
  }
};

main();
