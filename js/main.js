let lift = document.querySelector(".lift");
let topBtn = document.querySelector(".top");

let topBtn2 = document.querySelector(".top2");

let topBtn3 = document.querySelector(".top3");

let botBtn2 = document.querySelector(".bot2");

let botBtn3 = document.querySelector(".bot3");

let botBtn4 = document.querySelector(".bot4");

let topBtn4 = document.querySelector(".top4");
let botBtn5 = document.querySelector(".bot5");

topBtn.addEventListener("click", () => {
  console.log(lift.style.transform);
  if (
    lift.style.transform === "" ||
    lift.style.transform === "translateY(0%)"
  ) {
    lift.style.transform = "translateY(-215%)";
  }
});

topBtn2.addEventListener("click", () => {
  console.log(lift.style.transform);
  if (lift.style.transform === "translateY(-215%)") {
    lift.style.transform = `translateY(${-215 - 215}%)`;
  }
});

botBtn2.addEventListener("click", () => {
  if (lift.style.transform === "translateY(-215%)") {
    lift.style.transform = `translateY(${-215 + 215}%)`;
  }
});

topBtn3.addEventListener("click", () => {
  if (lift.style.transform === "translateY(-430%)") {
    lift.style.transform = `translateY(${-430 - 215}%)`;
  }
});

botBtn3.addEventListener("click", () => {
  if (lift.style.transform === "translateY(-430%)") {
    lift.style.transform = `translateY(${-430 + 215}%)`;
  }
});

botBtn4.addEventListener("click", () => {
  if (lift.style.transform === "translateY(-645%)") {
    lift.style.transform = `translateY(${-645 + 215}%)`;
  }
});

topBtn4.addEventListener("click", () => {
  if (lift.style.transform === "translateY(-645%)") {
    lift.style.transform = `translateY(${-645 - 215}%)`;
  }
});

botBtn5.addEventListener("click", () => {
  if (lift.style.transform === "translateY(-860%)") {
    lift.style.transform = `translateY(${-860 + 215}%)`;
  }
});

// let a = +prompt("Введите ваш этаж");

function promptMe() {
  let a = +prompt("Выберите этаж");
  if (a === 2) {
    lift.style.transform = `translateY(${0 - 215}%)`;
  } else if (a === 3) {
    lift.style.transform = `translateY(${-215 - 215}%)`;
  } else if (a === 4) {
    lift.style.transform = `translateY(${-430 - 215}%)`;
  } else if (a === 5) {
    lift.style.transform = `translateY(${-645 - 215}%)`;
  } else if (a === 1) {
    lift.style.transform = `translateY(${-645 + 645}%)`;
  }
}

if (a === 2) {
  lift.style.transform = `translateY(${0 - 215}%)`;
} else if (a === 3) {
  lift.style.transform = `translateY(${-215 - 215}%)`;
} else if (a === 4) {
  lift.style.transform = `translateY(${-430 - 215}%)`;
} else if (a === 5) {
  lift.style.transform = `translateY(${-645 - 215}%)`;
}

let fl1 = document.querySelector(".fl1");
let fl2 = document.querySelector("#fl2");
let fl3 = document.querySelector(".fl3");
let fl4 = document.querySelector(".fl4");

// let i = 0;
// while (i != a) {
//   document.getElementById("fl2").innerHTML = lift + 1;
//   i++;
// }
