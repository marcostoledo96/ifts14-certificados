# Casos de uso y TDD

## Casos de uso

- ConsultarCertificacionPublica.
- EmitirCertificacion.
- RegistrarAsistenciasPresentes.
- ReenviarCertificacion.
- RevocarCertificacion.
- GenerarPdfCertificacion.
- EnviarEmailCertificacion.

## Tests iniciales

- token válido muestra datos y fechas presentes;
- token inexistente no muestra datos personales;
- revocada no aparece como válida;
- emitir sin asistencias presentes falla;
- modificar asistencia no cambia QR;
- reenvío mantiene el mismo QR;
- revocación exige motivo.
