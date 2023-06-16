import React from "react";

function useLocalStorage(itemName, initialValue) {
    // creamos un estado para nuestro custom Hook
    // todo para localStorage se denomina "items"
  
    const [item, setItem] = React.useState(initialValue);
  
    // creamos un nuevo estado para la carga

    const [loading, setLoading] = React.useState(true);

    // creamos otro estado para error

    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      // aca estamos guardanndo el array pre definido de todos y
      // vamos a mandar de estado inicial parsedTodos
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem; 
          // si no tenemos nada en localStorage, seteamos un array vacio
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
          // si habia algo en nuestro localStorage:
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);// Ejecutamos solo 2s 
      }, []); // array vacio para ejecutar solo 1 vez
      
    // creamos una función que actualice localStorage y el estado al mismo tiempo
  
    const saveItem = (newItem) => {
  
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
      // no es recomendable devolver muchas cosas en un array
      // usamos mejor un objeto para el return
      return {
        item, 
        saveItem, 
        loading, 
        error};
  }

export { useLocalStorage };