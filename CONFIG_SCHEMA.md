# Esquema de configuración

`Importar configuración` en Ajustes lee un JSON con listas y ajustes. No borra el historial de días, pesos, abonos ni fotos. Un respaldo completo (objeto con `state.days`, o el archivo que descarga «Descargar respaldo») se restaura con **Restaurar desde archivo**.

Los ejemplos de abajo son placeholders. No guardes datos personales en este repositorio.

```json
{
  "configVersion": 1,
  "ui": { "nombre": "Mi Panel" },
  "config": {
    "ingreso": 0,
    "metaFondo": 0,
    "inicio": "2026-01-01",
    "duracion": 90,
    "metaPeso": null,
    "habitoRacha": "h1"
  },
  "habitos": [
    { "id": "h1", "label": "Hábito de ejemplo", "icon": "✅", "desc": "Qué cuenta como cumplido", "type": "check" }
  ],
  "extras": [
    { "id": "x1", "label": "Extra de ejemplo", "icon": "💧", "desc": "No suma al puntaje", "type": "check" }
  ],
  "pilares": [
    { "id": "p1", "nombre": "Pilar de ejemplo", "meta": "Una meta medible", "prio": "Media" }
  ],
  "metas": [
    { "id": "m1", "texto": "Meta de ejemplo", "fecha": "Este año", "medir": "Hecho o no hecho", "estado": "pendiente" }
  ],
  "deudasCatalogo": [
    { "id": "d1", "nombre": "Deuda de ejemplo", "prio": "Prioridad 1", "color": "var(--danger)" }
  ],
  "deudas": { "d1": 1000 },
  "deudasInicial": { "d1": 1000 },
  "abonosMensuales": { "d1": 100 },
  "gastosFijos": [
    { "id": "g1", "nombre": "Servicio de ejemplo", "monto": 0, "tipo": "personal" }
  ],
  "gastosVariables": [
    { "id": "v1", "nombre": "Gasto variable de ejemplo", "monto": 0, "meta": 0 }
  ],
  "suenos": [
    { "nombre": "Proyecto de ejemplo", "horiz": "1 año", "paso": "Dar el primer paso" }
  ],
  "planFases": [
    { "titulo": "Mes 1", "tono": "accent", "items": ["Punto de ejemplo"] }
  ],
  "relaciones": [
    { "titulo": "Persona de ejemplo", "cuerpo": "Una nota" }
  ],
  "bloques": {
    "cuerpo": [{ "titulo": "Movimiento", "cuerpo": "Nota de ejemplo" }],
    "vicios": [{ "titulo": "Categoría de ejemplo", "cuerpo": "Nota de ejemplo" }]
  },
  "caidaOpciones": ["Categoría de ejemplo"],
  "nutri": {
    "perfil": { "sexo": "", "edad": "", "estatura": "", "actividad": 1.55, "deficit": 500 }
  },
  "carrera": {
    "metas": { "aplicaciones": 5, "contactos": 3 },
    "checklist": ["Tarea de ejemplo"],
    "rutina": ["Bloque de ejemplo"]
  },
  "finanzas": {
    "metaMeses": 6,
    "presupuesto": [
      { "id": "fijos", "cat": "Gastos fijos (tu parte)", "auto": "fijos", "esencial": true },
      { "id": "otros", "cat": "Otros", "monto": 0, "esencial": false }
    ]
  },
  "proyectos": []
}
```

## Campos

| Campo | Qué hace |
| --- | --- |
| `configVersion` | Debe ser `1`. |
| `ui.nombre` | Nombre visible en la cabecera y en la pantalla de bloqueo. |
| `config.inicio` | Día 1 del plan, `AAAA-MM-DD`. |
| `config.duracion` | Días del plan, entre 7 y 365. |
| `config.metaPeso` | Meta de peso en kg, o `null`. |
| `config.habitoRacha` | `id` del hábito cuya racha se muestra en el resumen. Vacío usa el primero. |
| `habitos` | Hábitos que suman al puntaje. `type` es `check` o `select`. Solo uno puede ser `select` (registro 0 / 1 / 2+, guardado en el campo histórico del día). |
| `extras` | Igual que hábitos, pero no suman al puntaje. |
| `pilares` | `prio` es `Media`, `Alta` o `Crítica`. |
| `metas` | `estado` es `pendiente`, `progreso` o `completada`. |
| `deudas` / `deudasInicial` / `abonosMensuales` | Montos por `id` del catálogo. |
| `gastosFijos[].tipo` | `personal` (100%) o `compartido` (50%). |
| `planFases[].tono` | `warning`, `accent` o `success`. `items` es una lista de textos. |
| `bloques` | Notas de Cuerpo y de A vigilar. |
| `nutri.perfil.sexo` | `h`, `m` o vacío. `edad` y `estatura` pueden ir vacíos hasta que los completes. |
| `carrera.checklist` | Textos, o objetos `{ "id", "texto", "hecho" }`. |
| `finanzas.presupuesto[].auto` | `fijos`, `abonos` o `viciosMeta` para filas calculadas. Si no lleva `auto`, usa `monto`. |
| `proyectos` | Si viene, reemplaza la lista de proyectos. |

Los `id` de hábitos que ya aparecen en un historial guardado deben mantenerse si quieres que esos días sigan marcando el mismo hábito. Un `id` desconocido se muestra con el propio `id` como nombre y se puede renombrar en Ajustes.

Un respaldo antiguo que solo trae `{ "id", "estado" }` en las metas sigue abriendo: el texto visible es el `id` hasta que lo edites o importes una configuración con `texto`.
