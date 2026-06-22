# Documentación del proyecto

Documentación operativa del sistema de certificaciones QR del IFTS N.° 14.

## Archivos raíz para humanos

Antes de entrar en documentación técnica, leer:

- `GUIA.md` (raíz del repo): guía humana completa del proyecto.
- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` (raíz): prompts SDD para Marcos.
- `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` (raíz): prompts SDD para Matías.

## Archivos centrales

- `00-indice-general.md`: mapa de lectura y fuente de verdad por dominio.
- `01-contexto-alcance-decisiones.md`: visión, alcance, decisiones y pendientes.
- `02-requerimientos-reglas-negocio.md`: reglas funcionales, historias y criterios.
- `03-arquitectura-contratos-datos.md`: arquitectura y contratos.
- `04-glosario.md`: glosario de términos del proyecto.
- `04-planificacion-github-roadmap.md`: roadmap, sprints, GitHub Issues y ramas.
- `05-qa-demo-entrega.md`: QA, demo y Definition of Done.
- `06-operacion-handoff-postmvp.md`: operación, handoff y etapa 2.

## Subcarpetas

Cada subcarpeta mantiene su `AGENTS.md` para orientar tareas específicas:

- `arquitectura/`: detalle de arquitectura y contratos de datos/API.
- `backend/`: MVP backend, contratos API y casos de uso TDD.
- `frontend/`: MVP frontend, pantallas, flujos y sistema de diseño.
- `pdf-qr/`: generación de certificados PDF con QR.
- `deploy/`: guía de deploy.
- `opencode/`: guías y prompts operativos por etapa.
