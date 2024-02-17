// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using 
// the child_process module. 
// The function should print the output of the command to the console.
const { exec } = require('child_process');

function executeCommand(command) {
    exec(command,(error,stdout,stderr)=> {
        if(error){
            console.log(`Error executing command : ${error.message}`);
            return;
        }

        if(stderr){
            console.log(`command stderr: ${stderr}`);
            return;
        }

        console.log('Output:');
        console.log(stdout);
    });
}

executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');


