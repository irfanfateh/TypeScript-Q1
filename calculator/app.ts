const inquirer = require('inquirer');

function calculator() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number: ',
                validate: function (value: any) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                },
                filter: Number
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number: ',
                validate: function (value: any) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                },
                filter: Number
            },
            {
                type: 'list',
                name: 'operator',
                message: 'Select an operator: ',
                choices: ['+', '-', '*', '/']
            }
        ])

        //.then((answers: { num1: number, num2: number, operator: string }) => {
        // Function code here
        //});

        .then((answers: any) => {
            const num1 = answers.num1;
            const num2 = answers.num2;
            const operator = answers.operator;
            let result;

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = 'Invalid operator';
            }

            console.log(`Result: ${result}`);
        });
}

calculator();

export { }