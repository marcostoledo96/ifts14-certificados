# AGENTS.md — Spec Validación Pública

## Propósito

Spec de la validación pública de certificaciones por token QR.

## Archivos

| Archivo | Leer cuando | Función |
|---------|-------------|---------|
| `spec.md` | Implementas o revisas este módulo | Objetivo, alcance, criterios de aceptación y casos de prueba |
| Docs relacionados | Necesitas contexto de validación | `docs/arquitectura/01-contratos-datos-api.md`, `AGENTS.md` raíz (sección Seguridad y privacidad) |
| Fixtures relacionados | Necesitas datos de ejemplo | `fixtures/certificacion-valida.json`, `fixtures/certificacion-no-encontrada.json`, `fixtures/certificacion-revocada.json` |

## Reglas de negocio

- La validación pública no requiere login.
- Solo usa token de certificación.
- No existe perfil público de alumno en el MVP.
- No mostrar datos personales si el token no existe.
- El DNI completo se muestra cuando la certificación válida o revocada existe.
- El QR/token de certificación es permanente.