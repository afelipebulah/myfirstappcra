const anchoHojaA4 = 2480;
const altoImagenA4 = 3508;

function calcularAnchoyAltoImagen(anchoImagen, altoImagen) {
	if (anchoImagen >= anchoHojaA4) {
		anchoImagen = anchoHojaA4;
	}

	if (altoImagen >= altoImagenA4) {
		altoImagen = altoImagenA4;
	}
    console.log("Linea agregada por Carolina");
	return [anchoImagen, altoImagen];
}

export default calcularAnchoyAltoImagen;