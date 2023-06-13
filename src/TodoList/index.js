import './TodoList.css';

function TodoList({children}) {
    return (
   
        <ul className='TodoList'>
        {children}
        </ul>

    );
  }

  // NOTA: REACT transforma automaticamente todo lo que este
  // dentro de nuestro componente como en la propiedad
  // children, cuando tenemos etiqueta de apertura y cierre
  // por eso la prop en este caso es children

  // este componente TodoList tiene hijos dentro que
  // son los TodoItems, los especificamos con props
  // Lo que hacemos aca se llama comunicacion entre componentes
  // por medio de props

  export { TodoList };
  
  // nota: React no traduce las props como atributos HTML