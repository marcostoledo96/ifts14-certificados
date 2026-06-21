# Arquitectura MVP

## Tipo

Monorepo modular, contract-first, con backend agnóstico y posible Clean Architecture liviana.

## Frontend

Agnóstico. Si se confirma Angular, usar estructura por features y servicios/adaptadores.

## Backend

Agnóstico. Si se usa Node/Express + Prisma/PostgreSQL, mantener separación:

- dominio;
- casos de uso;
- infraestructura;
- presentación.

## Integración futura

La integración con la web oficial queda fuera del MVP.
