# Matías — Prompts SDD por ciclos, GitHub y backend

Esta guía es para que Matías trabaje el backend del proyecto `ifts14-certificados` en OpenCode/Gentle-AI durante 3 semanas, con varios ciclos SDD pequeños por semana.

## Reglas generales para Matías

- Rol principal: backend, contratos API, reglas de negocio, TDD, PDF/QR/email, seguridad mínima y soporte a integración.
- El backend sigue agnóstico. Puede usar ejemplos de Node/Express + Prisma/PostgreSQL, pero no debe asumirlos como obligación si el stack final cambia.
- Marcos ejecuta deploy. Matías prepara backend, documentación, tests y variables necesarias, pero no deploya salvo indicación explícita.
- OpenCode no debe hacer commit, push ni merge automáticamente.
- Cada ciclo se trabaja en rama propia.
- Cada ciclo debe cerrar con tests o validaciones, documentación actualizada y commit sugerido.
- Cada ciclo debe cerrar con la etapa sdd-archive: revisar explícitamente si corresponde actualizar documentación según `docs/07-sdd-archive-y-mantenimiento-documentacion.md`.
- Los PR se abren hacia `main`.
- Se recomienda squash merge después de revisión.

## Flujo GitHub estándar para cada ciclo

Antes de empezar cada ciclo:

```bash
git checkout main
git pull origin main
git checkout -b <rama-del-ciclo>
```

Después de implementación y revisión:

```bash
git status
git add .
git commit -m "<mensaje-sugerido>"
git push -u origin <rama-del-ciclo>
gh pr create --base main --head <rama-del-ciclo> --title "<titulo>" --body "<descripcion>"
```

Merge:

```bash
# Solo después de review de Marcos o revisión acordada.
gh pr merge --squash --delete-branch
git checkout main
git pull origin main
```

Si el ciclo queda incompleto, mantener la rama o abrir PR draft.

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

# Semana 1 — Contratos y base backend

## Ciclo T1-01 — Revisar contratos API y estrategia TDD backend

**Rama:** `spec/backend-contratos`  
**Tipo:** spec/backend  
**Merge:** sí, porque desbloquea backend y frontend.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para revisar y ajustar contratos API y estrategia TDD backend.

Rol:
Sos asistente backend agnóstico. No implementes servidor todavía.

Objetivo:
Dejar claros los contratos mínimos que frontend y backend van a compartir para el MVP.

Rama:
spec/backend-contratos

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/01-contexto-alcance-decisiones.md
- docs/02-requerimientos-reglas-negocio.md
- docs/03-arquitectura-contratos-datos.md
- docs/backend/00-backend-mvp.md
- docs/backend/01-contratos-api.md
- docs/backend/02-casos-uso-tdd.md
- openspec/specs/backend-api/spec.md
- fixtures/certificacion-valida.json
- fixtures/certificacion-revocada.json

No leas documentación frontend salvo que sea necesario para contrato.

Tareas SDD:
1. Confirmá reglas funcionales backend.
2. Revisá contrato público GET /validar/:tokenCertificacion.
3. Revisá contratos para cursos, fechas, asistencias, certificaciones, PDF, email y revocación.
4. Detectá campos ambiguos o faltantes.
5. Proponé ajustes mínimos a docs/contratos/fixtures.
6. Definí casos TDD iniciales por dominio/caso de uso.
7. No asumir stack final.
8. Si usás ejemplos Node/Express/Prisma, dejalos como ejemplo, no como decisión.

Validaciones:
- Contratos coherentes con fixtures.
- No mostrar datos personales si token no existe.
- DNI completo solo si certificación existe.
- QR permanente.

Al finalizar:
- Listá archivos modificados.
- Listá preguntas pendientes.
- Proponé mensaje de commit.
- Proponé comandos GitHub.
- No hagas commit/push/merge automáticamente.

Comandos esperados:

git status
git add .
git commit -m "spec(backend): ajustar contratos api y estrategia tdd"
git push -u origin spec/backend-contratos
gh pr create --base main --head spec/backend-contratos --title "spec(backend): contratos API y TDD" --body "Revisa y ajusta contratos API, fixtures y estrategia TDD backend para el MVP."

Merge:
Squash merge a main después de revisión conjunta con Marcos.
```

## Ciclo T1-02 — Base API agnóstica / estructura inicial

**Rama:** `backend/base-api`  
**Tipo:** backend base  
**Merge:** sí, si queda base mínima sin acoplar de más.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para preparar la base backend del MVP.

Rol:
Sos asistente backend. El stack sigue agnóstico, pero podés usar ejemplo Node/Express si el repositorio ya adoptó esa decisión para prototipo. Si no hay stack creado, primero proponé estructura y frená antes de generar demasiado.

Objetivo:
Crear o preparar estructura mínima de backend con health check, manejo de errores y separación conceptual dominio/aplicación/infraestructura/presentación.

Rama:
backend/base-api

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/backend/00-backend-mvp.md
- docs/backend/01-contratos-api.md
- docs/backend/02-casos-uso-tdd.md
- AGENTS.md (sección Seguridad y privacidad)
- openspec/specs/backend-api/spec.md

Tareas SDD:
1. Confirmar si existe app backend.
2. Si no existe, proponer estructura mínima antes de crearla.
3. Crear health check o equivalente.
4. Crear formato estándar de errores.
5. Crear separación mínima de capas si aplica.
6. Agregar test básico si hay framework de test.
7. No implementar dominio completo todavía.
8. No crear base de datos real si no está decidido.
9. Documentar cómo correr backend si corresponde.

Validaciones:
- Health check responde o queda especificado.
- Errores tienen formato claro.
- No hay secretos hardcodeados.
- Tests/build si existen.

Cierre GitHub:
No commit/push/merge automático. Proponé comandos.

Comandos esperados:

git status
git add .
git commit -m "backend(base): preparar estructura inicial de api"
git push -u origin backend/base-api
gh pr create --base main --head backend/base-api --title "backend(base): estructura inicial de API" --body "Prepara base backend agnóstica con health check, errores y estructura mínima para el MVP."

Merge:
Squash merge si la base corre o queda documentada sin bloquear el resto.
```

## Ciclo T1-03 — API de validación pública por token

**Rama:** `backend/validacion-publica`  
**Tipo:** backend/public API  
**Merge:** sí, si devuelve fixtures/contratos.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar o simular la API de validación pública por token.

Objetivo:
GET /validar/:tokenCertificacion debe devolver certificación válida, revocada o no encontrada según contrato.

Rama:
backend/validacion-publica

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/02-requerimientos-reglas-negocio.md
- docs/backend/01-contratos-api.md
- openspec/specs/backend-validacion-publica/spec.md
- fixtures/certificacion-valida.json
- fixtures/certificacion-revocada.json
- fixtures/certificacion-no-encontrada.json

Tareas SDD/TDD:
1. Escribir o revisar casos de prueba antes de implementación.
2. Token válido devuelve datos completos permitidos.
3. Token revocado devuelve estado revocado y datos mínimos permitidos.
4. Token inexistente no devuelve datos personales.
5. Error técnico mantiene formato seguro.
6. Implementar con mocks/fixtures si no hay persistencia.
7. No loguear DNI ni token completo.
8. Documentar cómo probar endpoint.

Validaciones:
- Tests unitarios/contrato si hay framework.
- Prueba manual con 3 escenarios.
- No romper contrato frontend.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(validacion): implementar consulta publica por token"
git push -u origin backend/validacion-publica
gh pr create --base main --head backend/validacion-publica --title "backend(validacion): consulta pública por token" --body "Implementa/simula contrato GET /validar/:tokenCertificacion para estados válida, revocada y no encontrada."

Merge:
Squash merge si tests/contratos pasan y Marcos valida integración esperada.
```

---

# Semana 2 — Dominio admin y reglas principales

## Ciclo T2-01 — Cursos, fechas, alumnos y asistencias presentes

**Rama:** `backend/cursos-asistencias`  
**Tipo:** backend dominio/admin  
**Merge:** sí, si contratos principales quedan.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar o preparar contratos backend de cursos, fechas, alumnos y asistencias presentes.

Objetivo:
Permitir que el admin trabaje con cursos, fechas y asistencias presentes, aunque sea con persistencia mock si no hay base de datos final.

Rama:
backend/cursos-asistencias

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/02-requerimientos-reglas-negocio.md
- docs/backend/01-contratos-api.md
- openspec/specs/cursos-fechas/spec.md
- openspec/specs/alumnos-asistencias/spec.md
- fixtures/curso-con-fechas.json
- fixtures/alumno-con-asistencias.json

Tareas SDD/TDD:
1. Confirmar que no existe edición/cohorte.
2. Curso tiene varias fechas.
3. Asistencia vincula alumno + fecha del curso.
4. Solo estado presente.
5. Agregar/quitar fecha puede requerir reenvío posterior.
6. Implementar endpoints/servicios mock o reales según base existente.
7. Agregar tests para reglas principales.
8. No implementar carga masiva real.

Validaciones:
- No duplicar asistencia alumno+fecha.
- No manejar ausente/justificada.
- No calcular porcentajes.
- Tests si existen.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(asistencias): implementar cursos fechas y presentes"
git push -u origin backend/cursos-asistencias
gh pr create --base main --head backend/cursos-asistencias --title "backend(asistencias): cursos, fechas y presentes" --body "Implementa o prepara contratos/servicios para cursos, fechas, alumnos y asistencias presentes."

Merge:
Squash merge si contratos y tests básicos están coherentes.
```

## Ciclo T2-02 — Certificaciones: emisión, reenvío y revocación

**Rama:** `backend/certificaciones`  
**Tipo:** backend dominio/casos de uso  
**Merge:** sí, si reglas quedan cubiertas.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para implementar reglas backend de certificaciones.

Objetivo:
Crear casos de uso para emitir certificación directa, consultar detalle admin, reenviar y revocar.

Rama:
backend/certificaciones

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/02-requerimientos-reglas-negocio.md
- docs/backend/02-casos-uso-tdd.md
- openspec/specs/certificaciones/spec.md
- fixtures/certificacion-valida.json
- fixtures/certificacion-revocada.json

Tareas SDD/TDD:
1. Test: no emitir certificación sin asistencias presentes.
2. Test: emitir genera token/QR permanente si no existe.
3. Test: no hay borrador, se emite/envía directo.
4. Test: reenvío mantiene QR.
5. Test: revocar requiere motivo y cambia validación pública.
6. Implementar casos de uso o servicios según estructura existente.
7. Registrar auditoría mínima si ya existe infraestructura.
8. No implementar email/PDF real si corresponde al próximo ciclo, pero preparar contratos.

Validaciones:
- Tests de casos de uso.
- Contrato compatible con frontend.
- No exponer token completo innecesariamente.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(certificaciones): implementar emision reenvio y revocacion"
git push -u origin backend/certificaciones
gh pr create --base main --head backend/certificaciones --title "backend(certificaciones): emisión, reenvío y revocación" --body "Implementa reglas principales de certificaciones con TDD y contratos compatibles con el MVP."

Merge:
Squash merge después de revisión de reglas con Marcos.
```

## Ciclo T2-03 — Login admin, seguridad mínima y auditoría

**Rama:** `backend/auth-admin-auditoria`  
**Tipo:** backend seguridad/admin  
**Merge:** sí, si login MVP queda mínimo y seguro.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para login administrativo, seguridad mínima y auditoría.

Objetivo:
Preparar login funcional del MVP, reglas de sesión/token admin según stack disponible y auditoría mínima de acciones críticas.

Rama:
backend/auth-admin-auditoria

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- AGENTS.md (sección Seguridad y privacidad)
- openspec/specs/login-admin/spec.md
- openspec/specs/seguridad-auditoria/spec.md

Tareas SDD/TDD:
1. Definir flujo de login MVP con email/contraseña.
2. No implementar 2FA ni Google login.
3. No hardcodear credenciales reales.
4. Definir usuario demo ficticio seguro.
5. Proteger endpoints admin conceptualmente.
6. Auditar emisión, reenvío, revocación y modificación de asistencias/fechas.
7. No loguear DNI ni token completo.
8. Agregar tests si hay framework.

Validaciones:
- Login exitoso/fallido.
- Endpoint admin requiere autenticación si aplica.
- Auditoría registra acción crítica.
- Sin secretos en repo.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(auth): agregar login admin y auditoria minima"
git push -u origin backend/auth-admin-auditoria
gh pr create --base main --head backend/auth-admin-auditoria --title "backend(auth): login admin y auditoría mínima" --body "Agrega flujo de login admin del MVP y auditoría mínima de acciones críticas."

Merge:
Squash merge solo si no hay secretos y tests/validaciones pasan.
```

---

# Semana 3 — PDF, QR, email y soporte de demo

## Ciclo T3-01 — PDF horizontal y QR permanente

**Rama:** `backend/pdf-qr`  
**Tipo:** backend PDF/QR  
**Merge:** sí, si genera o simula PDF/QR según alcance.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para PDF horizontal y QR permanente.

Objetivo:
Preparar generación o simulación robusta del PDF horizontal similar al certificado real, con QR y link escrito.

Rama:
backend/pdf-qr

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/pdf-qr/00-pdf-qr-certificado.md
- openspec/specs/pdf-qr/spec.md
- fixtures/pdf-complementario-ejemplo.json
- fixtures/certificacion-valida.json

Tareas SDD/TDD:
1. Confirmar PDF horizontal parecido al certificado real.
2. Incluir DNI completo, curso, fechas presentes, número, QR, link escrito.
3. Mantener placeholders de firma/sello/autoridad.
4. QR apunta a /validar/:tokenCertificacion.
5. Regenerar PDF mantiene mismo QR.
6. Implementar generación real si stack lo permite o simulación/contrato si no.
7. Agregar tests de contenido mínimo si es posible.
8. Documentar limitaciones.

Validaciones:
- PDF/preview contiene campos obligatorios.
- QR/link usa token permanente.
- No se inventan logos si no hay assets.
- Tests si existen.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(pdf): preparar pdf horizontal con qr permanente"
git push -u origin backend/pdf-qr
gh pr create --base main --head backend/pdf-qr --title "backend(pdf): PDF horizontal con QR permanente" --body "Prepara generación o simulación del PDF complementario horizontal con QR y link de validación."

Merge:
Squash merge si el contrato PDF/QR queda usable para demo.
```

## Ciclo T3-02 — Email/reenvío y datos demo iniciales

**Rama:** `backend/email-datos-demo`  
**Tipo:** backend/email/demo data  
**Merge:** sí, si demo queda preparada.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo para email/reenvío y datos demo iniciales.

Objetivo:
Preparar envío o simulación de envío de certificaciones y datos ficticios para demo institucional.

Rama:
backend/email-datos-demo

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/backend/00-backend-mvp.md
- openspec/specs/envio-email/spec.md
- docs/05-qa-demo-entrega.md
- fixtures/demo/ si existe

Tareas SDD/TDD:
1. Definir modo email de prototipo: real con cuenta de prueba o simulado si faltan credenciales.
2. Reenvío debe indicar que el PDF se regenera si hubo cambios, pero QR se mantiene.
3. No commitear credenciales.
4. Crear o revisar datos demo: alumno, curso, fechas, presentes, certificación válida, revocada.
5. Preparar seeds/fixtures si aplica.
6. Agregar tests o validaciones de envío simulado.
7. Documentar variables de entorno necesarias sin valores reales.

Validaciones:
- Email no envía a usuarios reales por accidente.
- Datos demo son ficticios.
- Reenvío registra estado.
- No hay secretos en repo.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(email): preparar reenvio y datos demo"
git push -u origin backend/email-datos-demo
gh pr create --base main --head backend/email-datos-demo --title "backend(email): reenvío y datos demo" --body "Prepara envío/reenvío de certificaciones y datos ficticios iniciales para la demo institucional."

Merge:
Squash merge después de revisar que no haya secretos ni datos reales.
```

## Ciclo T3-03 — QA backend y soporte para deploy de Marcos

**Rama:** `backend/qa-release-support`  
**Tipo:** backend QA/release support  
**Merge:** sí, si deja backend listo para demo.

### Prompt para OpenCode

```txt
Ejecutá un ciclo SDD completo de QA backend y soporte para deploy. Marcos ejecuta el deploy.

Objetivo:
Revisar backend/API, contratos, datos demo, variables y documentación para que Marcos pueda desplegar o simular el prototipo.

Rama:
backend/qa-release-support

Lectura mínima:
- AGENTS.md
- docs/00-indice-general.md
- docs/backend/00-backend-mvp.md
- docs/backend/01-contratos-api.md
- docs/05-qa-demo-entrega.md
- docs/deploy/00-deploy-prototipo.md
- fixtures/demo/

Tareas SDD/TDD:
1. Ejecutar tests backend disponibles.
2. Revisar contratos contra fixtures.
3. Revisar que validación pública no exponga datos en token inexistente.
4. Revisar que revocada no se muestre como vigente.
5. Revisar que PDF/QR/email tengan variables documentadas.
6. Revisar que no haya secretos.
7. Preparar resumen para Marcos con endpoints, variables y pasos pendientes.
8. No ejecutar deploy real.

Validaciones:
- Tests pasan o quedan pendientes explícitos.
- Variables necesarias documentadas.
- Datos demo cargables o fixtures listos.
- Checklist backend completado.

Cierre GitHub:
No commit/push/merge automático.

Comandos esperados:

git status
git add .
git commit -m "backend(qa): preparar soporte de release para demo"
git push -u origin backend/qa-release-support
gh pr create --base main --head backend/qa-release-support --title "backend(qa): soporte de release para demo" --body "Revisa backend, contratos, variables y datos demo para que Marcos pueda preparar el deploy del prototipo."

Merge:
Squash merge después de revisión de Marcos. Marcos decide si main queda listo para deploy.
```
