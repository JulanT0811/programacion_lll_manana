const cajaPoliza = document.getElementById('cajaPoliza');

cajaPoliza.addEventListener('mouseover', () => {
    cajaPoliza.style.backgroundColor = 'lightyellow';
});
cajaPoliza.addEventListener('mouseout', () => {
    cajaPoliza.style.backgroundColor = 'lightblue';
});
cajaPoliza.addEventListener('click', () => {
    alert('Se ha seleccionado la información de la póliza');
});

const areaCliente = document.getElementById('areaCliente');
areaCliente.addEventListener('touchstart', () => {
    areaCliente.style.backgroundColor = 'orange';
});
areaCliente.addEventListener('touchend', () => {
    areaCliente.style.backgroundColor = 'lightgreen';
});
areaCliente.addEventListener('touchend', (e) => {
    alert('Registro táctil en el área del cliente');
});
