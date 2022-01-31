import React from 'react';

function Condicional(props) {

    function ParImpar() {
        let op;
        if (props.num % 2 === 0) { op = 'PAR' } else { op = 'IMPAR' }
        return <span>{op}</span>
    }
    return (
        <div>
            <h2>O número é: {props.num}</h2>
            {ParImpar()}
        </div>
    )
}

export default Condicional;