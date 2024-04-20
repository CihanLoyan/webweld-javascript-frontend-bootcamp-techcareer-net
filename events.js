const confirmText = "Emin Misiniz?"
let url = "https://medium.com/@cihanloyan"
const goTo = () => {
    if(confirm(confirmText)) {
        location.href = url
        console.log("Linke Gidildi!");
    }    
    else
        console.log("Geri Dönüldü!");
} 

const myOnBlur = () => {
    let blur = document.getElementById("username")
    blur.value = blur.value.toLowerCase();
    alert("Bilgileri doğru girdiğinizden emin misiniz?")
}

const myOnChange = () => {
    let mySelect = document.getElementById("mySelect").value;
    document.getElementById("selected").innerHTML = "My selected: " + mySelect;
}

const mySubmit = () => {
    alert("The form was submitted");
}

const myKeyPress = () => {
    alert("The key pressed");
}
