const file = require('./file');


const copyFrom = ['./template/LICENSE', './template/README.md'];

const copyTo = ['./NewApiProject/LICENSE', './NewApiProject/README.md'];

function copyProjectFiles (){
    for(let i = 0; i <= copyFrom.length -1; i++)
    file.copyFiles(copyFrom[i], copyTo[i]);
    
}

module.exports = copyProjectFiles;