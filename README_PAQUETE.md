# Paquete — Guía de prompts para OpenCode / Gentle-AI

Este paquete agrega una guía operativa para ejecutar el proyecto `ifts14-certificados` en OpenCode con metodología **Spec-Driven Development + TDD**.

No reemplaza la documentación existente. La complementa con prompts listos para copiar y pegar, separados por etapa, rama y funcionalidad.

## Objetivo

Ayudar a Marcos y a su compañero a trabajar con OpenCode sin que la IA improvise, lea archivos innecesarios o se salga del alcance del MVP.

## Cómo aplicarlo

Copiar la carpeta `docs/opencode/` dentro del repositorio.

Lectura recomendada:

1. `docs/opencode/00-guia-inicio-rapido.md`
2. `docs/opencode/01-flujo-general-opencode-gentle-ai.md`
3. `docs/opencode/02-mapa-ramas-funcionalidades.md`
4. El archivo de prompts de la etapa que se vaya a ejecutar.

## Reglas principales

- Usar primero agente `plan` o `gentle-orchestrator` para revisar y planificar.
- No pedir implementación hasta tener spec, fixture y criterio de aceptación revisados.
- Trabajar por rama de funcionalidad.
- OpenCode debe proponer commits, no hacerlos automáticamente.
- Toda tarea que cambie comportamiento debe actualizar documentación.
- Mantener comentarios y documentación en español argentino formal.

## Archivos incluidos

| Archivo | Uso |
|---|---|
| `00-guia-inicio-rapido.md` | Dónde empezar y primer prompt para OpenCode. |
| `01-flujo-general-opencode-gentle-ai.md` | Flujo estándar de trabajo con Plan/Build/SDD/TDD. |
| `02-mapa-ramas-funcionalidades.md` | Ramas sugeridas por funcionalidad y orden de trabajo. |
| `03-prompts-etapa-0-kickoff-repo.md` | Prompts para validar documentación, issues y entorno inicial. |
| `04-prompts-etapa-1-validacion-publica-pdf.md` | Prompts para pantallas públicas, QR y PDF. |
| `05-prompts-etapa-2-frontend-admin-basico.md` | Prompts para admin básico hasta Parte B del MVP. |
| `06-prompts-etapa-3-backend-contratos-tdd.md` | Prompts backend agnóstico con ejemplos Node/Express/Prisma. |
| `07-prompts-etapa-4-integracion-qa-demo.md` | Prompts para integración, QA y demo al instituto. |
| `08-prompts-revision-y-pr.md` | Prompts de revisión, QA, PR y cierre de rama. |
| `09-guia-issues-github.md` | Cómo crear y usar GitHub Issues con estos prompts. |
| `10-prompt-maestro-reutilizable.md` | Prompt base para cualquier sesión de OpenCode. |
| `AGENTS.md` | Orientación local para IA dentro de `docs/opencode/`. |
