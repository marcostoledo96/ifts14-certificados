# Planificación, GitHub y roadmap

## Fecha límite

15 de julio de 2026.

## Reviews

Cada miércoles se hace review de avance.

## Plan activo de ejecución

### Semana 1 — Validación pública, PDF preview, contratos base

Foco:

- organizar ejecución;
- completar specs críticas;
- iniciar frontend público (validación válida);
- iniciar backend base/validación pública;
- iniciar contratos backend;
- preparar datos demo iniciales.

Ramas sugeridas:

- `frontend/validacion-publica`
- `frontend/pdf-preview`
- `spec/backend-contratos`
- `backend/base-api`
- `backend/validacion-publica`
- `docs/opencode-runbook`

### Semana 2 — Admin básico, cursos, asistencias, certificaciones

Foco:

- login y dashboard admin;
- cursos y fechas;
- asistencias presentes;
- certificaciones admin;
- contratos backend;
- integración parcial frontend/backend si aplica.

Ramas sugeridas:

- `frontend/admin-login-dashboard`
- `frontend/cursos-fechas`
- `frontend/asistencias`
- `frontend/certificaciones-admin`
- `backend/cursos-asistencias`
- `backend/certificaciones`
- `backend/auth-admin-auditoria`

### Semana 3 — Backend/PDF/QR/email, QA, datos demo y deploy

Foco:

- PDF horizontal y QR permanente;
- email funcional o simulado;
- datos demo definitivos;
- QA integral;
- deploy del prototipo;
- preparación de demo institucional.

Ramas sugeridas:

- `backend/pdf-qr`
- `backend/email-datos-demo`
- `backend/qa-release-support`
- `frontend/integracion-mocks-qa`
- `deploy/main-demo`
- `qa/datos-demo`
- `qa/checklist-demo`

Los detalles operativos por persona y ciclo están en los archivos de prompts:

- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`
- `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`

## Trabajo previo ya realizado

Antes de las 3 semanas de ejecución, se completó:

- estructura del repo;
- AGENTS.md y reglas operativas;
- specs iniciales;
- fixtures ficticios;
- guía humana;
- prompts SDD por persona;
- índice general de documentación;
- guía de cierre documental (sdd-archive).

## Git

Ramas sugeridas:

- `main`: demo estable;
- `feature/<modulo>`;
- `docs/<tema>`;
- `spec/<modulo>`;
- `fix/<problema>`.

## Issues iniciales

Crear issues por módulo:

- `DOC`: documentación y decisiones.
- `SPEC`: especificaciones.
- `FE`: frontend.
- `BE`: backend.
- `PDF`: PDF/QR.
- `QA`: pruebas.
- `DEP`: deploy.
- `OP`: operación/handoff.

Cada issue debe tener criterio de aceptación y checklist.