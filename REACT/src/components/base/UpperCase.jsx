import React from 'react';

function UpperCase(props) {
    const text = props.texto.toUpperCase();
    return <h1>{text}</h1>
}

export default UpperCase;