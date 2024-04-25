const API_URL = "https://jsonplaceholder.typicode.com/posts";
/* 
function getPosts(url) {
    fetch(API_URL)
        .then(res => {
            res.json())
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
    return datas;
}       
 */
/*----------------------- YUKARIDAKİ KODUN DAHA KISA HALİ: -----------------------------*/
/* function getPosts(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
getPosts(API_URL) */
/* ------------------------------------------------------------------------------------ */

/* --------------------------- async await kullanımı -----------------------------------*/
/* async function getName() {
    return "Cihan Loyan";
}
console.log(getName());  // async olan fonksiyon çağrıldığında geriye Promise döner. Console çıktısına bak!

getName().then(res => console.log(res)); */
/* ------------------------------------------------------------------------------------ */

// async olan fonksiyon geriye Promise döndüğü için then() ile geri dönen değeri yakalayabildik!
// async function getPosts() {} async function gösterimi
/* const getPosts = async () => {  arrow function ile gösterimi
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
}
getPosts(); */

/* const getPosts = async (url) => {  // async olan fonksiyon geriye Promise döner!
    try {  // .then() bloğu yerine geçti.
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {  // .catc() bloğu yerine geçti.
        console.log(err);
    }
} 
getPosts(API_URL);
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BELİRTİLEN POST ID'YE AİT YORUMLARI GETİR:
const getComments = async () => {
    const resPost = await fetch("https://jsonplaceholder.typicode.com/posts/7");
    const post = await resPost.json();
    console.log(post);

    const resComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comment = await resComment.json();
    console.log(comment);
}