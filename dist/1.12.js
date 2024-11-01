"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(undefined);
    //unknown types
    const getSpeedInMPS = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
        }
        else if (typeof value === "string") {
            const [valueNumber, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(valueNumber) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
        }
        else {
            console.log("Please provide valid input");
        }
    };
    getSpeedInMPS(null);
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Error Hoise, Shei hoise");
}
