# Paquete — Guía de prompts para OpenCode / Gentle-AI

Este paquete agrega una guía operativa para ejecutar el proyecto `ifts14-certificados` en OpenCode con metodología **Spec-Driven Development + TDD**.

No reemplaza la documentación existente. La complementa con prompts listos para copiar y pegar, separados por ciclo y funcionalidad.

## Objetivo

Ayudar a Marcos y Matías a trabajar con OpenCode sin que la IA improvise, lea archivos innecesarios o se salga del alcance del MVP.

## Prompts operativos vigentes

Los prompts operativos vigentes para ejecutar ciclos SDD están en los archivos raíz del repositorio:

- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` — prompts por ciclos para Marcos (frontend, diseño, QA, deploy).
- `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` — prompts por ciclos para Matías (backend, contratos, TDD).

**No usar los archivos antiguos de etapas 03 a 08.** Esos prompts fueron reemplazados por los archivos raíz. Si se necesitan como referencia histórica, están eliminados del repo activo.

## Cómo aplicarlo

Este paquete ya está integrado en el repositorio, dentro de `docs/opencode/`.

Lectura recomendada:

1. `docs/opencode/00-guia-inicio-rapido.md`
2. `docs/opencode/01-flujo-general-opencode-gentle-ai.md`
3. `docs/opencode/02-mapa-ramas-funcionalidades.md`
4. El archivo de prompts de la persona correspondiente (Marcos o Matías) en raíz del repo.

## Reglas principales

- Usar primero agente `plan` o `gentle-orchestrator` para revisar y planificar.
- No pedir implementación hasta tener spec, fixture y criterio de aceptación revisados.
- Trabajar por rama de funcionalidad.
- OpenCode debe proponer commits, no hacerlos automáticamente.
- Toda tarea que cambie comportamiento debe actualizar documentación.
- Al cerrar cada ciclo, completar la etapa sdd-archive (ver `docs/07-sdd-archive-y-mantenimiento-documentacion.md`).
- Mantener comentarios y documentación en español argentino formal.

## Archivos incluidos

| Archivo | Uso |
|---|---|
| `README_PAQUETE.md` | Este archivo. Resumen del paquete y lectura recomendada. |
| `00-guia-inicio-rapido.md` | Dónde empezar y primer prompt para OpenCode. |
| `01-flujo-general-opencode-gentle-ai.md` | Flujo estándar de trabajo con Plan/Build/SDD/TDD. |
| `02-mapa-ramas-funcionalidades.md` | Ramas sugeridas por funcionalidad y orden de trabajo. |
| `09-guia-issues-github.md` | Cómo crear y usar GitHub Issues con estos prompts. |
| `10-prompt-maestro-reutilizable.md` | Prompt base para cualquier sesión de OpenCode. |
| `AGENTS.md` | Orientación local para IA dentro de `docs/opencode/`. |

Los archivos de prompts por etapas (03 a 08) fueron eliminados porque los prompts vigentes están en los archivos raíz del repo.