# AGENTS.md — openspec

## Propósito

Carpeta raíz de especificaciones (specs) del sistema. Cada subcarpeta de `specs/` es un módulo con su `spec.md`.

## Archivos y carpetas

| Archivo/carpeta | Leer cuando | Función |
|----------------|-------------|---------|
| `00-indice-specs.md` | Necesitas ubicar un módulo | Índice de todos los specs disponibles |
| `specs/<módulo>/spec.md` | Implementas o revisas un módulo | Spec con objetivo, alcance, criterios de aceptación y casos de prueba |
| `specs/<módulo>/AGENTS.md` | Navegas un módulo específico | Reglas y navegación dentro del módulo |
| `cambios/` | Revisas proposals o changes | Propuestas de cambio SDD |

## Reglas

- No implementar nada sin spec y criterios de aceptación.
- Mantener documentación breve, actualizada y en español argentino formal.
- No duplicar reglas globales si ya están en `AGENTS.md` raíz.
- Si falta información, marcarla como pendiente en vez de inventarla.