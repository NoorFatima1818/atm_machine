#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPinCode = 2006;
//asking for pin code
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "Enter your pin code",
        type: "number"
    }
]);
// if pincode is correct
if (pinAnswer.pin === myPinCode) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([{
            name: "operations",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    // conditions for withdraw
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount that you want to withdraw",
                type: "number"
            }]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
        else {
            {
                console.log("Insufficient amount!");
            }
        }
    }
    // fastcash
    else if (operationAns.operations === "fastcash") {
        let fastAmount = await inquirer.prompt([{
                name: "fastcash",
                message: "Select amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }]);
        myBalance -= fastAmount.fastcash;
        console.log(`Your remaining balance is ${myBalance}.`);
    }
    //check balance
    else if (operationAns.operations === "check balance") { // conditions for check balance
        console.log(`Your current balance is ${myBalance}.`);
    }
}
else {
    console.log("Incorrect pin code");
}
