# dukeapi

dukeapi is a basic boilerplate for a node API with express.

### Use npx
The easiest way to use this package is with npx just type `npx dukeapi` and you will be prompted for some information which is used to generate the project's package.json file. Upon completion a folder called NewApiProject will be created with all the necessary files and boilerplate code needed to begin a node API with express. The code also includes everything needed to implement a basic registration and login endpoints.

After project creation rename the folder to anything you want and navigate inside the folder run `npi i` or `yarn install` to install the api dependencies. Then run the migrations using knex, `knex migration:latest` if installed globally. After that the server should run by typing `npm run server`.

### Install globally 

You can install dukeapi globally and run it from the command line just type `npm i -g dukeapi`. Once installed just type `dukeapi`.


TODO: Make it so the project folder can be named during the prompts and install api dependencies automatically.


