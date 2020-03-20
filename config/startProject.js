const file = require('../config/file');

//Provide a directory tree fo the new project
const path = ['/NewApiProject', 
    '/NewApiProject/api', 
    '/NewApiProject/data',
    '/NewApiProject/data/migrations',
    '/NewApiProject/data/seeds', 
    '/NewApiProject/middleware',
    '/NewApiProject/routes',
    '/NewApiProject/models'];

function startProject() {
    path.forEach(dirPath =>{
        file.createDir(dirPath);
    })
}

module.exports = startProject;