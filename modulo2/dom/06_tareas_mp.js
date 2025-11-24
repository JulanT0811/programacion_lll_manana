const boton = document.getElementById('agregarPoliza');

boton.addEventListener('click', () => {
    const texto = document.getElementById('poliza').value;

    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = `Póliza registrada: ${texto}`;
        document.getElementById('listaPolizas').appendChild(li);

        const inputText = document.getElementById('poliza');
        inputText.value = ''; // Limpia el campo de texto
    }
});
