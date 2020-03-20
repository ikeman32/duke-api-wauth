// Handles file and directory functions

const fs = require("fs");

module.exports = {
    createDir,
    createFile,
    copyFiles
};

function createDir (dirPath) {
    fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, error => {
      if (error) {
        console.error("An error occurred", error);
      } else {
        console.log("Your directory is made");
      }
    });
  }
  
  function createFile(newFile, fileContent){
    fs.writeFile(newFile, fileContent, error => {
      if (error) {
        console.error("An error occurred", error);
      } else {
        console.log("Your file is made");
      }
    });
  };
  
  function copyFiles(copyFrom, copyTo){
    fs.copyFile(copyFrom, copyTo, error => {
      if (error) {
        console.error("An error occurred", error);
      } else {
        console.log("Your file is copied");
      }
    });
  };