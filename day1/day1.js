// Problem 1: File Reader
// Problem Statement: Create a function readFileContent(filePath) 
// that takes the path to a file as input and reads its content asynchronously using the fs module. 
// The function should print the content to the console.
const fs = require('fs')

function readFileContent(filePath) {
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            console.log("there is an error that file dosent exist ")
        }else{
            console.log(`File Content of : ${filePath} `)
            console.log(data)
        }
    })
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...