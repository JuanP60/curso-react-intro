import './TodoSearch.css';
import React from 'react';

// importamos react ya que vamos a utilizar una herramienta que se llama
// useState -MANEJO DE ESTADOS

function TodoSearch({
    searchValue, setSearchValue
}) {

    // lo guardamos en un array, ya que el estado no solamente
    // se consume, si no que también se actualiza
    // el estado de react.js es INMUTABLE
    // necesitamos una función actualizadora del estado controlada
    // por react.js para que pueda hacer los procesos de inmutabilidad
    // creamos un estado, y un actualizador
    // en este caso es:  searchValue, setSearchValue
    // tambien nos permite definir un estado inicial, en este caso 
    // el valor iniciar sera un string vacio ya que lo vamos a conectar
    // con el input de los usuarios

    // pero este manejo de estado se debe hacer desde el padre
    // en este caso desde app.js que es la que llama a todoSearch

   // const [searchValue, setSearchValue] = React.useState('');

    // confirmamos que estamos almacenando el estado:

    // console.log(`Los usuarios buscan todos de ${searchValue}`);

    return (
        <div className='searchParent'>
            <input 
            className="searchBox" 
            placeholder="Search..."

            // aca tenemos el estado de react.js, que en este caso seria lo que
            // escriba el usuario
            value = {searchValue}

            onChange={(event) => {
                // debemos actualizar el estado:
                // guardamos el nuevo valor que inserto el usuario
                // usando la propiedad del eventListener en este caso
                //on change y el .value que traen los inputs por defecto

                setSearchValue(event.target.value);

                //console.log(event);
                //console.log(event.target);
                //console.log(event.target.value);
                // los inputs tienen esta propiedad
                // podemos obtener el valor del input
            }}
             />
        </div>
        
    );
  }
  
  export { TodoSearch };

  // aca usamos el evento onChange
  // podemos usar el input.value para ver el valor que escriben
  // los usuarios en el buscador

  // icono lupa <i class="fa-solid fa-magnifying-glass searchIcon"></i>