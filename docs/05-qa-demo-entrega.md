# QA, demo y entrega

## Objetivo de QA

Verificar que un usuario externo pueda escanear el QR o abrir el link de certificación y confirmar la autenticidad de la constancia del alumno.

## QA público

### Certificación válida

1. Abrir `/validar/:tokenCertificacion`.
2. Verificar estado "Certificación válida".
3. Verificar nombre, DNI completo, curso, fechas presentes, número y fecha de emisión.
4. Escanear QR desde celular.
5. Confirmar que abre el mismo link.

Resultado esperado: la información coincide y se ve clara en mobile y desktop.

### Certificación revocada

1. Abrir token revocado.
2. Confirmar que no se muestra como válida.
3. Verificar que no se muestran fechas como vigentes.

### Token no encontrado

1. Abrir token inexistente.
2. Confirmar que no aparecen datos personales.

## QA admin

- login funcional;
- dashboard claro;
- curso con fechas;
- asistencia presente;
- emisión directa;
- PDF horizontal;
- email/reenvío;
- revocación;
- auditoría mínima.

## Definition of Done

Una funcionalidad está terminada si:

- respeta spec;
- pasa tests disponibles;
- pasa QA manual;
- no rompe contratos;
- documentación y fixtures actualizados;
- no expone datos sensibles;
- PR revisado;
- deploy verificado si aplica.

## Prioridad de QA

1. Validación por QR/link.
2. PDF horizontal.
3. Login admin.
4. Flujo curso → asistencia → certificación.
5. Envío/reenvío.
6. Revocación.
7. Deploy desde main.

## Demo al instituto

Guion recomendado:

1. Presentar problema y solución.
2. Mostrar certificado/PDF con QR.
3. Escanear QR.
4. Mostrar validación pública.
5. Mostrar panel admin.
6. Emitir/re’enviar una certificación demo.
7. Revocar una certificación demo.
8. Cerrar con pendientes post-MVP.
