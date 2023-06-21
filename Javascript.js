 'use strict'
 
 let productos = []; 

    productos[0]=["Combo Full Kit Indoor Led Carpa 80x80 + Led 300w Completo","productos/item1.jpg","La carpa de cultivo INDOOR BELLAVITA 80 x 80 x 160 cm. Lite Permite la germinación, crecimiento y cosecha de tus plantas. Controla con eficacia los parámetros de tu cultivo temperatura, humedad, iluminación y ventilación.",137.500, "kit"];
    productos[1]=["Garden Highpro Carpa De Cultivo Ecopro 100x100x200", "productos/item2.jpg", "Tejido fuerte y resistente Nylon 420D Estructura patentada, fuerte y estable Mylar premium reflectividad 97%",79.900,"Kit"];
    productos[2]=["Maceta Mad Rocket 16 Litros Cultivo Indoor Gabba Grow Olivos", "productos/item3.jpg","Cuenta con guiadores de raíces y ventanas con auto poda radicular aérea. Esto hace que las raíces se estén reproduciendo continuamente y maximicen el espacio tanto en maceta como en tierra, haciendo que la planta cope todo el sustrato y no se pierda.",1.900,"macetas"];
    productos[3]=["Mad Rocket 25 Lts. Maceta Inteligente X 3 Unidades.","productos/item4.jpg","Posee 42 ventanas laterales que posibilitan la auto poda aérea, al tomar contacto con el oxigeno y la luz las raíces se atrofian y retoman su crecimiento por dentro de la maceta abarcando de manera completa todo el sustrato.",7.950,"macetas"];
    productos[4]=["Luz Panel Led Para Carpa Indoor Cultivo Full Spectrum 50w", "productos/item5.jpg", "Super simples de colocar, utilizan portalámparas común de rosca E27.Sin ruidos, sin parpadeos y con baja emisión de calor. Encendido instantáneo",
    6.184,"luces"];
    productos[5]=["Led Full Spectrum 50w Reflector Cultivo Indoor Tbcin", "productos/item6.jpg","Proyector a Led Full Espectro. Potencia: 50W. Luz: Full Espectro", 
    41.000,"luces" ];

let mostrarInfo = document.getElementById('#catalogo').value; 


 for(let x of productos){ 
mostrarInfo += "<div class='card'> <ul>";
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