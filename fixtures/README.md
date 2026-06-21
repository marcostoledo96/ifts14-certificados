# Fixtures

Los fixtures son datos ficticios que funcionan como contrato temporal entre frontend y backend.

No deben contener datos reales de alumnos.

## Uso

- Frontend: renderiza pantallas sin depender del backend.
- Backend: implementa respuestas compatibles.
- QA: valida estados esperados.
- IA: evita inventar estructuras de datos nuevas.

## Regla

Si cambia un fixture, debe actualizarse:

- spec correspondiente;
- contrato de datos;
- criterios de aceptación;
- pruebas relacionadas.
