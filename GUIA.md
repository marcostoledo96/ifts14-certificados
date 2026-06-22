# GUIA.md — Guía humana del proyecto IFTS14 Certificados QR

Esta guía está pensada para que Marcos, Matías o cualquier persona del equipo pueda entender el repositorio sin leer todos los archivos sueltos.

No reemplaza a `AGENTS.md`. `AGENTS.md` es para orientar a la IA. Esta guía es para humanos.

---

## 1. Resumen del proyecto

El proyecto `ifts14-certificados` es un monorepo para planificar, prototipar e implementar un sistema de certificaciones QR para el **IFTS N.° 14**.

El objetivo del MVP es entregar antes del **15 de julio de 2026** un prototipo funcional externo, usando datos ficticios, para mostrar al instituto.

El sistema permitirá que un usuario externo escanee un QR o abra un link y pueda verificar la autenticidad de una certificación/constancia de un alumno.

La ruta pública principal será:

```txt
/validar/:tokenCertificacion
```

Cada certificación corresponde a:

```txt
Alumno + Curso + Fechas presentes
```

---

## 2. Qué entra en el MVP

El MVP apunta a demostrar el flujo principal:

1. Bedelía entra al panel administrativo.
2. Carga o edita un curso.
3. Agrega fechas del curso.
4. Marca asistencias presentes.
5. Emite una certificación directa.
6. El sistema genera QR/link permanente.
7. El sistema genera un PDF horizontal similar al certificado real.
8. Se envía o reenvía la certificación al alumno.
9. Un usuario externo valida la certificación por QR/link.
10. Bedelía puede revocar la certificación si corresponde.

Incluye:

- validación pública por token;
- estados pública válida, revocada, no encontrada y error técnico;
- PDF horizontal con QR;
- login administrativo funcional;
- dashboard básico;
- cursos y fechas;
- asistencias presentes;
- certificaciones;
- envío o reenvío;
- revocación;
- datos demo ficticios;
- QA manual y demo institucional.

---

## 3. Qué queda fuera del MVP

Queda para después:

- integración dentro de la web oficial del IFTS 14;
- perfil público del alumno;
- carga masiva real;
- login con Google;
- 2FA;
- firma digital real;
- configuración institucional avanzada;
- uso de datos reales;
- integración definitiva con servidor institucional.

La integración con la web oficial es una etapa post-MVP.

---

## 4. Decisiones principales

- El repositorio es monorepo.
- La documentación está en español argentino formal.
- Se trabaja con Spec-Driven Development.
- Se aplica TDD cuando exista implementación.
- OpenCode/Gentle-AI ayuda a ejecutar ciclos, pero no debe commitear automáticamente.
- El stack final sigue agnóstico.
- Hay fuerte sospecha de Angular en frontend, pero no está confirmado.
- El backend es agnóstico, con ejemplos orientativos Node/Express + Prisma/PostgreSQL.
- El prototipo puede desplegarse externamente con Vercel/Railway.
- `main` representa demo estable.
- Cada tarea se trabaja en una rama específica.
- La demo usa datos ficticios.

---

## 5. Archivos raíz importantes

| Archivo | Para qué sirve |
|---|---|
| `README.md` | Presentación breve del proyecto, objetivo del MVP y cómo empezar. |
| `GUIA.md` | Esta guía humana para estudiar todo el proyecto. |
| `AGENTS.md` | Reglas para OpenCode/Gentle-AI y asistentes de IA. |
| `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` | Guía de prompts por ciclos SDD para Marcos. Incluye ramas, Git, PR y criterios de merge. |
| `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` | Guía de prompts por ciclos SDD para Matías. Incluye backend, TDD, ramas, Git, PR y criterios de merge. |

Los dos archivos de prompts son operativos: se usan para copiar un ciclo por vez en OpenCode.

---

## 6. Estructura general del repo

```txt
ifts14-certificados/
├── README.md
├── GUIA.md
├── AGENTS.md
├── MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md
├── MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md
├── docs/
├── openspec/
├── fixtures/
├── prototipos/
├── apps/
├── packages/
└── .github/
```

### `docs/`

Contiene la documentación consolidada del proyecto: contexto, requisitos, arquitectura, frontend, backend, QA, deploy, operación y etapa post-MVP.

El primer archivo a leer es:

```txt
docs/00-indice-general.md
```

### `openspec/`

Contiene las specs SDD por módulo. Cada spec debe definir objetivo, alcance, criterios de aceptación, casos de prueba y pendientes.

### `fixtures/`

Contiene datos JSON ficticios que funcionan como contrato temporal entre frontend y backend.

### `prototipos/`

Contiene referencias visuales, prompts, capturas de Stitch/v0 y material de diseño.

### `apps/`

Lugar reservado para la implementación real de frontend y backend cuando se defina o avance el stack.

### `packages/`

Lugar reservado para contratos compartidos, tipos, utilidades o código reutilizable si el stack lo permite.

### `.github/`

Plantillas y configuración de GitHub Issues/PR.

---

## 7. Cómo estudiar el repositorio

Lectura recomendada para humanos:

```txt
1. README.md
2. GUIA.md
3. docs/00-indice-general.md
4. docs/01-contexto-alcance-decisiones.md
5. docs/02-requerimientos-reglas-negocio.md
6. docs/03-arquitectura-contratos-datos.md
7. docs/05-qa-demo-entrega.md
8. archivo de prompts correspondiente a tu rol
```

No hace falta leer todos los archivos para empezar.

---

## 8. Metodología de trabajo

El proyecto se trabaja con ciclos SDD chicos.

Cada ciclo debe tener:

1. objetivo claro;
2. rama específica;
3. spec revisada;
4. fixture/contrato revisado si aplica;
5. plan de implementación;
6. implementación mínima;
7. pruebas o validaciones;
8. QA manual si corresponde;
9. documentación actualizada;
10. commit manual;
11. PR;
12. merge solo cuando esté revisado.

La idea es evitar ciclos enormes que sobrecarguen el contexto de los modelos.

---

## 9. Uso de los archivos de prompts por persona

### Marcos

Usar:

```txt
MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md
```

Marcos se enfoca en:

- arquitectura;
- documentación;
- planificación;
- frontend;
- diseño visual;
- portar `pagina_muestra/` a Angular/Tailwind si se confirma Angular;
- QA visual;
- deploy.

### Matías

Usar:

```txt
MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md
```

Matías se enfoca en:

- backend agnóstico;
- contratos API;
- TDD;
- reglas de negocio;
- persistencia;
- PDF/QR/email;
- login;
- auditoría;
- seeds/datos demo.

### Cómo ejecutar un ciclo

1. Elegir el ciclo correspondiente.
2. Crear la rama indicada.
3. Copiar el prompt completo en OpenCode/Gentle-AI.
4. Dejar que el agente planifique primero.
5. Revisar el plan.
6. Aprobar implementación.
7. Revisar resultado.
8. Ejecutar comandos Git manualmente.
9. Abrir PR.
10. Mergear solo si cumple criterios.

---

## 10. Trabajo con `pagina_muestra/`

Cuando Marcos tenga un diseño aprobado desde Stitch/v0, puede dejarlo en una carpeta llamada:

```txt
pagina_muestra/
```

Esa carpeta será referencia visual para implementar el frontend.

Reglas:

- la IA debe leer `pagina_muestra/` solo cuando la tarea sea frontend;
- no debe copiar React/v0 literalmente si el proyecto final usa Angular;
- debe portar la composición, jerarquía visual, tokens y comportamiento a la tecnología final;
- no debe reinterpretar el diseño sin pedir permiso;
- debe mantener la identidad visual definida.

---

## 11. Dirección visual

### Pantallas públicas

Deben sentirse como:

```txt
Folio técnico institucional / acta académica verificable.
```

Claves:

- documento oficial digital;
- validación documental;
- registro de asistencia;
- trazabilidad QR;
- claridad institucional;
- parecido al certificado real del IFTS 14.

### Admin

Debe sentirse como:

```txt
Mesa de trabajo de Bedelía / archivo institucional digital.
```

Claves:

- acciones principales claras;
- tablas y listas sobrias;
- información operativa;
- sin dashboard SaaS genérico;
- sin métricas decorativas innecesarias.

---

## 12. Flujo funcional principal

```txt
Bedelía entra
→ crea o edita curso
→ agrega fechas
→ registra asistencias presentes
→ emite certificación
→ genera QR permanente
→ genera PDF horizontal
→ envía al alumno
→ usuario externo escanea QR
→ valida autenticidad
```

---

## 13. Flujo de corrección

Si Bedelía corrige fechas o asistencias:

```txt
se mantiene el mismo QR
→ se regenera PDF si corresponde
→ se reenvía aviso/PDF al alumno
→ la validación pública muestra información vigente
```

---

## 14. Flujo de revocación

Si Bedelía revoca una certificación:

```txt
se ingresa motivo
→ queda auditado
→ el QR sigue resolviendo
→ la pantalla pública muestra estado revocado
→ no se muestra como vigente
```

---

## 15. Plan en 3 semanas

### Semana 1

Foco:

- organizar ejecución;
- completar specs críticas;
- iniciar frontend público;
- iniciar backend base/validación pública;
- preparar datos demo iniciales.

### Semana 2

Foco:

- admin básico;
- cursos, fechas y asistencias;
- certificaciones;
- contratos backend;
- integración parcial frontend/backend si aplica.

### Semana 3

Foco:

- PDF/QR/email;
- login;
- QA integral;
- datos demo definitivos;
- deploy por Marcos;
- preparación de demo institucional.

Los detalles operativos están en los archivos de prompts de Marcos y Matías.

---

## 16. Git y ramas

`main` es la demo estable.

No trabajar directo sobre `main`.

Ramas frecuentes:

```txt
docs/<tema>
spec/<modulo>
frontend/<modulo>
backend/<modulo>
qa/<tema>
deploy/<tema>
```

Ejemplos:

```txt
frontend/validacion-publica
frontend/pdf-preview
frontend/admin-login-dashboard
backend/base-api
backend/validacion-publica
backend/pdf-qr-email
qa/datos-demo
```

Cada ciclo de los archivos de prompts ya indica rama, commit y PR sugeridos.

---

## 17. Definition of Done resumida

Una tarea está terminada si:

- respeta spec;
- respeta fixture/contrato;
- cumple criterios de aceptación;
- pasa tests o validaciones disponibles;
- pasa QA manual si corresponde;
- no expone datos sensibles indebidamente;
- actualiza documentación si cambió comportamiento;
- completó el cierre sdd-archive (ver sección 21);
- propone commit claro;
- tiene PR revisado antes del merge.

---

## 18. Pendientes actuales

Pendientes institucionales:

- tecnología real de la web oficial;
- acceso al servidor/dominio;
- proveedor o cuenta de email;
- formato final de número de certificado;
- logos separados en PNG/SVG;
- confirmación final de campos administrativos.

Pendientes técnicos:

- stack final;
- estructura real de `apps/frontend` y `apps/backend`;
- integración real con Vercel/Railway;
- email real o simulado;
- generación real de PDF;
- seeds/datos demo definitivos.

---

## 19. Cómo empezar hoy

Para Marcos:

```txt
1. Abrir MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md.
2. Ejecutar el primer ciclo de Semana 1.
3. Trabajar una rama por ciclo.
4. No pasar al siguiente ciclo hasta cerrar PR o dejarlo claramente pendiente.
```

Para Matías:

```txt
1. Abrir MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md.
2. Ejecutar el primer ciclo de Semana 1.
3. Trabajar sobre contratos/backend agnóstico.
4. Coordinar cambios de contratos con Marcos antes de modificar fixtures.
```

Para ambos:

```txt
1. Crear issues en GitHub.
2. Trabajar por rama.
3. Hacer PR.
4. Revisar entre ustedes.
5. Mergear a main solo si cumple criterios.
```

---

## 20. Regla final

Si una tarea no está clara, no se implementa.

Primero se ajusta:

```txt
spec → criterios → fixture/contrato → plan → implementación
```

Esta regla existe para que OpenCode/Gentle-AI no improvise y para que el proyecto llegue ordenado a la demo.

---

## 21. Cierre documental por ciclo (sdd-archive)

Al finalizar cada ciclo SDD, se debe revisar si la tarea cambió documentación.

La guía completa está en `docs/07-sdd-archive-y-mantenimiento-documentacion.md`.

**Regla:** No cerrar un ciclo si cambió comportamiento y no se actualizó la documentación correspondiente.

Cada ciclo debe cerrar respondiendo:

1. ¿Qué documentos revisé?
2. ¿Cuáles actualicé?
3. ¿Cuáles no actualicé y por qué?
4. ¿Queda deuda documental?

Matriz resumida por tipo de cambio:

| Tipo de cambio | Archivos a revisar |
|---|---|
| Regla funcional | `02-requerimientos-reglas-negocio.md`, spec correspondiente |
| Ruta pública | `frontend/01-pantallas-flujos-ui.md`, `03-arquitectura-contratos-datos.md` |
| API o endpoint | `backend/01-contratos-api.md`, `packages/contratos/`, fixtures API |
| Fixture o contrato | `fixtures/`, `packages/contratos/`, spec relacionada |
| UI pública | `frontend/01-pantallas-flujos-ui.md`, `frontend/02-sistema-diseno-anti-cliches.md` |
| PDF o QR | `pdf-qr/00-pdf-qr-certificado.md`, fixture PDF |
| QA o demo | `05-qa-demo-entrega.md` |
| Deploy o infra | `deploy/00-deploy-prototipo.md` |
| Planificación | `04-planificacion-github-roadmap.md` |
| Decisión global | `01-contexto-alcance-decisiones.md`, `AGENTS.md` |
| Creación/eliminación de archivos | `00-indice-general.md` |

