# Spec consolidada — pdf-qr

## Spec

# Spec — PDF horizontal con QR

## Objetivo

Como Bedelía, quiero generar y enviar un certificado horizontal con QR para que el alumno pueda compartirlo y terceros puedan validar su autenticidad en línea.

## Alcance MVP

El PDF debe:

- parecerse mucho al certificado actual del IFTS N.° 14;
- ser horizontal;
- incluir logos institucionales o placeholders;
- incluir nombre, apellido y DNI completo;
- incluir curso;
- incluir fechas asistidas;
- incluir número de certificado;
- incluir QR permanente;
- incluir link escrito de validación;
- incluir placeholders de firma/sello;
- poder regenerarse sin cambiar QR.

## Fuera de alcance

- firma digital avanzada;
- edición visual de plantillas desde el panel;
- múltiples plantillas;
- generación con datos reales de alumnos en demo;
- integración definitiva con web oficial.

## Reglas de negocio

1. El QR de una certificación es permanente.
2. El PDF puede regenerarse si cambian asistencias o fechas.
3. El PDF regenerado debe conservar el mismo QR.
4. El PDF debe mostrar solo fechas presentes.
5. El PDF no debe mostrar ausencias ni porcentajes.
6. El PDF no debe inventar firmas ni logos.
7. El PDF de demo debe usar datos ficticios.

---

## Criterios de aceptación

# Criterios de aceptación — PDF/QR

## PDF generado correctamente

- Dado un alumno con certificación válida,
- cuando Bedelía genera el PDF,
- entonces el PDF muestra nombre, DNI, curso, fechas presentes, número de certificado, QR y link de validación.

## Diseño institucional

- Dado el PDF generado,
- cuando se visualiza,
- entonces mantiene orientación horizontal y una estética alineada al certificado real del IFTS N.° 14.

## Fechas presentes

- Dado un alumno con algunas asistencias presentes,
- cuando se genera el PDF,
- entonces se muestran solo esas fechas presentes.

## QR permanente

- Dado un PDF ya enviado,
- cuando se modifican fechas/asistencias y se regenera el PDF,
- entonces el QR y el link público se mantienen.

## Placeholders

- Dado que todavía no hay assets finales,
- cuando se genera el PDF de prototipo,
- entonces se muestran placeholders claros para logos, firmas y sello sin inventar datos reales.

## Datos ficticios

- Dado que el prototipo no usa datos reales,
- cuando se muestra la demo,
- entonces todos los datos del alumno son ficticios.

---

## Casos de prueba

# Casos de prueba — PDF/QR

## Caso 1 — PDF válido

Dado un alumno ficticio con certificación válida y tres fechas presentes, cuando genero el PDF, entonces el documento incluye las tres fechas y no incluye fechas ausentes.

## Caso 2 — QR estable

Dado un PDF ya generado, cuando se modifica una asistencia y se regenera el PDF, entonces el link y QR siguen siendo los mismos.

## Caso 3 — Link visible

Dado un PDF generado, cuando se visualiza, entonces el link escrito de validación aparece junto al QR.

## Caso 4 — Logos pendientes

Dado que aún no tengo assets oficiales separados, cuando genero la vista preliminar, entonces aparecen placeholders de logos claramente identificados.

## Caso 5 — Firma placeholder

Dado que la firma real no está confirmada, cuando genero el PDF de prototipo, entonces no se inventan firmas y se muestran placeholders.

## Caso 6 — Datos ficticios

Dado que se trata de una demo, cuando genero el PDF, entonces se usan datos ficticios y no datos reales de alumnos.

---

## Pendientes

# Pendientes — PDF/QR

- Conseguir logos institucionales en PNG/SVG.
- Confirmar texto institucional definitivo.
- Confirmar nombres y cargos de autoridades.
- Confirmar si habrá sello real.
- Confirmar formato final de número de certificado.
- Confirmar librería/tecnología para generación real de PDF según stack final.
- Confirmar si el PDF se guarda o se genera bajo demanda.
- Confirmar si el alumno recibe PDF adjunto, link o ambos.
