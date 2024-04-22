//--------------- ASENKRON YAPIYI NEDEN SENKRON HALE GETİRMEYE İHTİYACIMIZ VAR? ---------------------------
/*
const getName = () => {
    setTimeout(() => {
        console.log("Cihan");
    }, 1000)  // Server'ın bu işlemi 1000ms'de gerçekleştirdiğini göstermek için simüle ettik.
}

const getSurname = () => {
    setTimeout(() => {
        console.log("Loyan");
    }, 500)  // Server'ın bu işlemi 500ms'de gerçekleştirdiğini göstermek için simüle ettik.
}

getName();
getSurname();
*/
//--------------- ASENKRON YAPIYI NEDEN SENKRON HALE GETİRMEYE İHTİYACIMIZ VAR? ---------------------------

// getName fonksiyonu getSurname fonksiyonundan daha önce olduğu için onun çalışmasını bekliyorduk.
// Fakat server, getName fonksiyonundan gelen cevabı biraz geciktiriyor. Fakat getSurname fonksiyonunda
// herhangi bir gecikme yok. Bunun üzerine JavaScript asenkron çalışma mantığı sebebiyle bizim istediğimiz
// sıralamaya göre değil de o an hali hazırda olan diğer işleme geçer.

// Bu senaryoda, getName fonksiyonundan daha önce cevap gelmesini istiyoruz. Fakat simüle ettiğimiz üzere,
// getName fonksiyonundan gelecek cevap server, interet hızı vb. sebeplerden ötürü getSurname fonksiyonundan
// daha geç gelecek. Görüldüğü üzere iki fonksiyonun cevap döndürme hızı arasında 500ms bulunmakta.
// JavaScript asenkron çalıştığı için, yavaş çalışan işlemin bitmesini beklemeden hali hazırda olan diğer
// işleme geçer. Dolayısıyla bizim istediğimiz sıralamaya göre fonksiyonları çalıştırmaz. Bunu kontrol 
// altına almak için yani asenkton yapıyı senkron hale getirmek için callback yönteminden faydalanılabilir:

const getName = (callback) => {  // getName fonksiyonuna başka bir fonksiyonu parametre olarak göndereceğimiz anlamına geliyor. 
    setTimeout(() => {
        console.log("Cihan");  // getName fonksiyonunun asıl işlevi olan bu satır çalıştıktan sonra alt satırda
        callback();            // parametre olarak gönderdiğimiz fonksiyonu çalıştırarak işlemlerin istediğimiz sıralamada gerçekleşmesini sağladık.
    }, 1000)  
}

const getSurname = () => {
    setTimeout(() => {
        console.log("Loyan");
    }, 500) 
}

getName(getSurname);
// getName fonksiyonuna getSurname fonksiyonunu parametre olarak gönderdik.
// Artık getName fonksiyonu bir high order function iken getSurname fonksiyonu ise bir callback function haline geldi.
