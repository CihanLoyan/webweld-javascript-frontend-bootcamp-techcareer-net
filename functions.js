let fullName = "Cihan Loyan"

let indexOf = fullName.indexOf("a")  // baştan sayar
let lastIndexOf = fullName.lastIndexOf("a") // sondan sayar
console.log(indexOf, lastIndexOf);

console.log(`${fullName}`)
console.log(`${fullName.slice()}`)  // belirli index'lerdeki karakterleri döndürür.
console.log(`${fullName.slice(2, 7)}`)
console.log(`${fullName.slice(indexOf, lastIndexOf)}`)

console.log("-------------------------------------------------");
console.log(fullName.split());
console.log(fullName.split(""));
console.log(fullName.split(" "));
console.log(fullName.split("n")); 
console.log(fullName.split("a"));

let text = "Mr Blue has a blue house and a blue car";
let result1 = text.replace(/blue/i, "red");  // ilk rastladığı değeri değiştirir.
let result2 = text.replace(/blue/gi, "red");  // 'g' sayesinde tüm değerleri değiştirir.
console.log(text);
console.log(result1);
console.log(result2);

console.log("------------------------------------------------");

let students = ["cihan", "sümeyye", "salih", "yavuz", "berk"]
console.log(students);

console.log("for");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("------------------------------------------------");

console.log("foreach");
students.forEach(student => console.log(student));

console.log("------------------------------------------------");

students.forEach((student, index, array) => {
    console.log(index, student, array[index]);
})

console.log("------------------------------------------------");

let arrs = [1, 2, 3, 4, 5]

arrs.forEach((arr, index) => {
    arrs[index] = arr * 2
})
console.log(arrs);

console.log("------------------------------------------------");

let numbers = [1, 2, 3, 4, 5]
let numbersMultiplied = numbers.map(number => number * 5)  // callback function
console.log(numbers, numbersMultiplied);