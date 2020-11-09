var inquirer = require("inquirer");
var fs = require("fs");
var markDown = require("./utils/generateMarkdown.js");
var api = require("./utils/API.JS");

function writeToFile(fileName, data) {
    // USE appendFile TO ADD ADDITIONAL INFORMATION THROUGH THE README.MD
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Edits Successfull!");
  });
}

function init() {
  // array of questions for user
  inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "Description",
        message: "Please write a description of the application here: ",
      },
      {
        type: "input",
        name: "Installation",
        message: "Please include steps to install this project here: ",
      },
      {
        type: "input",
        name: "Usage",
        message: "Please descibe Usage for this project here: ",
      },
      {
        type: "list",
        message: "Select your valid License: ",
        name: "Licenses",
        choices: [
          "Apache License Version 2.0",
          "MIT License",
          "Mozilla Public License 2.0",
        ],
      },
      {
        type: "input",
        name: "Contributing",
        message:
          "Please put in your name if you have contributed, otherwise n/a:",
      },

      {
        type: "input",
        name: "Instructions",
        message: "Please enter any tests performed on this project here: ",
      },
      {
          type: "input",
          name: "GITHUB",
          message: "What is your github user name?"
      },
      {
          type:"input",
          name:"Email",
          message:"Whats the best email to reach you at?"
      }
    ])
    .then(function (response) {
      console.log(response.Licenses);
      var userData = { ...response };
    
        if (response.Licenses === "MIT License") {
          userData.licenseBadge =
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        } else if (response.Licenses === "Moxilla Public License 2.0") {
        userData.licenseBadge =
        "[![License:MPL](https://img.shields.io/badge/Mozilla%20Public-License%202.0-orange)]";
        } else (response.Licenses == "Apache License Version 2.0"); {
            userData.licenseBadge = 
            "[![License:APX](https://img.shields.io/badge/Apache%20-License%202.0-red)]";
        }
    
      api(response.github)
      .then(githubUser=>{
          console.log(githubUser)
        userData.avatar = githubUser.data.avatar_url;
        console.log(userData);
      writeToFile("readme.md", markDown(userData));
      })  
      
    });
}

init();
