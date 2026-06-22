# Fixtures de dominio

Los fixtures de dominio contienen datos planos del modelo, sin wrapper de respuesta API.

## Qué significa "dominio plano"

Un fixture de dominio representa los datos de una entidad tal como se conciben en el modelo de negocio, sin el envelope de respuesta HTTP.

Ejemplo de fixture de dominio:

```json
{
  "estado": "valida",
  "alumno": { "nombre": "María", "apellido": "González", "dni": "40123456" },
  "curso": { "nombre": "Introducción a Sistemas Embebidos e Internet de las Cosas", "tipo": "Certificado de curso" },
  "certificacion": { "numero": "IFTS14-CUR-2026-0001", ... },
  "fechasPresentes": [...]
}
```

## Uso

- Frontend puede usar fixtures de dominio para prototipar pantallas sin depender del backend.
- Backend puede usar fixtures de dominio como modelo interno.
- Tests unitarios pueden comparar contra fixtures de dominio.

## Diferencia con fixtures API

Los fixtures API (`../api/`) envuelven los datos de dominio en un envelope `{ "ok": true, "datos": {...} }` o `{ "ok": false, "error": {...} }`.

Si estás consumiendo una respuesta HTTP, usá `fixtures/api/`. Si estás trabajando con el modelo de negocio directamente, usá `fixtures/dominio/`.

## Fixture de dominio vs fixture raíz

Los fixtures de dominio (`fixtures/dominio/`) son copias idénticas de los fixtures raíz (`fixtures/`). Ambos representan datos planos del modelo. La carpeta `dominio/` existe para diferenciar explícitamente el propósito. Los fixtures raíz se mantienen por compatibilidad con código existente.