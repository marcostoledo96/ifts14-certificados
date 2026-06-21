# Pantallas y flujos UI

## Públicas

- `/validar/:tokenCertificacion`: válida, revocada, no encontrada, error técnico.
- PDF horizontal con QR.

## Admin básico

- `/admin/login`
- `/admin/dashboard`
- `/admin/cursos`
- `/admin/cursos/nuevo`
- `/admin/cursos/:id/editar`
- `/admin/cursos/:id/asistencias`
- `/admin/certificaciones/nueva`
- `/admin/certificaciones/:id`

## Flujo principal

Bedelía entra → crea curso → agrega fechas → registra presentes → emite certificación → genera PDF/QR → envía → usuario externo valida por QR.
