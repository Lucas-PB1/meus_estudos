import React from 'react';
import produtos from '../Data/produtos';

function Lista(props) {

    function getList(){
        return produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.nome}: R$ {prod.valor}</li>
        })
    }

    return (
        <div>
            <h2>Lista de produtos</h2>
            <ul>
                {getList()}
            </ul>
        </div>
    )
};

export default Lista;