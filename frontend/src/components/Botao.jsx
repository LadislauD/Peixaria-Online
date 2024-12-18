import React from 'react';
import './componentsStyles/botaoStyle.css';

function Botao({label, route}){
    return(
            <a href={route} 
            className="p-button font-bold w-full m-0">
                <b>{label}</b>
            </a>
    );
}
export default Botao;