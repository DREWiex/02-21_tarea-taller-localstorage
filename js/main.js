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

  const arrayProductos = [
    { id: 'a-1', fruta: 'Plátano' },
    { id: 'a-2', fruta: 'Fresa' },
    { id: 'a-3', fruta: 'Coco' },
    { id: 'a-4', fruta: 'Melón' }
  ];

  const arrayProductosSeleccionados = JSON.parse(localStorage.getItem('productos')) || [];



  //*** EVENTOS ***//

  document.addEventListener("click", ({target}) => { //! incompleto
    
    if(target.matches('.agregar')){ //* capturo el botón de añadir
      const id = target.parentElement.id; //* capturo el id del elemento padre (<li> > <button>)
      addProdStorage(id); //* paso como argumento el atributo id del elemento padre y la función lo compara con la propiedad id de los objetos hasta que coincide y hace el push() en el arrayProductosEncontrados, además de subirlo al localStorage (ver bloque de instrucción de la función)
      pintarListaDos(); //* pinta en la segunda lista los productos añadidos al localStorage
    }

    if(target.matches('.quitar')){
      const id = target.parentElement.id;
      //delProdStorage(id);
      //pintarListaDos();
    }

    if(target.matches('.quitar-todo')){
      //localStorage.clear();
      //pintarListaDos();
    }

  });//!EV-CLICK



  //*** FUNCIONES ***//

  const pintarListaUno = () => {
    
    arrayProductos.forEach((item) => {
        const itemList = document.createElement('LI');
        itemList.id = item.id;
        itemList.textContent = item.fruta;
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

    lista1.append(fragment, delAllButton);

  }; //!FUNC-PINTARPRODUCTOS


  const addProdStorage = (id) => {
    
    const productoEncontrado = arrayProductos.find((item)=> item.id == id);
    arrayProductosSeleccionados.push(productoEncontrado);
    setLocal();

  }; //!FUNC-ADDPRODSTOR


  const delProdStorage = (id) => { //! incompleto

    const productoEncontrado = arrayProductosSeleccionados.find((item)=> item.id == id);
    localStorage.removeItem('productos');

  }; //!FUNC-DELPRODSTOR


  const pintarListaDos = () => { //? incompleto
    
    lista2.innerHTML = '';
    
    const productos = getLocal();
    
    productos.forEach(({id, fruta}) => { //* destructuración de item (arrayProductosSeleccionados.id, arrayProductosSeleccionados.fruta)
      const itemList = document.createElement('LI');
        itemList.id = id;
        itemList.textContent = fruta;
        const delButton = document.createElement('BUTTON');
        delButton.textContent = 'Eliminar';
        delButton.classList.add('quitar');
        delButton.setAttribute("data-id", id);

        itemList.append(delButton);

        fragment.append(itemList);

    })
    
    lista2.append(fragment);

  }; //!FUNC-PINTARLISTADOS


  const setLocal = () => {

    localStorage.setItem('productos', JSON.stringify(arrayProductosSeleccionados));

  }; //!FUNC-SETLOCAL


  const getLocal = () => {

    return JSON.parse(localStorage.getItem('productos')) || [];

  }; //!FUNC-GETLOCAL


  const init = () => {

    pintarListaUno();
    pintarListaDos(); 

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