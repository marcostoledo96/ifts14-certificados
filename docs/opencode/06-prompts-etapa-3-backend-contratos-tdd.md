# 06 — Prompts Etapa 3: Backend agnóstico, contratos y TDD

## Objetivo de la etapa

Guiar al backend sin asumir stack final. Se pueden usar ejemplos de Node/Express + Prisma/PostgreSQL, pero solo como orientación si el prototipo externo avanza por ese camino.

## Ramas sugeridas

```bash
git checkout -b backend/base-api
git checkout -b backend/auth-admin
git checkout -b backend/validacion-publica
git checkout -b backend/cursos-asistencias
git checkout -b backend/certificaciones
git checkout -b backend/pdf-qr-email
```

---

## Prompt 3.1 — Planificar backend base

```txt
Usá modo plan. No edites archivos.

Tarea: planificar estructura backend agnóstica del MVP.

Leé:
- AGENTS.md
- docs/backend/00-backend-mvp.md
- docs/backend/01-contratos-api.md
- docs/backend/02-casos-uso-tdd.md
- docs/backend/03-seguridad-privacidad.md si existe
- docs/arquitectura/01-contratos-datos-api.md

Objetivo:
- proponer estructura backend sin atarse a stack;
- indicar cómo sería si usamos Node/Express + Prisma/PostgreSQL;
- definir orden de casos de uso;
- definir primer set de tests TDD.

Respondé con:
1. estructura agnóstica;
2. ejemplo Node/Express opcional;
3. contratos prioritarios;
4. tests iniciales;
5. riesgos;
6. rama sugerida.
```

---

## Prompt 3.2 — Implementar backend base si se confirma prototipo separado

```txt
Implementá backend base solo si ya confirmamos trabajar el prototipo separado.

Reglas:
- Mantener arquitectura liviana.
- No sobreingeniería.
- Health endpoint.
- Manejo estándar de errores.
- Configuración por variables de entorno.
- No secretos en repo.
- Tests mínimos si hay framework definido.
- Documentar comandos reales si se agregan.

Si el stack todavía no está confirmado, no implementes; dejá solo plan detallado.
```

---

## Prompt 3.3 — Planificar validación pública API

```txt
Usá modo plan. No edites archivos.

Tarea: planificar contrato backend de validación pública por token.

Leé:
- openspec/specs/backend-validacion-publica/spec.md
- openspec/specs/validacion-publica/spec.md
- fixtures/certificacion-valida.json
- fixtures/certificacion-revocada.json
- fixtures/certificacion-no-encontrada.json
- docs/backend/01-contratos-api.md

Reglas:
- Token válido muestra datos.
- Token revocado muestra estado revocado.
- Token inexistente no muestra datos personales.
- DNI completo solo si certificación existe.
- QR/token permanente.

Respondé con endpoint, response JSON, errores, tests TDD y QA.
```

---

## Prompt 3.4 — Implementar validación pública API

```txt
Implementá el endpoint de validación pública por token según contrato aprobado.

Reglas:
- No exponer datos si token no existe.
- No loguear token completo ni DNI completo.
- Separar caso válido, revocado, no encontrado y error técnico.
- Agregar tests primero o junto con implementación.
- Mantener nombres y comentarios en español argentino formal cuando corresponda.
- Actualizar fixtures/docs si cambia contrato.

Al terminar:
- listá archivos modificados;
- tests ejecutados;
- riesgos;
- commit sugerido.
```

---

## Prompt 3.5 — Planificar cursos, fechas y asistencias backend

```txt
Usá modo plan. No edites archivos.

Tarea: planificar backend de cursos, fechas y asistencias presentes.

Leé:
- openspec/specs/cursos-fechas/spec.md
- openspec/specs/alumnos-asistencias/spec.md
- fixtures/curso-con-fechas.json
- fixtures/alumno-con-asistencias.json
- docs/02-requerimientos-reglas-negocio.md

Reglas:
- No edición/cohorte.
- Curso tiene fechas.
- Asistencia es alumno + fecha del curso.
- Solo se registra/muestra presente.
- Modificar asistencia certificada requiere reenvío.

Respondé con modelo conceptual, endpoints, tests TDD y riesgos.
```

---

## Prompt 3.6 — Planificar certificaciones, PDF, QR y email

```txt
Usá modo plan. No edites archivos.

Tarea: planificar backend para emitir, reenviar y revocar certificaciones.

Leé:
- openspec/specs/certificaciones/spec.md
- openspec/specs/pdf-qr/spec.md
- openspec/specs/envio-email/spec.md
- docs/pdf-qr/00-pdf-qr-certificado.md
- fixtures/certificacion-valida-con-pdf.json
- fixtures/pdf-complementario-ejemplo.json

Reglas:
- Emisión directa.
- No borrador.
- QR/token permanente.
- PDF horizontal similar al certificado real.
- Email debe funcionar aunque sea con cuenta de prueba.
- Reenvío usa mismo QR.
- Revocación requiere motivo.

Respondé con casos de uso, endpoints, tests TDD y QA.
```
