import React from 'react';
import { useState } from 'react';

function Count(props) {
    const [contador, setContador] = useState(1);
    function tic() {
        setContador(contador + 1);
    }

    return (
        <div>
            <p>{contador}</p>
            <button onClick={tic}>Clique!</button>
        </div>
    )
}

export default Count;