
var renk = prompt("Kırmızı : 1 ; Yeşil : 2 ; Mavi : 3 Giriniz"); 
var adsoyad = prompt("Ad Soyad : ? "); 

	
	switch(renk){

		case "1" :
		    renk = 'red'; 
		    document.write("<font color='" + renk + "' size = '30'>" + adsoyad + "</font>");
		    break;
		    case "2" : 
		    renk = 'green';
		    document.write("<font color='" + renk + "' size = '30'>" + adsoyad + "</font>");
		    break;
		    case "3" :
		    renk = 'blue'; 
		    document.write("<font color='" + renk + "' size = '30'>" + adsoyad + "</font>");
		    break;
		    default : 
		    	document.write("<font color='#FFCCDD' size = '30'>" + adsoyad + "</font>");
		    	break;
	}
