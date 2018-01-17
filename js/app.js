var cal = function (){
	//Inicializacion de variables
	var numero ; 
	var nuemero2;// variable auxiliar 
	var operacion; 
	numero = 0;
	numero2 =0;
	operacion ="";

	//agsino la pantalla a variable
	var pantalla = document.getElementById("display");

	// obtendo las las teclas
	var teclas = document.querySelectorAll(".tecla");

	 // recoremos las teclas asignadoles funciones 
	 for (var i = 0; i < teclas.length; i++ ){
	 	//asigno funcion al para hacer pequeño la tecla al aplastar 
	 	teclas[i].onmousedown = function (){
	 		auxAnchoTecla =  this.style.width;
	 		this.style.border= "double 0px black";
	 		this.style.padding= "1%";
		}

		//Funciones para  restituir la tecla 
		teclas[i].onmouseup = function (){
			this.style.width=auxAnchoTecla;
			this.style.border= "none";
	 		this.style.padding= "0";

		}
		teclas[i].onmouseout = function (){
			this.style.width=auxAnchoTecla;
			this.style.border= "none";
	 		this.style.padding= "0";

		}

		//agrego proceso de validacion de la tecla "Que tecla peciono (Clicl)"k
		teclas[i].onclick = function (){
			switch (this.id){
				case "on": // telca de encendido limpia la pantalla y pone 0 a los numeros
					numero = 0;
					nuemero2=0;
					mostrar (numero);
				break;
				case "punto": //al presionar puto 
					if (pantalla.innerHTML.indexOf(".") < 0){// si no hay punto agregamos
						numero += "." ;
						mostrar(numero);
					}

				break;
				case "sign":// cambiar de signo 
					numero = numero * (-1);
					mostrar (numero);
				break;
				case "mas": 
					if (numero2 == 0 && operacion == "" ){
						numero2=numero;
						
						
					} else {
						numero2 = igual(numero, numero2, operacion);
					}
					operacion = "suma";
					numero="";
					mostrar(numero);
				break;
				case "dividido": 
					if (numero2 == 0 && operacion == "" ){
						numero2=numero;
						
						
					} else {
						numero2 = igual(numero2, numero,operacion);
					}
					operacion = "divicion";
					numero="";
					mostrar(numero);
				break;
				case "por": 
					if (numero2 == 0 && operacion == "" ){
						numero2=numero;
						
						
					} else {
						numero2 = igual(numero, numero2, operacion);
					}
					operacion = "por";
					numero="";
					mostrar(numero);
	

				break;

				case "menos": 
					if (numero2 == 0 && operacion == "" ){
						numero2=numero;
						
						
					} else {
						numero2 = igual(numero2,numero, operacion);
					}
					operacion = "resta";
					numero="";
					mostrar(numero);
	

				break;
				case "igual":
					numero = igual(numero, numero2, operacion);
					console.log (numero , numero2, operacion);
					numero2=0;
					operacion ="";
					mostrar (numero);

				break;
				default: //la tecla presionada es un numero.
					if (pantalla.innerHTML=="0" || pantalla.innerHTML == ""){
						//si la pantalla es 0 o esta vacía asisnamos el id tecla
						numero = this.id;

					} else if (pantalla.innerHTML.length < 8){ //si la pantalla tiene no tiene 8 dijitos  
						numero+= this.id;//agragamos el numero 

					}
					mostrar(numero);	
				break;



			}

		}

	 }

	 //funcion para actualizar pantalla
	 var mostrar = function (valor){
	 	pantalla.innerHTML = valor;
	 }

	 //funcio que realiza el calculo 
	 var igual = function (n1,n2,operacion){
	 	if (operacion == "suma"){
	 		return parseFloat(n1)+parseFloat(n2);
	 	}
	 	if (operacion == "resta"){
	 		return parseFloat(n2)-parseFloat(n1);
	 	}
	 	if (operacion == "por"){
	 		return parseFloat(n1)*parseFloat(n2);

	 	}
	 	if (operacion == "divicion"){
	 		return parseFloat(n2)/parseFloat(n2);

	 	}

	 }




}

cal();