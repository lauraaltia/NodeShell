const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd'){
      pwd();
    } else if (cmd === 'ls') {
      ls();
    } else if (cmd.includes('cat')) {
      const cmdArr = cmd.split(' ');
      const filename = cmdArr[1];
      cat(filename);
    } else if (cmd.includes('curl')) {
      const cmdArr = cmd.split(' ');
      const urlReq = cmdArr[1];
      curl(urlReq);
    } else {
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\n > ');
    }

});


