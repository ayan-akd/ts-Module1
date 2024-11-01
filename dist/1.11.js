"use strict";
var _a, _b;
{
    //ternary  || optional || nullish coalescing
    const age = 15;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log({ isAdult });
    //nullish coalescing
    const isAuthenticatedUser = "";
    const result1 = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
    const result2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Ayan",
        address: {
            city: "Dhaka",
            state: "Dhaka",
            country: "Bangladesh",
            postCode: 1207,
            presentAddress: "Dhaka",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
}
