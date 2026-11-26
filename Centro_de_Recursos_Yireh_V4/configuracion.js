/*
 CENTRO DE RECURSOS YIREH — CATÁLOGO EDITABLE
 Modifica aquí los nombres, descripciones, archivos y vínculos.
 Usa rutas relativas, por ejemplo 'recursos/formatos/archivo.docx'.
 IMPORTANTE: no cambies las claves técnicas (nombre, descripcion, archivo, etc.).
 Consulta GUIA_DE_EDICION.md antes de editar.
*/
const CONFIG = {
  logos: [
    {nombre:'Corporativo Yireh',descripcion:'Identidad institucional del corporativo',imagen:'recursos/logos/corporativo-yireh.png',grupo:'Corporativo Yireh',principal:true,zip:'corporativo-yireh.zip'},
    {nombre:'Farmacias Yireh',descripcion:'Identidad de las farmacias',imagen:'recursos/logos/farmacias-yireh.png',grupo:'Farmacias Yireh',principal:true,zip:'farmacias-yireh.zip'},
    {nombre:'CEDISMED',descripcion:'Centro de distribución de medicamentos',imagen:'recursos/logos/cedismed.png',grupo:'CEDISMED',principal:true,zip:'cedismed.zip'},
    {nombre:'Laboratorios Yireh',descripcion:'Identidad de los laboratorios',imagen:'recursos/logos/laboratorios-yireh.png',grupo:'Laboratorios Yireh',principal:true,zip:'laboratorios-yireh.zip'},
    {nombre:'Hotel Castillo del Rey',descripcion:'Identidad del hotel',imagen:'recursos/logos/hotel-castillo-del-rey.png',grupo:'Hotel Castillo del Rey',principal:true,zip:'hotel-castillo-del-rey.zip'},
    {nombre:'Olimpiadas del Conocimiento Yireh',descripcion:'Marca relacionada con Corporativo Yireh',imagen:'recursos/logos-dependientes/olimpiadas-yireh.png',grupos:['Corporativo Yireh'],zip:'olimpiadas-yireh.zip'},
    {nombre:'Desarrollo de Habilidades y Ventas (DHV)',descripcion:'Marca relacionada con Corporativo Yireh',imagen:'recursos/logos-dependientes/dhv.png',grupos:['Corporativo Yireh'],zip:'dhv.zip'},
    {nombre:'Floré',descripcion:'Marca relacionada con Farmacias Yireh y CEDISMED',imagen:'recursos/logos-dependientes/flore.png',grupos:['Farmacias Yireh','CEDISMED'],zip:'flore.zip'},
    {nombre:'Dermacosmética',descripcion:'Marca relacionada con Farmacias Yireh y CEDISMED',imagen:'recursos/logos-dependientes/dermocosmetica.png',grupos:['Farmacias Yireh','CEDISMED'],zip:'dermocosmetica.zip'},
    {nombre:'Skincare Coreano',descripcion:'Marca relacionada con Farmacias Yireh y CEDISMED',imagen:'recursos/logos-dependientes/skincare-coreano.png',grupos:['Farmacias Yireh','CEDISMED'],zip:'skincare-coreano.zip'},
    {nombre:'Precioso Preciazo',descripcion:'Marca relacionada con Farmacias Yireh',imagen:'recursos/logos-dependientes/precioso-preciazo.png',grupos:['Farmacias Yireh'],zip:'precioso-preciazo.zip'},
    {nombre:'DuoPack',descripcion:'Marca relacionada con Farmacias Yireh',imagen:'recursos/logos-dependientes/duopack.png',grupos:['Farmacias Yireh'],zip:'duopack.zip'},
    {nombre:'MEGAVENTA 2027',descripcion:'Campaña de CEDISMED',imagen:'recursos/logos-dependientes/megaventa-2027.png',grupos:['CEDISMED'],zip:'megaventa-2027.zip'}
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
    {nombre:'Hoja Membretada',descripcion:'Formato de documento para agregar la hoja membretada en Word.',extension:'DOCX',categoria:'Documentos',archivo:'recursos/formatos/membrete-formato-de-hoja.docx'},
    {nombre:'Presentación institucional',descripcion:'Diapositivas oficiales. Archivo pendiente de incorporar.',extension:'PPTX',categoria:'Presentaciones',archivo:''},
    {nombre:'Formato de solicitud',descripcion:'Plantilla para solicitudes internas. Archivo pendiente de incorporar.',extension:'DOCX',categoria:'Documentos',archivo:''},
    {nombre:'Portada Plan Emergente',descripcion:'Paquete de portadas y contraportadas para Farmacias Yireh y CEDISMED.',extension:'ZIP',categoria:'Documentos',archivo:'recursos/formatos/portadas-plan-emergente.zip'},
    {nombre:'Bitácora de Material de Entrega',descripcion:'Registro de entrega de materiales. PDF pendiente de incorporar.',extension:'PDF',categoria:'Documentos',archivo:''},
    {nombre:'Bitácora de Envíos',descripcion:'Registro de envíos. PDF pendiente de incorporar.',extension:'PDF',categoria:'Documentos',archivo:''}
  ],
  tutoriales: [
    {grupo:'Tipografía',guia:'tutoriales.html#instalar-tipografias',titulo:'Cómo instalar las fuentes corporativas',descripcion:'Descarga e instala las familias tipográficas según cada empresa.',categoria:'TIPOGRAFÍA',duracion:'Guía disponible',etiqueta:'Aa',video:''},
    {grupo:'Archivos',guia:'tutoriales.html#extraer-archivos',titulo:'Cómo extraer un archivo ZIP o RAR',descripcion:'Extrae paquetes descargados en Windows o macOS.',categoria:'ARCHIVOS',duracion:'Guía disponible',etiqueta:'ZIP',video:''},
    {grupo:'Identidad',guia:'tutoriales.html#usar-logotipos',titulo:'Cómo descargar y utilizar los logotipos',descripcion:'Selecciona la empresa, descarga el paquete ZIP y utiliza los archivos oficiales.',categoria:'IDENTIDAD',duracion:'Guía disponible',etiqueta:'LOGO',video:''},
    {grupo:'Documentos',guia:'tutoriales.html#membrete-word',titulo:'Cómo agregar un membrete a Word',descripcion:'Utiliza el archivo DOCX institucional para generar documentos.',categoria:'DOCUMENTOS',duracion:'Guía disponible',etiqueta:'DOC',video:''},
    {grupo:'Correo',guia:'tutoriales.html#firma-correo',titulo:'Cómo agregar una firma de imagen a un correo electrónico',descripcion:'Inserta una imagen de firma en Gmail o Outlook.',categoria:'CORREO',duracion:'Guía disponible',etiqueta:'MAIL',video:''}
  ]
};


/* Paquetes de Otros Recursos. Cambia archivo y ejemplo al reemplazar un ZIP. */
const EXTRA_PACKS = [
  {nombre:'Recursos DHV',descripcion:'Material de apoyo para DHV',archivo:'recursos/paquetes-ejemplo/recursos-dhv.zip',ejemplo:true,tag:'DHV',grupo:'Campañas'},
  {nombre:'Recursos Torneo Yireh',descripcion:'Material para el Torneo Yireh',archivo:'recursos/paquetes-ejemplo/torneo-yireh.zip',ejemplo:true,tag:'EVENTO',grupo:'Campañas'},
  {nombre:'RRSS Iconos · Farmacias Yireh',descripcion:'Iconos oficiales para redes sociales de Farmacias Yireh',archivo:'recursos/paquetes-ejemplo/rrss-farmacias-yireh.zip',ejemplo:false,tag:'RRSS',grupo:'RRSS'},
  {nombre:'RRSS Iconos · CEDISMED',descripcion:'Paquete demostrativo de iconos para redes sociales',archivo:'recursos/paquetes-ejemplo/rrss-cedismed.zip',ejemplo:true,tag:'RRSS',grupo:'RRSS'},
  {nombre:'Capsulin',descripcion:'Materiales especiales de Capsulin',archivo:'recursos/paquetes-ejemplo/capsulin.zip',ejemplo:true,tag:'MARCA',grupo:'Marcas'},
  {nombre:'Stickers',descripcion:'Recursos y adhesivos digitales',archivo:'recursos/paquetes-ejemplo/stickers.zip',ejemplo:true,tag:'DIGITAL',grupo:'Campañas'}
];
