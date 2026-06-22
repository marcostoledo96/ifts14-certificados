# Spec — Alumnos y asistencias presentes

## Objetivo

Permitir registrar qué alumnos estuvieron presentes en cada fecha de un curso.

## Alcance MVP

Esta spec define el comportamiento esperado para el prototipo funcional externo del 15 de julio.

La tecnología de implementación se mantiene agnóstica hasta que el IFTS 14 confirme restricciones del sitio/servidor oficial.

## Reglas generales

- Usar datos ficticios en la demo.
- Mantener documentación actualizada.
- No implementar comportamiento no definido en esta spec sin actualizarla primero.
- Respetar los fixtures y contratos asociados.
- Aplicar TDD cuando se implemente la lógica.

## Criterios de aceptación

### Criterios generales

- La funcionalidad cumple el objetivo definido en esta spec.
- No introduce dependencias tecnológicas no confirmadas.
- Usa datos ficticios si se muestra en demo.
- Mantiene lenguaje claro y formal.
- Actualiza documentación si cambia el comportamiento.

### Criterios mínimos para MVP

- Existe una forma de probar el flujo principal.
- Los errores se comunican de forma clara.
- No se exponen datos personales cuando no corresponde.
- La interfaz o API respeta los contratos definidos.
- La funcionalidad puede revisarse manualmente antes de mergear.

## Casos de prueba

### Casos iniciales

1. Caso exitoso principal.
2. Caso con datos incompletos.
3. Caso con recurso inexistente.
4. Caso de error controlado.
5. Caso de validación manual para demo.

### Regla TDD

Cuando se implemente esta funcionalidad, los tests deben escribirse antes o junto con la implementación.

Si todavía no se conoce el framework de testing, los casos se mantienen en este archivo como especificación ejecutable futura.

## Pendientes

- Confirmar tecnología final si impacta este módulo.
- Completar detalles cuando avance el desarrollo.
- Registrar dudas nuevas como preguntas institucionales o técnicas.
- Revisar impacto en fixtures y contratos.