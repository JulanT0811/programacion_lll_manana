import { useState } from 'react';

export default function MayorDeTres() {
    const [access, setAccess] = useState(false);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [mayor, setMayor] = useState(0);

    const handleAccess = () => {
        
        const n1 = Number(num1);
        const n2 = Number(num2);
        const n3 = Number(num3);

        const success = window.confirm("¿Deseas calcular cuál es el número mayor?");
        
        if (success) {
            let elMayor = 0;

            if (n1 >= n2 && n1 >= n3) {
                elMayor = n1;
            } else if (n2 >= n1 && n2 >= n3) {
                elMayor = n2;
            } else {
                elMayor = n3;
            }

            setMayor(elMayor);
            setAccess(true);
        }
    };

    return (
        <div>
            {!access ? (
                <>
                    <h3>Encontrar el mayor de tres números</h3>
                    <input 
                        type="number"
                        value={num1} 
                        placeholder='Primer número'
                        onChange={(e) => setNum1(e.target.value)} /><br />
                    <input
                        type="number" 
                        value={num2} 
                        placeholder='Segundo número'
                        onChange={(e) => setNum2(e.target.value)} /><br />
                    <input
                        type="number" 
                        value={num3} 
                        placeholder='Tercer número'
                        onChange={(e) => setNum3(e.target.value)} /><br />
                    <button onClick={handleAccess}>
                        Calcular Mayor
                    </button>
                </>
            ) : (
                <>
                    <p>Análisis completado</p>
                    <p>El número mayor ingresado es: <strong>{mayor}</strong></p>
                    <button onClick={() => setAccess(false)}>Hacer otro cálculo</button>
                </>
            )}
        </div>
    );
}