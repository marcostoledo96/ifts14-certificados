# Marcos — Prompts SDD por ciclos, GitHub y deploy

Esta guía es para que Marcos ejecute el proyecto `ifts14-certificados` en OpenCode/Gentle-AI durante 3 semanas, sin sobrecargar contexto y manteniendo un ciclo SDD completo por cada tarea.

## Reglas generales para Marcos

- Rol principal: arquitectura, planificación, documentación, frontend, diseño visual, QA visual y deploy.
- El deploy lo ejecuta Marcos.
- Los prompts de Google Stitch y v0 se mantienen en archivos separados.
- En esta guía, la tarea de frontend consiste en tomar diseños ya aprobados desde `pagina_muestra/` y portarlos a Angular + Tailwind, respetando la identidad visual.
- OpenCode no debe hacer commit, push ni merge automáticamente. Debe proponer comandos y Marcos los ejecuta manualmente, salvo que Marcos indique lo contrario.
- Cada ciclo debe trabajar en una rama propia.
- Cada ciclo debe cerrar con documentación actualizada, resumen y mensaje de commit sugerido.
- Cada ciclo debe cerrar con la etapa sdd-archive: revisar explícitamente si corresponde actualizar documentación según `docs/07-sdd-archive-y-mantenimiento-documentacion.md`.
- `main` representa demo estable y deploy del prototipo.
- No se trabaja directo sobre `main`.
- Los PR se abren hacia `main`.
- Se recomienda squash merge cuando el PR esté revisado.

## Flujo GitHub estándar para cada ciclo

Antes de empezar cada ciclo:

```bash
git checkout main
git pull origin main
git checkout -b <rama-del-ciclo>
```

Durante el ciclo:

```txt
1. Pegar el prompt del ciclo en OpenCode/Gentle-AI.
2. Pedir plan SDD.
3. Revisar el plan humano.
4. Autorizar implementación.
5. Ejecutar tests/validaciones.
6. Hacer QA manual.
7. Pedir resumen y commit sugerido.
```

Al cerrar el ciclo:

```bash
git status
git add .
git commit -m "<mensaje-sugerido>"
git push -u origin <rama-del-ciclo>
```

Crear PR:

```bash
gh pr create --base main --head <rama-del-ciclo> --title "<titulo>" --body "<descripcion>"
```

Merge:

```bash
# Solo después de revisar que cumple Definition of Done.
gh pr merge --squash --delete-branch

git checkout main
git pull origin main
```

Si el ciclo no está terminado, abrir PR como draft o dejar la rama sin mergear.

## Etapa sdd-archive por ciclo

Antes de cerrar cada ciclo, revisá explícitamente si corresponde actualizar documentación.

La guía completa está en `docs/07-sdd-archive-y-mantenimiento-documentacion.md`.

Respondé:

1. ¿Qué documentos revisaste?
2. ¿Cuáles actualizaste?
3. ¿Cuáles no actualizaste y por qué?
4. ¿Queda deuda documental?

No cerrar el ciclo si cambió comportamiento y no se actualizó la documentación correspondiente.

---

# Semana 1 — Base frontend pública y PDF

## Ciclo M1-01 — Preparar documentación de ejecución y issues iniciales

**Rama:** `docs/opencode-runbook`  
**Tipo:** documentación / planificación  
**Merge:** sí, cuando la guía quede clara y no rompa nada.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para preparar la documentación operativa de ejecución con OpenCode/Gentle-AI.

Rol:
Sos asistente de planificación técnica. No implementes código de producto.

Objetivo del ciclo:
Dejar el repositorio listo para trabajar por ciclos SDD, con prompts, issues iniciales y reglas claras para Marcos y Matías.

Rama de trabajo esperada:
docs/opencode-runbook

Lectura mínima:
- AGENTS.md
- README.md
- docs/00-indice-general.md
- docs/01-contexto-alcance-decisiones.md
- docs/opencode/00-guia-inicio-rapido.md, si existe
- docs/opencode/01-flujo-general-opencode-gentle-ai.md, si existe
- docs/opencode/02-mapa-ramas-funcionalidades.md, si existe

No leas todo el repositorio.

Tareas SDD:
1. Verificá que el objetivo del MVP esté claro.
2. Verificá que se indique que el stack sigue agnóstico, con sospecha de Angular para frontend.
3. Verificá que el prototipo se despliega externo y no integrado a la web oficial en esta etapa.
4. Verificá que main sea demo estable/deploy.
5. Verificá que OpenCode no deba commitear automáticamente.
6. Revisá si falta una guía clara de ejecución por ciclos.
7. Si falta, creala o ajustala en docs/opencode/.
8. Proponé primera tanda de GitHub Issues para iniciar el proyecto.

Reglas:
- Documentación en español argentino formal.
- Documentación breve y útil.
- No duplicar contenido que ya exista.
- No crear archivos enormes.
- Si agregás archivos, actualizá el índice correspondiente.

Al finalizar:
- Listá archivos leídos.
- Listá archivos modificados.
- Explicá qué cambió.
- Indicá si hay documentación pendiente.
- Proponé mensaje de commit.
- Proponé comandos GitHub para subir rama y crear PR.
- No hagas commit, push ni merge automáticamente.

Comandos esperados al cerrar, para Marcos:

git status
git add .
git commit -m "docs(opencode): preparar guía de ejecución por ciclos"
git push -u origin docs/opencode-runbook
gh pr create --base main --head docs/opencode-runbook --title "docs(opencode): guía de ejecución por ciclos" --body "Agrega guía operativa para trabajar el MVP con OpenCode/Gentle-AI por ciclos SDD."

Merge recomendado:
Hacer squash merge a main solo después de revisar la guía.
```

## Ciclo M1-02 — Portar validación pública válida desde `pagina_muestra/`

**Rama:** `frontend/validacion-publica`  
**Tipo:** frontend público  
**Merge:** sí, si la pantalla queda usable con datos mock y QA visual básico.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar la pantalla pública de certificación válida tomando como referencia la carpeta pagina_muestra/.

Rol:
Sos asistente frontend Angular + Tailwind, pero recordá que el stack final todavía puede cambiar. Si el proyecto frontend aún no existe, proponé la estructura mínima antes de crearla.

Objetivo del ciclo:
Portar el diseño aprobado desde pagina_muestra/ a una pantalla funcional de validación pública válida.

Rama de trabajo esperada:
frontend/validacion-publica

Ruta conceptual:
/validar/:tokenCertificacion

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/01-contexto-alcance-decisiones.md
- docs/02-requerimientos-reglas-negocio.md
- docs/frontend/00-frontend-mvp.md
- docs/frontend/01-pantallas-flujos-ui.md
- docs/frontend/02-sistema-diseno-anti-cliches.md
- openspec/specs/validacion-publica/spec.md
- fixtures/certificacion-valida.json
- pagina_muestra/ únicamente para copiar composición visual aprobada

No leas todos los prompts de Stitch/v0 salvo que sea imprescindible.

Tareas SDD:
1. Confirmá el alcance funcional de la pantalla.
2. Confirmá datos obligatorios: estado válido, alumno, DNI completo, curso, número, fecha de emisión, fechas presentes, código parcial y footer institucional.
3. Revisá pagina_muestra/ y extraé decisiones visuales principales.
4. Proponé plan de componentes.
5. Implementá la pantalla con datos mock.
6. Evitá copiar React/v0 literalmente si termina siendo Angular.
7. Mantené identidad de folio técnico institucional.
8. Asegurá responsive mobile 360/390/430 y desktop.
9. Evitá cards genéricas, badges genéricos, glassmorphism, blobs, gradientes decorativos e íconos innecesarios.
10. Actualizá documentación frontend si cambió estructura o ruta.

Validaciones:
- Ejecutar lint/build si existen scripts.
- Si no existen scripts, indicar que no están disponibles.
- QA manual: revisar mobile, desktop, contraste y ausencia de overflow.

Al finalizar:
- Listá archivos leídos.
- Listá archivos modificados.
- Indicá cómo probar la pantalla.
- Indicá tests o validaciones ejecutadas.
- Indicá QA manual pendiente.
- Proponé mensaje de commit.
- Proponé comandos GitHub para subir rama y crear PR.
- No hagas commit, push ni merge automáticamente.

Comandos esperados al cerrar, para Marcos:

git status
git add .
git commit -m "frontend(validacion): implementar pantalla publica valida"
git push -u origin frontend/validacion-publica
gh pr create --base main --head frontend/validacion-publica --title "frontend(validacion): pantalla pública válida" --body "Implementa la pantalla pública de certificación válida usando pagina_muestra como referencia visual y datos mock."

Merge recomendado:
Hacer squash merge a main solo si la pantalla carga, respeta fixture y pasa QA visual básico.
```

## Ciclo M1-03 — Vista previa PDF horizontal con QR

**Rama:** `frontend/pdf-preview`  
**Tipo:** frontend/PDF preview  
**Merge:** sí, si queda alineado al certificado real y no rompe la app.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar una vista previa del PDF horizontal con QR.

Rol:
Sos asistente frontend orientado a documento institucional. No generes PDF real todavía si no existe backend; implementá preview visual con datos mock.

Objetivo del ciclo:
Crear una vista previa horizontal del PDF complementario, parecido al certificado real del IFTS 14, con QR, link escrito, DNI completo, fechas presentes, número de certificado y placeholders de firma/sello/autoridad.

Rama de trabajo esperada:
frontend/pdf-preview

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/01-contexto-alcance-decisiones.md
- docs/pdf-qr/00-pdf-qr-certificado.md
- openspec/specs/pdf-qr/spec.md
- fixtures/pdf-complementario-ejemplo.json
- pagina_muestra/ si contiene diseño de PDF o referencia visual aprobada

Tareas SDD:
1. Confirmá decisiones del PDF: horizontal, parecido al certificado real, variante con QR.
2. Confirmá campos obligatorios.
3. Confirmá que firma/sello/autoridad son placeholders.
4. Diseñá/implementá preview visual imprimible.
5. Integrá QR placeholder y link escrito.
6. Mostrá fechas presentes como registro claro.
7. No inventes logos si no hay assets; usar placeholders documentados.
8. No hacer diploma genérico ni certificado decorativo.
9. Actualizá documentación si se agrega ruta o componente de preview.

Validaciones:
- Verificar desktop y export visual de la preview.
- Verificar que en mobile se pueda revisar, aunque el PDF sea horizontal.
- Ejecutar scripts disponibles.

Al finalizar:
- Listá archivos modificados.
- Explicá cómo probar preview.
- Indicá si faltan assets oficiales.
- Proponé mensaje de commit.
- Proponé comandos GitHub para subir rama y crear PR.
- No hagas commit, push ni merge automáticamente.

Comandos esperados al cerrar, para Marcos:

git status
git add .
git commit -m "frontend(pdf): agregar preview horizontal con qr"
git push -u origin frontend/pdf-preview
gh pr create --base main --head frontend/pdf-preview --title "frontend(pdf): preview horizontal con QR" --body "Agrega vista previa del PDF complementario horizontal con QR, link escrito y placeholders institucionales."

Merge recomendado:
Squash merge a main cuando la preview esté revisada visualmente.
```

---

# Semana 2 — Admin básico

## Ciclo M2-01 — Login y dashboard admin

**Rama:** `frontend/admin-login-dashboard`  
**Tipo:** frontend admin  
**Merge:** sí, si permite demo del acceso y mesa de trabajo.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar login administrativo y dashboard inicial.

Rol:
Sos asistente frontend. El diseño debe sentirse como mesa de trabajo de Bedelía, no dashboard SaaS.

Objetivo del ciclo:
Crear pantallas admin básicas para login y dashboard, usando datos mock y respetando la identidad institucional.

Rama de trabajo esperada:
frontend/admin-login-dashboard

Rutas conceptuales:
/admin/login
/admin/dashboard

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/frontend/00-frontend-mvp.md
- docs/frontend/01-pantallas-flujos-ui.md
- docs/frontend/02-sistema-diseno-anti-cliches.md
- openspec/specs/login-admin/spec.md
- openspec/specs/admin/spec.md
- fixtures/dashboard-admin.json
- pagina_muestra/ si contiene diseños aprobados de login/dashboard

Tareas SDD:
1. Confirmá alcance: login funcional de prototipo y dashboard de Bedelía.
2. Implementá login con datos mock o flujo simulado si backend no existe.
3. Implementá dashboard con acciones principales antes que métricas.
4. Acciones: Nuevo curso, Cargar asistencias, Nueva certificación, Reenviar certificado, Carga masiva.
5. Resumen operativo y pendientes.
6. No agregar Google login, 2FA ni recuperación compleja.
7. Actualizá docs si se agregan rutas/componentes.

Validaciones:
- Verificar desktop prioritario y mobile usable.
- Verificar que no parezca dashboard SaaS.
- Ejecutar scripts disponibles.

Al finalizar:
- Listá cambios.
- Explicá cómo probar login/dashboard.
- Proponé commit.
- Proponé comandos GitHub.
- No hagas commit, push ni merge automáticamente.

Comandos esperados:

git status
git add .
git commit -m "frontend(admin): implementar login y dashboard inicial"
git push -u origin frontend/admin-login-dashboard
gh pr create --base main --head frontend/admin-login-dashboard --title "frontend(admin): login y dashboard inicial" --body "Implementa login administrativo y dashboard inicial para Bedelía con datos mock."

Merge recomendado:
Squash merge cuando login/dashboard estén navegables y QA visual aprobado.
```

## Ciclo M2-02 — Cursos y fechas

**Rama:** `frontend/cursos-fechas`  
**Tipo:** frontend admin  
**Merge:** sí, si deja armado flujo de cursos/fechas.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar pantallas de cursos y fechas.

Objetivo:
Crear el flujo admin para listar cursos, crear/editar curso y administrar fechas del curso con datos mock.

Rama:
frontend/cursos-fechas

Rutas conceptuales:
/admin/cursos
/admin/cursos/nuevo
/admin/cursos/:id/editar
/admin/cursos/:id

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/02-requerimientos-reglas-negocio.md
- docs/frontend/01-pantallas-flujos-ui.md
- openspec/specs/cursos-fechas/spec.md
- fixtures/curso-con-fechas.json
- pagina_muestra/ si contiene diseños aprobados de cursos

Tareas SDD:
1. Confirmá reglas: no hay edición/cohorte, solo curso con fechas.
2. Implementá listado de cursos.
3. Implementá crear/editar curso.
4. Implementá administración de fechas.
5. Mostrar aviso si modificar fechas requiere reenvío de certificados.
6. No implementar carga masiva real.
7. Documentar rutas y componentes si cambia estructura.

Validaciones:
- Verificar formularios.
- Verificar que fechas tengan protagonismo.
- Verificar desktop/admin.
- Ejecutar scripts disponibles.

Cierre GitHub:
No hagas commit/push/merge. Proponé comandos exactos.

Comandos esperados:

git status
git add .
git commit -m "frontend(cursos): implementar cursos y fechas"
git push -u origin frontend/cursos-fechas
gh pr create --base main --head frontend/cursos-fechas --title "frontend(cursos): cursos y fechas" --body "Implementa listado, detalle y creación/edición de cursos con fechas usando datos mock."

Merge:
Squash merge a main solo después de probar navegación y edición mock.
```

## Ciclo M2-03 — Registro de asistencias presentes

**Rama:** `frontend/asistencias`  
**Tipo:** frontend admin  
**Merge:** sí, si el flujo es usable.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar la pantalla de registro de asistencias presentes.

Objetivo:
Bedelía debe poder seleccionar curso/fecha y marcar alumnos presentes con datos mock.

Rama:
frontend/asistencias

Ruta conceptual:
/admin/cursos/:id/asistencias

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/02-requerimientos-reglas-negocio.md
- docs/frontend/01-pantallas-flujos-ui.md
- openspec/specs/alumnos-asistencias/spec.md
- fixtures/alumno-con-asistencias.json
- fixtures/curso-con-fechas.json
- pagina_muestra/ si contiene diseño aprobado de asistencias

Tareas SDD:
1. Confirmá regla: solo se registra estado presente.
2. No mostrar ausente, justificada ni porcentajes.
3. Implementá selector de fecha.
4. Implementá buscador por nombre/apellido/DNI.
5. Implementá tabla/lista de alumnos con control Presente.
6. Mostrá resumen de presentes y cambios sin guardar.
7. Mostrá aviso si modificar asistencia requiere reenvío.
8. Documentar si se agregan nuevos mocks/componentes.

Validaciones:
- Verificar uso en PC/notebook.
- Verificar mobile usable.
- Verificar que no parezca Excel desordenado.
- Ejecutar scripts disponibles.

Cierre GitHub:
No hagas commit/push/merge. Proponé comandos.

Comandos esperados:

git status
git add .
git commit -m "frontend(asistencias): implementar registro de presentes"
git push -u origin frontend/asistencias
gh pr create --base main --head frontend/asistencias --title "frontend(asistencias): registro de presentes" --body "Implementa pantalla administrativa para marcar asistencias presentes por fecha del curso."

Merge:
Squash merge si el flujo cumple QA manual y no rompe navegación admin.
```

---

# Semana 3 — Certificaciones, integración y deploy

## Ciclo M3-01 — Certificaciones admin: emisión, detalle, reenvío y revocación

**Rama:** `frontend/certificaciones-admin`  
**Tipo:** frontend admin  
**Merge:** sí, si cierra el flujo admin principal.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar pantallas administrativas de certificaciones.

Objetivo:
Crear emisión directa, detalle de certificación, reenvío y revocación con datos mock.

Rama:
frontend/certificaciones-admin

Rutas conceptuales:
/admin/certificaciones/nueva
/admin/certificaciones/:id

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/02-requerimientos-reglas-negocio.md
- docs/frontend/01-pantallas-flujos-ui.md
- openspec/specs/certificaciones/spec.md
- fixtures/certificacion-valida.json
- fixtures/certificacion-revocada.json
- pagina_muestra/ si contiene diseños aprobados

Tareas SDD:
1. Confirmá que no hay borrador: emitir y enviar directo.
2. Implementá nueva certificación con selector de alumno/curso y vista previa de fechas presentes.
3. Implementá detalle con QR/link, PDF, estado de envío y acciones.
4. Implementá modal/panel de reenvío.
5. Implementá modal/panel de revocación con motivo.
6. Mantener QR permanente en textos y lógica mock.
7. No implementar perfil público de alumno.
8. Actualizar documentación si cambia flujo.

Validaciones:
- QA manual del flujo: emitir → ver detalle → reenviar → revocar.
- Verificar que revocar esté separado visualmente.
- Ejecutar scripts disponibles.

Cierre GitHub:
No commit/push/merge automático. Proponé comandos.

Comandos esperados:

git status
git add .
git commit -m "frontend(certificaciones): implementar flujo admin principal"
git push -u origin frontend/certificaciones-admin
gh pr create --base main --head frontend/certificaciones-admin --title "frontend(certificaciones): emisión, detalle y acciones" --body "Implementa emisión directa, detalle, reenvío y revocación de certificaciones con datos mock."

Merge:
Squash merge si el flujo principal queda demostrable.
```

## Ciclo M3-02 — Integración frontend con servicios, mocks y QA visual integral

**Rama:** `frontend/integracion-mocks-qa`  
**Tipo:** integración frontend/QA  
**Merge:** sí, si deja demo navegable.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para ordenar servicios, mocks y QA visual integral del frontend.

Objetivo:
Unificar navegación, servicios mock, fixtures y estados UI para que la demo frontend sea coherente.

Rama:
frontend/integracion-mocks-qa

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/frontend/00-frontend-mvp.md
- docs/frontend/01-pantallas-flujos-ui.md
- docs/frontend/04-qa-frontend.md
- docs/05-qa-demo-entrega.md
- fixtures/

Tareas SDD:
1. Revisar navegación pública/admin.
2. Centralizar datos mock si están duplicados.
3. Preparar servicios/adaptadores para reemplazar mocks por HTTP después.
4. Revisar estados loading/error/empty básicos.
5. Revisar responsive de pantallas principales.
6. Revisar anti-clichés IA.
7. Actualizar documentación de cómo probar la demo.

Validaciones:
- QA público válido/revocado/no encontrado si existe.
- QA admin básico.
- Mobile 360/390/430.
- Desktop.
- Build/lint si existen.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "frontend(qa): integrar mocks y revisar demo navegable"
git push -u origin frontend/integracion-mocks-qa
gh pr create --base main --head frontend/integracion-mocks-qa --title "frontend(qa): integración de mocks y demo navegable" --body "Ordena servicios mock, navegación y QA visual integral del frontend para demo."

Merge:
Squash merge si la demo frontend queda navegable y estable.
```

## Ciclo M3-03 — Deploy frontend/prototipo y preparación de demo institucional

**Rama:** `deploy/main-demo`  
**Tipo:** deploy/QA/demo  
**Merge:** sí, si queda release candidate estable en `main`.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para preparar deploy del prototipo y demo institucional.

Rol:
Sos asistente de QA/deploy/documentación. Marcos ejecuta el deploy. No hagas deploy real ni cambies secretos.

Objetivo:
Dejar documentación, checklist y configuración lista para que Marcos despliegue desde main y muestre la demo al IFTS 14.

Rama:
deploy/main-demo

Lectura mínima:
- AGENTS.md
- README.md
- docs/05-qa-demo-entrega.md
- docs/deploy/00-deploy-prototipo.md
- fixtures/demo/ si existe

Tareas SDD:
1. Revisar si README indica correctamente cómo correr o probar demo.
2. Revisar checklist de deploy desde main.
3. Revisar variables de entorno documentadas sin secretos reales.
4. Revisar guion de demo institucional.
5. Revisar datos ficticios demo.
6. Preparar checklist final pre-demo.
7. No tocar secretos.
8. No ejecutar deploy sin autorización.

Validaciones:
- Verificar scripts disponibles.
- Verificar que docs no prometan integración web oficial en MVP.
- Verificar que el deploy sea desde main.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "deploy(demo): preparar checklist y guia de demo institucional"
git push -u origin deploy/main-demo
gh pr create --base main --head deploy/main-demo --title "deploy(demo): preparación de demo institucional" --body "Actualiza checklist, variables documentadas y guion para deploy/demo del prototipo desde main."

Merge:
Squash merge a main solo si Marcos aprueba que esto queda como release candidate. Luego Marcos ejecuta/revisa deploy en Vercel/Railway según corresponda.
```
