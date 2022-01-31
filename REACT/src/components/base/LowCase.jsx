import React from 'react';

function LowCase(props) {
    const text = props.texto.toLowerCase();
    return <h1>{text}</h1>
}

export default LowCase;