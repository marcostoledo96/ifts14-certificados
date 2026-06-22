# Contratos de datos y API

Los contratos viven también en `packages/contratos/` y `fixtures/`.

## Principio

Frontend y backend no deben inventar campos. Si cambia un contrato, se actualizan:

- documentación;
- fixtures;
- specs;
- tests.

## Contrato principal

Ver `packages/contratos/validacion-publica.contrato.json`.

## Errores

Ver `packages/contratos/errores-api.contrato.json`.

## Diferencia entre dominio y API

El modelo de negocio trabaja con datos planos (dominio). Las respuestas HTTP usan un envelope:

- **Dominio plano** (para modelo de negocio, tests unitarios, prototipado): `fixtures/dominio/` y raíz de `fixtures/`.
- **Respuesta API** (para consumo HTTP, tests de integración): `fixtures/api/`.

Ejemplo de dominio plano:

```json
{
  "estado": "valida",
  "alumno": { "nombre": "María", ... },
  "curso": { "nombre": "...", ... }
}
```

Ejemplo de respuesta API:

```json
{
  "ok": true,
  "datos": {
    "estado": "valida",
    "alumno": { "nombre": "María", ... },
    "curso": { "nombre": "...", ... }
  }
}
```

El frontend debe consumir respuestas API (con envelope). El backend debe devolver respuestas API (con envelope). El modelo de negocio puede trabajar con datos planos internamente.