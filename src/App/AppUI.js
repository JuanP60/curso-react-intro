import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos'
import {CreateTodoButton} from '../CreateTodoButton';

// importamos nuestro todoContext

import { TodoContext } from '../TodoContext';
import React from 'react';

// importamos nuestro modal

import { Modal } from '../Modal';

// con .. hacemos que busque los archivos una carpeta antes
// importamos nuestro custom hook 

// pasamos todos los props que usamos en nuestro componente

function AppUI() {

  const { 
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
// Nosotros necesitamos envolver todo nuestro contenido en algo
  // para luego ser renderizado, esto se puede hacer con
  // React.Fragment, este react.fragment es invisible en el html

  // React.fragmente es equivalente a escribir <></>
  return (
    <>
      <TodoTitle />

      <TodoCounter />

      <TodoSearch />


      {/*Acá estamos creando un nuevo array y
      renderizando TodoItems, que deben tener una key 
      diferente, en este caso nuestra key es el texto de 
      cada toDo, ya que siempre es diferente
      por otro lado tambien le pasamos el texto y el completed 
      con las propiedades del nuevo array creado llamado todo
       */}

       {/* Se puede cambiar por el useContext para una mejor sintaxis */}

      <TodoContext.Consumer>
        {/* de esta manera el componente todo list podra
        acceder a todas las propiedades que usa dentro de si mismo
        con .consumer del todo Context 
        Los consumer siguen un praton de render que se llaman los render props
        mi .consumer espera una función que debe retornar los componentes
        */}
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo
        })  => (
          <TodoList>
          {/* aca estamos diciendo si, esta cargando mostramos
          ese mensaje
          Luego si hay un error muestra el otro mensaje
          finalmente, si no esta cargando y no hay ningun todo 
          mostramos el otro mensaje */}
  
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos === 0) && <EmptyTodos />}
  
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
        )}
        
      </TodoContext.Consumer>|

      <CreateTodoButton />
      {/*Vamos a crear un modal, para saber si debemos mostrarlo o no
      podemos usar estados, si openModal esta abierto mostramos
      el mensaje*/}
      {openModal && (
        <Modal>
          La funcionalidad de agregar TODOs
        </Modal>
      )}

    </>
  );
}

// para insertar nuestro componente todoItem dentro de 
// nuestro componente App lo podemos llamar adentro de App
// de la siguiente manera: <TodoItem />

export {AppUI};