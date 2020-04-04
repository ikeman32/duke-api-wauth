const file = require('./file');
const template = require('.${template}');


const copyFrom = [`${template}/LICENSE`, 
    `${template}/README.md`,
    `${template}/index.js`,
    `${template}/knexfile.js`,
    `${template}/env`,
    `${template}/gitignore`,
    `${template}/api/server.js`,
    `${template}/auth/auth-router.js`,
    `${template}/data/migrations/user-migration.js`,
    `${template}/data/dbconfig.js`,
    `${template}/middleware/restricted.js`,
    `${template}/models/auth-model.js`,
    `${template}/routes/router.js`
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