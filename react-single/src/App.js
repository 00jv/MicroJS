import React, { useState } from 'react';

function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    function calcularIMC() {
        const imc = peso / (altura * altura);
        setResultado(`Seu IMC é ${imc.toFixed(2)}`);
    }

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <form>
                <label>
                    Peso (kg):
                    <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </label>
                <br />
                <label>
                    Altura (m):
                    <input type="number" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={calcularIMC}>Calcular</button>
            </form>
            <p>{resultado}</p>
        </div>
    );
}

export default App;
