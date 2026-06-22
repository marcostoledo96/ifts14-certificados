# SDD archive y mantenimiento de documentación

## Objetivo

Al finalizar cada ciclo SDD, revisar si la tarea cambió comportamiento, contrato, pantalla, fixture, ruta, endpoint, decisión o flujo. Si cambió, actualizar la documentación correspondiente antes de cerrar el ciclo.

## Regla principal

**No cierro un ciclo si cambió comportamiento y no actualicé la documentación correspondiente.**

## Cuándo aplicar sdd-archive

Aplicar al final de cada ciclo SDD, antes de proponer commit.

El ciclo no está terminado si:
- se modificó comportamiento y la spec no se actualizó;
- se cambió un contrato y el fixture no se actualizó;
- se agregó una ruta y el índice no se actualizó;
- se tomó una decisión y no se registró.

## Matriz de actualización por tipo de cambio

| Tipo de cambio | Archivos a revisar/actualizar |
|---|---|
| Cambio de regla funcional | `docs/02-requerimientos-reglas-negocio.md`, spec correspondiente en `openspec/specs/` |
| Cambio de ruta pública | `docs/frontend/01-pantallas-flujos-ui.md`, `docs/03-arquitectura-contratos-datos.md`, spec frontend |
| Cambio de API o endpoint | `docs/backend/01-contratos-api.md`, `packages/contratos/`, fixtures API, spec backend |
| Cambio de fixture o contrato de datos | `fixtures/`, `packages/contratos/`, spec relacionada |
| Cambio de UI pública | `docs/frontend/01-pantallas-flujos-ui.md`, `docs/frontend/02-sistema-diseno-anti-cliches.md`, spec frontend |
| Cambio de admin/UI interna | `docs/frontend/01-pantallas-flujos-ui.md`, spec correspondiente |
| Cambio de PDF o QR | `docs/pdf-qr/00-pdf-qr-certificado.md`, fixture PDF, spec PDF |
| Cambio de QA o demo | `docs/05-qa-demo-entrega.md` |
| Cambio de deploy o infra | `docs/deploy/00-deploy-prototipo.md`, `README.md` si cambia objetivo |
| Cambio de planificación | `docs/04-planificacion-github-roadmap.md`, `GUIA.md` si afecta guía humana |
| Cambio de decisión global | `docs/01-contexto-alcance-decisiones.md`, `AGENTS.md` si afecta reglas operativas |
| Creación o eliminación de archivos | `docs/00-indice-general.md` |
| Cambio de arquitectura o modelo | `docs/03-arquitectura-contratos-datos.md`, `docs/arquitectura/01-contratos-datos-api.md` |

## Checklist de cierre por ciclo

Al finalizar cada ciclo, responder explícitamente:

1. ¿Qué documentos revisé?
2. ¿Cuáles actualicé?
3. ¿Cuáles no actualicé y por qué?
4. ¿Queda deuda documental?

Si la respuesta a 4 es "sí", el ciclo no se cierra hasta saldar la deuda o documentarla como pendiente explícito.

## Qué NO actualizar

- No actualizar docs que no cambiaron en su comportamiento documentado.
- No reescribir secciones que siguen siendo correctas.
- No expandir alcance de documentación más allá de lo que cambió.
- No crear archivos nuevos si el contenido cabe en uno existente.

## Cómo registrar decisiones

Si se tomó una decisión que afecta al proyecto:

- Si es una decisión global (stack, regla de negocio, flujo): actualizar `docs/01-contexto-alcance-decisiones.md`.
- Si es una decisión técnica (patrón, estructura): actualizar `docs/03-arquitectura-contratos-datos.md` o la spec correspondiente.
- Si es una decisión operativa (proceso, flujo de trabajo): actualizar `AGENTS.md` o `GUIA.md`.

## Cómo evitar que la IA actualice docs innecesarias

- La IA solo debe actualizar docs que correspondan al tipo de cambio realizado.
- Si la IA no sabe qué doc actualizar, debe preguntar antes de modificar.
- No actualizar índices, glosarios o docs generales si el cambio es puntual y ya está reflejado en la doc específica.

## Relación con otros archivos

- `AGENTS.md`: define la regla general de documentación viva.
- `GUIA.md`: explica el proceso humano de cierre de ciclo.
- `docs/00-indice-general.md`: indica qué leer por tipo de tarea, incluyendo este archivo para cierre documental.
- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` y `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`: incluyen etapa sdd-archive explícita al final de cada ciclo.