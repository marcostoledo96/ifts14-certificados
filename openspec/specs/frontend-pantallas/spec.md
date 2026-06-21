# Spec consolidada — frontend-pantallas

## Spec

# Spec — Frontend y pantallas

## Objetivo

Definir el alcance frontend del MVP de certificaciones QR del IFTS N.° 14.

## Alcance MVP

El MVP frontend debe cubrir:

- validación pública válida;
- validación pública no exitosa;
- login administrativo;
- dashboard admin;
- creación/edición de curso con fechas;
- registro de asistencias presentes;
- emisión directa de certificación;
- detalle de certificación;
- vista previa del PDF complementario.

## Alcance complementario

Quedan como complementarias:

- listado de cursos;
- detalle de curso;
- listado de certificaciones;
- envío/reenvío como modal separado;
- revocación como modal separado;
- carga masiva;
- listado/detalle de alumnos;
- auditoría;
- configuración institucional.

## Reglas

- Las pantallas públicas deben parecer folio técnico institucional.
- Las pantallas admin deben parecer mesa de trabajo de Bedelía.
- No debe existir perfil público de alumno.
- El QR público apunta solo a `/validar/:tokenCertificacion`.
- El DNI completo se muestra en certificación válida.
- Token inexistente no muestra datos personales.

---

## Criterios de aceptación

# Criterios de aceptación — Frontend y pantallas

## Generales

- Cada pantalla tiene ruta conceptual documentada.
- Cada pantalla tiene fixture o datos mock.
- Cada pantalla tiene criterios de aceptación específicos.
- Cada pantalla respeta identidad visual.
- Cada pantalla contempla mobile/desktop según prioridad.
- Cada pantalla evita clichés de IA.

## Público

- La validación válida comunica confianza institucional.
- La validación no exitosa no expone datos indebidamente.
- Los estados son comprensibles para usuarios no técnicos.

## Admin

- El dashboard prioriza acciones.
- El registro de asistencias es rápido en PC.
- La emisión directa no usa borrador.
- El detalle de certificación separa acciones normales de revocación.
- El PDF se ve alineado al certificado real.

---

## Casos de prueba

# Casos de prueba — Frontend y pantallas

## Caso 1 — Validación válida

Dado un fixture de certificación válida,
cuando se renderiza `/validar/:tokenCertificacion`,
entonces se muestran alumno, DNI completo, curso, fechas presentes, número, fecha de emisión y estado válido.

## Caso 2 — Token inexistente

Dado un fixture de certificación no encontrada,
cuando se renderiza `/validar/:tokenCertificacion`,
entonces no se muestran datos personales.

## Caso 3 — Certificación revocada

Dado un fixture de certificación revocada,
cuando se renderiza la pantalla pública,
entonces el estado revocado queda claro y no se muestra como vigente.

## Caso 4 — Dashboard admin

Dado un fixture de dashboard,
cuando se renderiza `/admin/dashboard`,
entonces las acciones principales se ven antes que métricas secundarias.

## Caso 5 — Asistencias

Dado un fixture de alumnos y fechas,
cuando Bedelía marca presentes,
entonces solo se usa estado presente y se muestra aviso si afecta certificados enviados.

## Caso 6 — PDF preview

Dado un fixture de PDF complementario,
cuando se renderiza la preview,
entonces el diseño es horizontal, incluye QR, DNI, fechas y número de certificado.

---

## Pendientes

# Pendientes — Frontend y pantallas

- Confirmar tecnología final de la web oficial.
- Confirmar si se implementará prototipo Angular o solo referencia exportable.
- Conseguir logos oficiales separados en PNG/SVG.
- Confirmar versión final del texto institucional del PDF.
- Definir si la carga masiva tendrá pantalla navegable o solo placeholder.
- Confirmar si auditoría y configuración entran antes o después del 15 de julio.
