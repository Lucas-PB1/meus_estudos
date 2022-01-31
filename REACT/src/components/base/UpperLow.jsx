import React from 'react';
import { useState } from 'react';

function UpperLow(props) {
    const [text, setText] = useState(props.children);
    const [pop, setPop] = useState(false);

    function tac() {
        if (pop) {
            setPop(false);
            setText(text.toLowerCase())
        } else {
            setPop(true);
            setText(text.toUpperCase())
        }
    }
    return (
        <div>
            <p>{text}</p>
            <button onClick={tac}>Clique</button>
        </div>
    )
}

export default UpperLow;