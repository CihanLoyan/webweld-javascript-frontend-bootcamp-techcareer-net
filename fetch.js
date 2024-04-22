const API_URL = "https://jsonplaceholder.typicode.com/posts";

/* fetch(API_URL)
    .then(res => {
        return res.json()
    })
     .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
 */

// async function getPosts() {} async function gösterimi
/* const getPosts = async () => {  arrow function ile gösterimi
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
}
getPosts(); */

const getPosts = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
} 
getPosts();