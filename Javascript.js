 'use strict'
 
 let productos = []; 

    productos[0]=["Combo Full Kit Indoor Led Carpa 80x80 + Led 300w Completo","productos/item1.jpg","La carpa de cultivo INDOOR BELLAVITA 80 x 80 x 160 cm. Lite Permite la germinación, crecimiento y cosecha de tus plantas. Controla con eficacia los parámetros de tu cultivo temperatura, humedad, iluminación y ventilación.",137500, "kit"];
    productos[1]=["Garden Highpro Carpa De Cultivo Ecopro 100x100x200", "productos/item2.jpg", "Tejido fuerte y resistente Nylon 420D Estructura patentada, fuerte y estable Mylar premium reflectividad 97%",79900,"Kit"];
    productos[2]=["Maceta Mad Rocket 16 Litros Cultivo Indoor Gabba Grow Olivos", "productos/item3.jpg","Cuenta con guiadores de raíces y ventanas con auto poda radicular aérea. Esto hace que las raíces se estén reproduciendo continuamente y maximicen el espacio tanto en maceta como en tierra, haciendo que la planta cope todo el sustrato y no se pierda.",1900,"macetas"];
    productos[3]=["Mad Rocket 25 Lts. Maceta Inteligente X 3 Unidades.","productos/item4.jpg","Posee 42 ventanas laterales que posibilitan la auto poda aérea, al tomar contacto con el oxigeno y la luz las raíces se atrofian y retoman su crecimiento por dentro de la maceta abarcando de manera completa todo el sustrato.",7950,"macetas"];
    productos[4]=["Luz Panel Led Para Carpa Indoor Cultivo Full Spectrum 50w", "productos/item5.jpg", "Super simples de colocar, utilizan portalámparas común de rosca E27.Sin ruidos, sin parpadeos y con baja emisión de calor. Encendido instantáneo",
    6184,"luces"];
    productos[5]=["Led Full Spectrum 50w Reflector Cultivo Indoor Tbcin", "productos/item6.jpg","Proyector a Led Full Espectro. Potencia: 50W. Luz: Full Espectro", 
    41000,"luces" ];

let mostrarInfo = ''; 


 for(let x of productos){ 
    mostrarInfo += "<div class= 'card'> <ul>";
    for(let y in x){ 
        if(y == 0){ 
            mostrarInfo += `<li class='itemTitle'> ${x[y]}</li>`
        }else if(y == 1){ 
            mostrarInfo += `<li class='itemImg'> <img src ="${x[y]}" alt = ${x[0]}> </li>`
        }else if(y==3){ 
            mostrarInfo += `<li class='itemPrice'> $${x[y]}</li>`
        }
    }
    mostrarInfo += "<li class='agregar'> Agregar</li>   </ul> </div>"
    document.getElementById("catalogo").innerHTML = mostrarInfo;

}

let main = document.querySelector('main') ; 
console.log(main);
let ventanaModal = document.createElement('div');
main.append(ventanaModal);
ventanaModal.setAttribute('class', 'VentanaModal')
let carrito = document.getElementById("Carrito") ; 
ventanaModal.style.display = 'none';  

let VentanaModalX = document.createElement('div'); 
let PrecioTotal = document.createElement('div') ; 


carrito.addEventListener('mouseover', (parametro) => { 
    ventanaModal.style.display = 'flex'; 
    ventanaModal.style.flexDirection = 'column'; 
    ventanaModal.style.width = '320px'; 
    ventanaModal.style.height = '350px'; 
    ventanaModal.style.backgroundColor = 'grey'; 
    ventanaModal.style.alignItems = 'flex-end';
    ventanaModal.style.position = 'absolute' ; 
    ventanaModal.style.top = '60px'
    ventanaModal.style.right = '40px'
    ventanaModal.style.overflowY = 'auto';
    ventanaModal.prepend(VentanaModalX); 
    VentanaModalX.setAttribute('class', 'VentanaModalX')
    VentanaModalX.style.width = '7%'; 
    VentanaModalX.style.height = '7%'; 
    VentanaModalX.style.background = 'url(cerrar.png) no-repeat center';
    VentanaModalX.style.backgroundSize = 'cover'; 
    VentanaModalX.style.marginRight = '5px';
    ventanaModal.append(PrecioTotal); 
    PrecioTotal.style.width = '100%';
    PrecioTotal.style.height = '20%';
})

VentanaModalX.addEventListener('click', (parametro) => { 
    ventanaModal.style.display = 'none';
})



let BotonCarrito = document.getElementsByClassName('agregar') ;
console.log(BotonCarrito);

let elegido, ProductoAgregar, ProductoAgregarClon;
let ProductoCarrito = document.getElementsByClassName('ProductoCarrito'); 

let PrecioProducto;
let PrecioTotalAcum = 0;
let TextoPrecioProducto;
let PrecioProducto1



for(let x of BotonCarrito){ 
    x.addEventListener('click', (parametro) => { 
        elegido = parametro.target;
        ProductoAgregar = elegido.parentNode.parentNode;
        ProductoAgregarClon = ProductoAgregar.cloneNode(true);
        ProductoAgregarClon.setAttribute('class', 'ProductoCarrito');
        PrecioProducto = elegido.previousElementSibling.innerHTML;
        PrecioProducto1 = PrecioProducto.slice(2);
        PrecioProducto1 = Number.parseFloat(`${PrecioProducto1}`);
        TextoPrecioProducto = document.createTextNode(`$${PrecioTotalAcum}`);
        PrecioTotalAcum += PrecioProducto1;
        PrecioTotal.append(TextoPrecioProducto);
        ventanaModal.appendChild(ProductoAgregarClon);

    })

}

