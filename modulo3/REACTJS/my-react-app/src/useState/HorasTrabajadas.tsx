import { useState } from 'react';

export default function CalculadoraSalario() {
    const [access, setAccess] = useState(false); 
    const [horas, setHoras] = useState('');
    const [valorHora, setValorHora] = useState('');
    const [resultado, setResultado] = useState(0);

    const handleAccess = () => {
        const h = Number(horas);
        const v = Number(valorHora);

        if (h > 0 && v > 0) {
            const success = window.confirm("¿Deseas calcular el salario con horas extras?");
            if (success) {
                let total = 0;
            
                if (h > 40) {
                    const extras = h - 40;
                    total = (40 * v) + (extras * (v * 2));
                } else {
                    total = h * v;
                }
                
                setResultado(total);
                setAccess(true);
            }
        } else {
            window.confirm("Datos inválidos");
        }
    };

    return (
        <div>
            {!access ? (
                <>
                    <input 
                        type="number"
                        value={horas} 
                        placeholder='Horas trabajadas'
                        onChange={(e) => setHoras(e.target.value)} /><br />
                    <input
                        type="number" 
                        value={valorHora} 
                        placeholder='Valor por hora'
                        onChange={(e) => setValorHora(e.target.value)} /><br />
                    <button onClick={handleAccess}>
                        Calcular Salario
                    </button>
                </>
            ) : (
                <>
                    <p> Cálculo completado</p>
                    <p>El salario total es: ${resultado}</p>
                    <button onClick={() => setAccess(false)}>Regresar</button>
                </>
            )}
        </div>
    );
}