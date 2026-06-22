# AGENTS.md — IFTS14 Certificados QR

## Propósito

Este archivo orienta a OpenCode/Gentle-AI y a cualquier asistente de código que trabaje en el repositorio.

La prioridad es mantener el proyecto ordenado, acotado al MVP, guiado por Spec-Driven Development y sin asumir tecnologías finales no confirmadas.

---

## Lectura mínima obligatoria

Antes de trabajar, leer solo lo necesario.

Lectura base:

1. `README.md`.
2. `docs/00-indice-general.md`.
3. el `AGENTS.md` de la carpeta donde se va a trabajar;
4. la spec correspondiente en `openspec/specs/`;
5. los fixtures o contratos si la tarea toca datos.

No leer todos los archivos del repositorio por defecto.

---

## Archivos raíz para humanos

Estos archivos están pensados principalmente para Marcos, Matías y cualquier humano que necesite contexto:

- `GUIA.md`;
- `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`;
- `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md`.

No leer completos los archivos de prompts por defecto. Solo abrirlos cuando la tarea sea ejecutar, revisar o modificar el plan operativo por ciclos SDD.

---

## Metodología obligatoria

El proyecto se trabaja con:

- Spec-Driven Development;
- TDD cuando exista implementación;
- documentación viva;
- GitHub Issues;
- OpenCode + Gentle-AI;
- PRs y revisión humana.

Flujo obligatorio por tarea:

1. revisar issue o tarea;
2. revisar spec;
3. revisar criterios de aceptación;
4. revisar fixtures/contratos;
5. proponer plan;
6. esperar aprobación humana;
7. implementar cambios pequeños;
8. ejecutar pruebas disponibles;
9. hacer QA manual cuando corresponda;
10. actualizar documentación si cambió comportamiento;
11. proponer mensaje de commit;
12. no commitear automáticamente.

---

## Uso de OpenCode/Gentle-AI

Usar primero modo planificación cuando exista duda.

El asistente debe:

- decir qué archivos necesita leer antes de leerlos;
- evitar cargar documentación innecesaria;
- trabajar un ciclo SDD por vez;
- frenar si detecta contradicciones;
- pedir confirmación antes de ampliar alcance;
- proponer commit, push y PR, pero no ejecutarlos automáticamente.

Los archivos `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` y `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` ya contienen los ciclos SDD, ramas sugeridas, comandos Git y criterios de merge.

---

## Idioma y estilo

Toda documentación, comentario y explicación interna debe estar en español argentino formal.

Los comentarios deben ser útiles y breves. No comentar obviedades.

Correcto:

- "Valido el token antes de consultar datos personales."
- "Mantengo este adaptador separado para poder reemplazar mocks por HTTP."

Incorrecto:

- "Esta función hace una función."
- comentarios enormes que repiten el código;
- documentación desactualizada;
- textos genéricos sin contexto del proyecto.

---

## Stack

El stack final es agnóstico por ahora.

Reglas:

- no asumir stack final hasta que el IFTS 14 lo confirme;
- hay fuerte sospecha de Angular en frontend, pero no está confirmado;
- el backend también permanece agnóstico;
- pueden existir ejemplos orientativos en Node/Express + Prisma/PostgreSQL;
- los ejemplos no son una decisión final obligatoria;
- el prototipo externo puede avanzar desacoplado con contratos, fixtures y specs.

---

## Reglas funcionales vigentes

- Solo existe link público por certificación: `/validar/:tokenCertificacion`.
- No hay perfil público del alumno en el MVP.
- El DNI completo se muestra cuando la certificación válida o revocada existe.
- Si el token no existe, no se muestran datos personales.
- El QR/token es permanente.
- Si se corrigen fechas/asistencias, se mantiene el mismo QR y se reenvía PDF/aviso.
- Solo se muestran asistencias presentes.
- No se muestran ausencias, justificadas ni porcentajes.
- No hay borrador: la certificación se emite/envía directo.
- La carga masiva queda documentada, no comprometida para el MVP.
- La demo usa datos ficticios.

---

## Reglas frontend

Si se trabaja frontend:

- leer la documentación frontend indicada por `docs/00-indice-general.md`;
- usar `pagina_muestra/` como referencia visual cuando Marcos deje ahí un diseño aprobado de v0/Stitch;
- no copiar React/v0 literalmente si la implementación final es Angular;
- portar el diseño a componentes de la tecnología elegida;
- mantener la dirección visual:
  - público: folio técnico institucional / acta académica verificable;
  - admin: mesa de trabajo de Bedelía / archivo institucional digital;
- evitar clichés de IA, cards repetidas, badges genéricos, gradientes decorativos y estética SaaS;
- usar fixtures/mocks si no existe backend real.

---

## Reglas backend

Si se trabaja backend:

- respetar contratos antes que implementación;
- no cambiar JSON sin actualizar fixtures y documentación;
- aplicar Clean Architecture liviana si el stack lo permite;
- separar reglas de negocio de infraestructura;
- validar entradas;
- no exponer DNI, tokens completos ni secretos en logs;
- cubrir reglas principales con TDD cuando exista implementación;
- mantener endpoints o equivalentes conceptuales alineados con `docs/03-arquitectura-contratos-datos.md`.

---

## Reglas PDF/QR/email

- El PDF debe ser horizontal y parecerse mucho al certificado real del IFTS 14.
- Debe incluir QR, link escrito, DNI completo, fechas presentes, número de certificado y placeholders de firma/sello/autoridad.
- El QR debe apuntar a `/validar/:tokenCertificacion`.
- El QR no cambia si se corrigen fechas o asistencias.
- Si cambia información ya enviada, se regenera y reenvía el PDF/aviso con el mismo QR.
- Los logos autorizados son: IFTS 14, escudo CABA, Buenos Aires Aprende, Agencia de Habilidades para el Futuro y BA Ciudad.

---

## Git y GitHub

`main` representa demo estable y deploy del prototipo.

No trabajar directo sobre `main`.

Usar ramas por ciclo o funcionalidad:

- `docs/<tema>`;
- `spec/<modulo>`;
- `frontend/<modulo>`;
- `backend/<modulo>`;
- `qa/<tema>`;
- `deploy/<tema>`.

El asistente puede sugerir comandos Git, pero no debe ejecutar commit, push, PR o merge sin instrucción explícita.

Criterio de merge:

- spec respetada;
- tests o validaciones ejecutadas;
- QA manual si corresponde;
- documentación actualizada;
- fixtures actualizados si cambió contrato;
- PR revisado;
- sin secretos ni datos reales.

---

## Documentación viva

Actualizar documentación cuando cambie:

- comportamiento funcional;
- contrato de datos;
- ruta o endpoint;
- fixture;
- pantalla;
- flujo de usuario;
- decisión de arquitectura;
- deploy;
- regla de negocio.

Mantener documentos breves. Si un archivo crece demasiado, proponer división. Si hay duplicación, proponer consolidación.

---

## Seguridad y privacidad

- No usar datos reales en la demo.
- No guardar secretos en el repo.
- No exponer tokens completos en logs.
- No mostrar datos personales si el token no existe.
- No inventar integraciones institucionales no confirmadas.
- No asumir que la web oficial aceptará el stack del prototipo.

---

## Regla final

Ante duda o contradicción:

1. frenar;
2. indicar archivos y reglas en conflicto;
3. proponer opciones;
4. esperar decisión humana.
