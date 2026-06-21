# 04 — Prompts Etapa 1: Validación pública, QR y PDF

## Objetivo de la etapa

Construir la parte pública más importante del MVP:

- `/validar/:tokenCertificacion` válido.
- Estados no exitosos.
- PDF horizontal similar al certificado real con QR.
- Datos mock/fixtures.

## Ramas sugeridas

```bash
git checkout -b frontend/validacion-publica
git checkout -b frontend/validacion-estados
git checkout -b frontend/pdf-preview
```

---

## Prompt 1.1 — Planificar pantalla pública válida

```txt
Usá modo plan. No edites archivos.

Tarea: implementar o preparar la pantalla pública válida `/validar/:tokenCertificacion`.

Leé:
- AGENTS.md
- docs/frontend/00-frontend-mvp.md
- docs/frontend/01-pantallas-flujos-ui.md
- docs/frontend/02-sistema-diseno-anti-cliches.md
- openspec/specs/validacion-publica/spec.md
- fixtures/certificacion-valida.json

Objetivo:
- identificar archivos necesarios;
- proponer estructura de componentes;
- definir estados de UI;
- confirmar datos a mostrar;
- definir QA manual.

Reglas:
- No perfil público del alumno.
- DNI completo visible solo si la certificación existe.
- Solo fechas presentes.
- No asumir stack final si todavía no existe app frontend.
- Si el frontend está vacío, proponer estructura sin crearla todavía.

Respondé con:
1. plan de componentes;
2. datos que consume;
3. estructura de rutas;
4. criterios de aceptación;
5. QA manual;
6. mensaje de commit sugerido.
```

---

## Prompt 1.2 — Implementar pantalla pública válida con mocks

```txt
Implementá la pantalla pública válida siguiendo el plan aprobado.

Reglas:
- Usar datos mock/fixture.
- No depender de backend real.
- Mantener diseño aprobado: folio técnico institucional / acta académica verificable.
- No convertir todo en cards genéricas.
- Mostrar DNI completo.
- Mostrar curso.
- Mostrar solo fechas presentes.
- Mostrar código parcial y fecha/hora de consulta.
- Mantener responsive mobile y desktop.
- Mantener comentarios breves en español argentino formal si hacen falta.
- No commitear automáticamente.

Al terminar:
- listá archivos modificados;
- indicá cómo probarlo;
- indicá QA manual;
- proponé commit.
```

---

## Prompt 1.3 — Planificar estados no exitosos

```txt
Usá modo plan. No edites archivos.

Tarea: diseñar/implementar estados públicos no exitosos de `/validar/:tokenCertificacion`.

Leé:
- openspec/specs/validacion-publica/spec.md
- fixtures/certificacion-revocada.json
- fixtures/certificacion-no-encontrada.json
- docs/frontend/08-estados-ui.md si existe
- docs/frontend/02-sistema-diseno-anti-cliches.md

Estados:
1. Certificación revocada.
2. Certificación no encontrada.
3. Error técnico temporal.

Reglas:
- Revocada puede mostrar datos mínimos.
- No encontrada no debe mostrar datos personales.
- Error técnico no debe parecer certificación inválida.
- No mostrar fechas presentes en revocada como si siguieran vigentes.

Respondé con plan, componentes y QA manual.
```

---

## Prompt 1.4 — Implementar estados no exitosos

```txt
Implementá los estados públicos no exitosos aprobados.

Reglas:
- Mantener misma identidad visual que validación válida.
- No mostrar datos personales si token no existe.
- Usar rojo moderado para revocada.
- Usar ámbar/azul para no encontrada o error técnico.
- No usar pantallas de error SaaS genéricas.
- Cubrir mobile 360/390/430 y desktop.

Al finalizar:
- listá archivos modificados;
- indicá cómo simular cada estado;
- proponé tests/QA;
- proponé commit.
```

---

## Prompt 1.5 — Planificar PDF horizontal con QR

```txt
Usá modo plan. No edites archivos.

Tarea: preparar vista previa del PDF complementario horizontal con QR.

Leé:
- docs/pdf-qr/00-pdf-qr-certificado.md
- openspec/specs/pdf-qr/spec.md
- fixtures/pdf-complementario-ejemplo.json
- docs/frontend/02-sistema-diseno-anti-cliches.md

Objetivo:
- que el PDF se parezca mucho al certificado real del IFTS 14;
- que sea horizontal;
- que incluya QR y link escrito;
- que incluya DNI completo;
- que incluya fechas asistidas;
- que incluya número de certificado;
- que deje placeholders para firma, sello y autoridad.

Respondé con:
- estructura visual;
- componentes;
- campos;
- pendientes de assets/logos;
- QA manual;
- rama sugerida.
```

---

## Prompt 1.6 — Implementar preview PDF

```txt
Implementá una preview visual del PDF horizontal con QR usando datos ficticios.

Reglas:
- No generar PDF real todavía si no está definido.
- Debe parecerse al certificado real provisto por el IFTS 14.
- Usar placeholders de logos si no están los assets.
- Usar placeholders de firma/sello/autoridad.
- Incluir QR placeholder y link escrito.
- Incluir DNI completo, curso, fechas presentes, número de certificado y fecha de emisión.
- Mantener formato horizontal.
- No inventar logos ni firmas.

Al terminar:
- listá archivos modificados;
- indicá cómo ver la preview;
- indicá assets pendientes;
- proponé commit.
```
