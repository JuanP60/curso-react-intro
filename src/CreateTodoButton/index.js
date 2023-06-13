import './CreateTodoButton.css';
function CreateTodoButton() {  
    return (
        <button className="createTodoButton"
        onClick={(event) => {
            console.log('Le diste click')
            console.log(event);
        }} 
        >+</button>
    ); 
  }
  
  export { CreateTodoButton };

  

// eventos con react
// usamos onClick