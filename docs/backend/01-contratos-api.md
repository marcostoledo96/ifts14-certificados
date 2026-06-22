# Contratos API MVP

## Público

`GET /validar/:tokenCertificacion`

Estados:

- válida;
- revocada;
- no encontrada;
- error técnico.

### Formato de respuesta

Todas las respuestas usan un envelope:

**Respuesta exitosa:**

```json
{
  "ok": true,
  "datos": {
    "estado": "valida",
    "alumno": { "nombre": "María", "apellido": "González", "dni": "40123456" },
    "curso": { "nombre": "...", "tipo": "..." },
    "certificacion": { "numero": "...", "fechaEmision": "...", "codigoValidacionParcial": "..." },
    "fechasPresentes": ["...", "...", "..."],
    "consulta": { "fechaHora": "..." }
  }
}
```

**Respuesta de error:**

```json
{
  "ok": false,
  "error": {
    "codigo": "TOKEN_NO_ENCONTRADO",
    "mensaje": "No pudimos encontrar una certificación asociada a este código."
  }
}
```

El contrato completo está en `packages/contratos/validacion-publica.contrato.json`.

Los fixtures de respuesta API están en `fixtures/api/`.

Los fixtures de dominio (datos planos sin envelope) están en `fixtures/dominio/` y en la raíz de `fixtures/`.

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

- No devolver datos personales cuando el token no existe.
- No registrar DNI ni token completo en logs.
- Todas las respuestas API usan envelope `ok/datos` o `ok/error`.
- Los fixtures de dominio (`fixtures/dominio/` y raíz) son datos planos sin envelope.
- Los fixtures API (`fixtures/api/`) incluyen el envelope.