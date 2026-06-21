# Planificación, GitHub y roadmap

## Fecha límite

15 de julio de 2026.

## Reviews

Cada miércoles se hará review de avance.

## Roadmap resumido

### Sprint 0 — Base documental

- estructura repo;
- AGENTS;
- specs;
- fixtures;
- issues;
- diseño de pantallas.

### Sprint 1 — Validación pública y PDF

- pantalla válida;
- pantalla no exitosa;
- PDF horizontal con QR;
- datos demo.

### Sprint 2 — Admin básico

- login;
- dashboard;
- cursos;
- fechas;
- asistencias;
- emisión;
- detalle certificación.

### Sprint 3 — Backend/API/PDF/email

- implementar contratos;
- generar QR;
- generar PDF;
- enviar email desde cuenta de prueba;
- revocar y reenviar.

### Sprint 4 — QA y demo

- deploy desde `main`;
- QA manual;
- guion demo;
- datos demo;
- documentación de handoff.

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
