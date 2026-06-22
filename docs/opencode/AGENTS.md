# AGENTS.md — docs/opencode

## Propósito

Esta carpeta contiene guías operativas para ejecutar tareas en OpenCode/Gentle-AI.

Los prompts vigentes por ciclos SDD están en los archivos raíz del repositorio:

- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`
- `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`

## Reglas para la IA

- No ejecutar todos los prompts de una vez.
- No leer todos los archivos de esta carpeta por defecto.
- Leer primero `00-guia-inicio-rapido.md` y luego el archivo correspondiente a la tarea actual.
- Los prompts operativos por etapas (03 a 08) fueron eliminados; usar los archivos raíz.
- Mantener las respuestas en español argentino formal.
- No commitear automáticamente.
- Proponer plan, cambios y mensaje de commit.
- Si una tarea modifica comportamiento, pedir actualizar documentación/specs/fixtures.
- Al cerrar cada ciclo, completar la etapa sdd-archive (ver `docs/07-sdd-archive-y-mantenimiento-documentacion.md`).

## Cuándo leer cada archivo

- Inicio del proyecto: `00-guia-inicio-rapido.md`.
- Nueva funcionalidad: `10-prompt-maestro-reutilizable.md` + archivo de prompts raíz (Marcos o Matías).
- Organización Git: `02-mapa-ramas-funcionalidades.md`.
- GitHub Issues: `09-guia-issues-github.md`.
- Cierre de ciclo SDD: `docs/07-sdd-archive-y-mantenimiento-documentacion.md`.

## Límite importante

Estos prompts son guías operativas. La fuente de verdad del producto sigue siendo:

- `AGENTS.md` raíz;
- `docs/00-indice-general.md`;
- specs en `openspec/specs/`;
- fixtures en `fixtures/`.