import { useState } from 'react';

export default function SimpleForm() {
  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Hola, ${numero1 + numero2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="numero"
        placeholder="numero1"
        value={numero1}
        onChange={(e) => setnumero1(Number(e.target.value))}
      />
      <input
        type="numero"
        placeholder="numero2"
        value={numero2}
        onChange={(e) => setnumero2(Number(e.target.value))}
        />
      <button type="submit">Enviar</button>
    </form>
  );
}