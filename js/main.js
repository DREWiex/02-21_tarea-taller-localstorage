//TODO: Ejercicio Taller Web Storage
//* Crea una lista de la compra que tenga:
//* 1) Un listado de productos:
//*   1.2) Cada producto tendrá un botón de añadir dicho producto en el localStorage.
//*   1.3) Un botón de eliminar el producto de la lista existente (se eliminará del localStorage).
//* 2) Todo producto que se añada o se elimine del localStorage se verá reflejado automáticamente en otra lista en el propio navegador.
//* 3) Tendremos un botón para vaciar la lista completa del localStorage.

document.addEventListener('DOMContentLoaded', () => {


  //*** VARIABLES ***//

  const fragment = document.createDocumentFragment();
  const tablaProductos = document.querySelector('#lista-productos');
  const tablaSeleccionados = document.querySelector('#productos-seleccionados');

  const arrayProductos = [
    { id: 'a-1', fruta: 'Plátano' },
    { id: 'a-2', fruta: 'Fresa' },
    { id: 'a-3', fruta: 'Coco' },
    { id: 'a-4', fruta: 'Melón' }
  ];

  const arrayProductosSeleccionados = JSON.parse(localStorage.getItem('productos')) || [];



  //*** EVENTOS ***//

  document.addEventListener("click", ({target}) => { //! incompleto
    
    if(target.matches('.add')){
      const id = target.dataset.id;
      almacenarProducto(id);
    };

    if(target.matches('.quitar')){
      // const id = target.parentElement.id;
      //delProdStorage(id);
      //pintarListaDos();
    }

    if(target.matches('.quitar-todo')){
      //localStorage.clear();
      //pintarListaDos();
    }

  });//!EV-CLICK



  //*** FUNCIONES ***//

  const pintarProductos = () => {
    
    arrayProductos.forEach((item) => {
      const productoTR = document.createElement('TR');
      const productoTD = document.createElement('TD');
      productoTD.id = item.id;
      productoTD.textContent = item.fruta;
      const addBtnTD = document.createElement('TD');
      const addBtn = document.createElement('BUTTON');
      addBtn.textContent = "Añadir";
      addBtn.classList.add('add');
      addBtn.dataset['id'] = item.id;

      addBtnTD.append(addBtn);

      productoTR.append(productoTD, addBtnTD);

      fragment.append(productoTR);

    });

    tablaProductos.append(fragment);
    
  }; //!FUNC-PINTARPRODUCTOS


  const setLocal = () => {

    localStorage.setItem('productos', JSON.stringify(arrayProductosSeleccionados));

  }; //!FUNC-SETLOCAL


  const getLocal = () => {

    return JSON.parse(localStorage.getItem('productos')) || [];

  }; //!FUNC-GETLOCAL


  const almacenarProducto = (id) => {
    
    const buscarProducto = arrayProductos.find( producto => producto.id == id);
    arrayProductosSeleccionados.push(buscarProducto);
    setLocal();

  }; //!FUNC-ALMACENARPRODUCTO


  // const delProdStorage = (id) => { //! incompleto

  //   const productoEncontrado = arrayProductosSeleccionados.find((item)=> item.id == id);
  //   localStorage.removeItem('productos');

  // }; //!FUNC-DELPRODSTOR


  const pintarSeleccionados = () => { //? incompleto

    tablaSeleccionados.innerHTML = '';
        
    arrayProductosSeleccionados.forEach((item) => {
      const seleccionadoTR = document.createElement('TR');
      const seleccionadoTD = document.createElement('TD');
      seleccionadoTD.id = item.id;
      seleccionadoTD.textContent = item.fruta;
      const delBtnTD = document.createElement('TD');
      const delBtn = document.createElement('BUTTON');
      delBtn.classList.add('quitar');
      delBtn.dataset['id'] = item.id;
      delBtn.textContent = 'Eliminar';

      delBtnTD.append(delBtn);

      seleccionadoTR.append(seleccionadoTD, delBtnTD);

      fragment.append(seleccionadoTR);

    });

    tablaSeleccionados.append(fragment);
    
  }; //!FUNC-PINTARSELECCIONADOS


  const init = () => {

    pintarProductos();
    pintarSeleccionados(); 

  }; //!FUNC-INIT


  init();

  
});//!LOAD











//*** APUNTES EXTRA ***//

//* Guardar datos: localStorage.setItem('nombre', 'Lydia');

//* Leer datos: let primerNombre = localStorage.getItem('nombre');

//* Eliminar datos (se borra por clave): localStorage.removeItem('nombre');

//* Borrar todo: localStorage.clear();

//* Leer todo lo que hay en el storage: for(let i = 0; i < localStorage.length; i++) { let key = localStorage.key(i); alert(`${key}: ${localStorage.getItem(key)}`); }

//* Guardar objetos en el LocalStorage (JSON.stringify): localStorage.setItem("usuario", JSON.stringify(mi_objeto));

//* Recuperar un objeto del localStorage (JSON.parse): let perfilesGuardados = JSON.parse(localStorage.getItem('usuario')) || [];

//* .find() devuelve el índice del elemento, pero si no lo encuentra devuelve -1.

//* .matches() y .closest() requieren como argumento un selector (de CCS) válido.