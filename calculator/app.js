import inquirer from "inquirer";
function calculator() {
    inquirer
        .prompt([
            {
                name: "num1",
                type: "input",
                message: "Please enter a first number",
                validate: function (input) {
                    const age = parseFloat(input);
                    if (isNaN(age)) {
                        return "Please enter a valid number";
                    }
                    return true;
                },
                filter: Number,
            },
            {
                name: "num2",
                type: "input",
                message: "Please enter a second number",
                validate: function (input) {
                    const age = parseFloat(input);
                    if (isNaN(age)) {
                        return "Please enter a valid number";
                    }
                    return true;
                },
                filter: Number,
            },
            {
                name: "operation",
                type: "list",
                choices: ["+", "-", "x", "/"],
                message: "Please select an operation",
            },
        ])
        .then((answers) => {
            switch (answers.operation) {
                case "+":
                    console.log(
                        `Sum of ${answers.num1} and ${answers.num2} is: ${answers.num1 + answers.num2}`
                    );
                    break;
                case "-":
                    console.log(
                        `Subtraction of ${answers.num1} and ${answers.num2} is: ${answers.num1 - answers.num2}`
                    );
                    break;
                case "x":
                    console.log(
                        `Product of ${answers.num1} and ${answers.num2} is: ${answers.num1 * answers.num2}`
                    );
                    break;
                case "/":
                    console.log(
                        `Division of ${answers.num1} and ${answers.num2} is: ${answers.num1 / answers.num2}`
                    );
                    break;
                default:
                    break;
            }
            loop();
        });
}
function loop() {
    inquirer
        .prompt({
            name: "confirm",
            type: "confirm",
            message: "Do you want to continue or not?",
        }).then((answer) => {
            if (answer.confirm) {
                calculator();
            }
            else {
                console.log("Thanks for using calculator");
            }
        });
}

calculator();
