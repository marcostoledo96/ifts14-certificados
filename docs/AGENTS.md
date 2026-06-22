# AGENTS.md — docs

## Propósito

Carpeta raíz de documentación operativa del sistema de certificaciones QR.

## Archivos raíz para humanos

Antes de leer documentación técnica, consultar:

- `../../GUIA.md`: guía humana completa del proyecto.
- `../../MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`: prompts SDD para Marcos.
- `../../MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`: prompts SDD para Matías.

No leer los archivos de prompts completos por defecto. Solo abrirlos cuando la tarea sea ejecutar, revisar o modificar un ciclo SDD.

## Archivos y carpetas

| Archivo/carpeta | Leer cuando | Función |
|----------------|-------------|---------|
| `00-indice-general.md` | Antes de cualquier tarea | Mapa de lectura y fuente de verdad por dominio |
| `01-contexto-alcance-decisiones.md` | Necesitas contexto, alcance o decisiones | Visión general, alcance del MVP y decisiones confirmadas |
| `02-requerimientos-reglas-negocio.md` | Trabajas reglas funcionales | Reglas de negocio, historias y criterios de aceptación |
| `03-arquitectura-contratos-datos.md` | Trabajas arquitectura o datos | Arquitectura y contratos de datos |
| `04-glosario.md` | Necesitas definir términos | Glosario del proyecto |
| `04-planificacion-github-roadmap.md` | Planificas sprints o issues | Roadmap, sprints y GitHub Issues |
| `05-qa-demo-entrega.md` | Preparas QA o demo | Criterios de QA y Definition of Done |
| `06-operacion-handoff-postmvp.md` | Operación o handoff | Operación, handoff y etapa 2 |
| `arquitectura/` | Diseñas o revisas arquitectura | Detalle de arquitectura y contratos de datos/API |
| `backend/` | Implementas backend | MVP backend, contratos API y casos de uso TDD |
| `frontend/` | Implementas frontend | MVP frontend, pantallas, flujos y sistema de diseño |
| `pdf-qr/` | Trabajas generación de PDF/QR | Generación de certificados PDF con QR |
| `deploy/` | Despliegas el prototipo | Guía de deploy |
| `opencode/` | Usas OpenCode/Gentle-AI | Guías y prompts operativos por etapa |

## Reglas

- Mantener documentación breve, actualizada y en español argentino formal.
- No duplicar reglas globales si ya están en `AGENTS.md` raíz.
- Si falta información, marcarla como pendiente en vez de inventarla.
- Usar este directorio como fuente principal de documentación operativa.
