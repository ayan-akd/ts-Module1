"use strict";
{
    const user = {
        roll: 120,
        name: {
            firstName: "Ayan",
            middleName: "Kumar",
            lastName: "Das",
        },
        address: {
            city: "Dhaka",
            state: "Dhaka",
            country: "Bangladesh",
            postCode: 1207,
        },
        contactNo: "01717123456",
    };
    const { roll, name: { firstName: name }, } = user;
    console.log(roll, name);
}
//array destructure
const myFriends = ["Ayan", "Shakib", "Pallab", "Rakibul"];
const [, C, ...rest] = myFriends;
console.log(C, rest);
