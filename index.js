import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
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

addManager();

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
