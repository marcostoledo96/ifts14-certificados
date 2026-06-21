# 03 — Prompts Etapa 0: Kickoff del repo, documentación e issues

## Objetivo de la etapa

Preparar el repo para trabajar ordenadamente con OpenCode/Gentle-AI, GitHub Issues, SDD y TDD.

## Rama sugerida

```bash
git checkout -b docs/opencode-runbook
```

## Funcionalidades de esta etapa

- Revisar estructura del repo.
- Validar documentación consolidada.
- Crear o revisar issues iniciales.
- Confirmar que no falta documentación bloqueante.
- Preparar trabajo por ramas.

---

## Prompt 0.1 — Auditar documentación actual

```txt
Usá modo plan. No edites archivos.

Quiero auditar la documentación actual del repo `ifts14-certificados` antes de empezar desarrollo.

Leé solo:
- AGENTS.md
- README.md
- docs/00-indice-general.md
- docs/01-contexto-alcance-decisiones.md
- docs/02-requerimientos-reglas-negocio.md
- docs/03-arquitectura-contratos-datos.md
- openspec/00-indice-specs.md si existe

Objetivo:
- confirmar si la documentación permite empezar;
- detectar contradicciones;
- detectar archivos faltantes;
- detectar si hay documentación duplicada o demasiado extensa;
- proponer ajustes mínimos.

No modifiques nada.
Respondé con:
1. estado general;
2. archivos revisados;
3. problemas encontrados;
4. cambios recomendados;
5. qué rama usarías;
6. qué issue crearías.
```

---

## Prompt 0.2 — Crear issues desde backlog existente

```txt
Usá modo plan. No edites archivos.

Necesito preparar GitHub Issues para el MVP.

Leé:
- docs/planificacion/issues-github-frontend.md
- docs/planificacion/issues-github-backend.md
- docs/planificacion/issues-github-qa-demo.md
- docs/planificacion/issues-github-operacion-handoff.md si existe

Objetivo:
- agrupar issues duplicados;
- priorizar hasta el 15 de julio;
- separar por responsable: Marcos / compañero / ambos;
- proponer labels;
- proponer orden de creación.

Respondé con una tabla:
- código de issue;
- título;
- rama sugerida;
- responsable;
- prioridad;
- depende de;
- checklist corto.

No crees issues automáticamente.
```

---

## Prompt 0.3 — Revisar readiness antes de desarrollo

```txt
Usá modo plan.

Revisá si estamos listos para empezar desarrollo frontend con fixtures y sin backend real.

Leé:
- AGENTS.md
- docs/frontend/00-frontend-mvp.md
- docs/frontend/01-pantallas-flujos-ui.md
- docs/frontend/02-sistema-diseno-anti-cliches.md
- fixtures/certificacion-valida.json
- fixtures/certificacion-revocada.json

Decime:
1. si falta algo para iniciar frontend;
2. si los fixtures alcanzan;
3. qué pantalla conviene implementar primero;
4. qué tests o QA manual se deben preparar;
5. qué rama usar.

No edites archivos.
```

---

## Prompt 0.4 — Generar resumen para compañero backend

```txt
Usá modo plan. No edites archivos.

Necesito un resumen operativo para mi compañero, que va a trabajar backend.

Leé:
- AGENTS.md
- docs/backend/00-backend-mvp.md
- docs/backend/01-contratos-api.md
- docs/backend/02-casos-uso-tdd.md
- docs/arquitectura/01-contratos-datos-api.md
- fixtures/

Respondé con:
- qué debe leer primero;
- qué NO debe asumir;
- endpoints prioritarios;
- reglas de negocio críticas;
- fixtures que debe respetar;
- orden de ramas backend;
- primera tarea backend recomendada.

No modifiques archivos.
```
