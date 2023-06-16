import './TodosLoading.css';
import React from 'react';

// importamos react ya que vamos a utilizar una herramienta que se llama
// useState -MANEJO DE ESTADOS

function TodosLoading() {
    return(
        <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
        </div>
    )
} 

export { TodosLoading };