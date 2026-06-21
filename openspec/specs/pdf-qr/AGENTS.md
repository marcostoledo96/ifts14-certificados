# AGENTS.md — Spec PDF y QR

## Propósito

Spec de generación de certificados PDF con código QR embebido.

## Archivos

| Archivo | Leer cuando | Función |
|---------|-------------|---------|
| `spec.md` | Implementas o revisas este módulo | Objetivo, alcance, criterios de aceptación y casos de prueba |
| Docs relacionados | Necesitas contexto de PDF/QR | `docs/pdf-qr/00-pdf-qr-certificado.md` |
| Fixtures relacionados | Necesitas datos de ejemplo | `fixtures/certificacion-valida-con-pdf.json`, `fixtures/pdf-complementario-ejemplo.json` |

## Reglas de negocio

- El QR/token de certificación es permanente.
- Si se corrigen fechas/asistencias, se mantiene el mismo QR y se reenvía PDF/aviso.
- Solo se muestran asistencias presentes.

## Reglas de spec

- Mantener este spec enfocado: no agregar implementación sin criterios de aceptación.
- Si cambia una regla, actualizar docs relacionados.
- Mantener documentación en español argentino formal.