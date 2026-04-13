// ============================================================
// NUMERO DE WHATSAPP DEL NEGOCIO
// Cambia solo el numero, sin espacios ni simbolos
// ============================================================
const WA='5491131098238';


// ============================================================
// SECCION 1: IMAGENES DE CADA PRODUCTO
// ------------------------------------------------------------
// Cada linea conecta un codigo interno (p1, p2, etc.)
// con el archivo de imagen real en tu carpeta Imagenes/
//
// COMO EDITAR:
//   Cambia solo la parte despues de los dos puntos :
//   Ejemplo: p1:'Imagenes/MiPerfume.jpeg'
//
// IMPORTANTE: el nombre debe coincidir EXACTAMENTE con
// el archivo en la carpeta Imagenes/ (mayusculas incluidas)
// ============================================================
const IMGS={
  logo:'Imagenes/Logo.png',
  p1:'Imagenes/Lattafa Yara Rosa Elixir.jpeg',
  p2:'Imagenes/Lattafa Yara Rosa.jpeg',
  p3:'Imagenes/Lattafa Yara Candy.jpeg',
  p4:'Imagenes/Lattafa Yara Tous.jpeg',
  p5:'Imagenes/Lattafa Khamrah (Clásico).jpeg',
  p6:'Imagenes/Lattafa Khamrah Dukhan.jpeg',
  p7:'Imagenes/Lattafa Khamrah Qahwa.jpeg',
  p8:'Imagenes/Afnan 9pm.jpeg',
  p9:'Imagenes/Al Haramain Amber Oud Gold Edition 60ml.jpeg',
  p10:'Imagenes/Armaf Club De Nuit Intense Man.jpeg',
  p11:'Imagenes/French Avenue Liquid Brun.jpeg',
  p12:'Imagenes/Lattafa Eclaire.jpeg',
  p13:'Imagenes/Armaf Odyssey Dubai Chocolat.jpeg',
  p14:'Imagenes/Rasasi Hawas Pink For Her.jpeg',
  p15:'Imagenes/Xerjoff Erba Pura (Clásico).jpeg',
};

function fmt(n){return '$'+n.toLocaleString('es-AR');}


// ============================================================
// SECCION 2: LISTA DE PRODUCTOS
// ------------------------------------------------------------
// Cada bloque entre { } es un producto de la tienda.
// Podes editar, agregar o eliminar productos libremente.
//
// CAMPOS DE CADA PRODUCTO:
//
//   id       -> numero unico, no repetir (1, 2, 3...)
//   name     -> nombre que aparece en la card
//   brand    -> marca (aparece en letra chica arriba)
//   cat      -> categoria del filtro:
//               'mujer'  = aparece en 'Para Ella'
//               'hombre' = aparece en 'Para El'
//               'unisex' = aparece en 'Unisex'
//   price    -> precio en numeros, SIN puntos ni $
//               Ejemplo: 83250  (se muestra como $83.250)
//
//   price2   -> (OPCIONAL) segundo precio si hay dos tallas
//   priceNote-> (OPCIONAL) etiqueta del primer precio: '60ml'
//   price2Note>(OPCIONAL) etiqueta del segundo precio: '100ml'
//
//   notes    -> descripcion de notas olfativas
//   ideal    -> para quien es ideal (aparece en el modal)
//   tags     -> etiquetas de la card: ['Tag1','Tag2','Tag3']
//
//   badge    -> etiqueta encima de la imagen:
//               'Nuevo'     = morado
//               'Destacado' = dorado
//               'Oferta'    = borde dorado
//               null        = sin etiqueta
//
//   imgKey   -> codigo de imagen de la SECCION 1 arriba
//               Ejemplo: 'p1' usa la ruta definida en IMGS.p1
//
// PARA AGREGAR UN PRODUCTO NUEVO:
//   1. Agrega la imagen en IMGS arriba (p16, p17, etc.)
//   2. Copia un bloque existente
//   3. Cambia el id y los datos
//   4. Pegalo antes del corchete final ];
// ============================================================
const PRODUCTS=[

  // --- Producto 1: Yara Elixir ---
  {
    id: 1,
    name: 'Yara Rosa Elixir',
    brand: 'Lattafa',
    cat: 'mujer',       // 'mujer' | 'hombre' | 'unisex'
    price: 83250,
    notes: 'Frutal y dulce, este perfume es una explosión de alegría. Sus notas de salida de frutas tropicales y vainilla lo hacen ideal para el uso diario.',
    ideal: 'Salidas nocturnas. Dulce y elegante.',
    tags: ['Frutal', 'Floral', 'Nocturno', 'Regalo'],
    badge: 'Nuevo',      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p1',          // codigo de imagen de SECCION 1
  },

  // --- Producto 2: Yara Rosa ---
  {
    id: 2,
    name: 'Yara Rosa',
    brand: 'Lattafa',
    cat: 'mujer',       // 'mujer' | 'hombre' | 'unisex'
    price: 83250,
    notes: 'Orquídea, heliotropo, mandarina, vainilla y sándal. Una toma fresca de Yara, destacando los cítricos y la limpieza.',
    ideal: 'Aromas dulces y suaves todo el día.',
    tags: ['Dulce', 'Floral', 'Diario', 'Regalo'],
    badge: 'Nuevo',      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p2',          // codigo de imagen de SECCION 1
  },

  // --- Producto 3: Yara Candy ---
  {
    id: 3,
    name: 'Yara Candy',
    brand: 'Lattafa',
    cat: 'mujer',       // 'mujer' | 'hombre' | 'unisex'
    price: 83250,
    notes: 'Grosellas, mandarina, caramelo de frutilla, gardenia y vainilla. Sofisticado con toques florales amaderados.',
    ideal: 'Frutal gourmand dulce y adictiva. Ideal para regalar.',
    tags: ['Dulce', 'Gourmand', 'Frutal', 'Regalo'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p3',          // codigo de imagen de SECCION 1
  },

  // --- Producto 4: Yara Tous ---
  {
    id: 4,
    name: 'Yara Tous',
    brand: 'Lattafa',
    cat: 'mujer',       // 'mujer' | 'hombre' | 'unisex'
    price: 83250,
    notes: 'Mango, coco, maracuyá, jazmín y vainilla. Una variante cálida y oriental, donde el ámbar toma el protagonismo.',
    ideal: 'Frutal cremosa con estela fresca y radiante.',
    tags: ['Tropical', 'Frutal', 'Verano'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p4',          // codigo de imagen de SECCION 1
  },

  // --- Producto 5: Khamrah Clásico ---
  {
    id: 5,
    name: 'Khamrah Clásico',
    brand: 'Lattafa',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 62775,
    notes: 'Canela, nuez moscada, bergamota, dátiles y vainilla. Un aroma intenso y licoroso con canela, dátiles y praliné.',
    ideal: 'Presencia imponente. Larga duración.',
    tags: ['Oriental', 'Especiado', 'Nocturno', 'Lujo'],
    badge: 'Destacado',      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p5',          // codigo de imagen de SECCION 1
  },

  // --- Producto 6: Khamrah Dukhan ---
  {
    id: 6,
    name: 'Khamrah Dukhan',
    brand: 'Lattafa',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 62775,
    notes: 'Canela, cardamomo, dátiles, incienso y oud. La versión "ahumada" de Khamrah, donde el ámbar se mezcla con notas de cuero y tabaco.',
    ideal: 'Denso y ahumado. Elegante para la noche.',
    tags: ['Ahumado', 'Oriental', 'Nocturno'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p6',          // codigo de imagen de SECCION 1
  },

  // --- Producto 7: Khamrah Qahwa ---
  {
    id: 7,
    name: 'Khamrah Qahwa',
    brand: 'Lattafa',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 62775,
    notes: 'Cardamomo, jengibre, café tostado y vainilla. Khamrah Qahwa incorpora una nota de café arábica recién molido a la mezcla dulce original',
    ideal: 'Carácter y toque energizante del café.',
    tags: ['Cafe', 'Especiado', 'Gourmand'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p7',          // codigo de imagen de SECCION 1
  },

  // --- Producto 8: 9PM ---
  {
    id: 8,
    name: '9PM',
    brand: 'Afnan',
    cat: 'hombre',       // 'mujer' | 'hombre' | 'unisex'
    price: 73500,      // precio 60ml
    priceNote: '60ml',
    price2: 80550,     // precio 100ml
    price2Note: '100ml',
    notes: 'Manzana, canela, lavanda, flor de azahar y vainilla. Un aroma magnético y seductor con manzana, canela y lavanda.',
    ideal: 'Gran proyección para salidas nocturnas.',
    tags: ['Frutal', 'Especiado', 'Nocturno'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p8',          // codigo de imagen de SECCION 1
  },

  // --- Producto 9: Amber Oud Gold Edition ---
  {
    id: 9,
    name: 'Amber Oud Gold Edition',
    brand: 'Al Haramain',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 62400,
    notes: 'Bergamota, melón, piña, ámbar y almizcle. La definición del lujo. Esta fragancia combina la riqueza del oud con la dulzura del ámbar y las frutas.',
    ideal: 'Presencia imponente. Aroma dulce-frutal a gran distancia.',
    tags: ['Frutal', 'Oud', 'Lujo'],
    badge: 'Destacado',      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p9',          // codigo de imagen de SECCION 1
  },

  // --- Producto 10: Club De Nuit Intense Man ---
  {
    id: 10,
    name: 'Club De Nuit Intense Man',
    brand: 'Armaf',
    cat: 'hombre',       // 'mujer' | 'hombre' | 'unisex'
    price: 71700,
    notes: 'Limón, piña, bergamota, abedul y almizcle. Un clásico moderno, famoso por su apertura cítrica de limón y piña que da paso a un corazón de abedul ahumado.',
    ideal: 'Impresión fuerte para la oficina o salidas nocturnas.',
    tags: ['Citrico', 'Amaderado', 'Intenso'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p10',          // codigo de imagen de SECCION 1
  },

  // --- Producto 11: Liquid Brun ---
  {
    id: 11,
    name: 'Liquid Brun',
    brand: 'French Avenue',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 73905,
    notes: 'Canela, cardamomo, ron, tabaco y vainilla de Bourbon. Una fragancia envolvente y cálida, donde el ámbar se funde con notas amaderadas de sándalo y cedro. Este perfume evoca la sofisticación de una tarde de otoño.',
    ideal: 'Fragancia nocturna seductora que proyecta lujo.',
    tags: ['Amaderado', 'Especiado', 'Lujo'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p11',          // codigo de imagen de SECCION 1
  },

  // --- Producto 12: Eclaire ---
  {
    id: 12,
    name: 'Eclaire',
    brand: 'Lattafa',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 57375,
    notes: 'Caramelo, leche, flores blancas, miel y vainilla. Dulce gourmet con vainilla y caramelo. Rinde homenaje a la repostería francesa.',
    ideal: 'Ultra dulce y acogedor como una repostería fina.',
    tags: ['Gourmand', 'Dulce', 'Vainilla'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p12',          // codigo de imagen de SECCION 1
  },

  // --- Producto 13: Odyssey Dubai Chocolat ---
  {
    id: 13,
    name: 'Odyssey Dubai Chocolat',
    brand: 'Armaf',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 85050,
    notes: 'Chocolate oscuro, cacao amargo, especias y sándalo. Tentador gourmet con chocolate belga y especias.',
    ideal: 'Chocolate maduro y elegante para eventos nocturnos.',
    tags: ['Chocolate', 'Gourmand', 'Nocturno'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p13',          // codigo de imagen de SECCION 1
  },

  // --- Producto 14: Hawas Pink For Her ---
  {
    id: 14,
    name: 'Hawas Pink For Her',
    brand: 'Rasasi',
    cat: 'mujer',       // 'mujer' | 'hombre' | 'unisex'
    price: 69000,
    notes: 'Manzana, pomelo, granada, jazmín e iris. La edición Pink de Hawas es una vibrante y alegre fragancia frutal-floral, perfecta para el día. Sus notas de salida de manzana y lichi dan paso a un corazón de rosa y jazmín.',
    ideal: 'Femenino con presencia y toque chic.',
    tags: ['Floral', 'Frutal', 'Elegante'],
    badge: null,      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p14',          // codigo de imagen de SECCION 1
  },

  // --- Producto 15: Erba Pura Clasico ---
  {
    id: 15,
    name: 'Erba Pura Clasico',
    brand: 'Xerjoff',
    cat: 'unisex',       // 'mujer' | 'hombre' | 'unisex'
    price: 350000,
    priceNote: 'Por pedido - 50% de sena',
    notes: 'Naranja, limón, bergamota, frutas mediterráneas y almizcle.  Dulce y jugosa, Erba Pura es una vibrante explosión de frutas cítricas y mediterráneas. Notas de naranja, limón y bergamota se mezclan con frutas dulces sobre un fondo de ámbar y vainilla.',
    ideal: 'Proyección bestial. Aroma frutal refinado todo el año.',
    tags: ['Citrico', 'Frutal', 'Lujo', 'Disenador'],
    badge: 'Disenador',      // 'Nuevo' | 'Destacado' | 'Oferta' | null
    imgKey: 'p15',          // codigo de imagen de SECCION 1
  },



  // PARA AGREGAR UN PRODUCTO NUEVO, COPIA ESTE BLOQUE:
  // {
  //   id: 16,
  //   name: 'Nombre del perfume',
  //   brand: 'Marca',
  //   cat: 'unisex',
  //   price: 75000,
  //   notes: 'Descripcion de las notas olfativas...',
  //   ideal: 'Para quien es ideal este perfume...',
  //   tags: ['Tag1','Tag2'],
  //   badge: null,
  //   imgKey: 'p16',
  // },

];

// ============================================================
// NO TOCAR NADA DE AQUÍ PARA ABAJO
// Es el motor que genera las cards automáticamente
// ============================================================

let curCat='todos',vis=8,filtered=[];

function waLink(p){
  var pt=p.price?fmt(p.price):'A consultar';
  if(p.price2)pt+=' / '+fmt(p.price2);
  return 'https://wa.me/'+WA+'?text='+encodeURIComponent('Hola! Quiero: '+p.name+' ('+p.brand+') Precio: '+pt+'. Tienen stock?');
}

var wasvg='<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function renderProducts(){
  var grid=document.getElementById('pgrid');
  if(!grid)return;
  grid.innerHTML='';
  filtered.slice(0,vis).forEach(function(p){
    var imgSrc=p.imgKey?IMGS[p.imgKey]:null;
    var em=p.cat==='mujer'?'&#127800;':p.cat==='hombre'?'&#127761;':'&#10022;';
    var bdg='';
    if(p.badge){var cls=p.badge==='Nuevo'?'purple':p.badge==='Destacado'?'gold':'outline';bdg='<div class="pbadge '+cls+'">'+p.badge+'</div>';}
    var imgH=imgSrc
      ?('<img src="'+imgSrc+'" alt="'+p.name+'" loading="lazy" onerror="this.style.display=\'none\'">'+'<div class="pimg-placeholder" style="display:none">'+em+'</div>')
      :'<div class="pimg-placeholder">'+em+'</div>';
    var tagsH=p.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('');
    var priceH='';
    if(p.price2){
      priceH='<div style="font-size:13px;color:var(--text-dim);margin-bottom:4px">'+p.priceNote+': <span style="color:var(--gold);font-size:18px;font-weight:600">'+fmt(p.price)+'</span></div>'
             +'<div style="font-size:13px;color:var(--text-dim)">'+p.price2Note+': <span style="color:var(--gold);font-size:18px;font-weight:600">'+fmt(p.price2)+'</span></div>';
    } else if(p.price){
      priceH='<div class="price-main">'+fmt(p.price)+'</div>';
      priceH+=p.priceNote?('<div class="price-special">'+p.priceNote+'</div>'):'';
    }
    var card=document.createElement('div');
    card.className='pcard';
    card.innerHTML=bdg
      +'<div class="pimg-wrap">'+imgH+'<div class="poverlay"><button class="obtn" onclick="openM('+p.id+')">Ver detalles</button></div></div>'
      +'<div class="pinfo"><div class="pbrand">'+p.brand+'</div><div class="pname">'+p.name+'</div>'
      +'<div class="pnotes">'+p.notes.substring(0,160)+'...</div>'
      +'<div class="ptags">'+tagsH+'</div><div class="ppricing">'+priceH+'</div>'
      +'<button class="btn-comprar" onclick="openM('+p.id+')">'+wasvg+' Comprar por WhatsApp</button></div>';
    grid.appendChild(card);
  });
  var lb=document.getElementById('loadMoreBtn');
  if(lb)lb.style.display=vis>=filtered.length?'none':'inline-flex';
}

function filterCat(cat,btn){
  curCat=cat;vis=8;
  document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');applyF();
}
function filterProducts(){vis=8;applyF();}
function applyF(){
  var q=document.getElementById('searchInput')?document.getElementById('searchInput').value.toLowerCase():'';
  filtered=PRODUCTS.filter(function(p){
    var mc=curCat==='todos'||p.cat===curCat||(curCat==='regalo'&&p.tags.indexOf('Regalo')>-1);
    var mq=!q||p.name.toLowerCase().indexOf(q)>-1||p.brand.toLowerCase().indexOf(q)>-1||p.notes.toLowerCase().indexOf(q)>-1;
    return mc&&mq;
  });
  renderProducts();
}
function loadMore(){vis+=8;renderProducts();}

function openM(id){
  var p=PRODUCTS.filter(function(x){return x.id===id;})[0];if(!p)return;
  var g=function(x){return document.getElementById(x);};
  g('mTitle').textContent=p.name;
  g('mBrand').textContent=p.brand+' - '+(p.cat==='mujer'?'Para Ella':p.cat==='hombre'?'Para El':'Unisex');
  g('mNotes').textContent=p.notes;
  if(g('mIdeal'))g('mIdeal').textContent=p.ideal||'';
  var mi=g('mImg');
  if(mi){if(p.imgKey){mi.src=IMGS[p.imgKey];mi.style.display='block';mi.onerror=function(){this.style.display='none';};}else{mi.style.display='none';}}
  var mp=g('mPrice'),mt=g('mTransfer'),ms=g('mSpecial');
  if(mp){
    if(p.price2){mp.innerHTML=fmt(p.price)+' / '+fmt(p.price2);if(mt)mt.textContent='Transferencia desde '+fmt(Math.round(p.price*0.8));if(ms)ms.textContent='';}
    else if(p.price){mp.textContent=fmt(p.price);if(mt)mt.textContent='';if(ms)ms.textContent=p.priceNote||'';}
  }
  var wb=g('mWaBtn');if(wb)wb.href=waLink(p);
  g('modalOverlay').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeMO(e){if(e.target===document.getElementById('modalOverlay'))closeM();}
function closeM(){document.getElementById('modalOverlay').classList.remove('active');document.body.style.overflow='';}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});

(function(){
  var c=document.getElementById('particles');if(!c)return;
  for(var i=0;i<20;i++){
    var p=document.createElement('div');p.className='particle';
    var s=1+Math.random()*2.5;
    p.style.cssText='left:'+Math.random()*100+'%;width:'+s+'px;height:'+s+'px;background:'+(Math.random()>.5?'#C9A84C':'#7B3FA0')+';animation-duration:'+(9+Math.random()*12)+'s;animation-delay:'+(Math.random()*10)+'s;';
    c.appendChild(p);
  }
})();

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',applyF);}else{applyF();}