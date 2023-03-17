import { useState } from 'react'
import './App.css'

export const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación para input1
    if (input1.trim().length < 3 || input1.trim().startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Validación para input2
    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    const informacion = (
      <div>
        <p>Input 1: {input1}</p>
        <p>Input 2: {input2}</p>
      </div>
    );
    console.log(informacion);
  };

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Deporte fav</h1>
        <label htmlFor="input1">Deporte fav</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={handleInput1Change}
        />
      </div>
      <div>
        <label htmlFor="input2">Deportista fav</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={handleInput2Change}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}
