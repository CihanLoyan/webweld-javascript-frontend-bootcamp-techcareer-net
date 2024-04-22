const addList = () => {
    let listText = document.getElementById("to-do").value;  // input value
    const list = document.getElementById("to-do-list");  // ul
    if (listText !== "") {
        const listItem = document.createElement("li");  // li
        listItem.innerHTML = `  <input type="checkbox" id="cb">
                                <span>${listText}</span> 
                                <button class="delete-button">Sil</button>
                                `;
        list.prepend(listItem);
        listText = "";
        saveListToLocalStorage(); // Ekleme yapıldıktan sonra listeyi kaydet
    } else {
        alert ("Alan boş bırakılamaz!")
    }   
}

const saveListToLocalStorage = () => {
    const list = document.getElementById("to-do-list").innerHTML;
    localStorage.setItem("to-do-list", list);
}

const loadListFromLocalStorage = () => {  // local storage'dan listeyi getir.
    const list = localStorage.getItem("to-do-list");
    if (list) {
        document.getElementById("to-do-list").innerHTML = list;
    }
}

const list = document.getElementById("to-do-list")
list.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-button")) {
        const listItem = e.target.parentElement;
        const list = document.getElementById("to-do-list");
        list.removeChild(listItem);
        saveListToLocalStorage(); // Ekleme yapıldıktan sonra listeyi kaydet
    }
});

// Sayfa yüklendiğinde, kaydedilmiş listeyi yükle
window.addEventListener("load", () => {
    loadListFromLocalStorage();
});