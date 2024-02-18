// // let ism = prompt("Ismingizni kiriting...")

// // let bir = ism.charAt().toUpperCase()
// // let ikki = ism.slice(1).toLowerCase()

// // let birr = bir + ikki;

// // alert(`Salom ${birr}`)
// // // ism.charAt()
// // // ism.toUpperCase(0)
// // // ism.slice(1)
// // // ism.toLowerCase();
// // // console.log(ism);

// for (let i = 0; i < 10; i++) {
// console.log("Quvonchbek");
// }

// let a = prompt("Ismingizni kiriting...")
// let b = Number(prompt("Yoshingizni kiriting..."));

// let result = `Qadrli ${a}. Siz ${2023 - b} yilda tug'ilgansiz, Va siz ${b * 12} oy, ${((b * 365) / 7).toFixed(0)} hafta, ${b * 365} kun, ${b * 365 * 24} soat, ${b * 365 * 24 * 60} daqiqa, ${b * 365 * 24 * 60 * 60} soniya yashagansiz 😁😁😁`;

// alert(result)

// let result = ["Quvonchbek", "Abduraxmon", "Mirziyo", "Mirzabek"]

// let a = prompt("Please enter your name...")

// if(result.includes(a)){
//     alert(`Ha ${a} bor ✅✅✅`);
// }else{
//     alert(`${a} ismi yoq 🤔🤔🤔`)
// }

// for

// let result = ["Abduraxmon", "Mirziyo", "Mirza"]

// for (let i = 0; i < result.length; i++){
//     let res = result[i] + "bek"

//     console.log(res);
// }

// while

// let result = ["Abduraxmon", "Mirziyo", "Mirza"]

// let i = 0;

// while ( i < result.length){
//     let res = result[i] + "bek"

//     console.log(res);

//     i++
// }

// do while

// let vilo = prompt("Qaysi viloyat kerak");

// switch (vilo) {
//   case "Surxondaryo":
//     alert("Surxondaryo viloyatida 2.5 mln aholi bor...");
//     break;
//   case "Farg`ona":
//     alert("Farg`ona viloyatida 2 mln aholi bor...");
//     break;
//   case "Andijon":
//     alert("Andijon viloyatida 1.5 mln aholi bor...");
//     break;
//   case "Namangan":
//     alert("Namangan viloyatida 1 mln aholi bor...");
//     break;
//   default:
//     alert(`Hozircha bazada ${vilo} viloyati mavjud emas...`);
// }

// let a = prompt("Biror bir belgini yozing...")

// if(a.length > 20){
//     alert(`20 tadan ${a.length - 20} ta o'tib kettingiz...`)
// }else{
//     alert(`20 ta bo'lishiga hali ${20 - a.length} ta belgi bor...`)
// }

// console.log(typeof a);

// let random = Math.trunc(Math.random() * 10) + 1;

// console.log(random);

// let a = 9;

// for( i = 1; i <= 10; i++){
//    d = a * i

//     console.log(`${a} * ${i} = ${d}`);
// }

// let ismlar = ["Raxmon", "Mirza", "Quvonch"];
// let arr = []

// ismlar.forEach(function (ism,i) {
// let newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + "bek"

// arr.push(newIsm)
// i.length
// })
// console.log(arr)

// let movies = [
//     { kino: "Harry Potter", likee: 900},
//     { kino: "Titanic", likee: 670},
//     { kino: "The Lord of the Rings", likee: 354}
// ];

// movies.forEach((movie) => {
//    let  res = `Kinoning nomi: ${movie.kino}, likee ${movie.likee}`
// console.log(res);
// })

// const myArray = [[false,true], [1,2], 99, "yaxshi"];

// myArray.forEach((my, i) => {
//     if(typeof my == "string"){
//         console.log('String index:', i);
//     }

// })

// for(let i = 0; i < myArray.length; i++){
//     if(typeof myArray[i] == "string"){
//         console.log('String index:', i);
//     }
// }

// const data = [[1,2,3], "qizil", [4,5,6], true, false];
// const ret = [ ]

// data.forEach((dat) => {
//     const res = Array.isArray(dat);

//     if(res){
//         dat.forEach((nw) => {
//             ret.push(nw)
//         })
//     }

// })
// console.log(ret);

// const check = [null, "false", 0, 99, false, undefined, " ", NaN, "0"];
// const falsey = []

// check.forEach((item) => {
//     if(!item){
//         falsey.push(item);
//     }
// })

// console.log(falsey);

// let a = "Samarqand";

// const b = a.split('')

// console.log(b.reverse());

// let aaaa = "hgfdsdfghjk";

// for(let i = 0; i <= aaaa.length; i++){
//     let a = aaaa.charAt().toLowerCase;
//     let b = aaaa.slice(1).toUpperCase
//     console.log(a, b);
// }

<!-- ////////////// ------- 1- mashq

const arr = [[false, true], [1, 2], 99, "yaxshi"];

arr.forEach((arr1, a) => {
if (typeof arr1 == "string") {
console.log("String index", a);
}
}); -->


