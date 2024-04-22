// Callback fonksiyonu başka bir fonksiyon içerisinde argüman olarak kullanılabilen fonksiyon anlamına gelmektedir.

const toDo = [
    {
        title: "Todo1",
        description: "Markete gidilecek",
    },
    {
        title: "Todo2",
        description: "Spora gidilecek",
    },
    {
        title: "Todo3",
        description: "Okula gidilecek",
    }
]

let toDoListUl = document.getElementById("to-do-list");  // ul
function toDoList() {
    setTimeout(() => {
        let toDoLi = "";  // create element ile de oluşturabilirdik.
        toDo.forEach(item => {  // listedeki herbir öğeye ulaşıyorum.
            toDoLi += `
                <li>
                    ${item.title}
                    ${item.description} 
                </li>  
            `
            toDoListUl.innerHTML = toDoLi;
        })
    }, 1000)
}

function newToDo (todo, callback) {
    setTimeout(() => {
        toDo.push(todo);
        callback();
    }, 3000)
}

// newToDo fonksiyonu içerisine yeni bir obje ekliyoruz.
newToDo({title: "Todo 4", description: "Kitap okunacak"}, toDoList)
// 2. parametre olarak toDoList fonksiyonunu parantezsiz bir şekilde gönderdik.
// Eğer parantezli gönderseydik burada(40.satır) tekrar çalışacaktı.
// Fakat biz newToDo fonksiyonu içerisinde push işleminden hemen sonra(35.satır) çalışmasını istiyoruz.
// Bu sebeple fonksiyon gibi değil de parametre gibi yazdık.


toDoList();