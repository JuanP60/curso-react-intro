import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  // las props laspodemos llamar aca con las propiedades que tengan
  // props.children, props.cars, etc
  // o tambien podemos poner el nombre de la propiedades directamente
  // en el llamado del componente como lo hacemos en este caso

  // aca recibimos 2 propiedades, las usamos:
  // para insertar codigo js dentro de jsx usamos {}
  // para estilos en linea se escribe: style={{}} en forma 
  // de objeto, son estilos inline
  // los atributos css son con camelCase
  // las primeras{} es lo que nos permite enviar js u otras coas
  // en el jsx y las otras {} ya que es un objeto con distintas 
  // propiedades

  // la otra forma es simplemente con archivos css

  //-----------------------------------------

  // vamos a recibir las propiedades de una manera diferente:
  // debemos enviarle el contexto que queremos utilizar, en este caso el
  // contexto de los TODOs, es mi critterio cuantos contextos creo
  // lo guardamos en una variable y recibimos informacion en forma de objeto {}
  // la ventaja es que en el componente donde necesitabamos la info
  // la llamamos con useContext

  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

    return (
      <div className='subParent'>
        <h2 className='subTitle'>
        You've done {completedTodos} from {totalTodos} TODOS 
        </h2>
      </div>
    );
  }
  
// debemos exportar este nuevo archivo con nuestro 
// componente TodoCounter

// exportamos un objeto que contenga el componente que 
// queremos exportar

// queremos que esta información sea dinamica
// para eso usamos las props
// los componentes reciben props (parametros), por dentro
// son objeto con distintas propiedades

export { TodoCounter };

// lo debemos importar en nuestro App.js