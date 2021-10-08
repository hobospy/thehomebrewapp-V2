![thehomebrewapi](./resources/grain.jpg)

# The Homebrew App

## Description

thehomebrewapp is a [ReactJS](https://reactjs.org/) based single page application that will connect to [thehomebrewapi](https://github.com/hobospy/thehomebrewapi-V2).

## How to use

### Install Node.js and NPM

Full guide is available on the [NPM download docs page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Install the [Windows Node Version Manager](https://github.com/coreybutler/nvm-windows) (there are some detailed instructions that need to be followed)
- Install and use the latest version of Node using the following commands

      nvm install latest

      nvm use _version_

### Running the code

- Clone this repository
- Open the code using VSCode by navigating to the containing folder and typing `code .`
- Open the terminal within VSCode and type `npm install` (this will install the required dependencies)
- Open the package.json file and ensure the port entry for start:dev matches the port exposed by the API
- To start the app, run `npm run start:dev`
- Once the app is running (wait for a compiled successfully message), open an internet explorer and navigate to `localhost:4444/recipes`
