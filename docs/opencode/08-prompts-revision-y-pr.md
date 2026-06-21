# 08 — Prompts de revisión, QA y PR

## Objetivo

Usar estos prompts antes de cerrar ramas, abrir PRs o mergear a `main`.

---

## Prompt 8.1 — Revisión de alcance antes de commit

```txt
Revisá los cambios actuales antes de commit.

No edites archivos.

Necesito que compares:
- tarea original;
- branch actual;
- specs relacionadas;
- archivos modificados;
- criterios de aceptación;
- documentación actualizada.

Respondé con:
1. si los cambios están dentro del alcance;
2. si falta actualizar docs/specs/fixtures;
3. riesgos;
4. tests ejecutados o pendientes;
5. QA manual recomendado;
6. mensaje de commit sugerido.
```

---

## Prompt 8.2 — Revisión anti-cliché frontend

```txt
Revisá la pantalla frontend actual con criterio visual.

No edites archivos todavía.

Usá como criterios:
- público: folio técnico institucional / acta académica verificable;
- admin: mesa de trabajo de Bedelía / archivo institucional digital;
- evitar clichés de IA;
- contraste AA;
- responsive;
- no exceso de cards;
- no dashboard SaaS genérico.

Respondé con:
- problemas visuales;
- problemas de jerarquía;
- problemas mobile/desktop;
- recomendaciones concretas;
- cambios mínimos necesarios;
- si aprobarías o no la pantalla.
```

---

## Prompt 8.3 — Revisión backend/TDD

```txt
Revisá el módulo backend actual.

No edites archivos.

Evaluá:
- si respeta contratos;
- si respeta reglas de negocio;
- si tiene tests suficientes;
- si no expone DNI/token en logs;
- si no asumió stack o comportamiento no documentado;
- si actualizó docs/fixtures si cambió contrato.

Respondé con:
- aprobado / requiere cambios;
- problemas encontrados;
- tests faltantes;
- riesgos de seguridad;
- cambios mínimos recomendados.
```

---

## Prompt 8.4 — Preparar Pull Request

```txt
Prepará el texto del Pull Request para la rama actual.

No edites archivos.

Quiero:
- título de PR;
- resumen;
- archivos principales modificados;
- issue relacionado;
- checklist de pruebas;
- checklist de documentación;
- riesgos;
- capturas recomendadas si es frontend.

Usá español argentino formal.
```

---

## Prompt 8.5 — Revisión final antes de merge a main

```txt
Revisá si esta rama está lista para merge a main.

No edites archivos.

Verificá:
- tests disponibles;
- build/lint si existen;
- QA manual;
- documentación actualizada;
- fixtures actualizados;
- ausencia de secretos;
- deploy no se rompe;
- demo sigue funcionando.

Respondé con:
- listo para merge: sí/no;
- bloqueos;
- advertencias;
- pasos antes de merge;
- mensaje final recomendado.
```
