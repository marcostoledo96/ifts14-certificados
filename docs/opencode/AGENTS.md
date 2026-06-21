# AGENTS.md — docs/opencode

## Propósito

Esta carpeta contiene guías y prompts para ejecutar tareas en OpenCode/Gentle-AI.

## Reglas para la IA

- No ejecutar todos los prompts de una vez.
- No leer todos los archivos de esta carpeta por defecto.
- Leer primero `00-guia-inicio-rapido.md` y luego el archivo correspondiente a la etapa actual.
- Mantener las respuestas en español argentino formal.
- No commitear automáticamente.
- Proponer plan, cambios y mensaje de commit.
- Si una tarea modifica comportamiento, pedir actualizar documentación/specs/fixtures.

## Cuándo leer cada archivo

- Inicio del proyecto: `00-guia-inicio-rapido.md`.
- Nueva funcionalidad: `10-prompt-maestro-reutilizable.md` + archivo de etapa.
- Organización Git: `02-mapa-ramas-funcionalidades.md`.
- Cierre de PR: `08-prompts-revision-y-pr.md`.
- GitHub Issues: `09-guia-issues-github.md`.

## Límite importante

Estos prompts son guías operativas. La fuente de verdad del producto sigue siendo:

- `AGENTS.md` raíz;
- `docs/00-indice-general.md`;
- specs en `openspec/specs/`;
- fixtures en `fixtures/`.
