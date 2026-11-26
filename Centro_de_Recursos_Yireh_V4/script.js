let selectedOtherGroup='Todos';
function renderExtraPacks(){
  const grid=$('#extra-pack-grid');if(!grid)return;grid.replaceChildren();
  for(const item of EXTRA_PACKS.filter(x=>selectedOtherGroup==='Todos'||selectedOtherGroup===x.grupo)){
    const card=create('article','extra-pack-card');
    const head=create('div','extra-pack-top');
    head.append(create('span','extra-pack-icon','▣'),create('span','extra-pack-tag',item.tag));
    card.append(head,create('h3','',item.nombre),create('p','',item.descripcion));
    const actions=create('div','extra-pack-actions');
    const download=create('a','download-link', '↓ Descargar ZIP');
    download.href=item.archivo;download.download=item.archivo.split('/').pop();
    const tutorial=create('a','howto-link','¿Cómo extraer ZIP/RAR?');tutorial.href='tutoriales.html#extraer-archivos';
    actions.append(download,tutorial);card.append(actions);
    if(item.ejemplo)card.append(create('span','demo-tag','ARCHIVO DE EJEMPLO'));
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
function resourceButton(resource,className='download-link'){
  const valid=Boolean(resource.archivo?.trim());
  const btn=create(valid?'a':'span',className,valid?'↓ Descargar '+resource.extension:'Próximamente');
  if(!valid){btn.classList.add('resource-pending');btn.setAttribute('aria-disabled','true');}
  if(valid){btn.href=resource.archivo;btn.download=resource.archivo.split('/').pop();}
  return btn;
}
let selectedCompany='Todas';
try {
  const requested=new URLSearchParams(window.location.search).get('empresa');
  const valid=['Corporativo Yireh','Farmacias Yireh','CEDISMED','Laboratorios Yireh','Hotel Castillo del Rey'];
  if(valid.includes(requested)) selectedCompany=requested;
} catch(_) {}

function renderLogos(search=''){
  const grid=$('#logo-grid');
  if(!grid)return;
  grid.replaceChildren();
  const query=normalizeText(search);
  const items=CONFIG.logos.filter(item=>{
    const pertenece=selectedCompany==='Todas'
      ? item.principal===true
      : item.grupo===selectedCompany || (item.grupos||[]).includes(selectedCompany);
    return pertenece && normalizeText(`${item.nombre} ${item.descripcion}`).includes(query);
  });
  $('#logo-count').textContent=`${items.length} recurso${items.length===1?'':'s'}`;
  if(!items.length){grid.append(create('p','empty-state','No encontramos recursos con ese nombre.'));return;}
  items.forEach(item=>{
    const card=create('article','resource-card');
    const preview=create('div','resource-preview');
    const img=create('img','official-logo');
    img.src=item.imagen;img.alt=`Logotipo de ${item.nombre}`;img.loading='lazy';
    img.onerror=()=>{img.replaceWith(create('span','mock-logo',item.nombre));};
    preview.append(img);
    const details=create('div','resource-details');
    details.append(create('h3','',item.nombre),create('p','',item.descripcion));
    const bottom=create('div','resource-bottom');
    bottom.append(create('span','file-types','PAQUETE ZIP'));
    const actions=create('div','logo-actions');
    const link=create('a','download-link','↓ Descargar ZIP');
    link.href=`recursos/logos-zip/${item.zip}`;
    link.download=item.zip;
    link.setAttribute('aria-label',`Descargar paquete ZIP de ${item.nombre}`);
    actions.append(link);
    bottom.append(actions);
    details.append(bottom);card.append(preview,details);grid.append(card);
  });
}
function renderFormats(filter='Todos'){
  const grid=$('#format-grid');if(!grid)return;grid.replaceChildren();
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
  if(!source){container.append(create('p','','Video pendiente de publicación. Agrega la URL en CONFIG.tutoriales dentro de configuracion.js.'));}
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
function setupSupportForm(){
  const form=$('#support-form'); if(!form)return;
  const url=String(window.YIREH_APPS_SCRIPT_URL||'').trim();
  const validUrl=/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url);
  const status=$('#support-status');
  const stamp=form.querySelector('[name="tiempo_inicio"]');
  if(stamp)stamp.value=String(Date.now());
  form.addEventListener('submit',event=>{
    if(!form.reportValidity()){event.preventDefault();return;}
    if(!validUrl){
      event.preventDefault();
      if(status)status.textContent='No se ha configurado la URL de Apps Script. Contacta a Marketing.';
      return;
    }
    const original=form.querySelector('[name="descripcion"]');
    const department=form.querySelector('[name="departamento"]');
    const message=form.querySelector('[name="mensaje"]');
    if(message) message.value='Departamento: '+(department?.value.trim()||'No indicado')+'\n\nDescripción:\n'+(original?.value.trim()||'');
    // Se realiza un POST HTML estándar, compatible con sitios abiertos como file://.
    // La página de Apps Script confirma éxito o error en una pestaña nueva.
    form.action=url;
    form.target='_blank';
    if(status)status.textContent='Se abrió una pestaña para procesar la solicitud. Comprueba allí si el envío se realizó correctamente.';
  });
}
function normalizeText(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').trim();}
function globalSearchItems(){
  const entries=[];
  const push=(title,desc,type,href,empresa='')=>entries.push({title,desc,type,href,empresa});
  CONFIG.logos.forEach(x=>push(x.nombre,x.descripcion,'Logotipos',`index.html?empresa=${encodeURIComponent(x.grupo || x.grupos[0])}#logos`,x.grupo || (x.grupos||[])[0]));
  CONFIG.fuentes.forEach(x=>push(x.nombre,`Tipografía de ${x.empresa}`,'Tipografías','index.html#tipografia',x.empresa));
  CONFIG.paletas.forEach(x=>push(`Paleta · ${x.empresa}`,x.colores.join(' · '),'Colores','index.html#tipografia',x.empresa));
  CONFIG.formatos.forEach(x=>push(x.nombre,x.descripcion,'Formatos','index.html#formatos'));
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
    renderExtraPacks();
  }));
  $$('[data-tutorial-category]').forEach(button=>button.addEventListener('click',()=>{
    selectedTutorialCategory=button.dataset.tutorialCategory;
    $$('[data-tutorial-category]').forEach(b=>{const active=b===button;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
    renderTutorials();
  }));
  $('#tutorial-search')?.addEventListener('input',renderTutorials);
}
function setupIntro(){
  const intro=$('#site-intro');if(!intro)return;
  let seen=false;
  try{seen=sessionStorage.getItem('yireh-intro-v1')==='yes';sessionStorage.setItem('yireh-intro-v1','yes');}catch(_){}
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if(seen||reduced){intro.remove();return;}
  document.body.classList.add('intro-visible');
  window.setTimeout(()=>{
    intro.classList.add('intro-exit');
    window.setTimeout(()=>{intro.remove();document.body.classList.remove('intro-visible');},420);
  },1550);
}
function setup(){
  setupIntro();
  const year=$('#year');if(year)year.textContent=new Date().getFullYear();
  if(selectedCompany!=='Todas'){
    $$('[data-company]').forEach(b=>{
      const active=b.dataset.company===selectedCompany;
      b.classList.toggle('selected',active);
      b.setAttribute('aria-pressed',String(active));
    });
  }
  if($('#logo-grid'))renderLogos();renderExtraPacks();if($('#format-grid'))renderFormats();renderFonts();renderPalette();
  if($('#tutorial-grid'))renderTutorials();setupNavigation();setupGlobalSearch();setupCompanyFilters();if($('#support-form'))setupSupportForm();
  if($('#logo-search'))$('#logo-search').addEventListener('input',e=>renderLogos(e.target.value));
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
