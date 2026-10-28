Mi Panel - panel personal

App web (PWA) de un solo archivo. Funciona sin conexión y guarda todo en el dispositivo. Cada persona llena sus propios datos en la entrevista inicial.

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
- "A vigilar" ahora es Recordatorios (pendientes con fecha). Se quitaron Resumen y Revisión semanal; sus datos se conservan.
- Los datos anteriores se migran solos. El caché del service worker es `panel-v5`.

## Sincronización con Google Drive
Ver GUIA_GOOGLE_CLOUD.md. El Client ID se pega en Ajustes (no va en el código).
