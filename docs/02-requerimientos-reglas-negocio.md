# Requerimientos y reglas de negocio

## Regla central

Una certificación corresponde a un alumno y un curso. La validación pública muestra únicamente las fechas en las que ese alumno estuvo presente.

## Entidades funcionales

- Alumno.
- Curso.
- Fecha del curso.
- Asistencia presente.
- Certificación.
- PDF complementario.
- Envío/Reenvío.
- Auditoría.
- Usuario administrador.

## Reglas confirmadas

- No hay edición/cohorte en el MVP.
- Cada curso tiene diferentes fechas.
- Cada alumno puede estar presente en algunas fechas del curso.
- Solo se certifican y muestran asistencias presentes.
- No se muestran ausencias, justificadas ni porcentajes.
- El DNI completo se muestra en certificaciones válidas o revocadas existentes.
- Si el token no existe, no se muestran datos personales.
- El QR/token es permanente.
- Si se corrigen fechas o asistencias, se mantiene el mismo QR.
- Si se corrigen datos ya enviados, se reenvía PDF/aviso con el mismo QR.
- No hay borrador: la certificación se emite/envía directo.
- Bedelía puede crear, enviar, reenviar, revocar y corregir.
- Rectorado no aprueba en el MVP.

## Historias de usuario principales

### HU-01 Validar certificación por QR

Como usuario externo, quiero escanear un QR o abrir un link para verificar que una certificación fue emitida por el IFTS 14.

Criterios:

- token válido muestra estado válido;
- se muestran alumno, DNI completo, curso, fechas presentes, número y fecha de emisión;
- token inexistente no muestra datos personales;
- certificación revocada se muestra como revocada.

### HU-02 Registrar curso y fechas

Como Bedelía, quiero cargar un curso con fechas para luego registrar asistencias.

Criterios:

- se puede crear/editar curso;
- se pueden agregar/quitar fechas;
- si el curso tiene certificaciones enviadas, se avisa que puede requerir reenvío.

### HU-03 Registrar asistencias presentes

Como Bedelía, quiero marcar alumnos presentes en fechas del curso.

Criterios:

- solo se marca presente;
- no hay estados ausente/justificada;
- se advierte si una modificación afecta certificaciones enviadas.

### HU-04 Emitir certificación

Como Bedelía, quiero emitir y enviar una certificación directamente.

Criterios:

- se selecciona alumno y curso;
- se detectan fechas presentes;
- se genera QR permanente;
- se genera PDF;
- se envía al alumno;
- no hay estado borrador.

### HU-05 Reenviar certificación

Como Bedelía, quiero reenviar una certificación si se modificaron datos.

Criterios:

- se genera nuevo PDF si corresponde;
- el QR no cambia;
- queda registro de envío.

### HU-06 Revocar certificación

Como Bedelía, quiero revocar una certificación con motivo.

Criterios:

- la validación pública muestra revocada;
- no se muestra como vigente;
- la acción queda auditada.
