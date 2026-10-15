# Guía: conectar el panel con Google Drive

Con esto tus datos se ven iguales en el PC y en el iPhone. Se guardan en una carpeta oculta de tu Google Drive que solo esta app puede ver (no aparece en tu Drive normal). Solo hay que hacerlo una vez.

## 1. Crear el proyecto
1. Entra a https://console.cloud.google.com con tu cuenta de Gmail.
2. Arriba, junto al logo, haz clic en el selector de proyectos → **Proyecto nuevo**.
3. Nombre: por ejemplo `Mi Panel`. Clic en **Crear** y asegúrate de que quede seleccionado.

## 2. Activar la API de Google Drive
1. Menú ☰ → **APIs y servicios** → **Biblioteca**.
2. Busca **Google Drive API**, ábrela y pulsa **Habilitar**.

## 3. Pantalla de consentimiento OAuth
1. Menú ☰ → **APIs y servicios** → **Pantalla de consentimiento de OAuth** (en la consola nueva puede llamarse **Google Auth Platform**).
2. Tipo de usuario: **Externo** → **Crear**.
3. Nombre de la app: `Mi Panel`. Correo de asistencia y de contacto: tu correo de Gmail. Guarda.
4. En **Permisos / Acceso a datos (Scopes)** → **Agregar o quitar permisos** → busca y marca `.../auth/drive.appdata` (“Ver y administrar sus propios datos de configuración en tu Google Drive”). Guarda.
5. En **Usuarios de prueba (Público)** → **Agregar usuarios** → tu correo de Gmail. Guarda.
6. Deja la app en estado **Prueba** (no hace falta publicarla).

## 4. Crear el ID de cliente
1. Menú ☰ → **APIs y servicios** → **Credenciales** (o **Clientes**) → **Crear credenciales** → **ID de cliente de OAuth**.
2. Tipo de aplicación: **Aplicación web**.
3. En **Orígenes autorizados de JavaScript** → **Agregar URI** → `https://andresmunetonsz-design.github.io` (sin barra al final ni carpeta).
4. No hace falta llenar “URI de redireccionamiento”. Clic en **Crear**.
5. Copia el **ID de cliente** (termina en `.apps.googleusercontent.com`). No es secreto, pero no lo pegues en el código.

## 5. Conectar en el PC
1. Abre el panel → **Ajustes y respaldo** → tarjeta **☁️ Sincronizar con Google Drive**.
2. Pega el ID en **Google Client ID**.
3. Pulsa **Conectar con Google**, elige tu cuenta y acepta. Si aparece “Google no verificó esta app”, pulsa **Continuar** (es tu propia app en modo prueba).
4. La línea de estado mostrará la hora de la última sincronización.

## 6. Conectar en el iPhone
1. Abre el panel (en Safari o desde el ícono de inicio) → **Ajustes y respaldo**.
2. Pega el mismo ID de cliente y pulsa **Conectar con Google**.
3. Si este iPhone ya tenía datos, te preguntará si quieres reemplazarlos con los de Drive. **Aceptar** = traer los de Drive. **Cancelar** = conservar los del iPhone y subirlos.

## Cómo funciona después
- Al abrir la app trae la copia más reciente; al hacer cambios los sube a los ~3 segundos y al salir de la app.
- Gana la copia con la fecha de cambio más nueva (no mezcla cambios hechos a la vez en los dos equipos: sincroniza antes de pasar de un dispositivo al otro).
- Sin internet todo sigue funcionando y se sincroniza al volver la conexión.
- La sesión de Google dura ~1 hora; si caduca y el navegador bloquea la ventana, pulsa **Sincronizar ahora**.
- En modo **Prueba**, Google puede pedir volver a conectar cada 7 días. Es normal.
- La contraseña de bloqueo del panel nunca se sube.
