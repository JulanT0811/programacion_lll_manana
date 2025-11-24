// Seleccionar el título por su ID
const titulo = document.getElementById('titulo');
console.log("Título del documento:");
console.log(titulo.textContent);

// Seleccionar los párrafos con la clase 'nota'
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log("Nota:", nota.textContent));

// Seleccionar los elementos de la lista con la clase 'item'
const items = document.getElementsByClassName('item');
Array.from(items).forEach(elemento => console.log("Tipo de póliza:", elemento.textContent));

// Seleccionar por atributo 'name'
const usuarios = document.getElementsByName('usuario');
Array.from(usuarios).forEach(elemento => console.log("Nombre del cliente:", elemento.textContent));
