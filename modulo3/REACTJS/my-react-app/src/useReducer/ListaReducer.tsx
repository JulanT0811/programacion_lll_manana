import { useReducer, useState } from 'react';

const initialState: never[] = [];

function reducer(state: any[], action: { type: any; payload: any; index: any; }) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
}

export default function ListaReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [texto, setTexto] = useState("");

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (texto.trim()) {
      dispatch({
          type: 'add', payload: texto,
          index: undefined
      });
      setTexto("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={texto} onChange={e => setTexto(e.target.value)} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {state.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch({
                type: 'remove', index,
                payload: undefined
            })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
