# 02 — Mapa de ramas por funcionalidad

## Regla general

No trabajar directo sobre `main`.

`main` representa demo estable y deploy del prototipo.

Cada tarea debe tener rama propia.

## Ramas de documentación y planificación

| Rama | Función | Responsable sugerido |
|---|---|---|
| `docs/opencode-runbook` | Agregar guía de prompts | Marcos |
| `docs/ajustes-planificacion` | Ajustar documentación general | Marcos |
| `spec/validacion-publica` | Completar spec de validación pública | Marcos |
| `spec/backend-contratos` | Completar contratos backend | Matías + Marcos |

## Ramas frontend públicas

| Rama | Función | Pantallas |
|---|---|---|
| `frontend/validacion-publica` | Implementar `/validar/:tokenCertificacion` válido | Validación válida |
| `frontend/validacion-estados` | Revocada, no encontrada, error técnico | Estados no exitosos |
| `frontend/pdf-preview` | Vista previa PDF horizontal con QR | PDF complementario |

## Ramas frontend admin básico

| Rama | Función | Pantallas |
|---|---|---|
| `frontend/admin-login-dashboard` | Login y dashboard | Login, dashboard |
| `frontend/cursos-fechas` | Cursos y fechas | Listado, crear/editar, detalle |
| `frontend/asistencias` | Registro de presentes | Registrar asistencias |
| `frontend/certificaciones-admin` | Emisión y detalle | Nueva certificación, detalle, reenvío, revocación |

## Ramas backend agnóstico

| Rama | Función | Alcance |
|---|---|---|
| `backend/base-api` | Estructura backend inicial | Health, errores, config |
| `backend/auth-admin-auditoria` | Login administrativo | Sesión/token admin |
| `backend/validacion-publica` | Consulta por token | `/validar/:tokenCertificacion` |
| `backend/cursos-asistencias` | Cursos, fechas y asistencias | CRUD mínimo + presentes |
| `backend/certificaciones` | Emitir, reenviar, revocar | Certificación y reglas |
| `backend/pdf-qr` | PDF y QR | Generación/reenvío |
| `backend/email-datos-demo` | Email, reenvío y datos demo | Envío y seeds |

## Ramas QA/demo

| Rama | Función |
|---|---|
| `qa/datos-demo` | Seeds/fixtures de demo |
| `qa/checklist-demo` | Ajustar QA manual |
| `deploy/main-demo` | Preparar deploy estable desde main |

## Plan de 3 semanas

Los detalles operativos están en los archivos de prompts raíz:

- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` (para Marcos).
- `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` (para Matías).

### Semana 1 — Validación pública, PDF preview, contratos base

- Frontend público válido.
- PDF preview.
- Contratos base backend.

### Semana 2 — Admin básico, cursos, asistencias, certificaciones

- Login/dashboard.
- Cursos y fechas.
- Asistencias presentes.
- Certificaciones admin.
- Backend dominio.

### Semana 3 — Backend/PDF/QR/email, QA, datos demo y deploy

- PDF horizontal y QR.
- Email/reenvío.
- Datos demo.
- QA integral.
- Deploy.

## Formato de commits sugerido

```txt
docs(opencode): agregar guía de ejecución por ciclos
spec(validacion): completar criterios de aceptación
frontend(validacion): implementar pantalla pública válida
frontend(pdf): agregar preview horizontal con QR
backend(validacion): implementar consulta pública por token
test(certificaciones): agregar pruebas de emisión y reenvío
qa(demo): preparar datos ficticios iniciales
```