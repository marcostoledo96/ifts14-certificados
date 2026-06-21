# AGENTS.md — docs/pdf-qr

## Propósito

Generación de certificados PDF con código QR.

## Archivos

| Archivo | Leer cuando | Función |
|---------|-------------|---------|
| `00-pdf-qr-certificado.md` | Generas certificados, QR o PDFs | Especificación de generación de PDF con QR embebido |

## Reglas de negocio

- El QR/token de certificación es permanente.
- Si cambian fechas o asistencias, se mantiene el mismo QR y se reenvía PDF.
- Solo se muestran asistencias presentes.
- Mantener documentación breve, actualizada y en español argentino formal.
- No duplicar reglas globales si ya están en `AGENTS.md` raíz.
- Si falta información, marcarla como pendiente en vez de inventarla.