var teclas = document.getElementsByClassName("tecla");
var pantalla = document.getElementById("display");

var numero =0;
var operacion = "" ;
for (var i = 0; i<teclas.length; i++){
	teclas[i].onclick =  function (){
		if  (this.id != "on" && this.id != "raiz" && this.id != "sign" && this.id != "sign" && "raiz" && this.id != "dividido" && this.id != "por" && this.id != "."  && this.id != "menos" && this.id != "igual" && this.id != "mas" &&  this.id != "punto" ){
			
			if(pantalla.innerHTML == "0" || pantalla.innerHTML == "" ){
				limpiarPantalla();
				numero = this.id 	;

			}else if (numero.length < 8) {
				numero+= this.id 	;
			}
			
			pantalla.innerHTML = numero;

		}
		if (this.id == "igual" && operacion != "" ){
			igual (numero2, numero, operacion);
		}

		if (this.id == "mas" && numero != 0){
			limpiarPantalla();
			numero2= numero;
			numero = 0;
			operacion = "mas";

		}
		if (this.id == "menos" && numero != 0){
			limpiarPantalla();
			numero2= numero;
			numero = 0;
			operacion = "menos";

		}
		if  (this.id == "on" ){
			pantalla.innerHTML="0";	
			numero=0;		
			opracion ="";
		}
	}
}

function limpiarPantalla(){
	pantalla.innerHTML="";
}
function igual(n2,n1,operacion){
	if (operacion == "mas"){
		 resultado =parseFloat(n1) +parseFloat(n2) ;
		 numero = resultado;
		 numero2 = 0;
	}
	if (operacion == "menos"){
		 resultado =parseFloat(n2) - parseFloat(n1) ;
		 numero = resultado;
		 numero2 = 0;
	}
	pantalla.innerHTML= resultado;


}