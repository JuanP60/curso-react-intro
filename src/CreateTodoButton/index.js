import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';
import React from 'react';
function CreateTodoButton() {  
    // creamos el contexto
    const { 
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <button className="createTodoButton"
        onClick={() => {
            openModal ?
            setOpenModal(false) :
            setOpenModal(true)
        }} 
        >+</button>
    ); 
  }
  
  export { CreateTodoButton };

  

// eventos con react
// usamos onClick