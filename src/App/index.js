import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// NOTA: para comentar varias lineas: control + k + c
// para descomentar varias lineas: control + k + u

// podemos encontrar iconos en react icons

// lo siguiente es un componente de REACT
// la letra mayusucula de App nos indica que es 
// un COMPONENTE de react.js
// por dentro tenemos algo parecido a html pero no lo es
// se llama JSX - sintaxis para combinar js con XML, lo sabemos por ejemplo 
// cuando no escribimos class si no, className.
// esto es lo que estamos importando en nuestro main js
// e insertando en nuestro div con el id root
// lo que estan adentro del return es lo que retorna
// nuestro componente
// el componente es en si la función App

// Otra forma de renderizar puede ser con arrays:
// aca creamos un array con diferentes TODOS
// lo que vamos a hacer dentro de react.fragment es
// crear un nuevo array con .map y en cada elemento poner
// un TodoItem

// ARRAY DE TODOS

// const defaultTodos = [
//   { text:'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de React', completed: false},
//   { text: 'Llorar', completed: true},
//   { text: 'Hola', completed: false},
//   { text: 'Hello', completed: true}
// ];

// tenemos algo llamado LOCAL STORAGE, lo que hace es que guardamos
// los "registros" de lo que hemos hecho en nuestra aplicación en el navegador
// tenemos setItem, getItem, deleteItem, propiedades de localstorage

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

// localStorage solo puede guardar strings
// para convertir js a string podemos usar JSON.stringify
// Con JSON.parse(string), pasamos los valores a js (array)
// en conclusion, cada que queramos guardar algo en local storage debemos usar stringify,
// y cada que querramos leer algo de local storage debemos usar parse

// creamos nuestro propio custom hook:
// la idea es que esta función tenga todo lo que tiene que ver con local storage


function App(){
  return (
    // de esta manera los componentes que estan en AppUi podran
    // acceder a todos los componentes que estan en todo provider
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} 
  
export default App;

