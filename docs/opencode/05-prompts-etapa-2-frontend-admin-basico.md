# 05 — Prompts Etapa 2: Frontend admin básico

## Objetivo de la etapa

Implementar o prototipar las pantallas administrativas básicas del MVP hasta la Parte B:

- Login admin.
- Dashboard.
- Crear/editar curso con fechas.
- Registrar asistencias presentes.
- Emitir certificación directa.
- Detalle de certificación.

## Ramas sugeridas

```bash
git checkout -b frontend/admin-login-dashboard
git checkout -b frontend/cursos-fechas
git checkout -b frontend/asistencias
git checkout -b frontend/certificaciones-admin
```

---

## Prompt 2.1 — Planificar login y dashboard

```txt
Usá modo plan. No edites archivos.

Tarea: planificar login administrativo y dashboard de Bedelía.

Leé:
- docs/frontend/00-frontend-mvp.md
- docs/frontend/01-pantallas-flujos-ui.md
- docs/frontend/02-sistema-diseno-anti-cliches.md
- fixtures/dashboard-admin.json
- openspec/specs/admin/spec.md

Objetivo:
- login funcional o mock según estado del backend;
- dashboard como mesa de trabajo de Bedelía;
- acciones antes que métricas;
- datos ficticios.

Respondé con:
1. pantallas/componentes;
2. ruta propuesta;
3. datos mock;
4. QA manual;
5. riesgos;
6. commit sugerido.
```

---

## Prompt 2.2 — Implementar login y dashboard

```txt
Implementá login administrativo y dashboard según el plan aprobado.

Reglas:
- Login debe apuntar a MVP funcional, aunque inicialmente use mock.
- No implementar Google Login ni 2FA.
- Dashboard debe sentirse como mesa de trabajo de Bedelía.
- No dashboard SaaS genérico.
- Acciones principales: Nuevo curso, Cargar asistencias, Nueva certificación, Reenviar certificado, Carga masiva.
- Usar datos ficticios.
- No commitear automáticamente.

Al terminar:
- listá archivos modificados;
- explicá cómo probar;
- indicá pendientes backend;
- proponé commit.
```

---

## Prompt 2.3 — Planificar cursos y fechas

```txt
Usá modo plan. No edites archivos.

Tarea: planificar pantallas de cursos y fechas.

Leé:
- docs/frontend/01-pantallas-flujos-ui.md
- openspec/specs/cursos-fechas/spec.md
- fixtures/curso-con-fechas.json
- docs/02-requerimientos-reglas-negocio.md

Pantallas:
- listado de cursos;
- crear curso;
- editar curso;
- detalle de curso.

Reglas:
- No existe edición/cohorte.
- Curso tiene fechas.
- Se pueden agregar o quitar fechas.
- Si se modifican fechas de curso con certificados enviados, se debe marcar para reenvío.

Respondé con plan, componentes, rutas y QA.
```

---

## Prompt 2.4 — Implementar cursos y fechas

```txt
Implementá las pantallas de cursos y fechas con datos mock.

Reglas:
- Listado de cursos con buscador y filtros básicos.
- Crear/editar curso con fechas.
- Detalle de curso con fechas, presentes y certificaciones asociadas si hay datos mock.
- Mostrar aviso si cambios requieren reenvío.
- No usar calendario complejo.
- No introducir edición/cohorte.
- Mantener diseño de archivo académico institucional.

Al finalizar:
- listá archivos modificados;
- indicá cómo probar flujos;
- proponé QA manual;
- proponé commit.
```

---

## Prompt 2.5 — Planificar registro de asistencias

```txt
Usá modo plan. No edites archivos.

Tarea: planificar registro de asistencias presentes.

Leé:
- openspec/specs/alumnos-asistencias/spec.md
- fixtures/alumno-con-asistencias.json
- fixtures/curso-con-fechas.json
- docs/frontend/01-pantallas-flujos-ui.md

Reglas:
- Solo estado presente.
- No mostrar ausente.
- No mostrar justificada.
- No porcentaje.
- Si se modifica asistencia ya certificada, requiere reenvío con mismo QR.

Respondé con:
- estructura de tabla/lista;
- ruta;
- componentes;
- estado de cambios sin guardar;
- QA manual.
```

---

## Prompt 2.6 — Implementar registro de asistencias

```txt
Implementá la pantalla de registro de asistencias presentes con datos mock.

Reglas:
- Optimizar para PC/notebook.
- Debe parecer planilla institucional mejorada, no Excel desordenado.
- Selector de fecha.
- Buscador de alumno.
- Control Presente.
- Resumen de presentes y cambios sin guardar.
- Aviso si afecta certificados ya enviados.

Al terminar:
- listá archivos modificados;
- indicá casos manuales de prueba;
- proponé commit.
```

---

## Prompt 2.7 — Planificar certificaciones admin

```txt
Usá modo plan. No edites archivos.

Tarea: planificar emisión directa y detalle de certificación.

Leé:
- openspec/specs/certificaciones/spec.md
- fixtures/certificacion-valida.json
- docs/frontend/01-pantallas-flujos-ui.md
- docs/pdf-qr/00-pdf-qr-certificado.md

Pantallas:
- Nueva certificación.
- Detalle de certificación.
- Enviar/reenviar.
- Revocar.

Reglas:
- No hay borrador.
- Emisión directa.
- QR permanente.
- PDF se regenera si hay cambios.
- Reenvío usa mismo QR.
- Revocación separada y auditada.

Respondé con plan y QA.
```

---

## Prompt 2.8 — Implementar certificaciones admin

```txt
Implementá emisión directa y detalle de certificación con datos mock.

Reglas:
- Nueva certificación: seleccionar alumno + curso, mostrar fechas presentes y acción Emitir y enviar.
- Detalle: datos alumno, curso, fechas, QR/link, PDF, envío, reenvío, revocación.
- No agregar perfil público de alumno.
- No agregar borrador.
- Acción Revocar debe estar separada visualmente.
- Reenvío debe aclarar que el QR sigue igual.

Al finalizar:
- listá archivos modificados;
- indicá flujo de prueba;
- indicá QA manual;
- proponé commit.
```
