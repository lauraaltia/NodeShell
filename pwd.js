module.exports = function () {
  const currentWorkingDirectory = process.cwd()
  process.stdout.write(currentWorkingDirectory);
  process.stdout.write('\n > ');
};
