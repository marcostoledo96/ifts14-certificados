# Arquitectura y contratos de datos

## Arquitectura recomendada

Arquitectura modular contract-first con Clean Architecture liviana en backend.

## Principios

- No atarse al stack hasta confirmar tecnología.
- Primero specs, contratos y fixtures.
- Frontend y backend trabajan contra los mismos contratos.
- El backend debe separar reglas de negocio de infraestructura.
- El frontend debe separar pantallas, servicios y mocks.

## Modelo conceptual

- Alumno.
- Curso.
- FechaCurso.
- Asistencia.
- Certificacion.
- EnvioCertificacion.
- Auditoria.
- UsuarioAdmin.

## Contrato público base

```json
{
  "estado": "valida",
  "alumno": {
    "nombre": "María",
    "apellido": "González",
    "dni": "40123456"
  },
  "curso": {
    "nombre": "Introducción a Sistemas Embebidos e Internet de las Cosas",
    "tipo": "Certificado de curso"
  },
  "certificacion": {
    "numero": "IFTS14-CUR-2026-0001",
    "fechaEmision": "2026-06-20",
    "codigoValidacionParcial": "QR-8F3A-92K"
  },
  "fechasPresentes": [
    "2026-06-05",
    "2026-06-12",
    "2026-06-19"
  ]
}
```

## Endpoints conceptuales

- `GET /validar/:tokenCertificacion`
- `POST /admin/login`
- `POST /admin/logout`
- `GET /admin/dashboard`
- `GET/POST/PATCH /admin/cursos`
- `GET/POST/PATCH /admin/alumnos`
- `POST /admin/asistencias`
- `POST /admin/certificaciones`
- `GET /admin/certificaciones/:id`
- `POST /admin/certificaciones/:id/reenviar`
- `POST /admin/certificaciones/:id/revocar`
- `GET /admin/certificaciones/:id/pdf`

## Reglas de error

- `TOKEN_NO_ENCONTRADO`: no mostrar datos personales.
- `CERTIFICACION_REVOCADA`: mostrar datos mínimos y estado revocado.
- `ERROR_TECNICO`: no culpar al usuario ni mostrar datos sensibles.
- `SIN_ASISTENCIAS_PRESENTES`: no permitir emisión.
- `EMAIL_NO_DISPONIBLE`: impedir o advertir según flujo definido.
