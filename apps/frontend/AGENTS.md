# AGENTS.md — apps/frontend

## Propósito

Esta carpeta contendrá la implementación frontend del sistema de certificaciones QR del IFTS N.° 14 cuando se confirme el stack o se cree el prototipo.

## Tecnología

No asumir tecnología final hasta confirmación.

Si se confirma Angular, seguir `docs/frontend/02-si-termina-siendo-angular.md`.

## Reglas de implementación

- Mantener nombres de archivos, variables, modelos y funciones en español cuando sea posible.
- Usar comentarios en español argentino formal, en cantidad amigable.
- Evitar comentarios obvios.
- Documentar decisiones no evidentes.
- No depender de backend real si todavía se está trabajando con fixtures.
- No inventar campos no documentados.
- No instalar librerías visuales sin justificar.
- No copiar React de v0 literalmente si la app final es Angular.

## Datos

Usar fixtures o mocks acordados en `fixtures/` mientras no exista backend real.

## QA

Cada pantalla debe revisarse con:

- responsive;
- accesibilidad básica;
- estados principales;
- contenido obligatorio;
- ausencia de clichés de IA.
