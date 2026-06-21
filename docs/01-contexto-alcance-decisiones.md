# Contexto, alcance y decisiones

## Contexto

El IFTS N.° 14 solicitó un sistema de certificaciones QR para validar constancias/certificaciones de cursos. La entrega objetivo del prototipo es el 15 de julio de 2026.

## Objetivo del prototipo

Crear un prototipo funcional externo, desplegado en infraestructura propia, para mostrar al instituto:

- validación pública por QR/link;
- panel administrativo básico;
- generación de PDF horizontal similar al certificado real;
- envío o reenvío de certificación;
- revocación;
- datos ficticios.

## Fuera del MVP

- integración dentro de la web oficial del IFTS 14;
- perfil público del alumno;
- carga masiva real;
- login con Google;
- 2FA;
- configuración institucional avanzada;
- firma digital real.

## Decisiones confirmadas

- Monorepo.
- Documentación en español argentino formal.
- Metodología SDD + TDD.
- GitHub Issues.
- OpenCode + Gentle-AI.
- Stack final agnóstico.
- Fuerte sospecha de Angular, pendiente de confirmar.
- Backend agnóstico, con ejemplos orientativos Node/Express + Prisma/PostgreSQL.
- Deploy del prototipo desde `main`.
- Frontend en Vercel y backend/base en Railway si se implementa como prototipo externo.
- Datos demo ficticios.
- El PDF debe parecerse mucho al certificado actual del IFTS 14.
- PDF horizontal con QR, link escrito, DNI completo, fechas presentes, número de certificado y placeholders de firma/sello/autoridad.
- Logos autorizados: IFTS 14, escudo CABA, Buenos Aires Aprende, Agencia de Habilidades para el Futuro y BA Ciudad. Falta conseguir archivos limpios.

## Pendientes principales

- Tecnología real de la web oficial.
- Acceso al servidor/dominio.
- Proveedor o cuenta de email.
- Formato final de número de certificado.
- Logos separados en PNG/SVG.
- Confirmación final de campos administrativos.
