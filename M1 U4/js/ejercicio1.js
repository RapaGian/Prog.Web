const nombre = prompt('Ingrese su nombre:', '');
		const mts = parseInt(prompt('Ingrese los Metros a recorrer:', ''));
		
		if (Number.isNaN(mts)) {
			document.write(`La cantidad de Metros no es correcta, debes expresarlo en un valor numerico! `);
		} else if (mts <= 1000) {
			document.write(`${nombre} deberia recorrer ${mts} metros a pie!`);
            console.log(`${nombre} deberia recorrer ${mts} metros a pie!`);
		} else if (mts >= 1000 , mts <=10000  ){
			document.write(`${nombre} deberia recorrer ${mts} metros en bicicleta!`);
            console.log(`${nombre} deberia recorrer ${mts} metros en bicicleta!`);
        } else if (mts >= 10000 , mts <=30000){
			document.write(`${nombre} deberia recorrer ${mts} metros en colectivo!`);
            console.log(`${nombre} deberia recorrer ${mts} metros en colectivo!`);
        } else if (mts >= 30000 , mts <=100000){
			document.write(`${nombre} deberia recorrer ${mts} metros en auto!`);
            console.log(`${nombre} deberia recorrer ${mts} metros en auto!`);
        } else if (mts >= 100000 ){
			document.write(`${nombre} deberia recorrer ${mts} metros en avion!`);
            console.log(`${nombre} deberia recorrer ${mts} metros en avion!`);    
		}