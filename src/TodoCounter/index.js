import './TodoCounter.css';

function TodoCounter({ total, completed }) {
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

    return (
      <div className='subParent'>
        <h2 className='subTitle'>
        You've done {completed} from {total} TODOS 
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