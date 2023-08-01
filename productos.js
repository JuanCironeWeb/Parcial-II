'use strict'

const productos = [ 
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



let main = document.querySelector('main') ; 
main.style.flexDirection = 'column';
let ventanaModal = document.createElement('div');
main.append(ventanaModal);
ventanaModal.setAttribute('class', 'VentanaModal')
let carrito = document.getElementById("Carrito") ; 
ventanaModal.style.display = 'none';  

/* Categorias */
let CrearDivCategorias = document.createElement('div'); 
main.prepend(CrearDivCategorias); 

CrearDivCategorias.setAttribute('id', 'DivCategorias');
CrearDivCategorias.style.display = 'block'; 
CrearDivCategorias.style.width = '100vw'; 
CrearDivCategorias.style.padding = '3%'; 

let BotonCats = document.createElement('button'); 
let textoBotonCats = document.createTextNode('Todos los productos');
BotonCats.append(textoBotonCats);
BotonCats.setAttribute('onclick', 'mostrarProductos2()');

let BotonCatKit = document.createElement('button'); 
let textoBotonCatKit = document.createTextNode('Kits');
BotonCatKit.append(textoBotonCatKit);
BotonCatKit.setAttribute('onclick', 'mostrarCatKit()')

let BotonCatMaceta = document.createElement('button'); 
let textoBotonCatMaceta = document.createTextNode('Macetas');
BotonCatMaceta.append(textoBotonCatMaceta);
BotonCatMaceta.setAttribute('onclick', 'mostrarCatMacetas()')

let BotonCatLuces = document.createElement('button'); 
let textoBotonCatLuces = document.createTextNode('Luces');
BotonCatLuces.append(textoBotonCatLuces);
BotonCatLuces.setAttribute('onclick', 'mostrarCatLuces()')

CrearDivCategorias.append(BotonCats, BotonCatKit, BotonCatMaceta, BotonCatLuces);

let VentanaModalX = document.createElement('div'); 
var PrecioTotal = document.createElement('div') ;
let CreardivBotonVaciar = document.createElement('div')
let CrearBotonVaciar = document.createElement('button'); 
let TextoBotonVaciar = document.createTextNode('vaciar carrito');

ventanaModal.appendChild(CreardivBotonVaciar); 
CreardivBotonVaciar.appendChild(CrearBotonVaciar);
CrearBotonVaciar.prepend(TextoBotonVaciar);
CreardivBotonVaciar.setAttribute('id', 'DivBoton')
CrearBotonVaciar.setAttribute('class', 'BotonVaciar');
CrearBotonVaciar.setAttribute('onclick', 'VaciarCarrito()');

let CrearCajaProds = document.createElement('div')
    CrearCajaProds.setAttribute('id', 'CajaCarrito');
    ventanaModal.appendChild(CrearCajaProds);
let CajaCarrito = document.getElementById('CajaCarrito');


ventanaModal.appendChild(PrecioTotal);
PrecioTotal.setAttribute('id','total');
PrecioTotal.setAttribute('class','PrecioTotal');
PrecioTotal.innerHTML =`Total:$${totalCompra}`;




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

let BotonVaciar = document.getElementsByClassName('BotonVaciar'); 
console.log(BotonVaciar);





function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    productos.forEach((productos, indice) => {
    const productoHTML=document.createElement('div');
    productoHTML.setAttribute('class','card');
    productoHTML.innerHTML=`<ul>
    <li class='itemTitle'> ${productos.titulo}</li>
    <li class='itemImg'><img src="${productos.img}" alt="${productos.titulo}"></li>
    <li class='itemDesc'>${productos.descripcion}</li> 
    <li class='itemPrice' >$${productos.precio}</li>
    <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
    </ul>
    `;
    contenedorProductos.appendChild(productoHTML);
    })
}

function agregarAlCarrito(indice){
    const productoSeleccionado = productos[indice];
    chango.push(productoSeleccionado);
    totalCompra += productoSeleccionado.precio;
    actualizarCarrito();
    console.log(chango);
    chango = []; 
}



function actualizarCarrito(){
    chango.forEach((producto) => {
        const itemCarrito=document.createElement('div');
        itemCarrito.setAttribute('class','card');
        itemCarrito.setAttribute('class','ProductoCarrito');
        itemCarrito.innerHTML= `<ul>
        <li class='itemTitle'> ${producto.titulo}</li>
        <li class='itemImg'><img src="${producto.img}" alt="${producto.titulo}"></li>
        <li class='itemPrice' >$${producto.precio}</li></ul>`;
        CajaCarrito.appendChild(itemCarrito);
    });
    PrecioTotal.innerHTML =`Total:$${totalCompra}`;
    }

let itemCarrito = CajaCarrito.children;
function VaciarCarrito(){ 
        CajaCarrito.remove();
    let CajaCarrito = document.createElement('div')
    ventanaModal.appendChild(create);
    CajaCarrito.setAttribute('id', 'CajaCarrito')
}            
        
    

mostrarProductos();

let cardProd = document.getElementById('productos').children;
let ProdElegido;
console.info(cardProd);

for(let x of cardProd){ 
    x.addEventListener('mouseover',(parametro) => { 
        ProdElegido = parametro.target;    
        console.info(ProdElegido);
        ProdElegido.style.backgroundColor = 'red';
        ProdElegido.style.transform = 'scale(1.07)';
    })
}

for(let x of cardProd){ 
    x.addEventListener('mouseout',(parametro) => { 
        ProdElegido = parametro.target;    
        ProdElegido.style.backgroundColor = '#dddddd';
        ProdElegido.style.transform = 'scale(1)';
    })
}


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

let DivItemsKit = document.createElement('div')
    DivItemsKit.setAttribute('id', 'ItemsKit');
    DivItemsKit.style.display = 'flex';
    main.append(DivItemsKit); 


    function mostrarCatKit(){
        let contenedorProductos = document.getElementById('productos'); 
        kit.forEach((productos, indice) => {
            const productoHTML=document.createElement('div');
            productoHTML.setAttribute('class','card');
            productoHTML.innerHTML=`<ul>
            <li class='itemTitle'> ${productos.titulo}</li>
            <li class='itemImg'><img src="${productos.img}" alt="${productos.titulo}"></li>
            <li class='itemDesc'>${productos.descripcion}</li> 
            <li class='itemPrice' >$${productos.precio}</li>
            <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
            </ul>
            `;
            contenedorProductos.appendChild(productoHTML);
            })    
    }
  
    let DivItemsMacetas = document.createElement('div')
    DivItemsMacetas.setAttribute('id', 'ItemsMacetas');
    DivItemsMacetas.style.display = 'flex';
    main.append(DivItemsMacetas); 

    function mostrarCatMacetas(){
        let contenedorProductos = document.getElementById('ItemsMacetas').innerHTML = '';
        kit.forEach((productos, indice) => {
            const productoHTML=document.createElement('div');
            productoHTML.setAttribute('class','card');
            productoHTML.innerHTML=`<ul>
            <li class='itemTitle'> ${productos.titulo}</li>
            <li class='itemImg'><img src="${productos.img}" alt="${productos.titulo}"></li>
            <li class='itemDesc'>${productos.descripcion}</li> 
            <li class='itemPrice' >$${productos.precio}</li>
            <li class='agregar' onclick='agregarAlCarrito(${indice})'>Agregar al carrito</li>
            </ul>
            `;
            contenedorProductos.appendChild(productoHTML);
            })    
    }