const fs = require("fs");

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (err, data) => {
    if (err) return callback(err);

    const re = new RegExp(`\.${extension}$`);

    data = data.filter(file => file.match(re));

    callback(err, data);
  });
};
