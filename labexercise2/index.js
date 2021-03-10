//<--Assan, Jay-->
//Mobile Programming-B
//Lab Exercise 2

//Nomor 1
function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan Tertunda 3 Detik");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
mandi();
sarapan(berangkatSekolah);
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};
//nomor 2
let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()
//nomor 3
fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
  });

function ambilDataUser() {
}
ambilDataUser()