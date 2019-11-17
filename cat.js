const fs = require('fs');

module.exports = (filename) => {
  fs.readFile(filename, (err,files) => {
    if (err) throw err;
    process.stdout.write(files);
    process.stdout.write('\n > ');
  });
};
