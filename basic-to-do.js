const addList = () => {
    let listText = document.getElementById("to-do").value;
    if (listText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${listText}
                                <button class="delete-button">Sil</button>
    
                                `
        const list = document.getElementById("to-do-list");                 
        list.prepend(listItem);
        console.log(listText)   ;
        document.getElementById("to-do").value = "";
    } else {
        alert ("Alan boş bırakılamaz!")
    }   
}

const list = document.getElementById("to-do-list")
list.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-button")) {
        const listItem = e.target.parentElement;
        const list = document.getElementById("to-do-list");
        list.removeChild(listItem);
        console.log(listItem);
    }
});