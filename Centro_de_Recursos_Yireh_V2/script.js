/* CONFIGURACIÓN: reemplaza las rutas vacías al añadir recursos oficiales. */
const CONFIG = {
  emailAsistencia: 'jcauichpaniagua@gmail.com',
  logos: [
    {nombre:'Corporativo Yireh',descripcion:'Identidad institucional del corporativo',formatos:'PNG · SVG',imagen:'recursos/logos/corporativo-yireh.png',archivos:[{tipo:'PNG',ruta:'recursos/logos/corporativo-yireh.png'},{tipo:'SVG',ruta:'recursos/logos/corporativo-yireh.svg'}]},
    {nombre:'Farmacias Yireh',descripcion:'Identidad de las farmacias',formatos:'PNG · SVG',imagen:'recursos/logos/farmacias-yireh.png',archivos:[{tipo:'PNG',ruta:'recursos/logos/farmacias-yireh.png'},{tipo:'SVG',ruta:'recursos/logos/farmacias-yireh.svg'}]},
    {nombre:'CEDISMED',descripcion:'Centro de distribución de medicamentos',formatos:'PNG · SVG',imagen:'recursos/logos/cedismed.png',archivos:[{tipo:'PNG',ruta:'recursos/logos/cedismed.png'},{tipo:'SVG',ruta:'recursos/logos/cedismed.svg'}]},
    {nombre:'Laboratorios Yireh',descripcion:'Identidad de los laboratorios',formatos:'PNG · SVG',imagen:'recursos/logos/laboratorios-yireh.png',archivos:[{tipo:'PNG',ruta:'recursos/logos/laboratorios-yireh.png'},{tipo:'SVG',ruta:'recursos/logos/laboratorios-yireh.svg'}]},
    {nombre:'Hotel Castillo del Rey',descripcion:'Identidad del hotel',formatos:'PNG · SVG',imagen:'recursos/logos/hotel-castillo-del-rey.png',archivos:[{tipo:'PNG',ruta:'recursos/logos/hotel-castillo-del-rey.png'},{tipo:'SVG',ruta:'recursos/logos/hotel-castillo-del-rey.svg'}]}
  ],
  fuentes: [
    {empresa:'Corporativo Yireh',nombre:'Kumbh Sans',familia:'Kumbh Sans',url:'https://fonts.google.com/specimen/Kumbh+Sans',tono:'#76b12b'},
    {empresa:'Farmacias Yireh',nombre:'Montserrat',familia:'Montserrat',url:'https://fonts.google.com/specimen/Montserrat',tono:'#ffe006'},
    {empresa:'Laboratorios Yireh',nombre:'Quicksand',familia:'Quicksand',url:'https://fonts.google.com/specimen/Quicksand',tono:'#0770b6'},
    {empresa:'CEDISMED',nombre:'Raleway',familia:'Raleway',url:'https://fonts.google.com/specimen/Raleway',tono:'#19a538'},
    {empresa:'Hotel Castillo del Rey',nombre:'MADE Tommy',familia:'Arial',url:'https://pixelsurplus.com/products/made-tommy',tono:'#ae1917',nota:'No está en Google Fonts. Requiere licencia comercial; vista previa aproximada.'}
  ],
  paletas: [
    {empresa:'Corporativo Yireh',colores:['#76b12b','#2b3486','#ae1917']},
    {empresa:'Farmacias Yireh',colores:['#ffe006','#77ab38','#000000']},
    {empresa:'Laboratorios Yireh',colores:['#0770b6','#df0919','#000000']},
    {empresa:'CEDISMED',colores:['#2b2d6d','#19a538']},
    {empresa:'Hotel Castillo del Rey',colores:['#ae1917','#fcc414']}
  ],
  formatos: [
    {nombre:'Hoja membretada',descripcion:'Documento corporativo editable',extension:'DOCX',categoria:'Documentos',archivo:''},
    {nombre:'Presentación institucional',descripcion:'Diapositivas oficiales',extension:'PPTX',categoria:'Presentaciones',archivo:''},
    {nombre:'Firma de correo',descripcion:'Formato de firma corporativa',extension:'PNG',categoria:'Digital',archivo:''},
    {nombre:'Formato de solicitud',descripcion:'Plantilla para solicitudes internas',extension:'DOCX',categoria:'Documentos',archivo:''},
    {nombre:'Portada de informe',descripcion:'Diseño para reportes internos',extension:'PDF',categoria:'Documentos',archivo:''},
    {nombre:'Plantilla para redes',descripcion:'Base para comunicaciones digitales',extension:'PNG',categoria:'Digital',archivo:''}
  ],
  tutoriales: [
    {grupo:'Identidad',guia:'index.html#logos',titulo:'Cómo descargar y utilizar los logotipos',descripcion:'Aprende a elegir los archivos originales para tus materiales.',categoria:'IDENTIDAD VISUAL',duracion:'Próximamente',etiqueta:'LOGO',video:''},
    {grupo:'Documentos',guia:'index.html#formatos',titulo:'Cómo editar una plantilla oficial',descripcion:'Personaliza documentos sin cambiar los elementos de marca.',categoria:'DOCUMENTOS',duracion:'Próximamente',etiqueta:'DOC',video:''},
    {grupo:'Identidad',guia:'index.html#tipografia',titulo:'Cómo copiar colores institucionales',descripcion:'Utiliza los códigos HEX de cada empresa.',categoria:'COLORES',duracion:'Próximamente',etiqueta:'HEX',video:''},
    {grupo:'Tipografía',guia:'tutoriales.html#instalar-tipografias',titulo:'Cómo instalar las fuentes corporativas',descripcion:'Descarga e instala la fuente correcta para cada empresa.',categoria:'TIPOGRAFÍA',duracion:'Próximamente',etiqueta:'Aa',video:''},
    {grupo:'Archivos',guia:'tutoriales.html#extraer-archivos',titulo:'Cómo extraer un archivo ZIP o RAR',descripcion:'Descomprime recursos del portal en Windows o macOS.',categoria:'ARCHIVOS',duracion:'Guía disponible',etiqueta:'ZIP',video:''}
  ]
};


/* Recursos adicionales: imágenes proporcionadas y ZIPs demostrativos. */
const OTHER_LOGOS = [
  {nombre:'FLORÉ · Dorado',descripcion:'Perfumes árabes · versión dorada',slug:'flore-dorado',grupo:'Marcas'},
  {nombre:'FLORÉ · Negro',descripcion:'Perfumes árabes · versión negra',slug:'flore-negro',grupo:'Marcas'},
  {nombre:'Dermocosmética',descripcion:'Marca Dermocosmética',slug:'dermocosmetica',grupo:'Marcas'},
  {nombre:'Skincare Coreano',descripcion:'Marca Skincare Coreano',slug:'skincare-coreano',grupo:'Marcas'},
  {nombre:'Precioso Preciazo',descripcion:'Campaña Precioso Preciazo',slug:'precioso-preciazo',grupo:'Campañas'},
  {nombre:'DuoPack',descripcion:'Campaña DuoPack',slug:'duopack',grupo:'Campañas'}
];
const EXTRA_PACKS = [
  {nombre:'Recursos DHV',descripcion:'Material de apoyo para DHV',file:'recursos-dhv.zip',tag:'DHV',grupo:'Campañas'},
  {nombre:'Recursos Torneo Yireh',descripcion:'Material para el Torneo Yireh',file:'torneo-yireh.zip',tag:'EVENTO',grupo:'Campañas'},
  {nombre:'RRSS Iconos · Farmacias Yireh',descripcion:'Paquete demostrativo de iconos para redes sociales',file:'rrss-farmacias-yireh.zip',tag:'RRSS',grupo:'RRSS'},
  {nombre:'RRSS Iconos · CEDISMED',descripcion:'Paquete demostrativo de iconos para redes sociales',file:'rrss-cedismed.zip',tag:'RRSS',grupo:'RRSS'},
  {nombre:'Capsulin',descripcion:'Materiales especiales de Capsulin',file:'capsulin.zip',tag:'MARCA',grupo:'Marcas'},
  {nombre:'Stickers',descripcion:'Recursos y adhesivos digitales',file:'stickers.zip',tag:'DIGITAL',grupo:'Campañas'}
];
let selectedOtherGroup='Todos';
function renderOtherLogos(search=''){
  const grid=$('#other-logo-grid');if(!grid)return;grid.replaceChildren();
  const q=search.trim().toLocaleLowerCase('es');
  const items=OTHER_LOGOS.filter(x=>(selectedOtherGroup==='Todos'||selectedOtherGroup===x.grupo) && (x.nombre+' '+x.descripcion).toLocaleLowerCase('es').includes(q));
  const count=$('#other-logo-count');if(count)count.textContent=`${items.length} logotipo${items.length===1?'':'s'}`;
  if(!items.length){grid.append(create('p','empty-state','No se encontraron logotipos.'));return;}
  for(const item of items){
    const card=create('article','resource-card');
    const preview=create('div','resource-preview');
    const img=create('img','official-logo');img.src=`recursos/otros-logos/${item.slug}.png`;
    img.alt=`Logotipo de ${item.nombre}`;img.loading='lazy';preview.append(img);
    const body=create('div','resource-details');body.append(create('h3','',item.nombre),create('p','',item.descripcion));
    const bottom=create('div','resource-bottom');bottom.append(create('span','file-types','PNG · SVG'));
    const actions=create('div','logo-actions');
    for(const type of ['PNG','SVG']){
      const link=create('button','download-link',`↓ ${type}`);
      link.type='button';
      link.addEventListener('click',()=>downloadOfficialLogo(`recursos/otros-logos/${item.slug}.${type.toLowerCase()}`,`${item.slug}.${type.toLowerCase()}`));
      link.setAttribute('aria-label',`Descargar ${item.nombre} en ${type}`);actions.append(link);
    }
    bottom.append(actions);body.append(bottom);card.append(preview,body);grid.append(card);
  }
}
function renderExtraPacks(){
  const grid=$('#extra-pack-grid');if(!grid)return;grid.replaceChildren();
  for(const item of EXTRA_PACKS.filter(x=>selectedOtherGroup==='Todos'||selectedOtherGroup===x.grupo)){
    const card=create('article','extra-pack-card');
    const head=create('div','extra-pack-top');
    head.append(create('span','extra-pack-icon','▣'),create('span','extra-pack-tag',item.tag));
    card.append(head,create('h3','',item.nombre),create('p','',item.descripcion));
    const actions=create('div','extra-pack-actions');
    const download=create('a','download-link', '↓ Descargar ZIP');
    download.href=`recursos/paquetes-ejemplo/${item.file}`;download.download=item.file;
    const tutorial=create('a','howto-link','¿Cómo extraer ZIP/RAR?');tutorial.href='tutoriales.html#extraer-archivos';
    actions.append(download,tutorial);card.append(actions);
    card.append(create('span','demo-tag','ARCHIVO DE EJEMPLO'));
    grid.append(card);
  }
}

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const create = (tag, className, text) => {
  const el=document.createElement(tag);
  if(className) el.className=className;
  if(text!==undefined) el.textContent=text;
  return el;
};
function downloadOfficialLogo(path, filename){
  const base64=LOGO_DOWNLOAD_DATA[path];
  if(!base64){showToast('No se encontró el archivo para descargar.');return;}
  const ext=path.toLowerCase().endsWith('.svg')?'svg':'png';
  const mime=ext==='svg'?'image/svg+xml':'image/png';
  try{
    const binary=atob(base64);
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    const url=URL.createObjectURL(new Blob([bytes],{type:mime}));
    const link=document.createElement('a');
    link.href=url;link.download=filename;
    document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),60000);
    showToast(`Descargando ${filename}`);
  }catch(error){showToast('No se pudo preparar la descarga.');}
}
let toastTimer;
function showToast(message){
  const toast=$('#toast');if(!toast)return;toast.textContent=message;toast.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200);
}
function resourceButton(resource, className='download-link'){
  const valid=Boolean(resource.archivo?.trim());
  const btn=create('button',className,valid?'↓ Descargar':'Pendiente');
  btn.type='button';btn.disabled=!valid;
  if(valid) btn.addEventListener('click',()=>{
    // La ruta debe apuntar a un archivo publicado por el administrador.
    const anchor=document.createElement('a');anchor.href=resource.archivo;anchor.download='';
    document.body.append(anchor);anchor.click();anchor.remove();
  });
  return btn;
}
let selectedCompany='Todas';
function renderLogos(search=''){
  const grid=$('#logo-grid');grid.replaceChildren();
  const query=search.trim().toLocaleLowerCase('es');
  const items=CONFIG.logos.filter(item=>(selectedCompany==='Todas'||item.nombre===selectedCompany) && `${item.nombre} ${item.descripcion}`.toLocaleLowerCase('es').includes(query));
  $('#logo-count').textContent=`${items.length} recurso${items.length===1?'':'s'}`;
  if(!items.length){grid.append(create('p','empty-state','No encontramos recursos con ese nombre.'));return;}
  items.forEach(item=>{
    const card=create('article','resource-card');
    const preview=create('div',`resource-preview ${item.estilo}`);
    if(item.imagen){const img=create('img','official-logo');img.src=item.imagen;img.alt=`Logotipo de ${item.nombre}`;img.loading='lazy';img.onerror=()=>{img.replaceWith(create('span','mock-logo',item.nombre));};preview.append(img);}else{preview.append(create('span','mock-logo',item.nombre));preview.append(create('small','preview-label','VISTA PREVIA · NO ES LOGO OFICIAL'));}
    const details=create('div','resource-details');
    details.append(create('h3','',item.nombre),create('p','',item.descripcion));
    const bottom=create('div','resource-bottom');
    bottom.append(create('span','file-types',item.formatos));
    const actions=create('div','logo-actions');
    (item.archivos||[]).forEach(file=>{
      const link=create('button','download-link',`↓ ${file.tipo}`);
      link.type='button';
      link.addEventListener('click',()=>downloadOfficialLogo(file.ruta,`${item.nombre.replace(/\s+/g,'-')}.${file.tipo.toLowerCase()}`));
      link.setAttribute('aria-label',`Descargar logotipo ${item.nombre} en ${file.tipo}`);
      actions.append(link);
    });
    bottom.append(actions);
    details.append(bottom);card.append(preview,details);grid.append(card);
  });
}
function renderFormats(filter='Todos'){
  const grid=$('#format-grid');grid.replaceChildren();
  const items=CONFIG.formatos.filter(item=>filter==='Todos'||item.categoria===filter);
  if(!items.length){grid.append(create('p','empty-state','No hay formatos en esta categoría.'));return;}
  items.forEach(item=>{
    const card=create('article','format-card');
    card.append(create('span',`file-icon ${item.extension.toLowerCase()}`,item.extension));
    const info=create('div','format-info');info.append(create('h3','',item.nombre),create('p','',item.descripcion),resourceButton(item,'format-link'));
    card.append(info);grid.append(card);
  });
}
function renderFonts(){
  const grid=$('#font-grid');if(!grid)return;grid.replaceChildren();
  CONFIG.fuentes.filter(item=>selectedCompany==='Todas'||item.empresa===selectedCompany).forEach(item=>{
    const card=create('article','font-company-card');
    const head=create('div','font-card-head');head.append(create('span','font-dot'),create('span','font-company',item.empresa));
    head.firstElementChild.style.background=item.tono;
    const sample=create('div','font-card-sample','Aa Bb Cc 123');sample.style.fontFamily=`"${item.familia}",Arial,sans-serif`;
    const name=create('h4','',item.nombre);const abc=create('p','font-abc','ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');abc.style.fontFamily=`"${item.familia}",Arial,sans-serif`;
    const buttons=create('div','font-actions');
    const link=create('a','download-link',item.empresa==='Hotel Castillo del Rey'?'↗ Ver proveedor':'↗ Descargar familia');
    link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';
    link.title='En Google Fonts usa Descargar familia para obtener las variantes disponibles';
    const guide=create('a','howto-link','¿Cómo instalar?');guide.href='tutoriales.html#instalar-tipografias';
    buttons.append(link,guide);
    card.append(head,sample,name,abc,buttons);
    if(item.nota)card.append(create('p','font-note',item.nota));
    grid.append(card);
  });
}
async function copyHex(hex){
  try { if(navigator.clipboard && window.isSecureContext){await navigator.clipboard.writeText(hex);}else{
    const field=create('textarea');field.value=hex;field.style.position='fixed';field.style.opacity='0';document.body.append(field);field.select();const ok=document.execCommand('copy');field.remove();if(!ok)throw Error('copy unavailable');
  } showToast(`Copiado: ${hex}`); }
  catch{showToast(`Código para copiar: ${hex}`);}
  const feedback=$('#copy-feedback');if(feedback)feedback.textContent=`Color seleccionado: ${hex}`;
}
function renderPalette(){
  const list=$('#brand-palettes');if(!list)return;list.replaceChildren();
  CONFIG.paletas.filter(item=>selectedCompany==='Todas'||item.empresa===selectedCompany).forEach(item=>{
    const card=create('article','palette-brand');card.append(create('h4','',item.empresa));
    const colors=create('div','palette-swatches');
    item.colores.forEach(hex=>{
      const btn=create('button','color-swatch');btn.type='button';btn.setAttribute('aria-label',`Copiar color ${hex} de ${item.empresa}`);btn.title=`Copiar ${hex}`;
      const rect=create('span','swatch-rect');rect.style.background=hex;
      btn.append(rect,create('span','swatch-code',hex.toUpperCase()),create('span','swatch-copy','⧉'));
      btn.addEventListener('click',()=>copyHex(hex));colors.append(btn);
    });card.append(colors);list.append(card);
  });
}
function videoSource(url){
  if(!url||!url.trim())return null;
  try{
    const parsed=new URL(url,window.location.href);
    if(!['https:','http:','file:'].includes(parsed.protocol))return null;
    let id='';
    if(['youtube.com','www.youtube.com','m.youtube.com','www.youtube-nocookie.com','youtube-nocookie.com'].includes(parsed.hostname)){
      id=parsed.searchParams.get('v')||parsed.pathname.match(/^\/(?:embed|shorts)\/([\w-]{11})/)?.[1]||'';
    }else if(['youtu.be','www.youtu.be'].includes(parsed.hostname)) id=parsed.pathname.slice(1).split('/')[0];
    if(/^[\w-]{11}$/.test(id))return {kind:'youtube',src:`https://www.youtube-nocookie.com/embed/${id}?rel=0`};
    if(parsed.pathname.toLowerCase().endsWith('.mp4') && (parsed.origin===window.location.origin || (parsed.protocol==='file:' && window.location.protocol==='file:'))) return {kind:'mp4',src:parsed.href};
  }catch{return null;}
  return null;
}
let selectedTutorialCategory='Todos';
function renderTutorials(){
  const grid=$('#tutorial-grid');if(!grid)return;grid.replaceChildren();
  const query=normalizeText($('#tutorial-search')?.value||'');
  const items=CONFIG.tutoriales.filter(x=>(selectedTutorialCategory==='Todos'||x.grupo===selectedTutorialCategory)&&normalizeText(`${x.titulo} ${x.descripcion} ${x.categoria}`).includes(query));
  const count=$('#tutorial-count');if(count)count.textContent=`${items.length} recurso${items.length===1?'':'s'} de aprendizaje`;
  if(!items.length){grid.append(create('p','empty-state','No encontramos tutoriales con esos filtros.'));return;}
  items.forEach((item,index)=>{
    const card=create('article','tutorial-card');const cover=create('div',`tutorial-cover variant-${index%3}`);
    cover.append(create('span','tutorial-watermark',item.etiqueta));
    const hasVideo=Boolean(videoSource(item.video));
    if(hasVideo){const play=create('button','play-button','▶');play.type='button';play.setAttribute('aria-label',`Ver tutorial: ${item.titulo}`);play.addEventListener('click',()=>openTutorial(item));cover.append(play);}
    else{cover.append(create('span','tutorial-coming','VIDEO PRÓXIMAMENTE'));}
    cover.append(create('span','duration',hasVideo?item.duracion:'Guía disponible'));
    const info=create('div','tutorial-info');info.append(create('small','',item.categoria),create('h3','',item.titulo),create('p','',item.descripcion));
    const actions=create('div','tutorial-actions');const guide=create('a','howto-link','Consultar guía ↗');guide.href=item.guia;actions.append(guide);
    if(hasVideo){const view=create('button','download-link','Ver video ▶');view.type='button';view.addEventListener('click',()=>openTutorial(item));actions.append(view);}
    info.append(actions);card.append(cover,info);grid.append(card);
  });
}
function openTutorial(item){
  const dialog=$('#video-dialog'),container=$('#video-container');
  $('#video-title').textContent=item.titulo;$('#video-description').textContent=item.descripcion;
  container.replaceChildren();
  const source=videoSource(item.video);
  if(!source){container.append(create('p','','Video pendiente de publicación. Agrega la URL en CONFIG.tutoriales dentro de script.js.'));}
  else if(source.kind==='youtube'){
    const iframe=create('iframe');iframe.src=source.src;iframe.title=item.titulo;iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';container.append(iframe);
  }else{
    const video=create('video');video.src=source.src;video.controls=true;video.playsInline=true;container.append(video);
  }
  dialog.showModal();
}
function closeTutorial(){const dialog=$('#video-dialog');dialog.close();$('#video-container').replaceChildren();}
function setupNavigation(){
  const menu=$('.menu-toggle'),nav=$('#site-nav');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
  $$('.nav-link').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú');}));
  const sections=['inicio','logos','tipografia','formatos','que-no-hacer','asistencia'].map(id=>document.getElementById(id)).filter(Boolean);
  if(!sections.length || typeof IntersectionObserver==='undefined')return;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(!entry.isIntersecting)return;$$('.nav-link').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));});
  },{rootMargin:'-20% 0px -65% 0px'});
  sections.forEach(s=>observer.observe(s));
}
function emailFallback(form){
  const data=new FormData(form);
  const subject=`Solicitud a Marketing: ${data.get('tipo')}`;
  const body=`Nombre: ${data.get('nombre')}\nÁrea: ${data.get('departamento')}\nTipo: ${data.get('tipo')}\n\nDescripción:\n${data.get('mensaje')}`;
  window.location.href=`mailto:${CONFIG.emailAsistencia}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function setupSupportForm(){
  const form=$('#support-form');if(!form)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    emailFallback(form);
    const status=$('#support-status');
    if(status)status.textContent='Se abrió tu aplicación de correo. Revisa el mensaje y presiona Enviar para completar la solicitud.';
  });
}
function normalizeText(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').trim();}
function globalSearchItems(){
  const entries=[];
  const push=(title,desc,type,href,empresa='')=>entries.push({title,desc,type,href,empresa});
  CONFIG.logos.forEach(x=>push(x.nombre,x.descripcion,'Logotipos',`index.html#logos`,x.nombre));
  CONFIG.fuentes.forEach(x=>push(x.nombre,`Tipografía de ${x.empresa}`,'Tipografías','index.html#tipografia',x.empresa));
  CONFIG.paletas.forEach(x=>push(`Paleta · ${x.empresa}`,x.colores.join(' · '),'Colores','index.html#tipografia',x.empresa));
  CONFIG.formatos.forEach(x=>push(x.nombre,x.descripcion,'Formatos','index.html#formatos'));
  OTHER_LOGOS.forEach(x=>push(x.nombre,x.descripcion,'Otros logotipos',`otros-recursos.html#otros-logos`));
  EXTRA_PACKS.forEach(x=>push(x.nombre,x.descripcion,'Paquetes','otros-recursos.html#descargables'));
  CONFIG.tutoriales.forEach(x=>push(x.titulo,x.descripcion,'Tutoriales',x.guia||'tutoriales.html'));
  push('¿Qué no hacer?','Buenas prácticas de identidad visual','Guía','index.html#que-no-hacer');
  push('Asistencia','Contactar a Marketing y enviar una solicitud','Soporte','index.html#asistencia');
  return entries;
}
function setupGlobalSearch(){
  const dialog=$('#global-search-dialog');if(!dialog)return;
  const field=$('#global-search-input'),results=$('#global-search-results'),count=$('#global-search-count');
  function render(){
    const q=normalizeText(field.value);results.replaceChildren();
    if(!q){count.textContent='Busca entre logos, colores, formatos, tutoriales y paquetes';results.append(create('p','search-empty','Prueba con: Farmacias, Montserrat, ZIP, plantilla o logos.'));return;}
    const found=globalSearchItems().filter(x=>normalizeText(`${x.title} ${x.desc} ${x.type} ${x.empresa}`).includes(q)).slice(0,25);
    count.textContent=`${found.length} coincidencia${found.length===1?'':'s'}${found.length===25?' (primeras 25)':''}`;
    if(!found.length){results.append(create('p','search-empty','No hay coincidencias. Prueba otra palabra.'));return;}
    for(const x of found){
      const link=create('a','global-search-result');link.href=x.href;
      const content=create('span','search-result-copy');content.append(create('strong','',x.title),create('small','',x.desc));
      link.append(create('span','search-result-type',x.type),content,create('span','search-result-arrow','↗'));results.append(link);
      link.addEventListener('click',()=>{dialog.close();const url=new URL(x.href,location.href);if(url.pathname===location.pathname && url.hash){setTimeout(()=>document.querySelector(url.hash)?.scrollIntoView({behavior:'smooth'}),20);}});
    }
  }
  function open(){if(dialog.open)return;dialog.showModal();field.value='';render();setTimeout(()=>field.focus(),15);}
  $$('.global-search-trigger').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('#site-nav')?.classList.remove('open');open();}));
  $('#global-search-close')?.addEventListener('click',()=>dialog.close());
  field.addEventListener('input',render);
  document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();dialog.open?dialog.close():open();}});
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
}
function setupCompanyFilters(){
  $$('[data-company-filter]').forEach(group=>{
    $$('[data-company]',group).forEach(button=>button.addEventListener('click',()=>{
      selectedCompany=button.dataset.company;
      $$('[data-company]').forEach(b=>{const active=b.dataset.company===selectedCompany;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
      if($('#logo-grid'))renderLogos($('#logo-search')?.value||'');renderFonts();renderPalette();
    }));
  });
  $$('[data-other]').forEach(button=>button.addEventListener('click',()=>{
    selectedOtherGroup=button.dataset.other;
    $$('[data-other]').forEach(b=>{const active=b===button;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
    renderOtherLogos($('#other-logo-search')?.value||'');renderExtraPacks();
  }));
  $$('[data-tutorial-category]').forEach(button=>button.addEventListener('click',()=>{
    selectedTutorialCategory=button.dataset.tutorialCategory;
    $$('[data-tutorial-category]').forEach(b=>{const active=b===button;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
    renderTutorials();
  }));
  $('#tutorial-search')?.addEventListener('input',renderTutorials);
}
function setup(){
  const year=$('#year');if(year)year.textContent=new Date().getFullYear();
  if($('#logo-grid'))renderLogos();if($('#other-logo-grid'))renderOtherLogos();renderExtraPacks();if($('#format-grid'))renderFormats();renderFonts();renderPalette();
  if($('#tutorial-grid'))renderTutorials();setupNavigation();setupGlobalSearch();setupCompanyFilters();if($('#support-form'))setupSupportForm();
  if($('#logo-search'))$('#logo-search').addEventListener('input',e=>renderLogos(e.target.value));
  if($('#other-logo-search'))$('#other-logo-search').addEventListener('input',e=>renderOtherLogos(e.target.value));
  $$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.filter-chip').forEach(b=>{const selected=b===btn;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});renderFormats(btn.dataset.filter);
  }));
  if($('#video-dialog')){
    $('#close-dialog').addEventListener('click',closeTutorial);
    $('#video-dialog').addEventListener('click',event=>{if(event.target===$('#video-dialog'))closeTutorial();});
    $('#video-dialog').addEventListener('close',()=>$('#video-container').replaceChildren());
  }
}
setup();
