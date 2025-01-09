const inquirer = require('inquirer');

async function main() {
  const { input } = await inquirer.prompt({
    type: 'input',
    name: 'input',
    message: 'What is your name?',
  });

  console.log(`Hello, ${input}!`);
}

main();
