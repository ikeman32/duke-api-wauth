const file = require('./file');
const template = require('./template');


const fileContent = [template.license,
    template.readme,
    template.indexjs,
    template.knexfilejs,
    template.env,
    template.ignoregit,
    template.server,
    template.authrouter,
    template.migration,
    template.dbconfig,
    template.restricted,
    template.model,
    template.router
];

const newFile = ['./NewApiProject/LICENSE', 
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
    for(let i = 0; i <= fileContent.length -1; i++){
        file.createFile(newFile[i], fileContent[i]);
    }
    
}

module.exports = copyProjectFiles;