# Mapa de migración

## Archivos consolidados principales

- `docs/01-contexto-alcance-decisiones.md` reemplaza:
  - `docs/01-contexto-y-objetivo.md`
  - `docs/02-alcance-mvp.md`
  - `docs/03-pendientes-institucionales.md`
  - parte de `docs/decisiones/*`

- `docs/02-requerimientos-reglas-negocio.md` reemplaza:
  - `docs/requerimientos/reglas-de-negocio.md`
  - `docs/requerimientos/historias-de-usuario.md`
  - `docs/requerimientos/criterios-de-aceptacion.md`

- `docs/03-arquitectura-contratos-datos.md` reemplaza:
  - parte de `docs/arquitectura/*`
  - resumen de contratos API/datos

- `docs/frontend/*` queda reducido a estrategia, pantallas, sistema visual, prompts índice y QA.

- `docs/backend/*` queda reducido a estrategia, contratos y TDD.

- `openspec/specs/<modulo>/spec.md` reemplaza:
  - `spec.md`
  - `criterios-aceptacion.md`
  - `casos-prueba.md`
  - `pendientes.md`
  - `contrato-datos.md` cuando existía.

## Archivo largo de prompts

El archivo completo de prompts se mantiene en:

`prototipos/prompts_stitch_v0_ifts14_certificaciones_v2_v0_flexible.md`

No se mantiene duplicado en `docs/frontend/`.
