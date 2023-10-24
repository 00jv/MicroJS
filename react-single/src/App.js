import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateIMC = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100;
      const imc = (weightInKg / (heightInM * heightInM)).toFixed(2);
      setResult(`Seu IMC é: ${imc}`);
    } else {
      setResult('Preencha o peso e a altura.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Calculadora de IMC
      </Typography>
      <TextField
        label="Peso (em kg)"
        variant="outlined"
        fullWidth
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Altura (em cm)"
        variant="outlined"
        fullWidth
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={calculateIMC}>
        Calcular IMC
      </Button>
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        {result}
      </Typography>
    </Container>
  );
}

export default App;
