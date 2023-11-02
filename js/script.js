const selectEstado= document.getElementById('estado');
const estadoSeleccionado = document.getElementById('estadoSeleccionado');

selectEstado.addEventListener('change', (e)=>{
    estadoSeleccionado.textContent = e.target.value
})
