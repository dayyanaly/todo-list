import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

async function welcome() {
  let animation = chalkAnimation.rainbow('Welcome to TODO CLI:');
  await new Promise(resolve => setTimeout(resolve, 2000));
  animation.stop();
}

await welcome();

const todos: string[] = [];
let addTodo = true;

while (addTodo) {
  const { TODO, addMore } = await inquirer.prompt([
    {
      name: 'TODO',
      type: 'input',
      message: 'Enter The TODO Value:',
    },
    {
      name: 'addMore',
      type: 'confirm',
      message: 'Enter More TODO Values?',
      default: false,
    },
  ]);

  addTodo = addMore;

  if (TODO) {
    todos.push(TODO);
  } else {
    console.log(chalk.red('Kindly Enter Valid Input!'));
  }
}

if (todos.length > 0) {
  console.log(chalk.magenta('Your TODOs:'));
  todos.forEach(todo => console.log(chalk.cyan(todo)));
} else {
  console.log(chalk.red('No TODOs Found!'));
}
