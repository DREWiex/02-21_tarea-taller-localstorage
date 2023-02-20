//TODO: Ejercicio Taller Web Storage
//* Crea una lista de la compra que tenga:
//* 1) Un listado de productos:
//*   1.2) Cada producto tendrá un botón de añadir dicho producto en el localStorage.
//*   1.3) Un botón de eliminar el producto de la lista existente (se eliminará del localStorage).
//* 2) Todo producto que se añada o se elimine del localStorage se verá reflejado automáticamente en otra lista en el propio navegador.
//* 3) Tendremos un botón para vaciar la lista completa del localStorage.

document.addEventListener("DOMContentLoaded", () => {


  //*** VARIABLES ***//

  const listaDeProductos = document.querySelector("#lista-productos");
  const fragment = document.createDocumentFragment();

  const arrayProductos = [
    {
        id: 1,
        fruta: 'Plátano'
    },
    {
        id: 2,
        fruta: 'Fresa'
    },
    {
        id: 3,
        fruta: 'Coco'
    },
    {
        id: 4,
        fruta: 'Melón'
    }
  ]




  //*** EVENTOS ***//

  listaDeProductos.addEventListener("click", (ev) => {
    
    if(ev.target.classList.contains("agregar")){
      addProdStorage();
    }

  });//!EV-AGREGARPROD


  listaDeProductos.addEventListener('click', (ev) => {

    if(ev.target.classList.contains('quitar')){
      delProdStorage();
    }

  })//!EV-QUITARPROD


  listaDeProductos.addEventListener("click", (ev) => {

    if(ev.target.classList.contains("quitar-todo")){
      delAllProdStorage();
    }

  })//!EV-BORRARTODO




  //*** FUNCIONES ***//

  const pintarProductos = () => {
    
    arrayProductos.forEach((item) => {
        const itemList = document.createElement('LI');
        itemList.id = item.id;
        itemList.textContent = item.producto;
        const addButton = document.createElement('BUTTON');
        addButton.textContent = "Añadir";
        addButton.classList.add('agregar');
        addButton.setAttribute("data-id", item.id);
        const delButton = document.createElement('BUTTON');
        delButton.textContent = "Eliminar";
        delButton.classList.add('quitar');
        delButton.setAttribute("data-id", item.id);

        itemList.append(addButton, delButton);

        fragment.append(itemList);

    })

    const delAllButton = document.createElement('BUTTON');
    delAllButton.classList.add('quitar-todo');
    delAllButton.textContent = "Borrar todo"

    listaDeProductos.append(fragment, delAllButton);

  }//!FUNC-PINTARPRODUCTOS


  const addProdStorage = () => {

    const captureAddButton = document.querySelectorAll('.agregar');

    arrayProductos.forEach((item) => {
      console.log(item.id); //! aquí tengo que buscar la forma de comparar el key "id" del objeto con el atributo data-id del botón, y en caso de que coincidan, dar la orden para setItem
    })

    //localStorage.setItem("producto", JSON.stringify(arrayProductos))

    console.log('Estoy capturando el botón "Añadir"')
    

  };//!FUNC-ADDPRODSTOR


  const delProdStorage = () => {

    const captureDelButton = document.querySelectorAll('.quitar');

    // let productosGuardados = JSON.parse(localStorage.getItem('usuario')) || [];

    console.log('Estoy capturando el botón "Eliminar"')


  };//!FUNC-DELPRODSTOR


  const delAllProdStorage = () => {

    const captureDelAllButton = document.querySelectorAll('.quitar-todo');

    //localStorage.clear();

    console.log('Estoy capturando el botón "Borrar Todo"')


  };//!FUNC-DELALLPRODSTOR  


  pintarProductos();
  addProdStorage();

});//LOAD











//? const arrayProductos = JSON.parse(localStorage.getItem('cosas')) || [];
//* añadir producto a array y esa array a la storage…

//! *** APUNTES EXTRA *** //

//* Guardar datos: localStorage.setItem('nombre', 'Lydia');

//* Leer datos: let primerNombre = localStorage.getItem('nombre');

//* Eliminar datos (se borra por clave): localStorage.removeItem('nombre');

//* Borrar todo: localStorage.clear();

//* Leer todo lo que hay en el storage: for(let i = 0; i < localStorage.length; i++) { let key = localStorage.key(i); alert(`${key}: ${localStorage.getItem(key)}`); }

//* Guardar objetos en el LocalStorage (JSON.stringify): localStorage.setItem("usuario", JSON.stringify(mi_objeto));

//* Recuperar un objeto del localStorage (JSON.parse): let perfilesGuardados = JSON.parse(localStorage.getItem('usuario')) || [];