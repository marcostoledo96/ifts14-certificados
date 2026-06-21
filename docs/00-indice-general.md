# Índice general de documentación

## Fuente de verdad

| Dominio | Fuente principal | Complemento |
|---------|----------------|-------------|
| Reglas funcionales | `02-requerimientos-reglas-negocio.md` | Specs en `openspec/specs/` |
| Contratos API | `docs/backend/01-contratos-api.md` | Fixtures en `fixtures/`, contratos en `packages/contratos/` |
| Pantallas y flujos | `docs/frontend/01-pantallas-flujos-ui.md` | Specs en `openspec/specs/frontend-pantallas/` |
| Arquitectura | `03-arquitectura-contratos-datos.md` | `docs/arquitectura/` |
| Decisions | `docs/decisiones/00-decisiones-confirmadas.md` | — |
| Operación | `docs/operacion/00-operacion-handoff.md` | `docs/deploy/`, `docs/post-mvp/` |

Ante conflicto entre un doc general y un spec, el spec tiene prioridad dentro de su dominio.

## Lectura mínima para cualquier tarea

1. `AGENTS.md` raíz.
2. `docs/01-contexto-alcance-decisiones.md`.
3. `docs/02-requerimientos-reglas-negocio.md`.
4. Spec correspondiente en `openspec/specs/`.

## Si la tarea es frontend

Leer:

- `docs/frontend/00-frontend-mvp.md`
- `docs/frontend/01-pantallas-flujos-ui.md`
- `docs/frontend/02-sistema-diseno-anti-cliches.md`
- `docs/frontend/04-qa-frontend.md`
- fixture relacionado en `fixtures/`

Leer el archivo completo de prompts solo si se va a trabajar en Stitch/v0:

- `prototipos/prompts_stitch_v0_ifts14_certificaciones_v2_v0_flexible.md`

## Si la tarea es backend

Leer:

- `docs/backend/00-backend-mvp.md`
- `docs/backend/01-contratos-api.md`
- `docs/backend/02-casos-uso-tdd.md`
- `docs/arquitectura/01-contratos-datos-api.md`
- fixture relacionado en `fixtures/`

## Si la tarea es PDF/QR

Leer:

- `docs/pdf-qr/00-pdf-qr-certificado.md`
- `fixtures/pdf-complementario-ejemplo.json`
- `openspec/specs/pdf-qr/spec.md`

## Si la tarea es QA/demo

Leer:

- `docs/qa/00-qa-demo-entrega.md`
- `docs/deploy/00-deploy-prototipo.md`
- `fixtures/demo/`

## Si la tarea es operación o entrega

Leer:

- `docs/operacion/00-operacion-handoff.md`
- `docs/tecnico/00-guia-mantenedor-opencode.md`
- `docs/post-mvp/00-etapa-2.md`

## Si la tarea usa OpenCode / Gentle-AI

Leer:

- `docs/opencode/00-guia-inicio-rapido.md`
- `docs/opencode/01-flujo-general-opencode-gentle-ai.md`
- `docs/opencode/02-mapa-ramas-funcionalidades.md`
- `docs/opencode/10-prompt-maestro-reutilizable.md`
- Archivo de prompts de la etapa correspondiente.

No leer todos los archivos de `docs/opencode/` por defecto. Solo el de inicio rápido y el de la etapa actual.

## Archivos que no se leen por defecto

- `.atl/skill-registry.md`: solo cuando se trabaja con skills.
- `prototipos/prompts_stitch_v0_ifts14_certificaciones_v2_v0_flexible.md`: solo cuando se diseñan pantallas en Stitch/v0.
