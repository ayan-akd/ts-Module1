"use strict";
const alpha1 = ["A", "B", "C"];
const alpha2 = ["D", "E", "F"];
alpha1.push(...alpha2);
const mentors1 = {
    typescript: "Tanmoy",
    redux: "Mofiz",
    dbms: "Mizan",
};
const mentors2 = {
    prisma: "Firoz",
    next: "Nahid",
};
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
console.log(mentorList);
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("Ayan", "Shakib", "Rakib", "Rakibul");
