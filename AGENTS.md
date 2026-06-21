# AGENTS.md — IFTS14 Certificados QR

## Propósito

Este archivo orienta a OpenCode/Gentle-AI y a cualquier asistente de código que trabaje en el repositorio.

## Lectura mínima

Antes de trabajar, leer:

1. `docs/00-indice-general.md`
2. el `AGENTS.md` de la carpeta donde se va a trabajar;
3. la spec correspondiente en `openspec/specs/`;
4. los fixtures si la tarea toca contratos de datos.

No leer todos los archivos del repositorio por defecto.

## Metodología

Trabajo con Spec-Driven Development y TDD.

Flujo obligatorio:

1. revisar spec;
2. revisar criterios de aceptación;
3. revisar fixtures/contratos;
4. proponer plan;
5. implementar cambios pequeños;
6. ejecutar pruebas disponibles;
7. hacer QA manual cuando corresponda;
8. actualizar documentación si cambió comportamiento;
9. proponer commit, no commitear automáticamente.

## Idioma y estilo

Toda documentación y comentario debe estar en español argentino formal.

Los comentarios deben ser útiles y breves. No comentar obviedades.

Correcto:

- "Valido el token antes de consultar datos personales."
- "Mantengo este adaptador separado para poder reemplazar mocks por HTTP."

Incorrecto:

- "Esta función hace una función."
- comentarios enormes que repiten el código;
- documentación desactualizada.

## Stack

El stack final es agnóstico por ahora.

Hay fuerte sospecha de Angular en frontend, pero no está confirmado. El backend también permanece agnóstico. Pueden existir ejemplos orientativos en Node/Express + Prisma/PostgreSQL, pero no son una decisión final.

## Reglas funcionales vigentes

- Solo existe link público por certificación: `/validar/:tokenCertificacion`.
- No hay perfil público del alumno en el MVP.
- El DNI completo se muestra cuando la certificación válida o revocada existe.
- Si el token no existe, no se muestran datos personales.
- El QR/token es permanente.
- Si se corrigen fechas/asistencias, se mantiene el mismo QR y se reenvía PDF/aviso.
- Solo se muestran asistencias presentes.
- La carga masiva queda documentada, no comprometida para el MVP.
- La demo usa datos ficticios.

## Git

Ramas sugeridas:

- `main`: demo estable y deploy del prototipo;
- `feature/<modulo>`: funcionalidades;
- `docs/<tema>`: documentación;
- `spec/<modulo>`: especificaciones.

No trabajar directo sobre `main`. Crear PR y revisar.

## Documentación viva

Si cambia una regla, contrato, fixture, pantalla, flujo o decisión técnica, se actualiza la documentación correspondiente.

## Cuidado con contexto y tokens

No abrir archivos largos si no son necesarios. Especialmente:

- `prototipos/prompts_stitch_v0_ifts14_certificaciones_v2_v0_flexible.md`;
- `.atl/skill-registry.md`.

Leerlos solo cuando la tarea lo requiere.
