# 01 — Flujo general con OpenCode + Gentle-AI

## Objetivo

Definir el ciclo de trabajo estándar para cualquier tarea del proyecto.

## Flujo obligatorio por tarea

```txt
1. Crear o elegir issue de GitHub.
2. Crear rama específica.
3. Abrir OpenCode en modo plan.
4. Leer documentación mínima.
5. Revisar spec y fixture.
6. Pedir plan de implementación.
7. Revisar plan humano.
8. Ejecutar implementación con build.
9. Ejecutar tests / validaciones disponibles.
10. Hacer QA manual si corresponde.
11. Actualizar documentación si cambió comportamiento.
12. Completar etapa sdd-archive (ver `docs/07-sdd-archive-y-mantenimiento-documentacion.md`).
13. Pedir resumen y mensaje de commit.
14. Commit manual.
15. Pull Request.
```

## Prompt base de planificación

```txt
Trabajemos en la tarea: [NOMBRE DE LA TAREA].

Usá modo planificación. No edites archivos todavía.

Leé únicamente:
- AGENTS.md
- docs/00-indice-general.md
- el AGENTS.md de la carpeta relacionada
- la spec de openspec correspondiente
- fixture relacionado si existe
- documentación específica del módulo si hace falta

Objetivo:
- entender alcance;
- detectar archivos a tocar;
- detectar riesgos;
- proponer plan mínimo;
- confirmar tests y QA necesarios.

Respondé con:
1. archivos que necesitás leer;
2. archivos que probablemente tocarías;
3. cambios propuestos;
4. tests esperados;
5. documentación que habría que actualizar;
6. preguntas bloqueantes, si existen.

No modifiques archivos hasta que apruebe el plan.
```

## Prompt base de implementación

Usar solo después de aprobar el plan.

```txt
Implementá el plan aprobado para la tarea: [NOMBRE DE LA TAREA].

Reglas:
- Trabajá en cambios pequeños.
- No modifiques alcance no pedido.
- Respetá specs, fixtures y criterios de aceptación.
- Mantené documentación y comentarios en español argentino formal.
- Comentá solo decisiones útiles, no obviedades.
- No commitees automáticamente.
- Si detectás contradicción, frená y preguntá.

Al terminar:
- listá archivos modificados;
- explicá cambios;
- indicá tests ejecutados o pendientes;
- indicá QA manual recomendado;
- proponé mensaje de commit.
```

## Prompt para continuar sesión vieja

```txt
Continuemos la tarea anterior.

Antes de tocar archivos:
- recordá el objetivo de la tarea;
- verificá rama actual;
- verificá archivos modificados;
- verificá si quedó documentación pendiente;
- proponé el siguiente paso mínimo.

No hagas cambios hasta que confirme.
```

## Prompt para frenar a la IA si se desordena

```txt
Pausá la implementación.

Volvé al plan original y compará:
- alcance aprobado;
- archivos modificados;
- cambios extra realizados;
- riesgos;
- cómo volver al alcance mínimo.

No sigas editando hasta que apruebe el nuevo plan.
```
