import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

// creamos el componente y la estrucutura del formulario
function TodoForm() {

    // vamos a crear un estado LOCAL, no global:
    // para guardar lo que se escribe en el text area
    // y añadamos nuestro nuevo TODO

    const [newTodoValue, setNewTodoValue] = React.useState('');

    // usamos el hook de usecontext para traer las props que necesitamos

    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        // aca estamos previniendo las acciones por defecto del form
        // que es que al darle click a un boton se recarga la pagina
        event.preventDefault();

        // cuando le den click al boton nos conectamos al contexto
        // global de la app y llamamos a addTodo para agregar un nuevo Todo

        addTodo(newTodoValue);

        // cerramos el form con cualquier boton:
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        // actualizamos nuestro newTodoValue:
        setNewTodoValue(event.target.value);
    };

    return( 
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Add your first TODO"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel">
                    Cancel
                </button>
                <button
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add">
                    add
                </button>
            </div>
        </form>
    );
}

export { TodoForm }; 