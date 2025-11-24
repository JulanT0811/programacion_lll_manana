const polizas = [
  { numero: "POL-001", tipo: "Vehicular", cliente: "Juan Pérez", valor: 15000, vencimiento: "2026-03-15" },
  { numero: "POL-002", tipo: "Hogar", cliente: "María López", valor: 30000, vencimiento: "2025-12-20" },
  { numero: "POL-003", tipo: "Vida", cliente: "Carlos Ruiz", valor: 50000, vencimiento: "2028-06-10" },
  { numero: "POL-004", tipo: "Salud", cliente: "Ana Torres", valor: 20000, vencimiento: "2027-01-25" },
  { numero: "POL-005", tipo: "Vehicular", cliente: "Luis Gómez", valor: 18000, vencimiento: "2026-09-09" },
  { numero: "POL-006", tipo: "Empresarial", cliente: "Inversiones Quito S.A.", valor: 120000, vencimiento: "2025-11-30" },
  { numero: "POL-007", tipo: "Educativo", cliente: "Pedro Herrera", valor: 10000, vencimiento: "2026-04-05" },
  { numero: "POL-008", tipo: "Agrícola", cliente: "Cooperativa Andina", valor: 45000, vencimiento: "2027-07-18" },
  { numero: "POL-009", tipo: "Hogar", cliente: "Sofía Rojas", valor: 25000, vencimiento: "2025-10-12" },
  { numero: "POL-010", tipo: "Vida", cliente: "Diego Martínez", valor: 60000, vencimiento: "2029-02-28" }
];

// Referencia a la tabla del documento HTML
const tabla = document.getElementById('cuerpoTablaPolizas');

// Generación dinámica de filas en la tabla
polizas.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.numero}</td>
    <td>${p.tipo}</td>
    <td>${p.cliente}</td>
    <td>$${p.valor.toFixed(2)}</td>
    <td>${p.vencimiento}</td>
  `;
  tabla.appendChild(fila);
});

// Cálculo del total asegurado y visualización final
const totalAsegurado = polizas.reduce((acc, p) => acc + p.valor, 0);
const filaTotal = document.createElement('tr');
filaTotal.innerHTML = `
  <td colspan="3"><strong>Total Asegurado</strong></td>
  <td colspan="2"><strong>$${totalAsegurado.toFixed(2)}</strong></td>
`;
tabla.appendChild(filaTotal);
