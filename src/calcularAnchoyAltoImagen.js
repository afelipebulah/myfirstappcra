const anchoHojaA4 = 2480;
const altoImagenA4 = 3508;

function calcularAnchoyAltoImagen(anchoImagen, altoImagen) {
	if (anchoImagen >= anchoHojaA4) {
		anchoImagen = anchoHojaA4;
	}

	if (altoImagen >= altoImagenA4) {
		altoImagen = altoImagenA4;
	}
<<<<<<< HEAD
    
	console.log("Línea agregada Maria");
=======
    console.log("Linea agregada por Carolina");
>>>>>>> 57f5fefbcb693689f887b0001abf6b6aa5456e9b
	return [anchoImagen, altoImagen];
}

export default calcularAnchoyAltoImagen;