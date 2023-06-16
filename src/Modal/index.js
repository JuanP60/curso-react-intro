import React from "react";
import ReactDOM  from "react-dom";
import './Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        // aca vamos a llamar a react dom para crear un portal
        // y enviarle el contenido que queremos teletransportar
        // le damos una clase para poder estilizarlo e indicar a donde
        // queremos teletransportar este contenido
        <div className="Modal">
            {children}
        </div>,
        // aca es donde vamos a teletransportar el contenido de 
        // nuestro componente modal, un nuevo nodo en html

        document.getElementById('modal')
    );
}

export { Modal };