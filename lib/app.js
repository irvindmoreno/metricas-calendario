$(document).on("ready",inicio)
function inicio()
{
	$('.Mes-Cuadrito--white').on("keydown",escuchadorDeFlechas)
}
function escuchadorDeFlechas(event)
{
		var tabindex=$('*:focus').attr("tabindex");
			tabindex=parseInt(tabindex);
       switch (event.keyCode) 
     	{ 
		   	case 87://arriba
		   		tabindex=tabindex-sumaDeDiasEnUnTicket;//sumaDeDiasEnMeses => suma de Dias que hay en los meses del array
		   		$('[tabindex=' + tabindex + ']').focus();
		      	break 
		   	case 83://abajo
		   		tabindex=tabindex+sumaDeDiasEnUnTicket;//sumaDeDiasEnMeses => suma de Dias que hay en los meses del array
		   		$('[tabindex=' + tabindex + ']').focus();
		      	break
		    case 65://izquierda
		    	tabindex-=1
		    	$('[tabindex=' + tabindex + ']').focus();
		    	console.log("izquierda");
		      	break
		    case 68://derecha
		    	tabindex+=1
		    	$('[tabindex=' + tabindex + ']').focus();
		    	//$("#"+tabindex).focus();
		    	console.log("derecha");
		      	break     	
		}
}

