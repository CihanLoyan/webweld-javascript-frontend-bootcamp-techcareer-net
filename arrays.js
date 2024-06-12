let cities = ["bursa", "istanbul", "ankara"]
console.log(cities);
console.log(cities.join());
console.log(cities.join(""));
console.log(cities.join(" "));
console.log(cities.join(" and "));
console.log(cities.join("/"));

cities.push("izmir")  // sona ekleme
console.log(cities);

cities.unshift("balıkesir")  // başa ekleme
console.log(cities);

cities.pop()  // son elemanı siler
console.log(cities);

let districts = ["sındırgı", "mkp", "eyüp", "keçiören"]
let unifiedArray = cities.concat(districts)  // dizi birleştirme
console.log(unifiedArray);