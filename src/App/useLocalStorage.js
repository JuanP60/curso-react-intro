import React from "react";

function useLocalStorage(itemName, initialValue) {

    // aca estamos guardanndo el array pre definido de todos y
    // vamos a mandar de estado inicial parsedTodos
    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem; 
  
    // si no tenemos nada en localStorage, seteamos un array vacio
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      // si habia algo en nuestro localStorage:
      parsedItem = JSON.parse(localStorageItem);
    }
  
    // creamos un estado para nuestro custom Hook
    // todo para localStorage se denomina "items"
  
    const [item, setItem] = React.useState(parsedItem);
  
    // creamos una función que actualice localStorage y el estado al mismo tiempo
  
    const saveItem = (newItem) => {
  
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
      return [item, saveItem];
  }

export { useLocalStorage };