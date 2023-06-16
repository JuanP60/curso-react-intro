import React from "react";
import { useLocalStorage } from './useLocalStorage';

// creamos un contexto
// para utilizarlo en el resto de componente y aplicacion
// debemos darle un nombre

const TodoContext = React.createContext();

// creamos nuestro propio provider

function TodoProvider ({ children }) {

    // hacemos esto para que el nombre sea mucho mas comodo(nombre de la funcion)
        // lo tenemos que exportar
        // podemos encapsular la logica que querramos compartir entre
        // varios niveles de todos nuestros componentes

          // estado para el contador de Todos:
        // existe algo que se llama estados derivados, son aquellos
        // que existen a raiz de que hacemos calculos a raiz de un estado

        const {
            // aca nombramos la propiedad item y saveItem que retornamos
            // del componente useLocalStorage y en este archivo los renombramos
            // con : nuevo nombre
            item: todos,
            saveItem: saveTodos,
            loading,
            error
            } = useLocalStorage("TODOS_V1", []);

        // estamos creando un estado derivado en el cual filtramos todos los TODOs que tengan
        // completed en true, luego con .lenght contamos cuando TODOs tenemos completados
        // y mostramos ese numero, con el !! hacemos que esta función nos devuelva las cosas de manera
        // booleana, esto lo hacemos para saber que estamos trabajando con estados falsos o verdaderos

        const completedTodos = todos.filter(todo => !!todo.completed).length;
        const totalTodos = todos.length;

        
        // este hook useEffect se usa para la parte de nuestro codigo que es pesada/demorada
        // React.useEffect(() => {
        //   console.log("looooog 2");
        // });

        // // aca estariamos renderizando solo 1 vez con este array vacio
        // React.useEffect(() => {
        //   console.log("looooog 2");
        // }, [] con este array vacio solo lo ejecutamos 1 vez);

        // aca renderizamos cada que cambia de estado totalTodos
        // React.useEffect(() => {
        //   console.log("looooog 2");
        // }, [totalTodos]);

        // el uso practico de react.useEffect es que es asincrono


        // estado para el TodoSearch:

        const [searchValue, setSearchValue] = React.useState('');
        //console.log(`Los usuarios buscan todos de ${searchValue}`);

        // creamos un estado para nuestro modal

        const [openModal, setOpenModal] = React.useState(false);

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

    return(
        
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {/* Ahora cualquier componente que tengamos aca adentro
            va poder accerder a cualquier elemento del objeto anterior
            escrito en value= */}
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }; 