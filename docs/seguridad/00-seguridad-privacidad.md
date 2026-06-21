# Seguridad y privacidad

## Datos sensibles

- DNI completo.
- Token de certificación.
- Email.
- Credenciales admin.

## Reglas

- No mostrar datos personales si token no existe.
- No guardar token público en texto plano si se implementa backend real.
- No loguear DNI completo ni token completo.
- Separar acción de revocación.
- Usar variables de entorno para secretos.
- No subir `.env`.
