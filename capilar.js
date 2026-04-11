const WA='5491131098238';

// ============================================================
// IMAGENES - carpeta Imagenes/Otros Productos/
// ============================================================
const IMGS={
  logo:'Imagenes/Logo.png',
  p16:'Imagenes/Otros Productos/Kit Karseell MASC. 500ml. + OIL 50ml..jpeg',
  p17:'Imagenes/Otros Productos/Capsula masc. de 12ml. Caja x 8 uni. Karseell.jpeg',
  p18:'Imagenes/Otros Productos/Travel-set.jpeg',
  p19:'Imagenes/Otros Productos/Protector Termico Spray Karseell.jpeg',
  p20:'Imagenes/Otros Productos/Crema-mascarilla.jpeg',
  p21:'Imagenes/Otros Productos/OIL 50ml. Serum Karseell.jpeg',
  p22:'Imagenes/Otros Productos/Shampo-combo.jpeg',
  p23:'Imagenes/Otros Productos/Shampo y Acondicionador de 500ml Combo Karseell.jpeg',
};

function fmt(n){return '$'+n.toLocaleString('es-AR');}
function fmtT(n){var d=Math.round(n*0.8);return 'Transferencia: '+fmt(d)+' (ahorr\u00e1s '+fmt(n-d)+')';}

// ============================================================
// PRODUCTOS KARSEELL
// Para agregar: copia un bloque, cambia id y datos
// ============================================================
const PRODUCTS=[

  // --- Producto 16: Kit Karseell Masc. + Oil ---
  {
    id: 16,
    name: 'Kit Karseell Masc. 500ml + Oil 50ml',
    brand: 'Karseell',
    cat: 'todos',
    price: 49499,
    notes: 'D\u00fao din\u00e1mico para un sellado de cut\u00edculas y nutrici\u00f3n extrema en cabellos maltratados.',
    ideal: 'Ideal para cabellos da\u00f1ados que necesitan recuperaci\u00f3n profunda.',
    tags: ['Nutricion', 'Kit'],
    badge: 'Nuevo',
    imgKey: 'p16',
  },

  // --- Producto 17: Capsula Masc. ---
  {
    id: 17,
    name: 'C\u00e1psula Mascarilla 12ml \u2014 Caja x 8 uni.',
    brand: 'Karseell',
    cat: 'todos',
    price: 33000,
    notes: 'Dosis concentradas de nutrici\u00f3n para una restauraci\u00f3n profunda y pr\u00e1ctica del cabello.',
    ideal: 'Perfecto para llevar y usar en cualquier momento.',
    tags: ['Nutricion', 'Monodosis'],
    badge: null,
    imgKey: 'p17',
  },

  // --- Producto 18: Travel Set ---
  {
    id: 18,
    name: 'Travel Set Crema 100ml + Shamp\u00fa + Acondicionador',
    brand: 'Karseell',
    cat: 'todos',
    price: 37000,
    notes: 'Kit de viaje perfecto para no descuidar tu rutina de nutrici\u00f3n capilar est\u00e9s donde est\u00e9s.',
    ideal: 'Para viajeros que no quieren resignar su rutina capilar.',
    tags: ['Kit', 'Viaje'],
    badge: null,
    imgKey: 'p18',
  },

  // --- Producto 19: Protector Termico ---
  {
    id: 19,
    name: 'Protector T\u00e9rmico Spray Karseell',
    brand: 'Karseell',
    cat: 'todos',
    price: 37999,
    notes: 'Escudo protector contra el calor de secadores y planchitas que previene el quiebre y la sequedad.',
    ideal: 'Indispensable antes de usar calor en el cabello.',
    tags: ['Protector', 'Calor'],
    badge: null,
    imgKey: 'p19',
  },

  // --- Producto 20: Crema Mascarilla 500ml ---
  {
    id: 20,
    name: 'Crema Mascarilla 500ml',
    brand: 'Karseell',
    cat: 'todos',
    price: 34999,
    notes: 'F\u00f3rmula Italiana: Tratamiento de reparaci\u00f3n intensiva con col\u00e1geno que devuelve el brillo y la suavidad.',
    ideal: 'Para cabellos opacos y da\u00f1ados que necesitan recuperar vida.',
    tags: ['Mascarilla', 'Colageno'],
    badge: null,
    imgKey: 'p20',
  },

  // --- Producto 21: Oil Serum 50ml ---
  {
    id: 21,
    name: 'Oil 50ml \u2014 Serum Karseell',
    brand: 'Karseell',
    cat: 'todos',
    price: 33000,
    notes: 'Aceite esencial que aporta suavidad, elimina el frizz y protege la fibra capilar sin dejar efecto graso.',
    ideal: 'Para domar el frizz y dar brillo sin engrasar.',
    tags: ['Serum', 'Antifrizz'],
    badge: null,
    imgKey: 'p21',
  },

  // --- Producto 22: Sachet x24 ---
  {
    id: 22,
    name: 'Sachet Shamp\u00fa + Acondicionador 10ml \u2014 Caja x 24',
    brand: 'Karseell',
    cat: 'todos',
    price: 47000,
    notes: 'Pr\u00e1ctico formato monodosis para llevar o para un primer uso, ideal para recuperar la hidrataci\u00f3n.',
    ideal: 'Perfecto para probar o para llevar de viaje.',
    tags: ['Monodosis', 'Hidratacion'],
    badge: null,
    imgKey: 'p22',
  },

  // --- Producto 23: Shampoo + Acondicionador 500ml ---
  {
    id: 23,
    name: 'Shamp\u00fa + Acondicionador 500ml \u2014 Combo',
    brand: 'Karseell',
    cat: 'todos',
    price: 47000,
    notes: 'Formato familiar de alta eficiencia para un cuidado diario con resultados de sal\u00f3n.',
    ideal: 'Para toda la familia. Uso diario con resultados profesionales.',
    tags: ['Combo', 'Familiar'],
    badge: null,
    imgKey: 'p23',
  },

];

let vis=8,filtered=[];

function waLink(p){
  var pt=p.price?fmt(p.price):'A consultar';
  return 'https://wa.me/'+WA+'?text='+encodeURIComponent('Hola! Quiero: '+p.name+' ('+p.brand+') Precio: '+pt+'. Tienen stock?');
}

var wasvg='<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function renderProducts(){
  var grid=document.getElementById('pgrid');
  if(!grid)return;
  grid.innerHTML='';
  filtered.slice(0,vis).forEach(function(p){
    var imgSrc=p.imgKey?IMGS[p.imgKey]:null;
    var bdg='';
    if(p.badge){var cls=p.badge==='Nuevo'?'purple':'gold';bdg='<div class="pbadge '+cls+'">'+p.badge+'</div>';}
    var imgH=imgSrc
      ?('<img src="'+imgSrc+'" alt="'+p.name+'" loading="lazy" onerror="this.style.display=\'none\'">'+'<div class="pimg-placeholder" style="display:none">&#9999;</div>')
      :'<div class="pimg-placeholder">&#9999;</div>';
    var tagsH=p.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('');
    var priceH='<div class="price-main">'+fmt(p.price)+'</div>'
               +'<div class="price-transfer">'+fmtT(p.price)+'</div>';
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

function filterProducts(){vis=8;applyF();}
function applyF(){
  var q=document.getElementById('searchInput')?document.getElementById('searchInput').value.toLowerCase():'';
  filtered=PRODUCTS.filter(function(p){
    return !q||p.name.toLowerCase().indexOf(q)>-1||p.notes.toLowerCase().indexOf(q)>-1;
  });
  renderProducts();
}
function loadMore(){vis+=8;renderProducts();}

function openM(id){
  var p=PRODUCTS.filter(function(x){return x.id===id;})[0];if(!p)return;
  var g=function(x){return document.getElementById(x);};
  g('mTitle').textContent=p.name;
  g('mBrand').textContent=p.brand+' \u2014 Cuidado Capilar';
  g('mNotes').textContent=p.notes;
  if(g('mIdeal'))g('mIdeal').textContent=p.ideal||'';
  var mi=g('mImg');
  if(mi){if(p.imgKey){mi.src=IMGS[p.imgKey];mi.style.display='block';mi.onerror=function(){this.style.display='none';};}else{mi.style.display='none';}}
  var mp=g('mPrice'),mt=g('mTransfer'),ms=g('mSpecial');
  if(mp){mp.textContent=fmt(p.price);if(mt)mt.textContent=fmtT(p.price);if(ms)ms.textContent='';}
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