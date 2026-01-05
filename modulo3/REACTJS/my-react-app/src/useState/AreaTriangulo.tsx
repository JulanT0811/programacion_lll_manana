import { useState } from 'react';

export default function AreaTriangulo() {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [area, setArea] = useState<number | null>(null);

    const calcularArea = () => {
        const areaCalculada = (base * altura) / 2;
        setArea(areaCalculada);
    };
    return (
        <div>
            <h2>Área de un triángulo</h2>   
            <input
                type="number"
                value={base}    
                placeholder="Base"
                onChange={(e) => setBase(Number(e.target.value))}
            /><br />    
            <input
                type="number"
                value={altura}
                placeholder="Altura"
                onChange={(e) => setAltura(Number(e.target.value))}
            /><br />
            <button onClick={calcularArea}>Calcular área</button>
            {area !== null && <p>Área: {area}</p>}
        </div>
    );
}