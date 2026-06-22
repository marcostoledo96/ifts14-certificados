# IFTS14 Certificados QR

Repositorio monorepo para planificar, prototipar e implementar el sistema de certificaciones QR del **IFTS N.° 14**.

El proyecto se trabaja con **Spec-Driven Development**, **TDD**, documentación viva, GitHub Issues y OpenCode/Gentle-AI.

---

## Objetivo del MVP

Entregar antes del **15 de julio de 2026** un prototipo funcional externo, desplegado en infraestructura propia para demo institucional.

El prototipo debe permitir:

- validar una certificación pública por QR/link en `/validar/:tokenCertificacion`;
- mostrar una certificación válida con alumno, DNI completo, curso, fechas presentes, número de certificado y fecha de emisión;
- mostrar estados no exitosos: revocada, no encontrada y error técnico;
- generar o previsualizar un PDF horizontal similar al certificado real del IFTS 14, con QR y link escrito;
- usar un panel administrativo básico para Bedelía;
- trabajar con datos ficticios para la demo;
- desplegar el prototipo externo en Vercel/Railway si se avanza con esa infraestructura.

La integración dentro de la web oficial del IFTS 14 queda para una etapa posterior.

---

## Estado tecnológico

El stack final sigue **agnóstico** hasta que el IFTS 14 confirme la tecnología real de su web oficial y restricciones de servidor.

Decisiones actuales:

- hay fuerte sospecha de frontend Angular, pero no está confirmado;
- el backend permanece agnóstico;
- se permiten ejemplos orientativos en Node/Express + Prisma/PostgreSQL;
- el frontend puede avanzar con prototipos, fixtures y contratos;
- la demo puede usar infraestructura propia y datos ficticios.

---

## Archivos raíz principales

| Archivo | Uso |
|---|---|
| `GUIA.md` | Guía humana del proyecto. Es el mejor punto de entrada para entender contexto, planificación, roles, fases y flujo de trabajo. |
| `AGENTS.md` | Reglas para OpenCode/Gentle-AI y otros asistentes de IA. Define lectura mínima, SDD, TDD, Git, documentación y límites. |
| `MARCOS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` | Guía operativa de Marcos con prompts por ciclos SDD, ramas, commits, PR y criterios de merge. |
| `MATIAS_PROMPTS_SDD_3_SEMANAS_CICLOS_GIT.md` | Guía operativa de Matías con prompts por ciclos SDD backend, ramas, commits, PR y criterios de merge. |
| `docs/00-indice-general.md` | Índice técnico de documentación para leer solo lo necesario por tipo de tarea. |
| `openspec/00-indice-specs.md` | Índice de specs SDD por módulo. |

---

## Roles de trabajo

### Marcos

Responsabilidades principales:

- arquitectura general;
- planificación y documentación;
- coordinación SDD;
- diseño visual y frontend;
- conversión de diseños de Stitch/v0 a Angular + Tailwind;
- uso de `pagina_muestra/` como referencia visual aprobada;
- QA visual;
- deploy del prototipo.

### Matías

Responsabilidades principales:

- backend agnóstico siguiendo contratos;
- casos de uso y reglas de negocio;
- TDD backend;
- PDF/QR/email cuando corresponda;
- persistencia y datos demo;
- soporte de integración con frontend;
- seguridad mínima, validaciones y auditoría.

---

## Metodología obligatoria

Cada tarea debe seguir un ciclo SDD:

1. elegir issue o tarea;
2. crear rama específica;
3. leer documentación mínima;
4. revisar spec correspondiente;
5. revisar fixture/contrato si aplica;
6. pedir plan a OpenCode/Gentle-AI;
7. aprobar el plan humano;
8. implementar en cambios chicos;
9. ejecutar tests o validaciones disponibles;
10. hacer QA manual cuando corresponda;
11. actualizar documentación si cambió comportamiento;
12. proponer commit;
13. commitear manualmente;
14. abrir PR;
15. mergear solo si cumple criterios.

OpenCode/Gentle-AI no debe commitear, pushear ni mergear automáticamente, salvo instrucción explícita.

---

## Flujo Git recomendado

`main` representa la demo estable y eventual deploy del prototipo.

No se trabaja directo sobre `main`.

Ramas sugeridas:

```txt
frontend/validacion-publica
frontend/validacion-estados
frontend/pdf-preview
frontend/admin-login-dashboard
frontend/cursos-fechas
frontend/asistencias
frontend/certificaciones-admin
backend/base-api
backend/validacion-publica
backend/cursos-asistencias
backend/certificaciones
backend/pdf-qr-email
qa/datos-demo
qa/checklist-demo
docs/<tema>
spec/<modulo>
```

Formato de commits sugerido:

```txt
docs(opencode): agregar guía de ejecución por ciclos
spec(validacion): completar criterios de aceptación
frontend(validacion): implementar pantalla pública válida
backend(validacion): implementar consulta pública por token
test(certificaciones): agregar pruebas de emisión y reenvío
qa(demo): preparar datos ficticios iniciales
```

---

## Cómo empezar

Para estudiar el proyecto como humano:

```txt
1. Leer GUIA.md.
2. Leer README.md.
3. Leer docs/00-indice-general.md.
4. Leer el archivo de prompts correspondiente a cada persona.
```

Para trabajar con OpenCode/Gentle-AI:

```txt
1. Leer AGENTS.md.
2. Leer docs/00-indice-general.md.
3. Elegir el ciclo SDD del archivo de Marcos o Matías.
4. Copiar un solo ciclo por vez en OpenCode.
5. Seguir la rama, commit y PR indicados en ese ciclo.
```

---

## Alcance actual del MVP

Entra en MVP:

- validación pública por token;
- PDF horizontal con QR;
- panel admin básico;
- cursos y fechas;
- asistencias presentes;
- emisión directa;
- reenvío con mismo QR;
- revocación;
- login administrativo funcional;
- email funcional o simulado desde cuenta creada;
- QA y demo con datos ficticios.

Queda fuera del MVP:

- integración dentro de la web oficial;
- perfil público del alumno;
- carga masiva real;
- login con Google;
- 2FA;
- firma digital real;
- configuración institucional avanzada;
- datos reales de alumnos.
