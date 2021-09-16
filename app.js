
const t0 = document.querySelector(".t0");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const menu0 = document.querySelector(".menu0");
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const cont = document.querySelectorAll(".cont");
const cont0 = document.querySelectorAll(".cont0");
const cont1 = document.querySelectorAll(".cont1");
const cont2 = document.querySelectorAll(".cont2");
const descr = document.querySelectorAll(".descr");
const descr0 = document.querySelectorAll(".descr0");
const descr1 = document.querySelectorAll(".descr1");
const descr2 = document.querySelectorAll(".descr2");

t0.addEventListener("click", () => {
menu0.classList.add("activo")
menu1.classList.remove("activo")
menu2.classList.remove("activo")
  descr.forEach((cadadescr, i) => {
    descr[i].classList.remove("activo");
  });
  cont.forEach((cadacont, i) => {
    cont[i].classList.remove("cont-activo");
  });
  descr0.forEach((cadacont, i) => {
    descr0[i].classList.add("activo");
  });
});

t1.addEventListener("click", () => {
   menu1.classList.add("activo");
   menu0.classList.remove("activo");
   menu2.classList.remove("activo");
  descr.forEach((cadadescr, i) => {
    descr[i].classList.remove("activo");
  });
  cont.forEach((cadacont, i) => {
    cont[i].classList.remove("cont-activo");
  });
  descr1.forEach((cadacont, i) => {
    descr1[i].classList.add("activo");
  });
});

t2.addEventListener("click", () => {
   menu2.classList.add("activo");
   menu0.classList.remove("activo");
   menu1.classList.remove("activo");
  descr.forEach((cadadescr, i) => {
    descr[i].classList.remove("activo");
  });
  cont.forEach((cadacont, i) => {
    cont[i].classList.remove("cont-activo");
  });
  descr2.forEach((cadacont, i) => {
    descr2[i].classList.add("activo");
  });
});

descr0.forEach((cerv, i)=>{
   descr0[i].addEventListener("click",() =>{
      cont0.forEach((texto, i)=>{
         cont0[i].classList.remove("cont-activo");
      })
         cont0[i].classList.add("cont-activo"); 
   })
})

descr1.forEach((trago, i) => {
  descr1[i].addEventListener("click", () => {
    cont1.forEach((texto, i) => {
      cont1[i].classList.remove("cont-activo");
    });
    cont1[i].classList.add("cont-activo");
  });
});

descr2.forEach((plato, i) => {
  descr2[i].addEventListener("click", () => {
    cont2.forEach((plato, i) => {
      cont2[i].classList.remove("cont-activo");
    });
    cont2[i].classList.add("cont-activo");
  });
});
