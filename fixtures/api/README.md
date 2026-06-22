# Fixtures API

Los fixtures API contienen respuestas HTTP completas con el envelope `ok/datos` o `ok/error` que el backend devuelve.

## Qué significa "respuesta API"

Un fixture API representa la respuesta real que el endpoint devuelve, incluyendo el wrapper.

Ejemplo de fixture API (respuesta válida):

```json
{
  "ok": true,
  "datos": {
    "estado": "valida",
    "alumno": { "nombre": "María", "apellido": "González", "dni": "40123456" },
    ...
  }
}
```

Ejemplo de fixture API (respuesta de error):

```json
{
  "ok": false,
  "error": {
    "codigo": "TOKEN_NO_ENCONTRADO",
    "mensaje": "No pudimos encontrar una certificación asociada a este código."
  }
}
```

## Uso

- Frontend debe consumir fixtures API para simular el comportamiento real del backend.
- Tests de integración deben usar fixtures API para verificar el envelope.
- El contrato oficial está en `packages/contratos/validacion-publica.contrato.json`.

## Diferencia con fixtures de dominio

Los fixtures de dominio (`../dominio/`) contienen datos planos sin wrapper. Si estás trabajando con el modelo de negocio, usá dominio. Si estás consumiendo o probando una respuesta HTTP, usá API.

## Archivos

| Archivo | Descripción |
|---|---|
| `validacion-publica-valida.respuesta.json` | Respuesta API para certificación válida |
| `validacion-publica-revocada.respuesta.json` | Respuesta API para certificación revocada |
| `validacion-publica-no-encontrada.respuesta.json` | Respuesta API para token no encontrado |