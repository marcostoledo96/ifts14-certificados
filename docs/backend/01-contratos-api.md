# Contratos API MVP

## Público

`GET /validar/:tokenCertificacion`

Estados:

- válida;
- revocada;
- no encontrada;
- error técnico.

## Admin

- `POST /admin/login`
- `GET /admin/dashboard`
- `POST /admin/cursos`
- `PATCH /admin/cursos/:id`
- `POST /admin/asistencias`
- `POST /admin/certificaciones`
- `GET /admin/certificaciones/:id`
- `POST /admin/certificaciones/:id/reenviar`
- `POST /admin/certificaciones/:id/revocar`
- `GET /admin/certificaciones/:id/pdf`

## Reglas

No devolver datos personales cuando el token no existe. No registrar DNI ni token completo en logs.
