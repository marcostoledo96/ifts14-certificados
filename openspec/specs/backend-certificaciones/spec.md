# Spec consolidada — backend-certificaciones

## Spec

# Spec — Backend — Certificaciones

## Resumen

Emisión, detalle, reenvío y revocación de certificaciones.

## Alcance MVP

- Mantener comportamiento documentado.
- No asumir stack final.
- Respetar contratos de `docs/backend/03-contratos-api-mvp.md`.
- Usar datos ficticios en fixtures y demo.

## Fuera de alcance

- Integración final con la web oficial.
- Carga masiva definitiva.
- 2FA.
- Google login.
- Perfil público del alumno.

## Dependencias

- Decisiones MVP confirmadas.
- Contratos de datos.
- Fixtures.
- Plan de QA/TDD.

---

## Criterios de aceptación

# Criterios de aceptación — Backend — Certificaciones

- Debe respetar los contratos documentados.
- Debe tener tests o casos de prueba asociados.
- Debe evitar exponer datos personales cuando no corresponde.
- Debe mantener el QR permanente.
- Debe actualizar documentación si cambia comportamiento.
- Debe ser verificable con fixtures ficticios.

---

## Casos de prueba

# Casos de prueba — Backend — Certificaciones

## Casos mínimos

1. Caso exitoso según contrato.
2. Error de validación.
3. Recurso no encontrado.
4. Permiso insuficiente si aplica.
5. Verificación de que no se exponen datos sensibles indebidamente.

## QA manual

- Ejecutar flujo principal.
- Comparar respuesta contra fixture.
- Revisar logs.
- Confirmar documentación actualizada.

---

## Pendientes

# Pendientes — Backend — Certificaciones

- Confirmar stack final.
- Confirmar proveedor de email.
- Confirmar almacenamiento/generación de PDF.
- Confirmar estrategia de sesión/auth según tecnología.
- Confirmar restricciones del deploy final institucional.
