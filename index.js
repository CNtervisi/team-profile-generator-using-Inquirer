import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import fs from "fs";

const teamArray = [];

const addManager = async () => {
  const managerInput = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager of this team?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager's ID.",
      validate: (idInput) => {
        if (isNaN(idInput)) {
          console.log("Please enter a valid ID!");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email.",
      validate: (emailInput) => {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          emailInput
        );
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number.",
      validate: (officeNumberInput) => {
        if (isNaN(officeNumberInput)) {
          console.log("Please enter a valid office number!");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);

  const { name, id, email, officeNumber } = managerInput;
  const manager = new Manager(name, id, email, officeNumber);

  teamArray.push(manager);
  console.log(manager);
};

const addEmployee = async () => {
  const employeeData = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please choose your employee's role",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What's the name of the employee?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an employee's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the employee's ID.",
      validate: (idInput) => {
        if (isNaN(idInput)) {
          console.log("Please enter the employee's ID!");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the employee's email.",
      validate: (email) => {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          email
        );
        if (valid) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter the employee's github username.",
      when: ({ role }) => role === "Engineer",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the employee's github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school",
      when: ({ role }) => role === "Intern",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add more team members?",
      default: false,
    },
  ]);

  let { name, id, email, role, github, school, confirmAddEmployee } =
    employeeData;
  let employee;

  if (role === "Engineer") {
    employee = new Engineer(name, id, email, github);
  } else if (role === "Intern") {
    employee = new Intern(name, id, email, school);
  }

  teamArray.push(employee);

  if (confirmAddEmployee) {
    return addEmployee(teamArray);
  } else {
    return teamArray;
  }
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(
      "Your team profile has been successfully created! Please check out the index.html"
    );
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => generateHTML(teamArray))
  .then((pageHTML) => writeFile(pageHTML))
  .catch((err) => console.log(err));
