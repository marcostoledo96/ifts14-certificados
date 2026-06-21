# IFTS14 Certificados QR

Repositorio monorepo para planificar, prototipar e implementar el sistema de certificaciones QR del IFTS N.° 14.

## Objetivo del MVP

Entregar antes del 15 de julio de 2026 un prototipo funcional externo, desplegado en infraestructura propia para demo institucional:

- frontend en Vercel;
- backend/base de datos en Railway, si se confirma esa implementación;
- datos ficticios para la demo;
- link público `/validar/:tokenCertificacion`;
- PDF horizontal similar al certificado real del IFTS 14, con QR;
- panel administrativo básico para Bedelía.

La integración dentro de la web oficial del IFTS 14 queda para una etapa posterior.

## Metodología

El proyecto se trabaja con:

- Spec-Driven Development;
- TDD cuando exista implementación;
- documentación viva;
- GitHub Issues;
- OpenCode + Gentle-AI.

## Lectura inicial recomendada

1. `AGENTS.md`
2. `docs/00-indice-general.md`
3. `docs/01-contexto-alcance-decisiones.md`
4. `docs/02-requerimientos-reglas-negocio.md`
5. `docs/03-arquitectura-contratos-datos.md`
6. `openspec/00-indice-specs.md`

## Regla principal

No se debe asumir stack final hasta que el IFTS 14 confirme la tecnología real de la web oficial y sus restricciones. El prototipo puede avanzar de forma desacoplada con contratos, fixtures y specs.
