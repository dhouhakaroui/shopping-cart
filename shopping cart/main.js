let delet = document.querySelectorAll(".fa-trash");
let heart = document.querySelectorAll(".fa-heart");
let plus = document.querySelectorAll(".fa-plus");
let minus = document.querySelectorAll(".fa-minus");
let total = document.querySelector(".total-price");

console.log(delet);
console.log(heart);
console.log(plus);
console.log(minus);
console.log(total);

// plus
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.nextElementSibling.innerHTML++;
    total.innerHTML =
      parseFloat(total.innerHTML) +
      parseFloat(plus[i].parentElement.previousElementSibling.innerHTML) +
      "D";
  });
}

// minus
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].nextElementSibling.innerHTML > 0)
      minus[i].nextElementSibling.innerHTML--;
    if (parseFloat(total.innerHTML) > 0) {
      total.innerHTML =
        parseFloat(total.innerHTML) -
        parseFloat(minus[i].parentElement.previousElementSibling.innerHTML) +
        "D";
    }
  });
}

// heart
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("red-heart");
  });
}

// delete
for (let i = 0; i < delet.length; i++) {
  delet[i].addEventListener("click", function () {
    if (Array.from(heart[i].classList).includes("red-heart")) {
      alert("this product is in the favorites list! you must cancel the like.");
    } else {
      delet[i].parentElement.parentElement.remove();
    }
  });
}
