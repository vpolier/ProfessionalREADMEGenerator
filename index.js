// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

// ask user for app name
inquirer.prompt([
    {
     type: 'input',
     message: "What is your app name?",
     name: "appName"   
    },
    //ask user for description, installation instructions, usage information, contribution guidelines and test instruction 
    {
        type: 'input',
        message: "What is your app about?",
        name: "description"   
       },
       {
        type: 'input',
        message: "How to instal the app?",
        name: "instalationInstruction"   
       },
       {
        type: 'input',
        message: "How to use the app?",
        name: "usageInformation"   
       },
       {
        type: 'input',
        message: "How to contribute to the app?",
        name: "contributionGuidelines"   
       },
       // ask user for license (list)

       // contributing
       {
        type: 'list',
        message: "What is your license?",
        name: "license",   
        choices: [
        'MIT',
        'WTF'
        ]
       },

]).then (function(ans){
    // generate readme file based on the answers collected 
    console.log({ans});

    const readme = generateMarkdown(ans);
       
    console.log(readme);
    // put this readme into a file in the output folder

    const outputPath = path.join(__dirname, 'output', 'README.md');

    fs.writeFileSync(outputPath, readme, 'utf-8');
})




}

// Function call to initialize app
init();
