var campo = [];
var vacios = 0;
var encontrados = 0;
var tam = 5;
iniciar();

function iniciar(){
	campo = [];
	vacios = 0;
	encontrados = 0;
	console.log('entra');
	$("#minas").empty();
	llenar();
	dibujar();
}

function aleatorio(min, max){
	num = Math.floor( Math.random() * (max-min+1) - min );
	return num;
}

function llenar(){
	 for (var i = 0; i < tam; i++) {
	 	var sectores = [];
	 	for (var j = 0; j < tam; j++) {
	 		var alt = aleatorio(0,1);
	 		sectores.push(alt);
	 		if(alt == 0){
	 			vacios++;
	 		}
	 	};
	 	campo.push(sectores);
	 };
}

function dibujar (){
	for (var i = 0; i < tam; i++) {
	 	for (var j = 0; j < tam; j++) {
	 		$("#minas").append("<div id='sector' style='width:1%;' onclick='jugar(this, "+campo[i][j]+")'></div>");
	 	};
	 	$("#minas").append('<br>');
	 };
}

function jugar(caja, valor) {
	if(valor == 1){
		alert("Perdiste");
		iniciar();
	}else{
		caja.style.backgroundImage = "url('bien.png')";
		encontrados++;
		if(encontrados == vacios){
			alert("Felicidades Ganaste");
			iniciar();
		}
	}
}


