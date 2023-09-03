const valores = [5 , 32 , 64 , 8 ]
document.write (`Los valores preseleccionados son: ${valores}`)
console.log  (`Los valores preseleccionados son: ${valores}`)

var mayor= 0

for (let i=0; i<valores.length; i++){
    if (valores[i]>mayor) {
        mayor = valores[i]
    }
    }

alert (`El mayor es ${mayor}`)
console.log (`El mayor es ${mayor}`)