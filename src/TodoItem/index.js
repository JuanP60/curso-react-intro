// para crear un nuevo componente:
import './TodoItem.css';

function TodoItem(props) {
    // vamos a retornar ELEMENTOS de react para que mas
    // adelante se conviertan en elementos de HTML
  
    return (
     
      <li className="listItems">
          <i class=
          {`fa-solid fa-circle-check fa-lg checkBox ${props.completed && "Icon-check--active"}`} 
          onClick={props.onComplete}>
          </i>

          <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
          </p>
          
          <i class="fa-solid fa-circle-xmark fa-lg deleteBox Icon-delete Icon-delete--active"
          onClick={props.onDelete} >
          </i>
      </li>
      
  
    );
  }
  
  export { TodoItem };

  // para tener clases dinamicas {``}
  // ${props.completed && "Icon-check--active"}
  // estamos preguntando si tiene la propiedad completed, si la tiene
  // agregamos la clase marcada