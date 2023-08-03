'use strict'

let productos = [ 
{
    titulo:"Combo Full Kit Indoor Led Carpa 80x80 + Led 300w Completo",
    img:"productos/item1.jpg",
    precio:137500,
    descripcion:"La carpa de cultivo INDOOR BELLAVITA 80 x 80 x 160 cm. Lite Permite la germinación, crecimiento y cosecha de tus plantas. Controla con eficacia los parámetros de tu cultivo temperatura, humedad, iluminación y ventilación.",
    categoria:"kit"
},
{
    titulo:"Garden Highpro Carpa De Cultivo Ecopro 100x100x200",
    img:"productos/item2.jpg",
    precio:79900,
    descripcion:"Tejido fuerte y resistente Nylon 420D Estructura patentada, fuerte y estable Mylar premium reflectividad 97%",
    categoria:"kit"
},
{
    titulo:"Maceta Mad Rocket 16 Litros Cultivo Indoor Gabba Grow Olivos",
    img:"productos/item3.jpg",
    precio:1900,
    descripcion:"Cuenta con guiadores de raíces y ventanas con auto poda radicular aérea. Esto hace que las raíces se estén reproduciendo continuamente y maximicen el espacio tanto en maceta como en tierra, haciendo que la planta cope todo el sustrato y no se pierda.",
    categoria:"macetas"
},
{
    titulo:"Mad Rocket 25 Lts. Maceta Inteligente X 3 Unidades.",
    img:"productos/item4.jpg",
    precio:7950,
    descripcion:"Posee 42 ventanas laterales que posibilitan la auto poda aérea, al tomar contacto con el oxigeno y la luz las raíces se atrofian y retoman su crecimiento por dentro de la maceta abarcando de manera completa todo el sustrato.",
    categoria:"macetas"
},
{
    titulo:"Luz Panel Led Para Carpa Indoor Cultivo Full Spectrum 50w",
    img:"productos/item5.jpg",
    precio:6184,
    descripcion:"Super simples de colocar, utilizan portalámparas común de rosca E27.Sin ruidos, sin parpadeos y con baja emisión de calor. Encendido instantáneo",
    categoria:"luces"
},
{
    titulo:"Led Full Spectrum 50w Reflector Cultivo Indoor Tbcin",
    img:"productos/item6.jpg",
    precio: 41000,
    descripcion:"Proyector a Led Full Espectro. Potencia: 50W. Luz: Full Espectro",
    categoria:"luces" 
}];




let chango = [];
let totalCompra = 0;
let tamanocarrito= document.getElementById('tamanoCarrito');
tamanocarrito.innerHTML=chango.length;
tamanocarrito.style.display='none';
let totalNav=document.getElementById('totalCompra');
totalNav.innerHTML=`$${totalCompra}`;



let main = document.querySelector('main') ; 
let ventanaModal = document.createElement('div');
main.append(ventanaModal);
ventanaModal.setAttribute('class', 'VentanaModal')
let carrito = document.getElementById("Carrito") ; 
ventanaModal.style.display = 'none';  


let carritocontenedor=document.createElement('div');
carritocontenedor.setAttribute('id','carritoContenedor');
ventanaModal.prepend(carritocontenedor);
let VentanaModalX = document.createElement('div'); 
var PrecioTotal = document.createElement('div') ; 
ventanaModal.appendChild(PrecioTotal);
PrecioTotal.setAttribute('id','total');
PrecioTotal.setAttribute('class','PrecioTotal');
PrecioTotal.textContent =`No hay elementos en el carrito`;
var Pagar=document.createElement('div');
ventanaModal.appendChild(Pagar);
Pagar.setAttribute('id','pagar');
Pagar.textContent=`Ir a pagar`;
Pagar.style.display='none';



// FUNCIÓN MOSTRAR CARRITO

carrito.addEventListener('mouseover', (parametro) => { 
   ventanaModal.style.display = 'flex'; 
   ventanaModal.style.flexDirection = 'column'; 
   ventanaModal.style.width = '350px'; 
   ventanaModal.style.minHeight= '100px';
   ventanaModal.style.height = 'auto'; 
   ventanaModal.style.backgroundColor = '#f19d57'; 
   ventanaModal.style.position = 'absolute' ; 
   ventanaModal.style.top = '60px'
   ventanaModal.style.right = '40px'
   ventanaModal.style.overflowY = 'auto';
   ventanaModal.prepend(VentanaModalX); 
   VentanaModalX.setAttribute('class', 'VentanaModalX')
   VentanaModalX.style.width = '25px'; 
   VentanaModalX.style.height = '25px'; 
   VentanaModalX.style.background = 'url(cerrar.png) no-repeat center';
   VentanaModalX.style.backgroundSize = 'cover'; 
   VentanaModalX.style.marginRight = '5px';
   VentanaModalX.style.position='absolute';
   VentanaModalX.style.alignSelf='end';

})

VentanaModalX.addEventListener('click', (parametro) => { 
    ventanaModal.style.display = 'none';
 })


// MOSTRAR PRODUCTOS

function mostrarProductos() {
    MostrarVentanaCategoria();
    let contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML='';
    BotonCats.style.fontWeight='900';
    BotonCatKit.style.fontWeight='400';
    BotonCatMaceta.style.fontWeight='400';
    BotonCatLuces.style.fontWeight='400';
    productos.forEach((productos, indice) => {
    let productoHTML=document.createElement('div');
    productoHTML.setAttribute('class','card');
    productoHTML.innerHTML=`<ul>
    <li class='itemTitle'> ${productos.titulo}</li>
    <li class='itemImg descripcion'><img src="${productos.img}" alt="${productos.titulo}"></li>
    <li class='itemPrice' >$${productos.precio}</li>
    <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
    </ul>
    `;
    contenedorProductos.appendChild(productoHTML);
    })
}

// AGREGAR/QUITAR/ACTUALIZAR AL CARRITO

function agregarAlCarrito(indice){
    let productoSeleccionado = productos[indice];
    chango.push(productoSeleccionado);
    totalCompra += productoSeleccionado.precio;
    actualizarCarrito();

}
function quitarDelCarrito(indice){
    let productoQuitado=chango[indice];
    totalCompra-=productoQuitado.precio;
    chango.splice(indice,1);
    actualizarCarrito();
}

function actualizarCarrito(){
    let carritoElement=document.getElementById('carritoContenedor');
    carritoElement.innerHTML='';

    
    

    chango.forEach((producto, indice) => {
        let itemCarrito=document.createElement('div');
        itemCarrito.setAttribute('class','card');
        itemCarrito.setAttribute('class','ProductoCarrito');
        itemCarrito.innerHTML= `<ul>
        <li class='itemTitle'> ${producto.titulo}</li>
        <li class='itemImg'><img src="${producto.img}" alt="${producto.titulo}"></li>
        <li class='itemPrice' >$${producto.precio}</li>
        <li class='quitar' onclick='quitarDelCarrito(${indice})'>quitar</li>
        
        </ul>
        `;
        carritoElement.prepend(itemCarrito);
    });
    PrecioTotal.innerHTML =`Total:$${totalCompra}`;
    tamanocarrito.innerHTML=chango.length;
    totalNav.innerHTML=`$${totalCompra}`;

    if(chango.length>0){
        Pagar.style.display='flex';
        
        PrecioTotal.innerHTML =`Total:$${totalCompra}`;
        tamanocarrito.style.display='flex';
        DivBotonVaciarCarrito.style.display = 'flex'; 
        totalNav.style.display='flex';
    }else{
        Pagar.style.display='none';
        PrecioTotal.innerHTML =`No hay elementos en el carrito`;
        tamanocarrito.style.display='none';
        DivBotonVaciarCarrito.style.display = 'none'; 
        totalNav.style.display='none';
    }
    }

    let CrearDivCategorias = document.createElement('div'); 
    main.prepend(CrearDivCategorias); 
    
    CrearDivCategorias.setAttribute('id', 'DivCategorias');
    CrearDivCategorias.style.display = 'flex'; 
    CrearDivCategorias.style.justifyContent= 'space-evenly';
    CrearDivCategorias.style.width = '26vw'; 
    CrearDivCategorias.style.padding = '3%'; 
    
    let BotonCats = document.createElement('button'); 
    let textoBotonCats = document.createTextNode('Todos los productos');
    BotonCats.append(textoBotonCats);
    BotonCats.setAttribute('onclick', 'mostrarProductos()');
    BotonCats.style.background = 'transparent';
    BotonCats.style.fontWeight='900';
    BotonCats.style.padding = '10px';
    BotonCats.style.border = '2px solid #f19d57';
    BotonCats.style.borderRadius = '10px';
    BotonCats.addEventListener('mouseover', () => { 
        BotonCats.style.backgroundColor = '#f19d57'; 
        BotonCats.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.45)'; 
    
    })
    BotonCats.addEventListener('mouseleave', () => { 
        BotonCats.style.background = 'transparent'; 
        BotonCats.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0)'; 
    
    })
    
    let BotonCatKit = document.createElement('button'); 
    let textoBotonCatKit = document.createTextNode('Kits');
    BotonCatKit.append(textoBotonCatKit);
    BotonCatKit.setAttribute('onclick', 'mostrarCatKit()')
    BotonCatKit.style.background = 'transparent';
    BotonCatKit.style.padding = '10px';
    BotonCatKit.style.border = '2px solid #f19d57';
    BotonCatKit.style.borderRadius = '10px';
    BotonCatKit.addEventListener('mouseover', () => { 
        BotonCatKit.style.backgroundColor = '#f19d57'; 
        BotonCatKit.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.45)'; 
    })
    BotonCatKit.addEventListener('mouseleave', () => { 
        BotonCatKit.style.background = 'transparent'; 
        BotonCatKit.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0)'; 
    
    })
    
    let BotonCatMaceta = document.createElement('button'); 
    let textoBotonCatMaceta = document.createTextNode('Macetas');
    BotonCatMaceta.append(textoBotonCatMaceta);
    BotonCatMaceta.setAttribute('onclick', 'mostrarCatMacetas()')
    BotonCatMaceta.style.background = 'transparent';
    BotonCatMaceta.style.padding = '10px';
    BotonCatMaceta.style.border = '2px solid #f19d57';
    BotonCatMaceta.style.borderRadius = '10px';
    BotonCatMaceta.addEventListener('mouseover', () => { 
        BotonCatMaceta.style.backgroundColor = '#f19d57'; 
        BotonCatMaceta.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.45)'; 
    })
    BotonCatMaceta.addEventListener('mouseleave', () => { 
        BotonCatMaceta.style.background = 'transparent'; 
        BotonCatMaceta.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0)'; 
    })
    
    let BotonCatLuces = document.createElement('button'); 
    let textoBotonCatLuces = document.createTextNode('Luces');
    BotonCatLuces.append(textoBotonCatLuces);
    BotonCatLuces.setAttribute('onclick', 'mostrarCatLuces()');
    BotonCatLuces.style.background = 'transparent';
    BotonCatLuces.style.padding = '10px';
    BotonCatLuces.style.border = '2px solid #f19d57';
    BotonCatLuces.style.borderRadius = '10px';
    BotonCatLuces.addEventListener('mouseover', () => { 
        BotonCatLuces.style.backgroundColor = '#f19d57'; 
        BotonCatLuces.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.45)'; 
    })
    BotonCatLuces.addEventListener('mouseleave', () => { 
        BotonCatLuces.style.background = 'transparent'; 
        BotonCatLuces.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0)';
    })
    





mostrarProductos();

// VACIAR CARRITO

let DivBotonVaciarCarrito = document.createElement('div');
DivBotonVaciarCarrito.setAttribute('class', 'BotonVaciar')
let BotonVaciarCarrito = document.createElement('button')
let TextoBotonVaciarCarrito = document.createTextNode('Vaciar Carrito'); 
DivBotonVaciarCarrito.append(BotonVaciarCarrito); 
BotonVaciarCarrito.append(TextoBotonVaciarCarrito);
ventanaModal.append(DivBotonVaciarCarrito);

DivBotonVaciarCarrito.style.display='none';
DivBotonVaciarCarrito.style.order = '2';
DivBotonVaciarCarrito.style.justifyContent = 'center'; 
DivBotonVaciarCarrito.style.alignItems = 'center';
DivBotonVaciarCarrito.style.alignSelf = 'center';
BotonVaciarCarrito.style.border = 'none'
BotonVaciarCarrito.style.width = '120px';
BotonVaciarCarrito.style.height = '20px';
BotonVaciarCarrito.style.fontSize = '12px';
BotonVaciarCarrito.style.background = '#ddddd'; 
BotonVaciarCarrito.style.borderRadius = '4px';
BotonVaciarCarrito.style.marginBottom= '10px';
BotonVaciarCarrito.style.fontWeight='600';


BotonVaciarCarrito.addEventListener('click', () => { 
    let carritoElement=document.getElementById('carritoContenedor');
    carritoElement.innerHTML='';
    chango = [];
    let tamanocarrito= document.getElementById('tamanoCarrito');
        tamanocarrito.innerHTML='0';
        let PrecioTotal = document.getElementById('total');
        PrecioTotal.innerHTML =`No hay elementos en el carrito`;
        actualizarCarrito();
})



/* Filtrar Categorias */



CrearDivCategorias.append(BotonCats, BotonCatKit, BotonCatMaceta, BotonCatLuces);
main.style.flexDirection = 'column';
let kit = productos.filter(CatKit); 
function CatKit(valor) { 
return valor.categoria == 'kit'; 
}
let macetas = productos.filter(CatMacetas);
function CatMacetas(valor){ 
    return valor.categoria == 'macetas';
}

let luces = productos.filter(CatLuces); 
function CatLuces(valor){ 
    return valor.categoria == 'luces';
}

    function mostrarCatKit(){
        mostrarOfertaModal();
        MostrarVentanaCategoria();
        let contenedorProductos = document.getElementById('productos'); 
        contenedorProductos.innerHTML='';
        BotonCats.style.fontWeight='400';
        BotonCatKit.style.fontWeight='900';
        BotonCatMaceta.style.fontWeight='400';
        BotonCatLuces.style.fontWeight='400';
        console.log(kit);
        kit.forEach((productos, indice) => {
            let productoHTML=document.createElement('div');
            productoHTML.setAttribute('class','card');
            productoHTML.innerHTML=`<ul>
            <li class='itemTitle'> ${productos.titulo}</li>
            <li class='itemImg descripcion'><img src="${productos.img}" alt="${productos.titulo}"></li>
            <li class='itemPrice' >$${productos.precio}</li>
            <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
            </ul>
            `;
            contenedorProductos.appendChild(productoHTML);
            })
    }

    function mostrarCatMacetas(){
        mostrarOfertaModal();
        MostrarVentanaCategoria();
        let contenedorProductos = document.getElementById('productos'); 
        contenedorProductos.innerHTML='';
        BotonCats.style.fontWeight='400';
        BotonCatKit.style.fontWeight='400';
        BotonCatMaceta.style.fontWeight='900';
        BotonCatLuces.style.fontWeight='400';
        console.log(macetas);
        macetas.forEach((productos, indice) => {
            let productoHTML=document.createElement('div');
            productoHTML.setAttribute('class','card');
            productoHTML.innerHTML=`<ul>
            <li class='itemTitle'> ${productos.titulo}</li>
            <li class='itemImg descripcion'><img src="${productos.img}" alt="${productos.titulo}"></li>
            <li class='itemPrice' >$${productos.precio}</li>
            <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
            </ul>
            `;
            contenedorProductos.appendChild(productoHTML);
            })
    }

    function mostrarCatLuces(){
        mostrarOfertaModal();
        MostrarVentanaCategoria();
        let contenedorProductos = document.getElementById('productos'); 
        contenedorProductos.innerHTML='';
        BotonCats.style.fontWeight='400';
        BotonCatKit.style.fontWeight='400';
        BotonCatMaceta.style.fontWeight='400';
        BotonCatLuces.style.fontWeight='900';

        console.log(macetas);
        luces.forEach((productos, indice) => {
            let productoHTML=document.createElement('div');
            productoHTML.setAttribute('class','card');
            productoHTML.innerHTML=`<ul>
            <li class='itemTitle'> ${productos.titulo}</li>
            <li class='itemImg descripcion'><img src="${productos.img}" alt="${productos.titulo}"></li>
            <li class='itemPrice' >$${productos.precio}</li>
            <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
            </ul>
            `;
            contenedorProductos.appendChild(productoHTML);
            })
    }

    // hover sobre cards

let cardProd = document.getElementsByClassName('card');
console.info(cardProd);
for(let x of cardProd){
    x.addEventListener('mouseover', function(){
        this.style.backgroundColor='#f19d57';
    });
    x.addEventListener('mouseout',function(){
        this.style.backgroundColor='#dddd';
    })
}

    // DESCRIPCIÓN DE PRODUCTOS

function mostrarDescripcionProducto(producto) {
    let descripcionModal = document.createElement('div');
    descripcionModal.setAttribute('class', 'DescripcionModal');
    descripcionModal.style.display = 'none';
    let ventanaModalX = document.createElement('div');
    ventanaModalX.setAttribute('class', 'CerrarModalX');
    ventanaModalX.addEventListener('click', () => {
        descripcionModal.style.display = 'none';
    });
    let descripcionProducto = document.createElement('div');
    descripcionProducto.setAttribute('id', 'descripcionProducto');
    descripcionProducto.innerHTML = `
        <img src="${producto.img}" alt="${producto.titulo}">
        <div class='itemTitle'>${producto.titulo}</div>
        <div class='itemDesc'>${producto.descripcion}</div>
        <div class='itemPrice'>$${producto.precio}</div> `;
    descripcionModal.appendChild(ventanaModalX);
    descripcionModal.appendChild(descripcionProducto);
    document.body.appendChild(descripcionModal);
    descripcionModal.style.display = 'flex';
    descripcionProducto.addEventListener('mouseleave',()=>{
        descripcionModal.style.display='none';
    })
}

let cardProductos = document.querySelectorAll('.itemTitle');
cardProductos.forEach((card, indice) => {
    card.addEventListener('mouseover', () => {
        mostrarDescripcionProducto(productos[indice]);
    });
});


window.addEventListener('load', () => {
    mostrarOfertaModal();
});

/* OFERTA CATEGORIAS */

function MostrarVentanaCategoria(){ 
    let VentanaCategoriaKit = document.createElement('div')
        main.append(VentanaCategoriaKit);
        VentanaCategoriaKit.style.display = 'flex';
        VentanaCategoriaKit.style.width = '50vw';
        VentanaCategoriaKit.style.height = '30vh';
        VentanaCategoriaKit.style.backgroundColor= 'red';
        VentanaCategoriaKit.style.position = 'fixed';
        VentanaCategoriaKit.style.top = '30vh';    
        VentanaCategoriaKit.style.zIndex = '999';


        let pantallaGris = document.createElement('div');
    pantallaGris.setAttribute('class', 'PantallaGris');
    document.body.appendChild(pantallaGris);
    
    
        setTimeout(() => {
            VentanaCategoriaKit.style.display = 'none';
            pantallaGris.style.display = 'none';
        }, 10);

}


// BANNER OFERTA

function mostrarOfertaModal() {
    let pantallaGris = document.createElement('div');
    pantallaGris.classList.add('PantallaGris');
    document.body.appendChild(pantallaGris);

    let ofertaModal = document.createElement('div');
    ofertaModal.classList.add('VentanaModal');

    let mensajeOferta = document.createElement('div');
    mensajeOferta.classList.add('MensajeOferta');

    let imagenOferta = document.createElement('img');
    imagenOferta.src = 'Recursos/oferta.png';
    imagenOferta.alt = 'Oferta';
    imagenOferta.style.width = '300px';
    imagenOferta.style.height = '300px';

    let h2 = document.createElement('h2');
    h2.textContent = 'Aprovecha la oferta solo por 10 minutos.';
    let p1 = document.createElement('p');
    p1.textContent = 'Con el código BLOOMBUDDY tienes un descuento del 25%!!!';
    let p2 = document.createElement('p');
    p2.textContent = 'No te la pierdas!';

    let cerrarBoton = document.createElement('button');
    cerrarBoton.classList.add('CerrarBoton');
    cerrarBoton.textContent = 'Cerrar';

    mensajeOferta.appendChild(imagenOferta);
    mensajeOferta.appendChild(h2);
    mensajeOferta.appendChild(p1);
    mensajeOferta.appendChild(p2);
    mensajeOferta.appendChild(cerrarBoton);

    ofertaModal.appendChild(mensajeOferta);
    document.body.appendChild(ofertaModal);

    ofertaModal.style.display = 'flex';
    ofertaModal.style.flexDirection = 'column';
    ofertaModal.style.width = '350px';
    ofertaModal.style.minHeight = '100px';
    ofertaModal.style.backgroundColor = '#f19d57';
    ofertaModal.style.position = 'fixed';
    ofertaModal.style.top = '50%';
    ofertaModal.style.left = '50%';
    ofertaModal.style.transform = 'translate(-50%, -50%)';
    ofertaModal.style.padding = '20px';
    ofertaModal.style.borderRadius = '15px';
    ofertaModal.style.boxShadow = '0px 5px 50px -5px rgba(0, 0, 0, 0.40)';
    ofertaModal.style.zIndex = '999';

    cerrarBoton.addEventListener('click', () => {
        ofertaModal.style.display = 'none';
        pantallaGris.style.display = 'none';
    });
    pantallaGris.addEventListener('click', () => {
        ventanaModal.style.display = 'none';
        ofertaModal.style.display='none';
        pantallaGris.style.display = 'none';
        });


    setTimeout(() => {
        ofertaModal.style.display = 'none';
        pantallaGris.style.display = 'none';
    }, 10000);
}

// MODAL PAGAR


Pagar.addEventListener('click', () => {
    let pantallaGris = document.createElement('div');
    pantallaGris.setAttribute('class', 'PantallaGris');
    document.body.appendChild(pantallaGris);

    let ventanaModal = document.createElement('div');
    ventanaModal.setAttribute('class', 'VentanaModal');
    ventanaModal.setAttribute('id', 'pagarmodal');

    let formularioCliente = document.createElement('form');
    formularioCliente.innerHTML = `<h2>Datos de facturación</h2>
        <input type="text" id="nombre" placeholder="Nombre" required>
        <input type="text" id="apellido" placeholder="Apellido" required>
        <input type="number" id="telefono" placeholder="Teléfono" required>
        <input type="email" id="mail" placeholder="Email" required>
        <input type="text" id="direccion" placeholder="Dirección" required>
        <div>
        <div type="button" class="SiguienteBoton">Siguiente</div>
        <div type="button" class="CancelarBoton">Cancelar</div>
        </div>
    `;

    formularioCliente.addEventListener('input', (event) => {
        const input = event.target;
        if (input.checkValidity()) {
            input.classList.add('valido');
        } else {
            input.classList.remove('valido');
            input.classList.add('invalido');
        }
    });


    ventanaModal.appendChild(formularioCliente);
    document.body.appendChild(ventanaModal);

    ventanaModal.style.display = 'flex';
    ventanaModal.style.flexDirection = 'column';
    ventanaModal.style.width = '350px';
    ventanaModal.style.backgroundColor = '#f19d57';
    ventanaModal.style.position = 'fixed';
    ventanaModal.style.top = '50%';
    ventanaModal.style.left = '50%';
    ventanaModal.style.transform = 'translate(-50%, -50%)';
    ventanaModal.style.padding = '20px';
    ventanaModal.style.borderRadius = '15px';
    ventanaModal.style.boxShadow = '0px 5px 50px -5px rgba(0, 0, 0, 0.40)';
    ventanaModal.style.zIndex = '999';

    let cancelarBoton = formularioCliente.querySelector('.CancelarBoton');
    cancelarBoton.addEventListener('click', () => {
        ventanaModal.style.display = 'none';
        pantallaGris.style.display = 'none';
    });

    let siguienteBoton = formularioCliente.querySelector('.SiguienteBoton');
    siguienteBoton.addEventListener('click', () => {

        ventanaModal.style.display = 'none';
        pantallaGris.style.display = 'none';
    });
    
    pantallaGris.addEventListener('click', () => {
    ventanaModal.style.display = 'none';
    pantallaGris.style.display = 'none';
    });


})
