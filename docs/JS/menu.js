let datos = {};
const url = "https://api.npoint.io/cdcfd4c1d992f9552064";

const $container = document.querySelector(".container");

let art=``

function llamarDb(url) {
  const $loader = document.querySelector(".loader")
  fetch(url)

    .then((resp) => resp.text())
    .then((dato) => {
      let data = JSON.parse(dato)
      console.log(data)
      // console.log(dato.record.menu);
  
      // Empezando a armar la estructura de datos
      let a=1
      for (const key in data) {
        let clases=["seccion1",`${a}`]
        const seccion = document.createElement(`seccion${a}`);
        seccion.classList.add(...clases);
        const titulo=document.createElement("h3")
        titulo.classList.add(`${a}`)
        titulo.id=`titulo${a}`
        titulo.innerHTML = `<a class="${a}" href="#titulo${a}">${key} HUELGA<span class="${a} flecha">&raquo</span></a>
        `;
        // console.log(key);
        if (key != "id") {
          
          for (const articulo in data[key]) {
            let $tipos = "";
            datos = data[key][articulo];
            // console.log(datos);
            
           //Armando el arreglo 
            datos[2].forEach((element,i) => {
              if(datos[0].includes("INGREDIENTES")){
                $tipos += `
                <span class="tipo">${element[0]} - </span>
                `;
                if(i>0 && i%3===0){
                  $tipos += `<br>`
                }
              }
                
                else{
              $tipos += `<div>
              <span class="tipo">${element[0]}</span>
              <span class="precio">$ ${element[1]}</span>
              </div>
              `;}
              // console.log(element);
            });
            art = `
            <h4 class="articulo">${datos[0]}</h4><div class="articulo1">
            <div class="descripcion">${datos[1]}</div>
            <div class="tipos">${$tipos}</div>
            </div>
            `;
            // console.log($tipos);
            // console.log(datos[0]);
            // console.log(datos[1]);
            // console.log(datos[2][0][0]);
            // console.log(datos[2][0][1]);
            seccion.innerHTML += art;
          
          document
          .querySelector(".menu")
          .appendChild(titulo);
          document
          .querySelector(".menu")
          .appendChild(seccion);
        }
        }
        a++
      }
      setTimeout(() => {
        $loader.classList.remove("activo")
        
      }, 500);
    })

}

llamarDb(url);
