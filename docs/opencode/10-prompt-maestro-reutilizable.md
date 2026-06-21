# 10 — Prompt maestro reutilizable para OpenCode

Usar este prompt como base para cualquier tarea.

```txt
Estamos trabajando en el repositorio `ifts14-certificados`.

Metodología:
- Spec-Driven Development.
- TDD cuando exista implementación.
- Documentación viva.
- GitHub Issues.
- OpenCode + Gentle-AI.

Reglas del proyecto:
- No asumir stack final.
- Frontend sospechado Angular, pero no confirmado.
- Backend agnóstico, con ejemplos posibles en Node/Express + Prisma/PostgreSQL.
- El MVP se muestra como prototipo externo.
- Deploy estable desde main.
- Datos demo ficticios.
- Link público único: `/validar/:tokenCertificacion`.
- No hay perfil público del alumno.
- DNI completo visible si la certificación existe.
- Si el token no existe, no mostrar datos personales.
- QR permanente.
- Si cambian fechas/asistencias, se reenvía PDF con el mismo QR.
- Solo se muestran asistencias presentes.
- OpenCode no debe commitear automáticamente.

Tarea actual:
[NOMBRE DE LA TAREA]

Rama sugerida:
[NOMBRE DE RAMA]

Documentación mínima a leer:
- AGENTS.md
- docs/00-indice-general.md
- AGENTS.md de la carpeta relacionada
- openspec/specs/[MODULO]/spec.md
- fixtures/[FIXTURE].json si aplica

Primero trabajá en modo plan:
1. Confirmá que entendiste la tarea.
2. Listá archivos a leer.
3. Listá archivos a tocar.
4. Detectá riesgos y preguntas bloqueantes.
5. Proponé plan mínimo.
6. Indicá tests y QA.
7. Indicá documentación que habría que actualizar.

No modifiques archivos hasta que apruebe el plan.
```

## Versión para implementación después de aprobar plan

```txt
Aprobé el plan anterior.

Implementá la tarea `[NOMBRE]` en la rama `[RAMA]`.

Reglas:
- Cambios pequeños.
- No modificar alcance no pedido.
- No inventar funcionalidades.
- No cambiar contratos sin actualizar fixtures/docs.
- Mantener español argentino formal en documentación y comentarios.
- Ejecutar tests o indicar por qué no se pueden ejecutar.
- Hacer QA manual sugerido si aplica.
- No commitear automáticamente.

Al finalizar, respondé con:
- archivos modificados;
- resumen de cambios;
- tests ejecutados;
- QA manual pendiente;
- documentación actualizada;
- mensaje de commit sugerido;
- próximos pasos.
```
