function obtenerCotizacion() {
  fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(response => response.json())
    .then(data => {
      document.getElementById("compra").textContent = `$${data.compra}`;
      document.getElementById("venta").textContent = `$${data.venta}`;
    })
    .catch(error => console.error("Error al obtener la cotización:", error));
}

// Ejecutar la función al cargar la página
obtenerCotizacion();

// Actualizar cada 60 segundos (1 minuto)
setInterval(obtenerCotizacion, 60000);
