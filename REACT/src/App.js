import './App.css';
import React from 'react';

// Componentes
import Card from './components/Layout/Card'
import LowCase from './components/base/LowCase';
import UpperCase from './components/base/UpperCase';
import UpperLow from './components/base/UpperLow';
import Count from './components/base/Count';
import Lista from './components/base/Lista';
import Condicional from './components/base/Condicional';

function App() {
    return (
        <div className='App'>
            <Card titulo='#01 - Transformando em case menor'>
                <LowCase texto='UM TEXTO QUE ESTAVA EM CAPS'></LowCase>
            </Card>

            <Card titulo='#02 - Transformando em case maior'>
                <UpperCase texto='um texto que estava em minusculo'></UpperCase>
            </Card>

            <Card titulo='#03 - Brincando com o case'>
                <UpperLow>Um TexTo MaIuScuLo e MinUsCulO</UpperLow>
            </Card>

            <Card titulo='#04 - Contando'>
                <Count />
            </Card>

            <Card titulo='#05 - Lista'>
                <Lista />
            </Card>

             <Card titulo='#06 - Condicional: Par ou Impar?'>
                <Condicional num={11} />
            </Card>
        </div>
    )
};

export default App;