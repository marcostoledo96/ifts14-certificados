# 09 — Guía de GitHub Issues para usar con OpenCode

## Objetivo

Cada tarea importante debe estar representada por un issue. OpenCode debe trabajar contra un issue o, como mínimo, contra una tarea equivalente documentada.

## Formato recomendado de issue

```md
## Objetivo

[Qué queremos lograr]

## Alcance

- [ ] Punto 1
- [ ] Punto 2
- [ ] Punto 3

## Fuera de alcance

- [ ] Lo que NO debe tocarse

## Documentación a leer

- `AGENTS.md`
- `docs/00-indice-general.md`
- `openspec/specs/<modulo>/spec.md`
- `fixtures/<fixture>.json`

## Rama sugerida

`frontend/validacion-publica`

## Criterios de aceptación

- [ ] Criterio 1
- [ ] Criterio 2
- [ ] Criterio 3

## QA manual

- [ ] Caso 1
- [ ] Caso 2

## Notas

[Contexto adicional]
```

## Prompt para crear un issue con ayuda de OpenCode

```txt
Necesito redactar un GitHub Issue para la tarea: [NOMBRE].

Leé solo la documentación relevante:
- AGENTS.md
- docs/00-indice-general.md
- spec del módulo si existe
- fixture relacionado si existe

Redactá el issue con:
- título;
- objetivo;
- alcance;
- fuera de alcance;
- documentación a leer;
- rama sugerida;
- criterios de aceptación;
- QA manual;
- labels sugeridos;
- responsable sugerido.

No crees el issue automáticamente.
```

## Labels sugeridos

```txt
area:frontend
area:backend
area:docs
area:qa
area:deploy
area:pdf-qr
area:auth
area:certificaciones
area:cursos
area:asistencias
tipo:feature
tipo:bug
tipo:spec
tipo:refactor
prioridad:alta
prioridad:media
prioridad:baja
estado:bloqueado
estado:listo-para-dev
```

## Issues iniciales recomendados

1. `DOC-01 Agregar guía de prompts OpenCode` → `docs/opencode-runbook`
2. `FE-01 Implementar validación pública válida` → `frontend/validacion-publica`
3. `FE-02 Implementar estados públicos no exitosos` → `frontend/validacion-estados`
4. `FE-03 Implementar preview PDF horizontal` → `frontend/pdf-preview`
5. `FE-04 Implementar admin login/dashboard` → `frontend/admin-login-dashboard`
6. `FE-05 Implementar cursos y fechas` → `frontend/cursos-fechas`
7. `FE-06 Implementar asistencias presentes` → `frontend/asistencias`
8. `BE-01 Planificar backend base` → `backend/base-api`
9. `BE-02 Implementar validación pública API` → `backend/validacion-publica`
10. `QA-01 Preparar datos demo` → `qa/datos-demo`
```
