window.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
 
    let $titulo = e.target.classList[0];
    // console.log(e.target)
    // console.log($titulo)
    let $seccion = document.querySelectorAll(".seccion1");
    const $flecha = document.querySelectorAll(".flecha");
    
    if (e.target.classList.contains($titulo)){
        $seccion.forEach((el,i) => {
        if (el.classList.contains($titulo)) {
          el.classList.toggle("activa");
          $flecha[i].classList.toggle("open")
        }else{
          el.classList.remove("activa");
          $flecha[i].classList.remove("open")
        }
        el.scrollTo(0, 50);
      })
    }
    ;
//  window.scrollTo(0, visualViewport.height);
  });
});
