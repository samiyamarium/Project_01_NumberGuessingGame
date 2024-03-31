#! /usr/bin/env node
var inquirer = require('inquirer');
inquirer.prompt([{
        name: 'game',
        message: 'What is your number \n',
        type: 'number',
    },
])
    .then(function (answers) {
    console.info('\n MyNumber(range: 0 to 9): ', answers.game);
    var y = answers;
    var q = Math.floor(Math.random() * 10);
    console.log("\n Computer generated number(range:0-->9) = ", q);
});
