const inquirer = require("inquirer");
const file = require("./file");
const copyProjectFiles = require("./copyProjectFiles");

//Prompts
const questions = [
  {
    type: "input",
    name: "name",
    message: "Name of the project",
    validate: name => typeof name === "string"
  },
  {
    type: "input",
    name: "author",
    message: "Name of the author",
    validate: name => typeof name === "string"
  },
  {
    type: "input",
    name: "description",
    message: "description",
    validate: name => typeof name === "string"
  },
  {
    type: "input",
    name: "username",
    message: "Git username",
    validate: name => typeof name === "string"
  }
];

async function packagePrompts() {
  inquirer
    .prompt(questions)
    .then(res => {
      //Function to process the answers
      handleResponse(res);
    })
    .then(() => {
      //wait until the answer are processed
      copyProjectFiles();
    });
}

const handleResponse = ans => {
  let username = ans.username;
  username !== ""
    ? (username = `https://github.com/${ans.username}/${ans.name}.git`)
    : (username = "");
  var obj = {
    name: ans.name,
    description: ans.description,
    version: "1.0.0",
    main: "index.js",
    scripts: {
      server: "nodemon index.js",
      start: "index.js"
    },
    repository: {
      type: "git",
      url: username
    },
    keywords: [],
    author: ans.author,
    license: "MIT",
    bugs: {
      url: username
    },
    homepage: username,
    dependencies: {
      express: "^4.17.1",
      knex: "^0.20.8",
      "knex-cleaner": "^1.3.0",
      sqlite3: "^4.1.1",
      morgan: "^1.10.0",
      cors: "^2.8.5",
      dotenv: "^8.2.0",
      helmet: "^3.22.0",
      bcryptjs: "^2.4.3",
      jsonwebtoken: "^8.5.1"
    },
    devDependencies: {
      nodemon: "^2.0.2"
    }
  };

  //Declare a new package.json file
  const newFile = "./NewApiProject/package.json";

  //Format json file
  const fileContent = JSON.stringify(obj, undefined, 2);

  //Create package.json file
  file.createFile(newFile, fileContent);
};

module.exports = packagePrompts;
