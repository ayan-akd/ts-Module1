"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
const addArrow = (num1, num2) => num1 + num2;
addArrow(1, 2);
const me = {
    name: "Ayan",
    balance: 1000,
    deposit(amount) {
        return `My current balance is : ${(this.balance += amount)}`;
    },
};
me.deposit(1500);
console.log(me);
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((elem) => elem * elem);
console.log(newArr);
