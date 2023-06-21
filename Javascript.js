 'use strict'
 
 let productos = []; 

let mostrarInfo = document.getElementById('#catalogo').value; 


 for(let x of productos){ 
mostrarInfo += "<div> <ul>"
    for(let y in x){ 
        if(y == 0){ 
            mostrarInfo += `<li> ${x[y]}</li>`
        }else if(y == 1){ 
            mostrarInfo += `<li> <img href="${x[y]}" alt = ${x[0]}> </li>`
        }else if(y==3){ 
            mostrarInfo += `<li> $${x[y]}</li>`
        }
    }
    mostrarInfo += " </ul> x</div>"
 }