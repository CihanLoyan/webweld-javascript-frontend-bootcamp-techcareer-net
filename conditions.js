let age = 18
let age2 = "18"

if (age == 18)
    console.log("Valid age")  // Valid age
else console.log("Invalid age");

if (age2 == 18)
    console.log("Valid age as value");
else console.log("Invalid age")

if (age2 === 18)
    console.log("Valid age as both value and type");
else console.log("Invalid age as both value and type");

age < 18 ? console.log("younger than 18") : console.log("older than 18")