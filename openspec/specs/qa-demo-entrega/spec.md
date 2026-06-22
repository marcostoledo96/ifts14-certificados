# Spec — QA, demo y entrega

## Objetivo

Validar y mostrar un prototipo funcional del sistema de certificaciones QR al IFTS N.° 14.

## Alcance

Incluye:

- validación pública por QR/link;
- datos ficticios;
- PDF horizontal con QR;
- login admin;
- flujo básico de Bedelía;
- envío o simulación de email;
- deploy estable desde `main`.

## Fuera de alcance

- datos reales;
- integración dentro de web oficial;
- carga masiva definitiva;
- perfil público del alumno;
- login con Google;
- 2FA.

## Criterios de aceptación

- La demo abre desde una URL pública estable.
- Una persona externa puede validar autenticidad por QR/link.
- La certificación válida muestra DNI completo, curso, fechas presentes y número.
- El QR del PDF abre la misma validación.
- El token inexistente no expone datos personales.
- La certificación revocada no se muestra como válida.
- Bedelía puede iniciar sesión con usuario demo.
- Bedelía puede recorrer el flujo de curso, asistencia, certificación y PDF.
- El envío/reenvío funciona o está simulado de forma explícita.
- Todo usa datos ficticios.

## Casos de prueba

### Caso 1 — QR válido

Dado un PDF demo con QR,
cuando una persona externa escanea el QR,
entonces ve la certificación válida en la web.

### Caso 2 — Link compartido por alumno

Dado un link de certificación enviado al alumno,
cuando una persona externa abre el link,
entonces puede verificar la autenticidad de la constancia.

### Caso 3 — Token inexistente

Dado un token inexistente,
cuando se abre la validación,
entonces no se muestran datos personales.

### Caso 4 — Certificación revocada

Dado un certificado revocado,
cuando se abre el QR,
entonces se muestra estado revocado.

### Caso 5 — Reenvío

Dada una certificación modificada,
cuando Bedelía reenvía el certificado,
entonces se genera un nuevo PDF con el mismo QR.

## Pendientes

- Confirmar proveedor real de email o cuenta de prueba.
- Confirmar si el PDF se generará real o preview funcional en la demo.
- Confirmar disponibilidad de logos oficiales separados.
- Confirmar fecha/hora exacta de demo con el instituto.
- Confirmar quién realizará la demo.