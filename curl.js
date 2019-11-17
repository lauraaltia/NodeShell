const request = require('request');

module.exports = (urlString) => {
  request(urlString, (error, response, body) => {
    if (error) {
      process.stderr.write(error.toString());
      return;
    } else {
      console.log('body:', body);
      process.stdout.write('\n > ');
    }
  });
};
