# Guía de edición — Centro de Recursos Yireh V5

## Uso
Descomprime el ZIP y abre `index.html`. Mantén juntos `index.html`, `otros-recursos.html`, `tutoriales.html`, los archivos `.js`, `.css` y la carpeta `recursos/`. Puedes editar todo con Visual Studio Code, Bloc de notas o cualquier editor de texto.

## ¿Qué archivo debo modificar?
- `index.html`: textos y estructura de Inicio, Logos, Tipografías, Formatos, buenas prácticas y Asistencia.
- `otros-recursos.html`: estructura de Otros Recursos y su formulario.
- `tutoriales.html`: secciones de guías escritas, contenidos de ayuda.
- `styles.css`: colores, tamaños, botones, menú y diseños responsive.
- `configuracion.js`: **nombres, rutas y descripción de logotipos, ZIP, formatos, colores, fuentes y tutoriales**.
- `script.js`: funcionalidad de buscador, filtros, descargas, tarjetas y formulario. Normalmente no necesitas editarlo para cambiar recursos.
- `configuracion-asistencia.js`: URL de Google Apps Script (si cambia la implementación).
- `recursos/`: archivos reales (ZIP, PNG, SVG, PDF, DOCX y videos).

## Reemplazar un ZIP de logotipo
1. Copia el ZIP a `recursos/logos-zip/`.
2. Abre `configuracion.js` y localiza la marca en `CONFIG.logos`.
3. Cambia solo el valor de `zip`, por ejemplo `zip:'farmacias-yireh-nuevo.zip'`. En este catálogo el valor de `zip` es **solo el nombre del archivo** porque el código antepone `recursos/logos-zip/`.
4. Opcional: reemplaza su miniatura y cambia la ruta `imagen`. Abre `index.html` y verifica el filtro y la descarga.

## Mostrar una marca relacionada con varias empresas
En `CONFIG.logos`, usa `grupos:['Farmacias Yireh','CEDISMED']`. Las marcas secundarias NO llevan `principal:true`; así no aparecen en «Todas las empresas». Las empresas principales usan `grupo:'Nombre exacto'` y `principal:true`.

## Reemplazar un formato (PDF, Word, ZIP)
1. Copia el archivo a `recursos/formatos/`.
2. Busca la tarjeta en `CONFIG.formatos` y cambia `archivo:'recursos/formatos/nombre.pdf'` y `extension:'PDF'` si procede.
3. Si aún no tienes el archivo, deja `archivo:''` y aparecerá «Próximamente».
4. Puedes editar `nombre`, `descripcion` y `categoria` sin tocar `script.js`. Categorías disponibles en el sitio: Documentos, Presentaciones y Digital.

## Reemplazar recursos descargables (Otros Recursos)
1. Copia el nuevo ZIP a `recursos/paquetes-ejemplo/` o a otra carpeta de recursos.
2. Busca su entrada en `EXTRA_PACKS` dentro de `configuracion.js`.
3. Cambia el campo `archivo` por la ruta relativa completa (ej. `recursos/paquetes-ejemplo/rrss-cedismed.zip`).
4. Cambia `ejemplo:true` a `ejemplo:false` cuando sustituyas un paquete demostrativo por el oficial. No cambies `tag` ni `grupo` salvo que quieras modificar su presentación y filtro.

## Colores, tipografías y videos
- `CONFIG.paletas`: editar los códigos hexadecimales de `colores`.
- `CONFIG.fuentes`: editar nombre, empresa, enlace de proveedor y tipografía de vista previa. Verifica licencias de tipografías de uso comercial.
- `CONFIG.tutoriales`: introducir la URL en `video`. Los videos pendientes tienen `video:''`; mantén `guia` apuntando a su apartado correcto de `tutoriales.html`. Las guías escritas se editan directamente en `tutoriales.html`.

## Asistencia y conexión con Google
Los formularios de `index.html` y `otros-recursos.html` envían sus datos a Google Apps Script mediante un formulario HTML. Cambiar el destinatario se hace en **Code.gs de Google Apps Script**, campo `DESTINATARIO`, no en el HTML. Si cambias la URL `/exec`, actualiza `configuracion-asistencia.js` y verifica los `action` de ambos formularios (o deja que el script los ajuste al cargar). El envío requiere Internet; el resto del portal funciona localmente.

## Buenas prácticas
- Antes de modificar: guarda una copia completa de la carpeta.
- Usa nombres de archivo sencillos, preferentemente sin espacios ni acentos (ej. `membrete-2027.docx`).
- No elimines `configuracion.js`, `script.js` ni la carpeta `recursos`.
- Revisa en Chrome o Edge los filtros de empresas, buscador, descargas y navegación al cambiar archivos.
- No coloques contraseñas, tokens privados o credenciales dentro de archivos del sitio.
