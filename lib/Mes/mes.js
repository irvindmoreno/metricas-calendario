class Mes{
	constructor (nombreMes,anio)//Ejemplo ("Enero",2015) (La primera letra con mayuscula)
	{
		var fecha = new Date();
     	this.numeroDeMes=this.asignarNumeroDelMes(nombreMes)//Devuelve el número del mes de 0 a 11
  		this.anio=anio || fecha.getFullYear();//si no se manda año como parametro, se obtiene la fecha actual por defecto
  		this.numeroDeDias=this.obtenerNumeroDeDiasEnElAnio()//obtiene la cantidad de días que tiene el mes en un determinado año
  	}
  	dibujarCuadro(etiqueta,numeroDeDia,tipoDeCuadro)//dibuja un cuadro en etiqueta
  	{
  		// tipoDeCuadro=d => dibuja un cuadro con el nombre del dia adentro y en el te crea una clase concatenando etiqueta y numeroDia
  		// tipoDeCuadro=n => dibuja un cuadro con el numero del dia adentro y en el te crea una clase concatenando etiqueta y numeroDia
  		var tipoDeCuadro=tipoDeCuadro || null;
  		var numeroDeDia=numeroDeDia || null;
  		switch (tipoDeCuadro) 
     	{ 
		   	case null: 
		      	$("."+etiqueta).append('<input class="Mes-Cuadrito">');
		      	break 
		   	case "d":
		   		var nombreDelDia=this.obtenerNombreDelDia(numeroDeDia); 
		   		$("."+etiqueta).append('<input class="Mes-Cuadrito '+etiqueta+numeroDeDia+'"value='+nombreDelDia+' disabled>');
		      	break
		    case "n":
		   		$("."+etiqueta).append('<input class="Mes-Cuadrito '+etiqueta+numeroDeDia+'"value='+numeroDeDia+' disabled>');
		      	break      	
		}
  		//$(".Junio > .Cuadro").html("asd");
  	}
  	obtenerNombreDelDia(numeroDeDia)
  	{
  		var fecha = new Date(this.anio, this.numeroDeMes, numeroDeDia)
  		var weekday = new Array(7);
			weekday[0]=  "Do";
			weekday[1] = "Lu";
			weekday[2] = "Ma";
			weekday[3] = "Mi";
			weekday[4] = "Ju";
			weekday[5] = "Vi";
			weekday[6] = "Sá";
		var nombreDelDia = weekday[fecha.getDay()];
		return nombreDelDia;
  	}
  	
	obtenerNumeroDeDiasEnElAnio()
	{
		var nrDias= new Date(this.anio, this.numeroDeMes+1, 0);
    	return nrDias.getDate();
	}
	asignarNumeroDelMes(nombreMes)
  	{
  		switch (nombreMes) 
     	{ 
		   	case "Enero": 
		      	return 0;
		      	break 
		   	case "Febrero": 
		   		return 1;
		      	break 
		   	case "Marzo": 
		   		return 2;
		      	break
		    case "Abril": 
		   		return 3;
		      	break
		    case "Mayo": 
		   		return 4;
		      	break
		    case "Junio": 
		   		return 5;
		      	break
		    case "Julio": 
		   		return 6;
		      	break
		    case "Agosto": 
		   		return 7;
		      	break
		    case "Setiembre": 
		   		return 8;
		      	break
		    case "Octubre": 
		   		return 9;
		      	break
		    case "Noviembre": 
		   		return 10;
		      	break
		    case "Diciembre": 
		   		return 11;
		      	break       	
		}
  	}
}