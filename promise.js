const API = "https://jsonplaceholder.typicode.com/posts";

function getData(url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText)); // resolve çalıştığı için cevabı .then yakaladı.
                }
            })
        } catch(error) {
            reject(error);  // reject çalışsaydı cevabı .catch yakalayacaktı.
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

getData(API)
.then((data) => console.log(data))
.catch((error) => console.log(error))
.finally(() => console.log("İşlem tamam!"))
// getData fonksiyonundan geri Promise döndüğü için
// cevabı then veya catch ile yakalamalıyız. 