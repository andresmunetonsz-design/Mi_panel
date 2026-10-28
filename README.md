Mi Panel - panel personal

App web (PWA) de un solo archivo. Funciona sin conexión y guarda todo en el dispositivo. Cada persona llena sus propios datos: la entrevista inicial es corta y cada sección hace sus propias preguntas la primera vez que la abres.

## Novedades v9.0
- Entrevista inicial más corta: nombre, objetivos, secciones y mascota.
- Preguntas por sección: Finanzas, Nutrición, Cuerpo, Conexión, Planes y fechas y Diario muestran 2 a 4 preguntas la primera vez que entras. Se pueden saltar y repetir con el botón "🗣️ Preguntas" de cada sección o desde Ajustes. Si ya tenías esos datos, no se vuelven a preguntar.
- Cuerpo: una tarjeta por cada ejercicio que elegiste, con "Hecho hoy", cantidad (unidad editable), minutos, racha y meta semanal. Registro de hoy, totales de la semana e historial. Cada ejercicio da XP (configurable) y cuenta para los logros de la mascota. El registro de peso sigue igual.
- Diario (reemplaza Recordatorios): ánimo con 5 caritas, unas palabras, algo que agradeces, calendario del mes, tendencia de los últimos 7 días y una pequeña XP. En Hoy aparece una invitación a escribir a la hora que prefieras.
- Conexión (reemplaza Relaciones y espiritualidad): tarjetas que se marcan y dan XP. Meditación guiada de 1, 3, 5 o 10 minutos con un círculo que crece y se encoge, respiración 4-7-8, gratitud, mensaje bonito para tu pareja (más de 20 ideas, botón Copiar y enlace a WhatsApp sin número), plan de cita, familia, un amigo y un acto de bondad. Eliges qué tarjetas ver, agregas las tuyas y ves tu avance de la semana. Si dices que no tienes pareja, esas tarjetas se ocultan.
- Planes y fechas: línea de tiempo vertical con fecha, emoji, color, categoría y lista de pendientes. Marca de Hoy, cuenta regresiva, lo pasado se ve atenuado como "Cumplido", filtro por categoría, tocar para abrir y editar. Las fases y las fechas del plan anterior pasan a la línea de tiempo.
- Se quitó la sección de búsqueda laboral y su objetivo. El sombrero de graduación de la mascota ahora se gana al terminar un proyecto o al llegar al nivel 7.
- Los datos anteriores se migran solos (`migrateV7`, esquema 7). Lo que ya no se muestra queda guardado en el estado (respaldo y Drive) por si se usa más adelante.
- El caché del service worker es `panel-v7`.

## Novedades v8.0
- Mascota: elige tu primera mascota (gato naranja, zorro o perrito) en la entrevista o en la pantalla Mascota. Come con la XP que ganas, su ánimo baja despacio si no entras (nunca muere, solo se pone triste o con sueño) y evoluciona: Bebé hasta el nivel 4, Joven del 5 al 9 y Adulto desde el 10 (configurable). Nuevas mascotas y accesorios se desbloquean por nivel, racha y logros; se ven como siluetas con su requisito.
- Nutrición: buscador con más de 150 alimentos y unos 20 platos típicos (valores aproximados de USDA FoodData Central e ICBF/TCAC), porciones caseras, cantidad, comida del día, recientes, favoritos, alimentos y platos propios. Anillo de calorías con restantes y macros.
- Meta de calorías con Mifflin-St Jeor: -500 kcal para bajar, +300 kcal para subir (se corrigió el modo subir, que antes restaba).
- Guía de porciones: equivalencias caseras (taza, cucharada, unidad, palma) con calculadora por gramos.
- Registrar cada comida del día da una pequeña XP (configurable en Ajustes de la mascota, `hoyCfg.xpComida`).
- Archivos nuevos: `alimentos.js` (base de alimentos) y la carpeta `img/` (37 imágenes WebP). El caché del service worker es `panel-v6` e incluye todo para usar el panel sin conexión.
- Los datos anteriores se migran solos (`migrateV6`, esquema 6).

## Qué subir a GitHub Pages
`index.html`, `alimentos.js`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `.nojekyll`, los `.md` y la carpeta `img/` completa.

## Novedades v7.0
- Entrevista inicial (se puede saltar y repetir en Ajustes): objetivos, datos, ejercicio, actividades, herramientas, moneda y secciones. Calcula una meta de calorías (Mifflin-St Jeor).
- Hoy es un checklist de actividades con XP, nivel y racha diaria (el día cuenta con N actividades).
- Herramientas contra la procrastinación, cada una se puede apagar: Tarea clave del día (doble XP), Solo 5 minutos, Pomodoro, Subtareas y Aviso de tareas aplazadas.
- Se quitaron Resumen y Revisión semanal; sus datos se conservan.
- Los datos anteriores se migran solos. El caché del service worker es `panel-v5`.

## Sincronización con Google Drive
Ver GUIA_GOOGLE_CLOUD.md. El Client ID se pega en Ajustes (no va en el código).
