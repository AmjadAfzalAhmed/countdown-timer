#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

function countInit(seconds: number): void {
    const targetTime: number = new Date().getTime() + seconds * 1000;

    const timerInterval = setInterval(() => {
        const now: number = new Date().getTime();
        const distance: number = targetTime - now;

        if (distance <= 0) {
            clearInterval(timerInterval);
            console.log(chalk.greenBright.bold('\n \t Countdown completed! \n'));
            console.log(chalk.redBright.inverse("\t -=-=- Thank You for Using the Countdown Timer -=-=-"));
            
        } else {
            const remainingSeconds: number = Math.floor(distance / 1000);
            console.log(`Time left: ${remainingSeconds}s`);
        }
    }, 1000);
}

console.log(chalk.greenBright.inverse("\t -*-*-*Assalam-o-Alaikum, This code is designed by Amjad Afzal Ahmed-*-*-*"));
console.log("");

console.log(chalk.blueBright.bold("\t I Welcome You to CLI Based Countdown Timer App, Executabel in NodeJs Environment "));
console.log("");

let answers = inquirer.prompt([
    {
        type: 'input',
        name: 'seconds',
        message: chalk.greenBright.bold('Enter the countdown duration in seconds (max 20 seconds):'),
        validate: (value: string) => {
            const valid: boolean = !isNaN(Number(value)) && Number(value) > 0 && Number(value) <= 20;
            return valid || 'Please enter a valid number between 1 and 20';
        }
    }
]).then((answers: { seconds: string }) => {
    const seconds: number = parseInt(answers.seconds, 10);
       
    console.log(chalk.redBright.bold(`\n Countdown for ${seconds} seconds has started!`));
    countInit(seconds);
});
