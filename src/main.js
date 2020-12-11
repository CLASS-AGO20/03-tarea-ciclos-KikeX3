export default class App {

    sumatoriaSerieUno(numero){
        let suma = 1;

        for( let i = 2; i <= numero; i++){
            suma = suma + 1/i;
        }

        return suma;
    }

    sumatoriaSerieDos(numero){
        let suma = 1;
        let i =2;
        
        while(i <= numero){
            suma = suma + 1/i;
            i++;
            if (i % 2 !== 0){
                suma = suma - 1/i;
                i++;
            }
        }
        return suma;
    }

    esPrimo(numero){
        let i = 2;

        do{
            if(numero%i==0){
                return false;
            }else{
                return true;
            }
            i++;
        }while(i<numero);
        }
       
    obtenerMultiplos(inicio,fin){
        let i = inicio;
        let multip = "";

        do{
            if(i % 3===0){
                multip = multip + i;
                
            }
            i++
        } while(i<=fin);
       return multip;
    }

    obtenerImpares(numero1,numero2){

    }
 }



let app = new App();
console.log(app.sumatoriaSerieUno(5));

console.log(app.sumatoriaSerieDos(5));

console.log(app.esPrimo(5));
console.log(app.esPrimo(4));

console.log(app.obtenerMultiplos(20,35));