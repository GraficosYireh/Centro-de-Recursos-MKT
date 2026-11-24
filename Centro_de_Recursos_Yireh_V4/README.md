# Centro de Recursos Yireh — Versión 2

## Abrir el sitio

Descomprime el ZIP completo y abre `index.html` con doble clic. `otros-recursos.html` y `tutoriales.html` utilizan el mismo `styles.css` y `script.js` y están enlazados desde el menú. Mantén intactas las carpetas `recursos/`.

## Mejoras incluidas

- Buscador global en todas las páginas, atajo Ctrl+K (o Cmd+K), búsqueda sin servidor en logotipos, fuentes, colores, formatos, paquetes, tutoriales y asistencia.
- Filtros por empresa en Logos, Tipografía y paletas de color de la página principal.
- Filtros por tema en Otros Recursos y en la biblioteca de Tutoriales; además, buscador de tutoriales, guías escritas y estado de video pendiente.
- Inicio con accesos a recursos frecuentes y ajustes visuales de navegación.
- Se mantienen las miniaturas, el diseño y los enlaces de descarga PNG/SVG de logotipos originales.
- Asistencia por envío directo a través del servicio externo FormSubmit, con alternativa de `mailto:` si falla.

## Activar y probar la asistencia directa

**Importante**: no se ha enviado ninguna solicitud real ni se ha activado el correo desde este entorno. En el archivo `script.js` se encuentra `emailAsistencia: 'jcauichpaniagua@gmail.com'`.

1. Necesitas conexión a internet. Abre `index.html` y ve a Asistencia; captura una **solicitud de prueba sin datos confidenciales**.
2. Al primer envío, FormSubmit suele enviar un mensaje de activación a `jcauichpaniagua@gmail.com`. La persona propietaria debe hacer clic en el enlace de activación/verificación. Revisa Spam si no llega.
3. Envía una segunda solicitud de prueba. Comprueba que llega al correo. El mensaje del sitio distingue entre solicitud aceptada por el proveedor y entrega final.
4. Si el navegador restringe solicitudes desde `file://`, usa hosting estático (no requiere PHP) o un servidor local simple para probar; depende del navegador y las políticas del proveedor.
5. Para usar un correo distinto, modifica `CONFIG.emailAsistencia` en `script.js`.

**Limitaciones:** este servicio externo procesa los datos del formulario; no envíes información confidencial o sensible sin revisión de políticas corporativas. La alternativa `mailto:` abre la aplicación de correo. No ofrece adjuntos, sistema de tickets ni seguimiento. El proveedor puede cambiar condiciones o restringir envíos; revisar su documentación.

**Fuente oficial:** https://formsubmit.co/documentation y https://formsubmit.co/ajax-documentation

## Configurar tutoriales

Modifica `CONFIG.tutoriales` en `script.js`, introduciendo en la propiedad `video` un enlace de YouTube compatible o la ruta de un MP4 ubicado en `recursos/videos/`. No hay videos publicados inicialmente: la interfaz muestra **Video próximamente** y ofrece las guías escritas correspondientes.

## Pendiente de cargar

Las plantillas de Formatos no se incluyeron como documentos definitivos. Los ZIP de Otros Recursos son demostrativos; reemplázalos por archivos aprobados antes de difundir el portal.


## Correcciones de descarga y asistencia
- Los botones PNG y SVG descargan archivos mediante `logo-downloads.js`, que contiene los logos oficiales embebidos. No se abre una previsualización y funcionan al abrir `index.html` con `file://`.
- Asistencia vuelve al flujo original `mailto:`: prepara el correo para `jcauichpaniagua@gmail.com` en la aplicación del usuario. El usuario debe confirmar el envío. No usa FormSubmit, dominio ni PHP.
- Si el navegador no tiene ninguna aplicación de correo configurada, hay que configurar una (o registrar Gmail como gestor de enlaces `mailto:`).


## Actualización 24/11/2026 — Envío directo de Asistencia con Apps Script
- Ambos formularios de Asistencia (`index.html` y `otros-recursos.html`) realizan POST estándar a la aplicación web de Google Apps Script, sin usar `mailto:`.
- URL editable en `configuracion-asistencia.js` (la URL provista por la persona responsable del proyecto ya está incorporada).
- Se agregó el correo del solicitante, la empresa y protección básica antispam. Se preservan nombre, departamento, tipo y descripción.
- Se muestra el resultado real de la operación en una pestaña nueva de Google Apps Script. El portal no garantiza entrega hasta comprobar allí el resultado y recibir el correo.
- Cuenta remitente autorizada en Apps Script: colochocreativomx@gmail.com. Destinatario actual de prueba: waelscuenta@hotmail.com (configurado en el servidor Apps Script, no en el portal).
- Requiere Internet. El endpoint público puede recibir spam; antes del uso corporativo general conviene limitar acceso e implementar mecanismos de protección adicionales.
- Para cambiar el destinatario, modifica `CONFIG.DESTINATARIO` en `Code.gs` y vuelve a publicar una nueva versión. No es necesario cambiar la web.
\n\n## Actualización V3: ZIP por logotipo\nCada tarjeta de Logotipos oficiales descarga el ZIP original de la empresa o marca.\nTodas las empresas muestra únicamente las cinco principales. Los filtros por empresa muestran su logotipo y las marcas relacionadas. Floré, Dermacosmética y Skincare Coreano aparecen en Farmacias Yireh y CEDISMED, compartiendo un solo archivo físico cada uno.\nLos archivos en recursos/logos-zip son los ZIP originales aportados por el usuario; no se modificó su contenido. Las miniaturas adicionales están en recursos/logos-dependientes.\nLa sección Otros Recursos conserva sus opciones anteriores. Asistencia mantiene la conexión Apps Script ya configurada.\n

## Cambios V4 consolidados (24 noviembre 2026)
- Menú reordenado en las tres páginas.
- Inicio: se eliminó el pie de imagen circular y se añadió entrada minimalista una vez por sesión (se omite con movimiento reducido).
- Logotipos Oficiales: MEGAVENTA 2027 se agregó al filtro CEDISMED con su ZIP y miniatura.
- Otros Recursos: se eliminó la sección redundante de logotipos; solo quedan los recursos descargables y el formulario de asistencia. RRSS Iconos Farmacias Yireh usa el ZIP oficial; los otros paquetes se mantienen como demostración.
- Formatos: Hoja Membretada DOCX y Portada Plan Emergente ZIP descargables; Firma de correo y Plantilla para redes eliminadas; Bitácora de Material de Entrega y Bitácora de Envíos esperan sus PDF.
- Tutoriales: exactamente cinco temas, con guías escritas y tarjetas listas para videos; sin videos reales adjuntos.
- Pie: Creado por ColochoGP 2026.
- Asistencia: mantiene Apps Script, es necesario contar con Internet para enviar. El intervalo de 10 segundos se gestiona desde Apps Script y no se modifica en estos archivos.

Abra index.html en Chrome o Edge, sin servidor. Para obtener todos los recursos mantenga la carpeta recursos junto a los archivos HTML.
