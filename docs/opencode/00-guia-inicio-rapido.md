# 00 — Guía de inicio rápido para OpenCode

## Objetivo

Esta guía indica cómo empezar a trabajar en el repositorio `ifts14-certificados` con OpenCode/Gentle-AI, sin que la IA lea todo el repo ni improvise funcionalidades.

## Estado corroborado del repo

El repositorio ya tiene documentación base, `AGENTS.md`, índice general, reglas funcionales y guía técnica mínima. Esta guía agrega prompts detallados por etapa.

## Primeros pasos manuales

```bash
git clone https://github.com/marcostoledo96/ifts14-certificados.git
cd ifts14-certificados
```

Crear una rama para la tarea que se vaya a trabajar (no trabajar directo sobre `main`):

```bash
git checkout -b feature/<modulo>
```

Este paquete ya está integrado en el repositorio. Lectura recomendada:

```txt
docs/opencode/README_PAQUETE.md
docs/opencode/00-guia-inicio-rapido.md
docs/opencode/01-flujo-general-opencode-gentle-ai.md
```

## Setup recomendado con Gentle-AI

Dentro del proyecto, abrir OpenCode y ejecutar primero:

```txt
/sdd-init
```

Después, si instalaste skills o cambiaste documentación importante:

```bash
gentle-ai skill-registry refresh
```

Si querés revisar el estado del ecosistema:

```bash
gentle-ai doctor
```

## Primer prompt para OpenCode

Usar con agente `plan` o `gentle-orchestrator`, sin permitir ediciones todavía.

```txt
Estoy iniciando el proyecto `ifts14-certificados`.

Antes de modificar archivos, analizá el repositorio con lectura mínima y bajo consumo de contexto.

Leé solamente:
- AGENTS.md
- README.md
- docs/00-indice-general.md
- docs/01-contexto-alcance-decisiones.md
- docs/02-requerimientos-reglas-negocio.md
- docs/opencode/00-guia-inicio-rapido.md

Objetivo:
1. Confirmar que entendés el objetivo del MVP.
2. Confirmar que no se debe asumir stack final.
3. Confirmar que el link público del MVP es `/validar/:tokenCertificacion`.
4. Confirmar que la demo usa datos ficticios.
5. Confirmar que OpenCode no debe commitear automáticamente.
6. Proponer el orden de trabajo inicial sin modificar archivos.

Respondé con:
- resumen del proyecto;
- archivos leídos;
- riesgos detectados;
- primera rama recomendada;
- primer issue recomendado;
- próximos pasos.
```

## Resultado esperado

OpenCode debería responder con un plan, no con cambios de código.

Si intenta modificar archivos antes de planificar, frenarlo y pedirle que use modo `plan`.
