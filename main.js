/**
 * Fizz Buzz implementation in JavaScript.
 * 
 * Prints numbers from user input with the following rules:
 * - For multiples of 3, print "Fizz"
 * - For multiples of 5, print "Buzz"
 * - For multiples of both 3 and 5, print "FizzBuzz"
 */

import { printError } from "./lib/errors";
import { sleep } from "./lib/utils";
import {
    isMainMenuOptionString,
    isMoreThanZeroIntegerString,
    isPositiveIntegerString,
    isRequired
} from "./lib/validations";

const ACTION_BACK = "ACTION_BACK";

function exit() {
    console.log("\nGoodbye! 👋");
    process.exit(0);
}

function backOrExitAction(input) {
    switch (input) {
        case "back":
            console.log();
            throw new Error(ACTION_BACK);
        case "exit":
            exit();
    }
}

function parseAndValidateMainMenuInput(input) {
    backOrExitAction(input);

    isRequired(input);
    isMainMenuOptionString(input);

    return Number(input);
}

function parseAndValidateNumberInput(input) {
    backOrExitAction(input);

    isRequired(input);
    isPositiveIntegerString(input);

    return Number(input);
}

function parseAndValidateListNumbersInput(input) {
    backOrExitAction(input);

    isRequired(input);
    isMoreThanZeroIntegerString(input);

    return Number(input);
}

async function handleMainMenu(choice) {
    switch (choice) {
        case 1:
            handleCheckNumber(); 
            break;
        case 2:
            await handlePrintList(); 
            break;
    }
}

function formatFizzBuzzValue(i) {
    if (i % 3 === 0 && i % 5 === 0) return "FizzBuzz";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";
    return i.toString();
}

function printCheckNumberResult(i) {
    console.log("\n-------------[ Result ]-------------");
    console.log(`Input\t: ${i}`);
    console.log(`Output\t: ${formatFizzBuzzValue(i)}`);
    console.log("---------------[ End ]--------------\n");
}

async function printFizzBuzzSequenceResult(n, ms = 10) {
    console.log("\n-------------[ Result ]-------------");
    console.log(`Input\t: ${n}`);
    console.log(`Output\t:`);

    for (let i = 1; i <= n; i++) {
        console.log(i, `\t => ${formatFizzBuzzValue(i)}`);

        if (i < n) await sleep(ms);
    }

    console.log("---------------[ End ]--------------\n");
}

function showMainMenuPrompt() {
    return prompt(
        "============[ FIZZ BUZZ ]===========\n\n" +
        "Choose an option:\n" +
        "[1]\tCheck a number\n" +
        "[2]\tPrint list of numbers\n" +
        "[exit]\tExit\n\n" +
        "Select 1 or 2:"
    );
}

function showCheckNumberPrompt() {
    return prompt(
        "1. Check a number\n\n" +
        "[back]\tReturn to main menu\n" +
        "[exit]\tExit\n\n" +
        "Enter a number to check:"
    );
}

function showPrintListPrompt() {
    return prompt(
        "2. Print list of numbers\n\n" +
        "[back]\tReturn to main menu\n" +
        "[exit]\tExit\n\n" +
        "Enter how many numbers to print:"
    );
}

function handleCheckNumber() {
    console.log();

    while (true) {
        try {
            const input = showCheckNumberPrompt();
            const number = parseAndValidateNumberInput(input);
    
            printCheckNumberResult(number)
        } catch (err) {
            if (err.message === ACTION_BACK) return;
            printError(err.message);
        }
    }
}

async function handlePrintList() {
    console.log();

    while (true) {
        try {
            const input = showPrintListPrompt();
            const number = parseAndValidateListNumbersInput(input);

            await printFizzBuzzSequenceResult(number);
        } catch (err) {
            if (err.message === ACTION_BACK) return;
            printError(err.message);
        }
    }
}

async function main() {
    while (true) {
        try {
            const input = showMainMenuPrompt();
            const choice = parseAndValidateMainMenuInput(input);

            await handleMainMenu(choice);
        } catch (err) {
            printError(err.message);
        }
    }
}

// Start the program
main();
