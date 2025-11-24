const polizas = [
  { numero: "POL-001", tipo: "Seguro de Vida", cliente: "Carlos Pérez", valor: 50000, vencimiento: "2026-03-15" },
  { numero: "POL-002", tipo: "Seguro Vehicular", cliente: "María Gómez", valor: 25000, vencimiento: "2025-12-30" },
  { numero: "POL-003", tipo: "Seguro Médico", cliente: "Juan Rodríguez", valor: 15000, vencimiento: "2025-09-10" },
  { numero: "POL-004", tipo: "Seguro de Hogar", cliente: "Ana Torres", valor: 40000, vencimiento: "2026-01-25" },
  { numero: "POL-005", tipo: "Seguro de Viaje", cliente: "Luis Martínez", valor: 10000, vencimiento: "2025-07-05" },
  { numero: "POL-006", tipo: "Seguro Empresarial", cliente: "Tech Solutions S.A.", valor: 120000, vencimiento: "2027-02-20" },
  { numero: "POL-007", tipo: "Seguro de Salud", cliente: "Fernanda López", valor: 18000, vencimiento: "2025-10-12" },
  { numero: "POL-008", tipo: "Seguro contra Incendios", cliente: "Comercial Quito", valor: 90000, vencimiento: "2026-05-01" },
  { numero: "POL-009", tipo: "Seguro de Responsabilidad Civil", cliente: "Pedro Silva", valor: 22000, vencimiento: "2025-08-19" },
  { numero: "POL-010", tipo: "Seguro de Accidentes", cliente: "Diana Castro", valor: 12000, vencimiento: "2025-11-30" }
];

const tabla = document.getElementById('cuerpoTablaPolizas');

polizas.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.numero}</td>
    <td>${p.tipo}</td>
    <td>${p.cliente}</td>
    <td>$${p.valor.toLocaleString('es-EC', { minimumFractionDigits: 2 })}</td>
    <td>${p.vencimiento}</td>
  `;
  tabla.appendChild(fila);
});
