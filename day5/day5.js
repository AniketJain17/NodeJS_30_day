

const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    try {
        // Get the file extension from the provided file path
        const actualExtension = path.extname(filePath);

        // Compare the actual extension with the expected extension
        if (actualExtension === expectedExtension) {
            console.log(`The file has the expected extension (${expectedExtension}).`);
        } else {
            console.log(`The file does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}


checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');