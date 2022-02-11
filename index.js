const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/page-template.js");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Employee = require('./lib/Employee'); 


const workers = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: 'what is your manager\'s name?',
        },
        {
            name: 'id',
            message: "what is your manager's ID number?",
        },
        {
            name: 'email',
            message: "what is your manager's email?",
        },
        {
            name: 'officeNumber',
            message: "what is your manager's office number?",
        }
    ])
    .then((response) => {
        const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
        );
        workers.push(manager);
        addJobs();
    })
};

const addJobs = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Who else works with you?",
            choices: [
                "engineer",
                "intern",
                "that's all of my folks!",
            ]
        }
    ])
    .then(function({role}){
        if (role === "Engineer") engineerQuestions();
        else if (role === "Intern") internQuestions();
        else writeFile();
    })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: "what is your engineer's name?"
        },
        {
            name: 'id',
            message: "what is your engineer's ID number?"
        },
        {
            name: 'email',
            message: "what is your engineer's email?"
        },
        {
            name: 'github',
            message: "what is your engineer's github?"
        }
    ])
    .then((response) => {
        const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.Github
        );
        workers.push(engineer);
        addJobs();
    })
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: "what is your intern's name?"
        },
        {
            name: 'id',
            message: "what is your intern's ID number?"
        },
        {
            name: 'email',
            message: "what is your intern's email?"
        },
        {
            name: 'school',
            message: "what is your intern's school?"
        }
    ])
    .then((response) => {
        const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.school
        );
        workers.push(intern);
        addJobs();
    })
};

const writeFile = str => {
    fs.writeFile('./dist/index.html', template(workers), err => {
        if (err) {
            console.log(err);
            return; 
        } else {
            console.log('nice')
        }
    })
  }; 

  managerQuestions();
