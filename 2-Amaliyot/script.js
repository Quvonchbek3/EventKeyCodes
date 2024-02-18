// Agar 2 index beradigan bo`lsak 2 dagi so`zni boshqasiga almashtiradi

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(3, "Marchttt");

// console.log(myMonths);



// Spread (...) esa ko`p arraylarni bitta katta array qilib beradi.

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1,...q2, ...q3, ...q4];


// console.log(year);


// const text = document.querySelectorAll(".text-item")

// text.forEach((item) => {
// item.textContent += " darslari"
// })

// console.log(text);


// const text = document.querySelectorAll(".text-item")

// text.forEach((item) => {
// item.innerHTML += " darslari"
// })

// console.log(text);


// const text = document.querySelector(".text-item");

// text.setAttribute("style", "color: red")
// console.log(text);


// class Shaxs {
//     constructor(ismi) {
//       this._ismi = ismi; // _ismi xususiyati privatlilikni anglatish uchun underscore bilan boshlanadi
//     }
  
//     // ismi uchun get metodi
//     get ismi() {
//       return this._ismi;
//     }
  
//     // ismi uchun set metodi
//     set ismi(yangiIsm) {
//       this._ismi = yangiIsm;
//     }
//   }
  
//   const shaxs = new Shaxs('Ali');
//   console.log(shaxs.ismi); // "Ali" chiqaradi
  
//   shaxs.ismi = 'Vali'; // ismi xususiyatini yangilaydi
//   console.log(shaxs.ismi); // "Vali" chiqaradi




const parag = document.querySelectorAll("p");

parag.forEach((bir) => {
if(bir.textContent.includes("error")){
    bir.classList.add("error")
}

if(bir.textContent.includes("success")){
    bir.classList.add("success")
}
})
