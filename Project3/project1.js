/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 2  || created: 10.3.2016
 *   @todo
 */

"use strict";
const prompt = require('readline-sync');

let continueResponse;
let lastName,firstName;
let policyID,birthDate,dueDate,numFaults,totalBill,age;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1){
        setPolicyID();
        setBirthDate();
        setAge();
        setDueDate();
        setNumFaults();
        setLastName();
        setFirstName();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main(); //proper tail recursion
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

function setPolicyID(){
    policyID = Math.floor((Math.random() * 20) + 1);  //JavaScript random number 1 - 20
}

function setBirthDate() {
    birthDate = Number(PROMPT.question(`\nPlease enter date of birth:`));

}

function setDueDate() {
    dueDate = Number(PROMPT.question(`\nPlease enter premuim due date:`));
}

function setNumFaults(){
    numFaults = Number(PROMPT.question(`\nPlease enter the number of at faults you have:`));
}

function setLastName(){
    lastName = PROMPT.question(`\nPlease enter your last name:`);
}

function setFirstName(){
    firstName = PROMPT.question(`\nPlease enter your first name:`);
}

function setTotalBill(){
    totalBill = 0
    const baseprice = 100
    const young_age_price = 20
    const middle_age_price = 10
    const hill_age_price = 0
    const old_age_price = 30
    const each_fault_price = 50
    const young_age = 29
    const middle_age = 44
    const hill_age = 59
    if (age > 14){
        if(age > 14 && age < young_age){
            totalBill = young_age_price + baseprice + (numFaults * 50)
        } else if (age < middle_age) {
            totalBill = middle_age_price + baseprice + (numFaults * 50)
        }else if (age < hill_age){
            totalBill = hill_age_price + baseprice + (numFaults * 50)
        }else{
            totalBill = old_age_price + baseprice + (numFaults * 50)
        }
    }

nction printTotalBill() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${firstName}'s bill: \$${totalBill}. Customer#: ${policyID}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}


/*
 This program is designed to prompt customer for basic information about themselves and thier driving history
 , calculate the price, then output the total bill.

 Covers:  Random, recursion, selection logic, Boolean, return, .gitignore
 */