import logo from '../platzi.webp';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

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
  // estado para el contador de Todos:
  // existe algo que se llama estados derivados, son aquellos
  // que existen a raiz de que hacemos calculos a raiz de un estado

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  // estamos creando un estado derivado en el cual filtramos todos los TODOs que tengan
  // completed en true, luego con .lenght contamos cuando TODOs tenemos completados
  // y mostramos ese numero, con el !! hacemos que esta función nos devuelva las cosas de manera
  // booleana, esto lo hacemos para saber que estamos trabajando con estados falsos o verdaderos

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // estado para el TodoSearch:

  const [searchValue, setSearchValue] = React.useState('');
  console.log(`Los usuarios buscan todos de ${searchValue}`);

    // estado derivado para hacer el filtrado de todos:

  const searchedTodos = todos.filter(
    (todo) => {
        // por cada todo vamos a preguntar si el texto de ese todo INCLUYE
        // con el metodo .include en alguna parte el texto que tenemos en 
        // searchValue(cambia con lo que escriban los usuarios)
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
     }
   );

   // creamos función actualizadora del estado de todos (completar todos)

   const completeTodo = (text) => {
    // aca estamos creando una copia del array de estados que ya teniamos todos
    const newTodos = [...todos];
    // para saber cual debemos modificar de newTodos, cambiar la propiedad completed
    // para identificar que todo queremos cambiar podemos usar el identificador key
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
   };

   // función para eliminar todos

   const deleteTodo = (text) => {
    // aca estamos creando una copia del array de estados que ya teniamos todos
    const newTodos = [...todos];
    // para saber cual debemos modificar de newTodos, cambiar la propiedad completed
    // para identificar que todo queremos cambiar podemos usar el identificador key
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // con el metodo splice ponemos una posición, y cortar hasta una parte
    // en este caso solo estamos quitando 1 todo
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
   };

  //shortcuts en carpeta de frontend con react
  // retornamos los props
  
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
} 
  
export default App;

