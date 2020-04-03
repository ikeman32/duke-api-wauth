const file = require("./file");
const packagePrompts = require("./packagePrompts");

//Provide a directory tree fo the new project
const path = [
  "/NewApiProject",
  "/NewApiProject/api",
  "/NewApiProject/auth",
  "/NewApiProject/data",
  "/NewApiProject/data/migrations",
  "/NewApiProject/data/seeds",
  "/NewApiProject/middleware",
  "/NewApiProject/routes",
  "/NewApiProject/models"
];

async function startProject() {
  //Loops through and creates directory structure
  path
    .forEach(dirPath => {
      file.createDir(dirPath);
    });
    
    packagePrompts();
}

module.exports = startProject;
