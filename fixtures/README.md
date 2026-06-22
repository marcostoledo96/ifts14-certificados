# Fixtures

Los fixtures son datos ficticios que funcionan como contrato temporal entre frontend y backend.

No deben contener datos reales de alumnos.

## Estructura

Los fixtures se organizan en dos tipos:

| Tipo | Carpeta | Formato | Uso principal |
|---|---|---|---|
| Dominio (plano) | `fixtures/dominio/` y raíz | Datos del modelo sin wrapper | Prototipado, modelo de negocio, tests unitarios |
| API (respuesta) | `fixtures/api/` | `{ "ok": true, "datos": {...} }` o `{ "ok": false, "error": {...} }` | Consumo HTTP, tests de integración, frontend |

### Diferencia clave

- **Fixture de dominio**: representa la entidad tal como se concibe en el modelo. Ejemplo: `fixtures/certificacion-valida.json` o `fixtures/dominio/certificacion-valida.json`.
- **Fixture API**: representa la respuesta HTTP real del backend, con envelope. Ejemplo: `fixtures/api/validacion-publica-valida.respuesta.json`.

El contrato oficial de la API está en `packages/contratos/validacion-publica.contrato.json` y usa formato API (con wrapper `ok/datos`).

Los fixtures raíz (`fixtures/certificacion-valida.json`, etc.) se mantienen por compatibilidad con código existente. Los nuevos fixtures deben crearse en `fixtures/dominio/` o `fixtures/api/` según corresponda.

## Uso

- Frontend: renderiza pantallas sin depender del backend. Usá fixtures API para simular respuestas reales.
- Backend: implementa respuestas compatibles con fixtures API.
- QA: valida estados esperados.
- IA: evita inventar estructuras de datos nuevas.

## Regla

Si cambia un fixture, debe actualizarse:

- spec correspondiente;
- contrato de datos;
- criterios de aceptación;
- pruebas relacionadas.