# 02 — Mapa de ramas por funcionalidad

## Regla general

No trabajar directo sobre `main`.

`main` representa demo estable y deploy del prototipo.

Cada tarea debe tener rama propia.

## Ramas de documentación y planificación

| Rama | Función | Responsable sugerido |
|---|---|---|
| `docs/opencode-runbook` | Agregar esta guía de prompts | Marcos |
| `docs/ajustes-planificacion` | Ajustar documentación general | Marcos |
| `spec/validacion-publica` | Completar spec de validación pública | Marcos |
| `spec/backend-contratos` | Completar contratos backend | Compañero + Marcos |

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
| `backend/auth-admin` | Login administrativo | Sesión/token admin |
| `backend/validacion-publica` | Consulta por token | `/validar/:tokenCertificacion` |
| `backend/cursos-asistencias` | Cursos, fechas y asistencias | CRUD mínimo + presentes |
| `backend/certificaciones` | Emitir, reenviar, revocar | Certificación y reglas |
| `backend/pdf-qr-email` | PDF, QR, email | Generación/reenvío |

## Ramas QA/demo

| Rama | Función |
|---|---|
| `qa/datos-demo` | Seeds/fixtures de demo |
| `qa/checklist-demo` | Ajustar QA manual |
| `deploy/main-demo` | Preparar deploy estable desde main |

## Orden sugerido

```txt
1. docs/opencode-runbook
2. spec/validacion-publica
3. frontend/validacion-publica
4. frontend/pdf-preview
5. frontend/admin-login-dashboard
6. frontend/cursos-fechas
7. frontend/asistencias
8. frontend/certificaciones-admin
9. backend/base-api
10. backend/validacion-publica
11. backend/cursos-asistencias
12. backend/certificaciones
13. backend/pdf-qr-email
14. qa/datos-demo
15. qa/checklist-demo
16. deploy/main-demo
```

## Formato de commits sugerido

```txt
docs(opencode): agregar guía de ejecución por etapas
spec(validacion): completar criterios de aceptación
frontend(validacion): implementar pantalla pública válida
frontend(pdf): agregar preview horizontal con QR
backend(validacion): implementar consulta pública por token
test(certificaciones): agregar pruebas de emisión y reenvío
qa(demo): preparar datos ficticios iniciales
```
