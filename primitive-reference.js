let number1 = 10
let number2 = 10

console.log(number1 == number2);  // true

let string1 = "cihan"
let string2 = "cihan"

console.log(string1 === string2);  // true

console.log("------------------------------------------------------");

let array1 = [10, 20, 30]
let array2 = [10, 20, 30]

console.log(array1 == array2);  // false

let object1 = {
    name: "cihan"
}

let object2 = {
    name: "cihan"
}

console.log(object1 == object2);  // false

console.log("-----------------------------------------------------");

let number4 = 20
let number5 = number4  // Sadece değer aktarıldı!!!
console.log(number4, number5);  // 20 20
console.log(number4 == number5);  // true

number5 = 30
console.log(number4, number5);  // 20 30
console.log(number4 == number5);  // false



let array4 = [100, 200, 300]
let array5 = array4  // Sadece değer değil, referans aktarımı da yapıldı!!!
console.log(array4, array5);  // 100 200 300   100 200 300
console.log(array4 == array5);  // true

array4.push(400)
console.log(array4, array5);  // 100 200 300 400     100 200 300 400
console.log(array4 == array5);  // true

array5.push(500)
console.log(array4, array5);  // 100 200 300 400 500     100 200 300 400 500
console.log(array4 == array5);  // true

let array6 = array5
let array7 = array6

array7.push(1000)
console.log(array4, array5, array6, array7);



let object3 = {
    fullName: "Fuat Sezgin",
    age: 94
}

console.log(object3);  // {fullName: 'Fuat Sezgin', age: 94}

let object4 = object3
object4.age = 95

console.log(object3.age, object4.age);  // 95  95
