import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';

// con .. hacemos que busque los archivos una carpeta antes
// importamos nuestro custom hook 

// pasamos todos los props que usamos en nuestro componente

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
// Nosotros necesitamos envolver todo nuestro contenido en algo
  // para luego ser renderizado, esto se puede hacer con
  // React.Fragment, este react.fragment es invisible en el html

  // React.fragmente es equivalente a escribir <></>
  return (
    <>
      <TodoTitle />

      <TodoCounter
       completed={completedTodos} 
       total={totalTodos} 
       />

      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}      
      />


      {/*Acá estamos creando un nuevo array y
      renderizando TodoItems, que deben tener una key 
      diferente, en este caso nuestra key es el texto de 
      cada toDo, ya que siempre es diferente
      por otro lado tambien le pasamos el texto y el completed 
      con las propiedades del nuevo array creado llamado todo
       */}

      <TodoList>

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}

            // aca estamos encapsulando una función para evitar
            // erroes, ya que react llama la función cuando en realidad
            // se necesita agregando ()
            onComplete={() => completeTodo(todo.text)}

            // para eliminar todos:

            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      {/*ASI SE CREAN LOS COMENTARIOS EN JSX*/}
    </>
  );
}

// para insertar nuestro componente todoItem dentro de 
// nuestro componente App lo podemos llamar adentro de App
// de la siguiente manera: <TodoItem />

export {AppUI};