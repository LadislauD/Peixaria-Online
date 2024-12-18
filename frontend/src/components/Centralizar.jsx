import React from 'react';

function Centralizar(props){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width:'100%'
        }}>
        {props.children}
        </div>
    )
}

export default Centralizar;