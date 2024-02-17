// Problem 2: File Writer
// Problem Statement: Create a function writeToFile(filePath, content)
// that takes the path to a file and user input content as input.
// The function should write the content to the specified file using the fs module.

const fs = require("fs");

function readFileContent(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("There is an error that file dosent exist ");
    } else {
      console.log(`File Content of : ${filePath} `);
      console.log(data);
    }
  });
}

function writeToFile(filePath, content) {
    
  fs.writeFileSync(filePath, content, (err) => {
    if (err) {
      console.log("There is an error that file dosent exist ");
    }
  });
  readFileContent("test-files/output1.txt");
}

writeToFile("test-files/output1.txt", "Data written to output.txt");
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Eror writing to file: ENOENT: no such file or directory...r
