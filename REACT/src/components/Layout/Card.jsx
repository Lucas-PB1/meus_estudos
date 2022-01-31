import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card-first'>
            <div className='content'>{props.children}</div>
            <div className='title'>{props.titulo}</div>
        </div>
    )
}

export default Card;