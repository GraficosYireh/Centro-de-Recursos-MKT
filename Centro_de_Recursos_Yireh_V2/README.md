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
