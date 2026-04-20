const WA='5491131098238';

// ============================================================
// PRECIOS: listPrice = precio de lista (+40%), salePrice = con 35% OFF, mayorPrice = mayorista
// ============================================================
const PRICE_MAP={
  1:{list:116550,sale:75758,mayor:87413},
  2:{list:116550,sale:75758,mayor:87413},
  3:{list:116550,sale:75758,mayor:87413},
  4:{list:116550,sale:75758,mayor:87413},
  5:{list:87885,sale:57125,mayor:65914},
  6:{list:87885,sale:57125,mayor:65914},
  7:{list:87885,sale:57125,mayor:65914},
  8:{list:112770,sale:73301,mayor:84578},
  9:{list:87360,sale:56784,mayor:65520},
  10:{list:100380,sale:65247,mayor:75285},
  11:{list:103467,sale:67254,mayor:77600},
  12:{list:80325,sale:52211,mayor:60244},
  13:{list:119070,sale:77396,mayor:89303},
  14:{list:96600,sale:62790,mayor:72450},
  15:{list:490000,sale:318500,mayor:367500},
};

const MAYORISTA_MIN=3;

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
    priceNote: '100ml',
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
// CARRITO
// ============================================================
var cart=[];

function fmt(n){return '$'+Math.round(n).toLocaleString('es-AR');}

function getPrice(p){
  var pm=PRICE_MAP[p.id];
  if(!pm)return{list:p.price,sale:p.price,mayor:p.price};
  return pm;
}

function getTotalQty(){
  return cart.reduce(function(a,i){return a+i.qty;},0);
}

function isMayorista(){
  return getTotalQty()>=MAYORISTA_MIN;
}

function getItemPrice(item){
  var pm=PRICE_MAP[item.id];
  if(!pm)return item.price;
  return isMayorista()?pm.mayor:pm.sale;
}

function addToCart(id){
  var p=PRODUCTS.filter(function(x){return x.id===id;})[0];
  if(!p)return;
  var existing=cart.filter(function(x){return x.id===id;})[0];
  if(existing){existing.qty++;}
  else{cart.push({id:p.id,name:p.name,brand:p.brand,price:p.price,imgKey:p.imgKey,qty:1});}
  updateCartUI();
  openCart();
}

function removeFromCart(id){
  cart=cart.filter(function(x){return x.id!==id;});
  updateCartUI();
}

function changeQty(id,delta){
  var item=cart.filter(function(x){return x.id===id;})[0];
  if(!item)return;
  item.qty+=delta;
  if(item.qty<=0)removeFromCart(id);
  else updateCartUI();
}

function updateCartUI(){
  var total=getTotalQty();
  var mayorista=isMayorista();

  // Count badge
  document.getElementById('cartCount').textContent=total;
  document.getElementById('cartCount').style.display=total>0?'flex':'none';

  // Empty state
  var empty=document.getElementById('cartEmpty');
  var summary=document.getElementById('cartSummary');
  var items=document.getElementById('cartItems');
  if(total===0){
    if(empty)empty.style.display='flex';
    if(summary)summary.style.display='none';
    return;
  }
  if(empty)empty.style.display='none';
  if(summary)summary.style.display='block';

  // Mayorista progress bar
  var pct=Math.min(100,Math.round(total/MAYORISTA_MIN*100));
  var bar=document.getElementById('mayoristaBar');
  var txt=document.getElementById('mayoristaTxt');
  if(bar)bar.style.width=pct+'%';
  if(txt){
    if(mayorista){
      txt.innerHTML='🎉 <strong>¡Precio mayorista activo!</strong> 25% de descuento aplicado';
      bar.style.background='var(--gold)';
    } else {
      var falta=MAYORISTA_MIN-total;
      txt.innerHTML='Agregá <strong>'+falta+' unidad'+(falta>1?'es':'')+' más</strong> para precio mayorista';
      bar.style.background='var(--purple-light)';
    }
  }

  // Render items
  var html='';
  cart.forEach(function(item){
    var pm=PRICE_MAP[item.id];
    var unitPrice=pm?(mayorista?pm.mayor:pm.sale):item.price;
    var listPrice=pm?pm.list:item.price;
    var imgSrc=item.imgKey?IMGS[item.imgKey]:null;
    var imgHtml=imgSrc
      ?'<img src="'+imgSrc+'" alt="'+item.name+'" onerror="this.style.display=\'none\'">'
      :'<div class="ci-img-placeholder">✦</div>';
    html+='<div class="cart-item">'
      +'<div class="ci-img">'+imgHtml+'</div>'
      +'<div class="ci-info">'
        +'<div class="ci-brand">'+item.brand+'</div>'
        +'<div class="ci-name">'+item.name+'</div>'
        +'<div class="ci-prices">'
          +'<span class="ci-list">'+fmt(listPrice*item.qty)+'</span>'
          +'<span class="ci-sale">'+fmt(unitPrice*item.qty)+'</span>'
        +'</div>'
        +'<div class="ci-qty">'
          +'<button onclick="changeQty('+item.id+',-1)">−</button>'
          +'<span>'+item.qty+'</span>'
          +'<button onclick="changeQty('+item.id+',1)">+</button>'
          +'<button class="ci-del" onclick="removeFromCart('+item.id+')">🗑</button>'
        +'</div>'
      +'</div>'
    +'</div>';
  });
  items.innerHTML=document.getElementById('cartEmpty').outerHTML+html;

  // Totals
  var subtotal=cart.reduce(function(a,item){
    var pm=PRICE_MAP[item.id];
    return a+(pm?pm.list:item.price)*item.qty;
  },0);
  var totalFinal=cart.reduce(function(a,item){
    return a+getItemPrice(item)*item.qty;
  },0);
  var descuento=subtotal-totalFinal;

  document.getElementById('cartSubtotal').textContent=fmt(subtotal);
  document.getElementById('cartTotal').textContent=fmt(totalFinal);

  var discRow=document.getElementById('discountRow');
  var mayRow=document.getElementById('mayoristaRow');
  if(mayorista){
    if(discRow)discRow.style.display='none';
    if(mayRow)mayRow.style.display='flex';
  } else {
    if(discRow){discRow.style.display='flex';document.getElementById('cartDiscount').textContent='-'+fmt(descuento);}
    if(mayRow)mayRow.style.display='none';
  }
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCartDrawer(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function toggleCart(){
  var drawer=document.getElementById('cartDrawer');
  if(drawer.classList.contains('open'))closeCartDrawer();
  else openCart();
}

function checkoutWA(){
  if(cart.length===0)return;
  var mayorista=isMayorista();
  var msg='Hola! Quiero hacer el siguiente pedido:\n\n';
  cart.forEach(function(item){
    var pm=PRICE_MAP[item.id];
    var unit=pm?(mayorista?pm.mayor:pm.sale):item.price;
    msg+='✦ '+item.name+' x'+item.qty+' — '+fmt(unit*item.qty)+'\n';
  });
  var total=cart.reduce(function(a,item){return a+getItemPrice(item)*item.qty;},0);
  msg+='\n'+(mayorista?'Precio mayorista aplicado':'Precio con 35% OFF aplicado');
  msg+='\nTOTAL: '+fmt(total);
  msg+='\n\nTienen stock disponible?';
  window.open('https://wa.me/5491131098238?text='+encodeURIComponent(msg),'_blank');
}

// ── Countdown to next Tuesday 23:59 ─────────────────────────────────────────
function getNextTuesday(){
  var now=new Date();
  var day=now.getDay();
  var diff=((2-day+7)%7)||7;
  var t=new Date(now);
  t.setDate(t.getDate()+diff);
  t.setHours(23,59,59,0);
  return t;
}
var countdownTarget=getNextTuesday();
function updateCountdown(){
  var now=new Date();
  var diff=countdownTarget-now;
  if(diff<=0){countdownTarget=getNextTuesday();diff=countdownTarget-new Date();}
  var h=Math.floor(diff/3600000);
  var m=Math.floor((diff%3600000)/60000);
  var s=Math.floor((diff%60000)/1000);
  var el=document.getElementById('countdownTimer');
  if(el)el.textContent=(h<10?'0':'')+h+':'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
}
setInterval(updateCountdown,1000);
updateCountdown();

// ============================================================
// PRODUCTS RENDER
// ============================================================
var curCat='todos',vis=8,filtered=[];

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

    // Prices
    var pm=PRICE_MAP[p.id];
    var priceH='';
    if(pm){
      priceH='<div class="price-list">'+fmt(pm.list)+'</div>'
            +'<div class="price-main">'+fmt(pm.sale)+'</div>'
            +'<div class="price-badge-off">35% OFF</div>';
    } else if(p.price){
      priceH='<div class="price-main">'+fmt(p.price)+'</div>';
      if(p.priceNote)priceH+='<div class="price-special">'+p.priceNote+'</div>';
    }

    var card=document.createElement('div');
    card.className='pcard';
    card.innerHTML=bdg
      +'<div class="pimg-wrap">'+imgH+'<div class="poverlay"><button class="obtn" onclick="openM('+p.id+')">Ver detalles</button></div></div>'
      +'<div class="pinfo">'
        +'<div class="pbrand">'+p.brand+'</div>'
        +'<div class="pname">'+p.name+'</div>'
        +'<div class="pnotes">'+p.notes.substring(0,120)+'...</div>'
        +'<div class="ptags">'+tagsH+'</div>'
        +'<div class="ppricing">'+priceH+'</div>'
        +'<button class="btn-add-cart" onclick="addToCart('+p.id+')">'
          +'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>'
          +' Agregar al carrito'
        +'</button>'
        +'<button class="btn-comprar" onclick="openM('+p.id+')" style="margin-top:8px;padding:9px;font-size:10px;">'
          +'<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
          +' Ver detalles'
        +'</button>'
      +'</div>';
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
  g('mBrand').textContent=p.brand+' \u00b7 '+(p.cat==='mujer'?'Para Ella':p.cat==='hombre'?'Para \u00c9l':'Unisex');
  g('mNotes').textContent=p.notes;
  if(g('mIdeal'))g('mIdeal').textContent=p.ideal||'';
  var mi=g('mImg');
  if(mi){if(p.imgKey){mi.src=IMGS[p.imgKey];mi.style.display='block';mi.onerror=function(){this.style.display='none';};}else{mi.style.display='none';}}
  var pm=PRICE_MAP[p.id];
  var mp=g('mPrice'),mt=g('mTransfer'),ms=g('mSpecial');
  if(mp){
    if(pm){mp.innerHTML=fmt(pm.sale)+' <span style="font-size:14px;text-decoration:line-through;color:var(--text-dim);font-weight:400">'+fmt(pm.list)+'</span>';}
    else if(p.price){mp.textContent=fmt(p.price);}
  }
  if(mt)mt.textContent='';
  if(ms)ms.textContent=p.priceNote||'';
  var wb=g('mWaBtn');
  if(wb){
    var msg='Hola! Quiero consultar: '+p.name+' ('+p.brand+'). \u00bfTienen stock?';
    wb.href='https://wa.me/5491131098238?text='+encodeURIComponent(msg);
  }
  g('modalOverlay').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeMO(e){if(e.target===document.getElementById('modalOverlay'))closeM();}
function closeM(){document.getElementById('modalOverlay').classList.remove('active');document.body.style.overflow='';}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();closeCartDrawer();}});

// ============================================================
// FORMULARIO MAYORISTA -> WhatsApp
// ============================================================
function submitMayorista(ev){
  ev.preventDefault();
  var g=function(id){return document.getElementById(id);};
  var nombre=(g('mayNombre').value||'').trim();
  var email=(g('mayEmail').value||'').trim();
  var tel=(g('mayTel').value||'').trim();
  var msg=(g('mayMsg').value||'').trim();
  // Validación mínima
  if(!nombre||!email||!tel){
    alert('Por favor, completá nombre, email y teléfono.');
    return false;
  }
  var emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!emailOk){
    alert('Revisá el correo electrónico ingresado.');
    g('mayEmail').focus();
    return false;
  }
  var txt='*CONSULTA MAYORISTA — ArPerfum*\n\n';
  txt+='*Nombre/Negocio:* '+nombre+'\n';
  txt+='*Email:* '+email+'\n';
  txt+='*Teléfono:* '+tel+'\n';
  if(msg)txt+='\n*Mensaje:*\n'+msg+'\n';
  txt+='\nHola! Me gustaría recibir la lista de precios mayoristas. ¡Gracias!';
  var url='https://wa.me/5491131098238?text='+encodeURIComponent(txt);
  window.open(url,'_blank');
  return false;
}

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
updateCartUI();
