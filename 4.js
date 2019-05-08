const child_process = require('child_process');

child_process.exec('node -v', (error, stdout, stderr) => {
    console.log(stdout)
});
