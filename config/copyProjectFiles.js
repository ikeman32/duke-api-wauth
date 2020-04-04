const file = require('./file');
const template = require('../template');


const copyFrom = [`${template}/LICENSE`, 
    `${template}/README.md`,
    `${template}/index.txt`,
    `${template}/knexfile.xt`,
    `${template}/env.txt`,
    `${template}/gitignore.txt`,
    `${template}/api/server.txt`,
    `${template}/auth/auth-router.txt`,
    `${template}/data/migrations/user-migration.txt`,
    `${template}/data/dbconfig.txt`,
    `${template}/middleware/restricted.txt`,
    `${template}/models/auth-model.txt`,
    `${template}/routes/router.txt`
];

const copyTo = ['./NewApiProject/LICENSE', 
    './NewApiProject/README.md',
    './NewApiProject/index.js',
    './NewApiProject/knexfile.js',
    './NewApiProject/.env',
    './NewApiProject/.gitignore',
    './NewApiProject/api/server.js',
    './NewApiProject/auth/auth-router.js',
    './NewApiProject/data/migrations/user-migration.js',
    './NewApiProject/data/dbconfig.js',
    './NewApiProject/middleware/restricted.js',
    './NewApiProject/models/auth-model.js',
    './NewApiProject/routes/router.js',
];

function copyProjectFiles (){
    for(let i = 0; i <= copyFrom.length -1; i++)
    file.copyFiles(copyFrom[i], copyTo[i]);
    
}

module.exports = copyProjectFiles;