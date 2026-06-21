# 07 — Prompts Etapa 4: Integración, QA y demo institucional

## Objetivo de la etapa

Preparar una demo estable para mostrar al IFTS 14 con datos ficticios, deploy desde `main` y QA manual completo.

## Ramas sugeridas

```bash
git checkout -b qa/datos-demo
git checkout -b qa/checklist-demo
git checkout -b deploy/main-demo
```

---

## Prompt 4.1 — Preparar datos demo iniciales

```txt
Usá modo plan. No edites archivos.

Tarea: revisar y preparar datos demo iniciales.

Leé:
- docs/qa/00-qa-demo-entrega.md
- docs/qa/08-datos-demo-iniciales.md si existe
- fixtures/demo/
- fixtures/certificacion-valida.json
- fixtures/curso-con-fechas.json

Objetivo:
- asegurar datos ficticios coherentes;
- tener certificación válida;
- tener certificación revocada;
- tener token no encontrado;
- tener curso con fechas;
- tener alumno con asistencias presentes.

Respondé con:
- datos faltantes;
- mejoras propuestas;
- seeds/fixtures necesarios;
- cómo probar demo.
```

---

## Prompt 4.2 — Ejecutar QA público

```txt
Usá modo plan primero.

Quiero ejecutar QA manual de la validación pública.

Leé:
- docs/qa/02-checklist-qa-manual-publico.md
- openspec/specs/validacion-publica/spec.md
- fixtures/demo/escenarios-validacion-demo.json si existe

Generá una checklist paso a paso para probar:
1. link válido;
2. QR válido;
3. revocada;
4. token no encontrado;
5. error técnico.

No modifiques archivos salvo que te pida registrar incidencias.
```

---

## Prompt 4.3 — Ejecutar QA admin

```txt
Usá modo plan.

Quiero ejecutar QA manual del panel administrativo.

Leé:
- docs/qa/03-checklist-qa-manual-admin.md
- docs/frontend/01-pantallas-flujos-ui.md
- fixtures/demo/

Prepará una checklist de prueba para:
- login;
- dashboard;
- curso con fechas;
- registro de asistencias;
- emisión de certificación;
- PDF con QR;
- reenvío;
- revocación.

No modifiques archivos salvo que te pida registrar incidencias.
```

---

## Prompt 4.4 — Preparar demo institucional

```txt
Usá modo plan. No edites archivos.

Tarea: preparar guion de demo institucional.

Leé:
- docs/qa/07-guion-demo-instituto.md
- docs/qa/08-datos-demo-iniciales.md
- README.md

Objetivo:
- demo de 15 a 25 minutos;
- mostrar valor del QR;
- mostrar PDF horizontal;
- mostrar admin básico;
- mostrar reenvío y revocación;
- mostrar pendientes post-MVP sin prometer de más.

Respondé con:
- guion por minuto;
- links/pantallas a abrir;
- discurso breve;
- preguntas esperables del instituto;
- riesgos de demo;
- checklist previa.
```

---

## Prompt 4.5 — Revisar deploy desde main

```txt
Usá modo plan. No edites archivos.

Tarea: revisar preparación para deploy estable desde main.

Leé:
- docs/deploy/00-deploy-prototipo.md
- docs/deploy/checklist-deploy-main.md si existe
- docs/deploy/variables-entorno-prototipo.md si existe
- AGENTS.md

Objetivo:
- confirmar qué falta para deploy;
- detectar variables de entorno necesarias;
- detectar riesgos de seguridad;
- confirmar que no hay secretos en repo;
- confirmar datos demo.

Respondé con checklist de deploy y bloqueos.
```
