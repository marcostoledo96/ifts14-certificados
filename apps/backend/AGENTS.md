# AGENTS.md — Backend

## Propósito de esta carpeta

Esta carpeta alojará la implementación backend cuando se confirme la tecnología final o cuando se decida avanzar con el prototipo externo.

Hasta ese momento, debo tratar esta carpeta como una zona preparada para implementación, no como una decisión de stack cerrada.

## Reglas obligatorias

- No debo asumir una tecnología final si no está confirmada.
- Si se implementa el prototipo externo, puedo usar los ejemplos documentados de Node.js/Express/Prisma/PostgreSQL únicamente como referencia aprobada para prototipo.
- Debo respetar los contratos de `docs/backend/01-contratos-api.md`.
- Debo respetar los fixtures definidos en `fixtures/` y `packages/contratos/`.
- No debo cambiar nombres de campos sin actualizar documentación, specs, fixtures y casos de prueba.
- Debo escribir documentación y comentarios en español argentino formal.
- Los comentarios deben ser útiles y amigables, no excesivos ni obvios.
- No debo registrar DNI completo en logs.
- No debo exponer datos personales cuando un token no existe.
- El QR/token de certificación es permanente.
- Si cambian fechas o asistencias, se debe regenerar/re’enviar PDF con el mismo QR.
- La carga masiva queda documentada, pero no comprometida para el MVP.

## Flujo de trabajo

Antes de implementar debo leer:

1. `docs/backend/00-indice-backend.md`
2. `docs/backend/01-contratos-api.md`
3. `docs/backend/04-casos-uso.md`
4. `docs/backend/08-tdd-backend.md`
5. `openspec/specs/backend-api/`

Después debo:

1. confirmar spec;
2. escribir o actualizar tests esperados;
3. implementar el mínimo necesario;
4. ejecutar pruebas;
5. hacer QA manual si corresponde;
6. actualizar documentación;
7. proponer commit, sin commitear automáticamente.

## Estilo de nombres

Usar español para:

- variables;
- funciones;
- casos de uso;
- modelos de dominio;
- DTOs conceptuales;
- errores de negocio;
- documentación.

Se permiten nombres en inglés cuando sean convención técnica evidente, por ejemplo:

- middleware;
- endpoint;
- request;
- response;
- schema;
- migration;
- seed;
- token.
