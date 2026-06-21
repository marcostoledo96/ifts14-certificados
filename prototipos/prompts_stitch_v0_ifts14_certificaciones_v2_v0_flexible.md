# Prompts para Google Stitch y v0 — IFTS N.° 14 Certificaciones QR

> Versión ajustada: prompts de v0 más flexibles, preparados para trabajar con skills de diseño y para permitir mejoras visuales justificadas sobre la captura de Stitch.

Este markdown reúne prompts listos para usar en dos pasos:

1. **Google Stitch**: explorar dirección visual, composición e identidad.
2. **v0**: tomar la captura elegida de Stitch como referencia, mejorarla con criterio visual y convertirla en una pantalla más prolija, codificable y portable a Angular + Tailwind.

El objetivo es evitar resultados genéricos de IA y mantener una identidad propia para el sistema del **IFTS N.° 14**.

---

## 0. Contexto común del sistema

Usá este contexto como base mental para todos los prompts.

```txt
Sistema: certificaciones QR para el IFTS N.° 14.

El sistema permite certificar asistencias de alumnos a cursos. Cada curso tiene varias fechas. Cada alumno puede haber asistido a algunas fechas del curso. La certificación pública muestra únicamente las fechas en las que ese alumno estuvo presente.

Decisiones confirmadas:
- No hay edición/cohorte en el MVP.
- Cada certificación corresponde a alumno + curso + asistencias presentes.
- Solo existe link público por certificación: /validar/:tokenCertificacion.
- No hay perfil público del alumno.
- El DNI completo se muestra públicamente.
- El QR/token de certificación es permanente.
- Si se corrigen fechas o asistencias, se mantiene el mismo QR.
- Si se corrigen datos ya enviados, se reenvía el PDF/aviso al alumno con el mismo QR.
- No hay borrador: la certificación se emite/envía directo.
- El admin lo usará principalmente Bedelía desde PC/notebook.
- Frontend final: Angular + Tailwind.
- Stitch/v0 se usan para diseño visual; luego se porta a Angular.
```

---

## 1. Dirección visual general

### Público

```txt
Folio técnico institucional / acta académica verificable.

Debe sentirse como:
- documento oficial digital;
- validación documental;
- registro de asistencia;
- trazabilidad QR;
- portal institucional técnico.

No debe sentirse como:
- SaaS;
- fintech;
- landing comercial;
- dashboard;
- plantilla shadcn genérica;
- pantalla genérica de IA.
```

### Admin

```txt
Mesa de trabajo de Bedelía / archivo institucional digital.

Debe sentirse como:
- sistema administrativo institucional;
- herramienta diaria de Bedelía;
- archivo documental;
- gestión académica clara;
- panel operativo sobrio.

No debe sentirse como:
- dashboard de métricas SaaS;
- CRM comercial;
- panel de startup;
- app fintech;
- demo visual excesiva.
```

---

## 2. Paleta y reglas anti-cliché

```txt
Paleta:
- Azul noche institucional: #0B1F33
- Azul técnico: #1565C0
- Cian circuito: #00A8C6
- Verde validación: #2E7D32
- Verde suave: #E8F5E9
- Gris papel: #F5F7FA
- Gris texto: #263238
- Blanco: #FFFFFF
- Ámbar advertencia: #F9A825
- Rojo revocado: #C62828

Tipografía:
- Sans serif sobria.
- Monoespaciada o números tabulares solo para DNI, códigos, tokens y números de certificado.
- No usar tracking excesivo.
- No poner todo en uppercase.

Evitar:
- glassmorphism;
- blobs;
- gradientes genéricos;
- sombras grandes;
- emojis;
- hero SaaS centrado;
- cards blancas repetidas;
- badges genéricos;
- íconos decorativos en cada bloque;
- estética fintech;
- estética dashboard comercial.

Usar:
- folios;
- sellos institucionales temporales;
- bandas de estado;
- líneas finas;
- tabla/lista de asistencia sobria;
- zona de trazabilidad QR;
- textura mínima tipo papel técnico;
- composición documental.
```

---

## 3. Orden recomendado de generación

```txt
1. Validación pública válida.
2. Dashboard admin.
3. Crear / editar curso con fechas.
4. Registrar asistencias presentes.
5. Emitir certificación directa.
6. Detalle de certificación.
7. Vista previa PDF.
8. Validación revocada / no encontrada / error.
9. Listado de cursos.
10. Detalle de curso.
11. Listado de certificaciones.
12. Enviar / reenviar certificación.
13. Revocar certificación.
14. Carga masiva.
15. Listado de alumnos.
16. Detalle de alumno.
17. Auditoría.
18. Configuración institucional.
```

Para una demo de avance, el mínimo recomendable es:

```txt
1. Validación pública válida.
2. Dashboard admin.
3. Crear / editar curso con fechas.
4. Registrar asistencias presentes.
5. Detalle de certificación con QR.
6. Vista previa PDF.
```
---

## 3.1. Modo flexible para v0 con skills

Usá este criterio en todos los prompts de v0.

```txt
La captura de Google Stitch es una referencia visual, no una maqueta rígida.

v0 puede mejorar:
- composición;
- jerarquía;
- responsive;
- accesibilidad;
- espaciado;
- densidad;
- tratamiento visual;
- microcopy;
- organización de secciones;
- sistema de estados;
- consistencia con la identidad IFTS 14.

v0 no puede cambiar:
- alcance funcional confirmado;
- rutas conceptuales;
- datos obligatorios;
- reglas de privacidad;
- decisiones del MVP;
- ausencia de perfil público del alumno;
- QR permanente;
- DNI completo visible en validación pública.

Si las skills disponibles sugieren una solución más clara, moderna, institucional o usable que la captura de Stitch, v0 debe mejorarla y explicar brevemente la decisión.

El objetivo no es copiar Stitch: es usar Stitch como punto de partida y producir una interfaz final mejor.
```

---

# PARTE A — Pantallas públicas

---

## 4. Validación pública válida

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para una pantalla pública de validación válida de certificación del IFTS N.° 14.

Contexto:
El IFTS N.° 14 es un instituto terciario técnico. El sistema valida certificaciones de cursos mediante QR. Cada certificación corresponde a un alumno, un curso y las fechas en las que ese alumno estuvo presente.

Ruta conceptual:
/validar/:tokenCertificacion

Objetivo:
Una persona externa escanea un QR o abre un link y necesita verificar si una certificación es auténtica. La pantalla debe transmitir confianza, seriedad institucional y claridad documental.

Dirección visual:
Debe sentirse como un folio técnico institucional o acta académica verificable, no como una app SaaS. Debe parecer una página oficial de validación documental.

Generá 3 direcciones visuales:
1. Folio documental institucional.
2. Acta técnica de validación académica.
3. Registro verificable con zona de trazabilidad QR.

Contenido obligatorio:
- Header institucional con “IFTS N.° 14”.
- Subtítulo: “Validación oficial de certificados”.
- Placeholder sobrio para logo institucional, tipo sello o monograma temporal.
- Estado principal: “Certificación válida”.
- Mensaje: “Esta certificación fue emitida por el Instituto de Formación Técnica Superior N.° 14.”
- Alumno/a: María González.
- DNI: 40.123.456.
- Curso: Introducción a Sistemas Embebidos e Internet de las Cosas.
- Tipo: Certificado de curso.
- Número de certificado: IFTS14-CUR-2026-0001.
- Fecha de emisión: 20/06/2026.
- Fechas presentes: 05/06/2026, 12/06/2026, 19/06/2026.
- Código parcial de validación: QR-8F3A-92K.
- Fecha y hora de consulta: 20/06/2026 · 18:35.
- Texto: “El código QR no almacena datos personales; solo permite consultar este registro oficial.”
- Acción secundaria: “Volver al sitio del instituto”.
- Footer: “IFTS N.° 14 · Sistema de validación de certificados”.

Composición:
- Mobile-first.
- En 360px, 390px y 430px debe verse rápidamente el estado “Certificación válida”.
- En desktop, usar folio centrado con posible columna lateral de trazabilidad.
- Usar una superficie principal tipo documento.
- Evitar muchas cards separadas.
- Mostrar fechas como registro de asistencia, no como chips.
- El QR/código debe sentirse como control documental.

Evitar:
- SaaS dashboard.
- Hero centrado genérico.
- Glassmorphism.
- Blobs.
- Gradientes decorativos.
- Sombras grandes.
- Emojis.
- Cards blancas repetidas.
- Badges genéricos.
- Íconos decorativos en cada sección.
- Estética fintech.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/validar/:tokenCertificacion

Objetivo de esta pantalla:
Una persona externa escanea un QR o abre un link y necesita verificar si una certificación es auténtica. Esta pantalla es la cara pública más importante del sistema, así que debe transmitir confianza institucional y claridad documental sin parecer una plantilla genérica.

Dirección visual esperada:
- folio técnico institucional;
- acta académica verificable;
- documento oficial digital;
- validación documental con trazabilidad QR;
- estética técnica vinculada a IFTS 14, sistemas embebidos, IoT y eficiencia energética.

Podés mejorar:
- jerarquía del folio;
- tratamiento del logo/sello institucional;
- banda de estado;
- integración del QR;
- registro de asistencia;
- uso de textura técnica sutil;
- composición mobile/desktop.

Evitá:
- app SaaS genérica;
- card stack sin intención;
- badges genéricos;
- glassmorphism;
- blobs;
- gradientes decorativos;
- emojis;
- sombras grandes;
- íconos en todos los bloques;
- estética fintech o dashboard.

Contenido obligatorio:
- Header institucional con “IFTS N.° 14”.
- Subtítulo: “Validación oficial de certificados”.
- Placeholder sobrio para logo institucional, preferentemente como sello/monograma temporal y no como caja punteada.
- Estado principal: “Certificación válida”.
- Mensaje: “Esta certificación fue emitida por el Instituto de Formación Técnica Superior N.° 14.”
- Alumno/a: María González.
- DNI: 40.123.456.
- Curso: Introducción a Sistemas Embebidos e Internet de las Cosas.
- Tipo: Certificado de curso.
- Número de certificado: IFTS14-CUR-2026-0001.
- Fecha de emisión: 20/06/2026.
- Fechas presentes: 05/06/2026, 12/06/2026, 19/06/2026.
- Código parcial de validación: QR-8F3A-92K.
- Fecha y hora de consulta: 20/06/2026 · 18:35.
- Texto: “El código QR no almacena datos personales; solo permite consultar este registro oficial.”
- Acción secundaria: “Volver al sitio del instituto”.
- Footer institucional.

Reglas y límites:
- Mostrá las fechas como registro de asistencia, tabla sobria o lista documental, no como chips decorativos.
- Integrá el estado válido como banda, sello o franja institucional, no como badge verde genérico.
- El QR/código debe sentirse como zona de trazabilidad documental.
- No agregues perfil público del alumno ni listado de otros cursos.
- No agregues descarga de PDF todavía en esta pantalla.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 5. Validación pública no exitosa: revocada / no encontrada / error técnico

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para una pantalla pública de validación no exitosa de certificación del IFTS N.° 14.

Contexto:
Ya existe una pantalla de “Certificación válida” con dirección visual de folio técnico institucional / acta académica verificable. Esta pantalla debe ser consistente con esa identidad.

Ruta conceptual:
/validar/:tokenCertificacion

Necesito tres variantes visuales:
1. Certificación revocada.
2. Certificación no encontrada.
3. Error técnico temporal.

Dirección visual:
Debe sentirse como documento técnico institucional de validación, no como pantalla de error SaaS. Mantener folio oficial, registro verificable, trazabilidad documental y sobriedad académica.

Contenido común:
- Header institucional con “IFTS N.° 14”.
- Subtítulo: “Validación oficial de certificados”.
- Placeholder sobrio para logo institucional, como sello o monograma temporal.
- Estado principal claro.
- Mensaje breve y comprensible.
- Acción secundaria: “Volver al sitio del instituto”.
- Footer: “IFTS N.° 14 · Sistema de validación de certificados”.

Variante 1 — Certificación revocada:
- Estado: “Certificación revocada”.
- Mensaje: “Esta certificación fue revocada por la institución.”
- Mostrar datos mínimos si existen:
  - Alumno/a: María González
  - DNI: 40.123.456
  - Curso: Introducción a Sistemas Embebidos e Internet de las Cosas
  - Número de certificado: IFTS14-CUR-2026-0001
  - Fecha de emisión: 20/06/2026
- No mostrar fechas presentes como si siguieran vigentes.
- Incluir zona de control documental con código parcial: QR-8F3A-92K.
- Usar rojo con moderación, como sello/estado, no como fondo dominante.

Variante 2 — Certificación no encontrada:
- Estado: “Certificación no encontrada”.
- Mensaje: “No pudimos encontrar una certificación asociada a este código.”
- No mostrar datos personales.
- Mostrar código consultado parcial, fecha/hora de consulta y aclaración:
  “Verificá que el enlace o QR sea el último enviado por el instituto.”
- Usar ámbar o azul institucional, no rojo agresivo.

Variante 3 — Error técnico temporal:
- Estado: “No pudimos completar la validación”.
- Mensaje: “Intentá nuevamente más tarde.”
- No mostrar datos personales.
- Mostrar hora de consulta.
- Debe transmitir problema temporal, no certificado inválido.
- Usar azul/cian y un acento ámbar moderado.

Composición:
- Mobile-first.
- Desktop con folio centrado y posible columna lateral de trazabilidad.
- Mantener una superficie principal tipo documento.
- Evitar muchas cards separadas.
- Usar bandas, sellos, líneas finas y bloques de acta.

Evitar:
- Estética SaaS.
- Hero centrado.
- Glassmorphism.
- Gradientes decorativos.
- Blobs.
- Sombras grandes.
- Emojis.
- Íconos decorativos en cada bloque.
- Cards blancas repetidas.
- Badges genéricos.
- Estética fintech.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/validar/:tokenCertificacion

Objetivo de esta pantalla:
Mostrar estados donde la validación no puede confirmarse, manteniendo tono oficial, claro y no alarmista. Debe diferenciar muy bien una certificación revocada, un token no encontrado y un error técnico temporal.

Dirección visual esperada:
- folio técnico institucional;
- acta académica verificable;
- documento oficial digital;
- validación documental con trazabilidad QR;
- estética técnica vinculada a IFTS 14, sistemas embebidos, IoT y eficiencia energética.

Podés mejorar:
- jerarquía del folio;
- tratamiento del logo/sello institucional;
- banda de estado;
- integración del QR;
- registro de asistencia;
- uso de textura técnica sutil;
- composición mobile/desktop.

Evitá:
- app SaaS genérica;
- card stack sin intención;
- badges genéricos;
- glassmorphism;
- blobs;
- gradientes decorativos;
- emojis;
- sombras grandes;
- íconos en todos los bloques;
- estética fintech o dashboard.

Contenido obligatorio:
Estado común:
- Header institucional con “IFTS N.° 14”.
- Subtítulo: “Validación oficial de certificados”.
- Placeholder sobrio de logo/sello institucional.
- Estado principal claro.
- Mensaje breve y comprensible.
- Acción secundaria: “Volver al sitio del instituto”.
- Footer institucional.

Variante 1 — Certificación revocada:
- Título: “Certificación revocada”.
- Mensaje: “Esta certificación fue revocada por la institución.”
- Mostrar datos mínimos si existen: alumno/a, DNI completo, curso, número de certificado y fecha de emisión.
- Mostrar código parcial: QR-8F3A-92K.
- No mostrar fechas presentes como si siguieran vigentes.

Variante 2 — Certificación no encontrada:
- Título: “Certificación no encontrada”.
- Mensaje: “No pudimos encontrar una certificación asociada a este código.”
- No mostrar datos personales.
- Mostrar código consultado parcial, fecha/hora de consulta y aclaración: “Verificá que el enlace o QR sea el último enviado por el instituto.”

Variante 3 — Error técnico temporal:
- Título: “No pudimos completar la validación”.
- Mensaje: “Intentá nuevamente más tarde.”
- No mostrar datos personales.
- Mostrar fecha/hora de consulta.

Reglas y límites:
- Podés resolverlo como un solo componente con selector visual de estados o como tres variantes separadas, según convenga para la claridad del diseño.
- El rojo debe ser moderado y documental, no agresivo.
- El estado “error técnico” no debe parecer certificación inválida.
- “No encontrada” nunca debe exponer datos personales.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

# PARTE B — Pantallas administrativas

---

## 6. Dashboard admin — Mesa de trabajo de Bedelía

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para el dashboard administrativo del sistema de certificaciones QR del IFTS N.° 14.

Contexto:
El panel será usado principalmente por Bedelía desde PC/notebook. No debe ser un dashboard SaaS de métricas. Debe sentirse como una mesa de trabajo administrativa para gestionar cursos, asistencias y certificaciones.

Ruta conceptual:
/admin/dashboard

Dirección visual:
Mesa de trabajo de Bedelía / archivo institucional digital / panel operativo académico.

Generá 3 variantes:
1. Mesa de trabajo administrativa con acciones principales.
2. Archivo institucional con actividad reciente.
3. Panel operativo sobrio con pendientes y accesos rápidos.

Contenido obligatorio:
- Header/sidebar admin con IFTS N.° 14.
- Título: “Panel de certificaciones”.
- Subtítulo: “Gestión de cursos, asistencias y certificados con QR.”
- Acciones principales:
  - Nuevo curso
  - Cargar asistencias
  - Nueva certificación
  - Reenviar certificado
  - Carga masiva
- Resumen operativo:
  - Cursos cargados
  - Alumnos registrados
  - Certificaciones emitidas
  - Certificaciones revocadas
- Actividad reciente:
  - certificación emitida;
  - asistencia modificada;
  - certificado reenviado;
  - certificación revocada.
- Pendientes:
  - cursos sin fechas;
  - alumnos sin email;
  - certificaciones pendientes de envío;
  - certificados que requieren reenvío por modificación.

Composición:
- Desktop-first.
- Mobile responsive.
- Acciones principales deben tener más peso que métricas.
- Usar tablas/listas administrativas sobrias.
- Evitar grillas de cards blancas iguales.
- Usar bandas, grupos, filas, paneles de archivo o módulos institucionales.
- No usar gráficos decorativos.

Evitar:
- Dashboard SaaS.
- Métricas gigantes como startup.
- Gráficos sin sentido.
- Gradientes.
- Glassmorphism.
- Blobs.
- Íconos coloridos en cada card.
- Sombras grandes.
- Exceso de badges.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/dashboard

Objetivo de esta pantalla:
Crear la primera pantalla del panel administrativo. Debe ayudar a Bedelía a entender qué hacer al entrar: cargar cursos, asistencias, certificaciones, reenvíos y pendientes. No debe priorizar métricas decorativas.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar administrativo con IFTS N.° 14.
- Título: “Panel de certificaciones”.
- Subtítulo: “Gestión de cursos, asistencias y certificados con QR.”
- Acciones principales: Nuevo curso, Cargar asistencias, Nueva certificación, Reenviar certificado, Carga masiva.
- Resumen operativo: cursos cargados, alumnos registrados, certificaciones emitidas, certificaciones revocadas.
- Actividad reciente: certificación emitida, asistencia modificada, certificado reenviado, certificación revocada.
- Pendientes: cursos sin fechas, alumnos sin email, certificaciones pendientes de envío, certificados que requieren reenvío por modificación.

Reglas y límites:
- Las acciones principales deben tener más peso que las métricas.
- Podés reorganizar el dashboard si una estructura tipo “bandeja de trabajo” funciona mejor que un tablero clásico.
- Usá tablas/listas/paneles de archivo si aportan más que cards.
- No uses gráficos si no aportan al trabajo de Bedelía.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 7. Login administrativo

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla de login administrativo del sistema de certificaciones QR del IFTS N.° 14.

Ruta conceptual:
/admin/login

Objetivo:
Permitir acceso al panel de certificaciones con email y contraseña. No habrá 2FA ni login con Google por ahora.

Dirección visual:
Acceso institucional autorizado. Sobrio, claro y seguro. No debe parecer fintech, banco ni SaaS genérico.

Contenido:
- IFTS N.° 14.
- Panel de certificaciones.
- Acceso exclusivo para personal autorizado.
- Placeholder sobrio de logo institucional.
- Campo email.
- Campo contraseña.
- Botón “Ingresar”.
- Mensaje: “Todas las acciones administrativas quedan registradas.”
- Footer discreto.

Composición:
- Desktop y mobile.
- Puede usar una columna principal con folio/formulario.
- Puede usar lateral institucional con información breve.
- Debe ser limpio y directo.
- No usar ilustraciones genéricas.

Evitar:
- Estética bancaria.
- Estética fintech.
- Glassmorphism.
- Gradientes fuertes.
- Imágenes externas.
- Blobs.
- Emojis.
- Registro público.
- Botones sociales.
- Login con Google.
- 2FA.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/login

Objetivo de esta pantalla:
Permitir acceso al panel de certificaciones con email y contraseña. Debe transmitir acceso institucional autorizado, seguridad y sobriedad.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- IFTS N.° 14.
- Título: “Panel de certificaciones”.
- Subtítulo: “Acceso exclusivo para personal autorizado”.
- Placeholder sobrio de logo institucional.
- Campo email.
- Campo contraseña.
- Botón principal “Ingresar”.
- Mensaje: “Todas las acciones administrativas quedan registradas.”
- Footer discreto.

Reglas y límites:
- No incluir registro público.
- No incluir login con Google.
- No incluir 2FA.
- No incluir recuperación compleja de contraseña.
- Podés usar un lateral institucional si mejora desktop, pero en mobile debe seguir siendo simple.

Debe parecer acceso a un sistema institucional, no banco, fintech ni SaaS comercial.

Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 8. Crear / editar curso con fechas

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de crear/editar curso con fechas del sistema de certificaciones QR del IFTS N.° 14.

Rutas conceptuales:
/admin/cursos/nuevo
/admin/cursos/:id/editar

Objetivo:
Bedelía carga o edita un curso y administra sus fechas. El curso puede modificarse después, agregando o quitando fechas.

Dirección visual:
Ficha académica institucional. Debe sentirse como formulario administrativo claro, no como formulario SaaS genérico.

Contenido:
- Header/sidebar admin.
- Título: “Nuevo curso” o “Editar curso”.
- Datos del curso:
  - nombre del curso;
  - descripción opcional;
  - carga horaria opcional;
  - modalidad opcional;
  - estado activo/inactivo.
- Sección “Fechas del curso”:
  - lista editable de fechas;
  - fecha;
  - horario opcional;
  - descripción opcional;
  - acción “Agregar fecha”;
  - acción “Quitar fecha”.
- Aviso importante:
  “Si modificás fechas de un curso con certificados ya enviados, será necesario reenviar el certificado al alumno. El QR seguirá siendo el mismo.”
- Acciones:
  - Guardar curso;
  - Cancelar;
  - Guardar cambios y marcar para reenvío, si aplica.

Composición:
- Desktop-first.
- Mobile usable.
- Datos del curso arriba.
- Fechas con protagonismo.
- No usar calendario complejo.
- El impacto de modificar fechas debe estar visible.

Evitar:
- Wizard innecesario.
- SaaS genérico.
- Formularios densos sin jerarquía.
- Gradientes.
- Cards repetidas.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/cursos/nuevo
/admin/cursos/:id/editar

Objetivo de esta pantalla:
Diseñar la ficha administrativa para crear o editar un curso y administrar sus fechas. Esta pantalla es central porque las fechas del curso son la base de las asistencias y certificaciones.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Nuevo curso” o “Editar curso”.
- Campos del curso: nombre del curso, descripción opcional, carga horaria opcional, modalidad opcional, estado activo/inactivo.
- Sección “Fechas del curso” con lista editable.
- Cada fecha debe contemplar: fecha, horario opcional, descripción opcional, acción Agregar fecha y acción Quitar fecha.
- Aviso importante: “Si modificás fechas de un curso con certificados ya enviados, será necesario reenviar el certificado al alumno. El QR seguirá siendo el mismo.”
- Acciones: Guardar curso, Cancelar, Guardar cambios y marcar para reenvío si aplica.

Reglas y límites:
- No uses wizard si no aporta.
- No uses calendario complejo por defecto; solo si mejora mucho la comprensión.
- Las fechas deben tener protagonismo y ser fáciles de editar.
- El impacto de modificar fechas debe estar visible sin asustar.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 9. Registrar asistencias presentes

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de registro de asistencias presentes del IFTS N.° 14.

Ruta conceptual:
/admin/cursos/:id/asistencias

Objetivo:
Bedelía selecciona un curso y marca en qué fechas estuvo presente cada alumno.

Uso principal:
PC/notebook. Mobile usable pero no prioritario.

Dirección visual:
Planilla institucional mejorada. Debe ser rápida para cargar datos, pero no parecer Excel desordenado.

Contenido:
- Header/sidebar admin.
- Encabezado con nombre del curso.
- Selector de fecha del curso.
- Buscador de alumno por nombre, apellido o DNI.
- Tabla/lista de alumnos:
  - nombre;
  - apellido;
  - DNI;
  - email;
  - control para marcar “Presente”.
- Resumen:
  - fecha seleccionada;
  - presentes marcados;
  - cambios sin guardar;
  - aviso si una modificación afecta certificados ya enviados.
- Acciones:
  - Guardar asistencias;
  - Cancelar;
  - Ver curso.
- Aviso:
  “Si modificás una asistencia ya certificada, el certificado deberá reenviarse al alumno. El QR seguirá siendo el mismo.”

Reglas:
- Solo se registra estado presente.
- No mostrar ausente.
- No mostrar justificada.
- No mostrar porcentaje de asistencia.

Composición:
- Desktop-first.
- Tabla eficiente.
- Sticky actions o panel lateral de resumen si aporta.
- Mobile con filas compactas.

Evitar:
- Excel desordenado.
- Dashboard SaaS.
- Cards gigantes.
- Formularios lentos.
- Porcentajes.
- Estados ausente/justificada.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/cursos/:id/asistencias

Objetivo de esta pantalla:
Permitir que Bedelía marque qué alumnos estuvieron presentes en una fecha de un curso. Debe ser rápida de usar desde PC/notebook y no parecer una planilla desordenada.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Encabezado con nombre del curso.
- Selector de fecha del curso.
- Buscador de alumno por nombre, apellido o DNI.
- Tabla/lista de alumnos con: nombre, apellido, DNI, email y control para marcar “Presente”.
- Resumen con fecha seleccionada, presentes marcados, cambios sin guardar y aviso si una modificación afecta certificados ya enviados.
- Acciones: Guardar asistencias, Cancelar, Ver curso.
- Aviso: “Si modificás una asistencia ya certificada, el certificado deberá reenviarse al alumno. El QR seguirá siendo el mismo.”

Reglas y límites:
- Solo se registra estado presente.
- No mostrar ausente.
- No mostrar justificada.
- No mostrar porcentaje de asistencia.
- Podés proponer sticky actions, panel lateral de resumen o tabla densa si mejora la operación.
- Desktop-first con mobile usable.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 10. Emitir certificación directa

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de emisión directa de certificación del IFTS N.° 14.

Ruta conceptual:
/admin/certificaciones/nueva

Objetivo:
Bedelía selecciona un alumno y un curso. El sistema toma las fechas presentes registradas para ese alumno en ese curso y emite la certificación directamente. No existe estado borrador.

Dirección visual:
Acto administrativo de emisión. Debe transmitir que se está generando un documento institucional.

Contenido:
- Header/sidebar admin.
- Título: “Nueva certificación”.
- Selector/buscador de alumno.
- Selector/buscador de curso.
- Vista previa automática:
  - datos del alumno;
  - DNI;
  - email;
  - curso;
  - fechas presentes detectadas;
  - número de certificado, si corresponde;
  - fecha de emisión.
- Avisos:
  - alumno sin email;
  - alumno sin asistencias presentes;
  - curso sin fechas;
  - ya existe certificación válida para ese alumno y curso.
- Acción principal: “Emitir y enviar”.
- Acción secundaria: “Cancelar”.
- Texto:
  “Después de emitir, se generará el QR permanente, el PDF complementario y el envío al alumno.”

Composición:
- Flujo simple.
- Desktop-first.
- Vista previa clara antes de emitir.
- Evitar pasos innecesarios.
- Acción principal fuerte pero sobria.

Evitar:
- Borrador.
- Aprobación de Rectorado.
- Wizard largo.
- Dashboard SaaS.
- Gráficos.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/certificaciones/nueva

Objetivo de esta pantalla:
Permitir que Bedelía seleccione alumno y curso, revise las fechas presentes detectadas y emita/envíe la certificación directamente. No existe estado borrador.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Nueva certificación”.
- Selector/buscador de alumno.
- Selector/buscador de curso.
- Vista previa automática: alumno, DNI, email, curso, fechas presentes detectadas, número de certificado si corresponde, fecha de emisión.
- Avisos: alumno sin email, alumno sin asistencias presentes, curso sin fechas, ya existe certificación válida para ese alumno y curso.
- Acción principal: “Emitir y enviar”.
- Acción secundaria: “Cancelar”.
- Texto: “Después de emitir, se generará el QR permanente, el PDF complementario y el envío al alumno.”

Reglas y límites:
- No incluir borrador.
- No incluir aprobación de Rectorado.
- Podés simplificar pasos si la vista previa queda clara.
- Debe sentirse como acto administrativo de emisión, no como formulario común.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 11. Detalle de certificación

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de detalle de certificación del IFTS N.° 14.

Ruta conceptual:
/admin/certificaciones/:id

Objetivo:
Bedelía puede revisar una certificación, ver QR/link, descargar PDF, enviar/reenviar y revocar si corresponde.

Dirección visual:
Control documental interno. Debe sentirse como expediente de certificación, no como dashboard.

Contenido:
- Header/sidebar admin.
- Estado: válida o revocada.
- Datos del alumno:
  - nombre;
  - apellido;
  - DNI completo;
  - email.
- Datos del curso:
  - nombre;
  - fechas presentes.
- Datos administrativos:
  - número de certificado;
  - fecha de emisión;
  - token parcial;
  - estado de envío;
  - fecha de último envío.
- Bloque QR:
  - placeholder visual QR;
  - link público /validar/:tokenCertificacion;
  - botón Copiar link.
- Acciones principales:
  - Descargar PDF;
  - Enviar por email;
  - Reenviar certificado;
  - Regenerar PDF.
- Acción peligrosa:
  - Revocar certificación.
- Aviso:
  “El QR es permanente. Si se corrigen fechas o asistencias, se debe reenviar el PDF al alumno con el mismo QR.”
- Historial:
  - creada;
  - enviada;
  - reenviada;
  - asistencia modificada;
  - revocada.

Composición:
- Desktop-first.
- QR como protagonista secundario.
- Datos y acciones claras.
- Revocar separado visualmente.
- Historial sobrio.
- Fechas fáciles de revisar.

Evitar:
- Dashboard SaaS.
- Exceso de cards.
- Acción revocar mezclada con acciones normales.
- Gráficos.
- Perfil público del alumno.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/certificaciones/:id

Objetivo de esta pantalla:
Pantalla de control documental interno para revisar una certificación, ver QR/link, descargar PDF, enviar/reenviar y revocar si corresponde.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Estado: válida o revocada.
- Datos del alumno: nombre, apellido, DNI completo, email.
- Datos del curso: nombre y fechas presentes.
- Datos administrativos: número de certificado, fecha de emisión, token parcial, estado de envío, fecha de último envío.
- Bloque QR: placeholder visual QR, link público /validar/:tokenCertificacion, botón Copiar link.
- Acciones principales: Descargar PDF, Enviar por email, Reenviar certificado, Regenerar PDF.
- Acción peligrosa separada: Revocar certificación.
- Aviso: “El QR es permanente. Si se corrigen fechas o asistencias, se debe reenviar el PDF al alumno con el mismo QR.”
- Historial breve: creada, enviada, reenviada, asistencia modificada, revocada.

Reglas y límites:
- El QR debe ser protagonista secundario, no decoración.
- Separá claramente acciones normales y acción peligrosa.
- Las fechas presentes deben ser fáciles de revisar.
- Podés reorganizar en columnas o secciones tipo expediente si mejora la lectura.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 12. Vista previa PDF complementario

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para una vista previa de PDF horizontal con QR para el sistema de certificaciones del IFTS N.° 14.

Contexto:
El instituto ya compartió un certificado real. El PDF del MVP debe parecerse mucho a ese certificado: formato horizontal, fondo azul oscuro, panel celeste claro, estética técnica con circuitos/energía, jerarquía institucional y presencia de logos oficiales. El PDF no reemplaza necesariamente al certificado actual, pero será una variante complementaria con QR y link de validación.

Objetivo:
Mostrar cómo se vería un certificado horizontal institucional, sobrio, imprimible y verificable, incorporando QR/link sin romper la identidad del certificado real.

Dirección visual:
Certificado institucional horizontal con QR integrado. Debe sentirse cercano al certificado real del IFTS 14, no como diploma genérico ni PDF SaaS.

Generá 3 direcciones:
1. Variante muy cercana al certificado real, con QR integrado en zona de control.
2. Certificado horizontal técnico con banda QR lateral.
3. Certificado horizontal institucional con bloque inferior de validación digital.

Contenido obligatorio:
- Logos/placeholders autorizados: escudo, Buenos Aires Aprende, Agencia de Habilidades para el Futuro, IFTS 14 y BA Ciudad.
- Título principal: “CERTIFICADO”.
- Texto institucional: “El Instituto de Formación Técnica Superior N.° 14 certifica que…”.
- Nombre y apellido: María González.
- DNI completo: 40.123.456.
- Curso: Introducción a Sistemas Embebidos e Internet de las Cosas.
- Fechas presentes:
  - 05/06/2026
  - 12/06/2026
  - 19/06/2026
- Fecha de emisión: 20/06/2026.
- Número de certificado: IFTS14-CUR-2026-0001.
- QR placeholder.
- Link de validación escrito.
- Texto: “Este documento puede validarse escaneando el código QR.”
- Espacio reservado para firma.
- Espacio reservado para sello.
- Espacio reservado para autoridad responsable.
- Nota discreta: “Firma, sello y autoridad pendientes de confirmación institucional.”

Composición:
- Formato horizontal.
- Parecido fuerte al certificado real del instituto.
- Panel central celeste claro.
- Marco o fondo azul noche institucional.
- Detalles técnicos/circuitos sutiles.
- QR integrado como control documental, no pegado sin intención.
- Fechas como registro de asistencia.
- Debe verse imprimible.

Evitar:
- Formato vertical.
- Diploma ceremonial genérico.
- Certificado escolar infantil.
- Gradientes decorativos.
- Glassmorphism.
- Diseño SaaS.
- Firmas falsas.
- Logos inventados.
- QR que parezca agregado a último momento.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
Vista previa administrativa / PDF horizontal

Objetivo de esta pantalla:
Diseñar una vista previa del PDF complementario que se parezca mucho al certificado real provisto por el IFTS 14, pero incorporando QR y link de validación. Debe ser horizontal, institucional e imprimible.

Dirección visual esperada:
- folio técnico institucional;
- acta académica verificable;
- documento oficial digital;
- validación documental con trazabilidad QR;
- estética técnica vinculada a IFTS 14, sistemas embebidos, IoT y eficiencia energética.

Podés mejorar:
- jerarquía del folio;
- tratamiento del logo/sello institucional;
- banda de estado;
- integración del QR;
- registro de asistencia;
- uso de textura técnica sutil;
- composición mobile/desktop.

Evitá:
- app SaaS genérica;
- card stack sin intención;
- badges genéricos;
- glassmorphism;
- blobs;
- gradientes decorativos;
- emojis;
- sombras grandes;
- íconos en todos los bloques;
- estética fintech o dashboard.

Contenido obligatorio:
- Formato horizontal similar al certificado real del IFTS 14.
- IFTS N.° 14.
- Título principal: “CERTIFICADO” o “CERTIFICACIÓN” según resulte más institucional.
- Logos/placeholders autorizados: escudo, Buenos Aires Aprende, Agencia de Habilidades para el Futuro, IFTS 14 y BA Ciudad.
- Texto institucional adaptado: “El Instituto de Formación Técnica Superior N.° 14 certifica que…”
- Nombre y apellido: María González.
- DNI completo: 40.123.456.
- Curso: Introducción a Sistemas Embebidos e Internet de las Cosas.
- Fechas presentes: 05/06/2026, 12/06/2026, 19/06/2026.
- Fecha de emisión: 20/06/2026.
- Número de certificado: IFTS14-CUR-2026-0001.
- QR placeholder.
- Link de validación escrito.
- Texto: “Este documento puede validarse escaneando el código QR.”
- Espacios reservados para firma, sello y autoridad responsable.

Reglas y límites:
- Debe parecerse mucho al certificado real: marco azul oscuro, panel celeste claro, composición horizontal, motivos técnicos/circuitos y tratamiento institucional.
- No inventar logos finales; usar placeholders sobrios si no están los assets.
- No usar formato A4 vertical.
- No hacer diploma decorativo genérico.
- No usar fondos oscuros que dificulten impresión.
- Si la captura de Stitch vino vertical o demasiado genérica, corregí hacia horizontal institucional.

Referencia conceptual obligatoria: certificado real IFTS 14 horizontal con estética técnica, logos institucionales y detalles de circuitos/energía.

Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

# PARTE C — Pantallas complementarias del MVP

---

## 13. Listado de cursos

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de listado de cursos del sistema de certificaciones QR del IFTS N.° 14.

Ruta conceptual:
/admin/cursos

Objetivo:
Bedelía puede ver cursos cargados, buscar, filtrar, crear uno nuevo y entrar al detalle.

Dirección visual:
Archivo académico administrativo. Debe sentirse como gestión institucional, no como CRM comercial ni dashboard SaaS.

Contenido:
- Header/sidebar admin.
- Título: “Cursos”.
- Botón principal: “Nuevo curso”.
- Buscador por nombre.
- Filtros: activos, inactivos, con fechas cargadas, sin fechas.
- Tabla/lista de cursos:
  - nombre del curso;
  - cantidad de fechas;
  - cantidad de alumnos con asistencias presentes;
  - cantidad de certificaciones emitidas;
  - estado;
  - acciones “Ver detalle” y “Editar”.
- Empty state:
  - “Todavía no hay cursos cargados.”
  - Acción “Crear primer curso”.

Composición:
- Desktop con tabla clara.
- Mobile con cards compactas.
- Priorizar búsqueda y acción rápida.
- No usar grillas grandes.
- No usar métricas gigantes.

Evitar:
- CRM comercial.
- SaaS dashboard.
- Cards repetidas.
- Emojis.
- Colores Tailwind genéricos.
- Gradientes.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/cursos

Objetivo de esta pantalla:
Permitir que Bedelía vea cursos cargados, busque, filtre, cree uno nuevo y entre al detalle. Debe sentirse como archivo académico administrativo.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Cursos”.
- Botón principal: “Nuevo curso”.
- Buscador por nombre.
- Filtros: activos, inactivos, con fechas cargadas, sin fechas.
- Tabla/lista de cursos: nombre del curso, cantidad de fechas, cantidad de alumnos con asistencias presentes, cantidad de certificaciones emitidas, estado, acciones Ver detalle y Editar.
- Empty state: “Todavía no hay cursos cargados.” + acción “Crear primer curso”.

Reglas y límites:
- Desktop con tabla clara.
- Mobile con cards compactas si hace falta.
- Priorizar búsqueda, filtros y acción Nuevo curso.
- No usar grillas grandes ni métricas gigantes.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 14. Detalle de curso

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de detalle de curso del sistema de certificaciones QR del IFTS N.° 14.

Ruta conceptual:
/admin/cursos/:id

Objetivo:
Bedelía revisa un curso, sus fechas, alumnos con asistencia y certificaciones asociadas.

Dirección visual:
Expediente académico de curso. Debe sentirse como ficha operativa institucional.

Contenido:
- Header/sidebar admin.
- Título con nombre del curso.
- Datos: descripción, carga horaria opcional, modalidad opcional, estado.
- Acciones: Editar curso, Agregar fecha, Cargar asistencias, Generar certificaciones, Ver certificaciones.
- Sección “Fechas del curso”: fecha, horario, cantidad de presentes, acción Ver asistencias.
- Sección “Alumnos con asistencias presentes”: alumno, DNI, email, cantidad de fechas presentes, estado de certificación, acción Ver certificación.
- Avisos: curso sin fechas; cambios que requieren reenviar certificados.

Composición:
- Desktop con buena densidad.
- Mobile usable.
- Fechas y asistencias como protagonistas.
- Usar tablas/listas, no cards grandes.
- Acciones claras arriba.

Evitar:
- Dashboard SaaS.
- Gráficos.
- Cards enormes.
- Concepto de edición/cohorte.
- Porcentajes de asistencia.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/cursos/:id

Objetivo de esta pantalla:
Permitir que Bedelía revise un curso, sus fechas, alumnos con asistencia y certificaciones asociadas. Debe funcionar como expediente académico de curso.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título con nombre del curso.
- Datos del curso: descripción, carga horaria opcional, modalidad opcional, estado.
- Acciones: Editar curso, Agregar fecha, Cargar asistencias, Generar certificaciones, Ver certificaciones.
- Sección “Fechas del curso”: fecha, horario, cantidad de presentes, acción Ver asistencias.
- Sección “Alumnos con asistencias presentes”: alumno, DNI, email, cantidad de fechas presentes, estado de certificación, acción Ver certificación.
- Avisos: curso sin fechas; cambios que requieren reenviar certificados.

Reglas y límites:
- Fechas y asistencias deben ser protagonistas.
- Usá tablas/listas institucionales antes que cards grandes.
- No incluir edición/cohorte.
- No incluir porcentajes de asistencia.
- Podés reorganizar en pestañas si mejora la navegación.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 15. Listado de certificaciones

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de listado de certificaciones del IFTS N.° 14.

Ruta conceptual:
/admin/certificaciones

Objetivo:
Bedelía puede buscar certificaciones emitidas o revocadas, revisar estado y entrar al detalle.

Dirección visual:
Archivo documental de certificaciones.

Contenido:
- Header/sidebar admin.
- Título: “Certificaciones”.
- Botón principal: “Nueva certificación”.
- Buscador por alumno, DNI, curso o número de certificado.
- Filtros: válidas, revocadas, enviadas, pendientes de envío, requieren reenvío.
- Tabla/lista:
  - número de certificado;
  - alumno;
  - DNI;
  - curso;
  - fecha de emisión;
  - estado;
  - estado de envío;
  - acción “Ver detalle”.
- Empty state.

Composición:
- Desktop con tabla.
- Mobile con cards compactas.
- Mucha claridad en estados.
- No usar gráficos.

Evitar:
- Dashboard SaaS.
- Cards enormes.
- Métricas decorativas.
- Exceso de colores.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/certificaciones

Objetivo de esta pantalla:
Permitir que Bedelía busque certificaciones emitidas o revocadas, revise estados y entre al detalle. Debe sentirse como archivo documental de certificaciones.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Certificaciones”.
- Botón principal: “Nueva certificación”.
- Buscador por alumno, DNI, curso o número de certificado.
- Filtros: válidas, revocadas, enviadas, pendientes de envío, requieren reenvío.
- Tabla/lista: número de certificado, alumno, DNI, curso, fecha de emisión, estado, estado de envío, acción Ver detalle.
- Empty state.

Reglas y límites:
- Desktop con tabla clara y densa.
- Mobile con cards compactas si es necesario.
- Estados claros sin exceso de colores.
- No usar gráficos ni métricas decorativas.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 16. Listado de alumnos

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de listado de alumnos del sistema de certificaciones QR del IFTS N.° 14.

Ruta conceptual:
/admin/alumnos

Objetivo:
Bedelía puede buscar alumnos y revisar sus certificaciones.

Dirección visual:
Registro administrativo de alumnos. No debe parecer CRM comercial ni red social.

Contenido:
- Header/sidebar admin.
- Título: “Alumnos”.
- Botón principal: “Nuevo alumno”.
- Buscador por nombre, apellido o DNI.
- Filtros: con certificaciones, sin certificaciones, sin email.
- Tabla/lista:
  - nombre y apellido;
  - DNI;
  - email;
  - cantidad de cursos con asistencia;
  - cantidad de certificaciones válidas;
  - acción “Ver detalle”.
- Empty state.

Composición:
- Desktop con tabla.
- Mobile con cards compactas.
- Priorizar búsqueda.
- No mostrar perfil público del alumno.
- No mostrar token público del alumno.

Evitar:
- CRM comercial.
- Avatar grande tipo red social.
- Estadísticas decorativas.
- Exceso de badges.
- SaaS genérico.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/alumnos

Objetivo de esta pantalla:
Permitir que Bedelía busque alumnos y revise sus certificaciones. Debe sentirse como registro administrativo de alumnos, no como CRM ni red social.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Alumnos”.
- Botón principal: “Nuevo alumno”.
- Buscador por nombre, apellido o DNI.
- Filtros: con certificaciones, sin certificaciones, sin email.
- Tabla/lista: nombre y apellido, DNI, email, cantidad de cursos con asistencia, cantidad de certificaciones válidas, acción Ver detalle.
- Empty state.

Reglas y límites:
- No mostrar perfil público del alumno.
- No mostrar token público del alumno.
- No usar avatar grande ni estética social.
- Priorizar búsqueda rápida.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 17. Detalle de alumno administrativo

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de detalle de alumno del sistema de certificaciones QR del IFTS N.° 14.

Ruta conceptual:
/admin/alumnos/:id

Objetivo:
Bedelía puede revisar los datos del alumno, sus cursos con asistencias presentes y sus certificaciones.

Dirección visual:
Legajo administrativo simple. No perfil social.

Contenido:
- Header/sidebar admin.
- Datos del alumno: nombre, apellido, DNI completo, email.
- Acciones: Editar datos, Nueva certificación, Enviar certificado, Ver asistencias.
- Resumen: cursos con asistencia, certificaciones válidas, certificaciones revocadas.
- Sección “Cursos con asistencias presentes”: nombre del curso, fechas presentes, estado de certificación, acción Ver certificación.
- No incluir perfil público del alumno.
- No incluir token público del alumno.

Composición:
- Desktop-first.
- Mobile usable.
- Legajo institucional.
- Fechas y certificaciones claras.
- No parecer red social.

Evitar:
- Avatar grande.
- Perfil público.
- Botón compartir perfil.
- Estadísticas de red social.
- Cards decorativas.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/alumnos/:id

Objetivo de esta pantalla:
Permitir que Bedelía revise los datos de un alumno, sus cursos con asistencias presentes y sus certificaciones. Debe sentirse como legajo administrativo simple.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Datos del alumno: nombre, apellido, DNI completo, email.
- Acciones: Editar datos, Nueva certificación, Enviar certificado, Ver asistencias.
- Resumen: cursos con asistencia, certificaciones válidas, certificaciones revocadas.
- Sección “Cursos con asistencias presentes”: nombre del curso, fechas presentes, estado de certificación, acción Ver certificación.

Reglas y límites:
- No incluir perfil público del alumno.
- No incluir token público del alumno.
- No parecer red social.
- Podés usar estructura de legajo con secciones o tabs si mejora la lectura.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 18. Enviar / reenviar certificación

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para un modal o pantalla administrativa de envío/reenviado de certificación del IFTS N.° 14.

Se abre desde:
/admin/certificaciones/:id

Objetivo:
Bedelía confirma el envío o reenvío de una certificación al alumno por email.

Dirección visual:
Confirmación administrativa de comunicación oficial.

Contenido:
- Título: “Enviar certificación” o “Reenviar certificación”.
- Destinatario: nombre y apellido, DNI, email.
- Datos: curso, fechas presentes, número de certificado.
- Mensaje: “Se enviará un nuevo PDF con el mismo QR de validación.”
- Si hubo cambios: “Esta certificación tuvo modificaciones. El PDF será regenerado antes del envío.”
- Acciones: Enviar ahora, Cancelar.
- Estado de confirmación exitoso: “La certificación fue enviada correctamente.”

Composición:
- Modal o panel lateral.
- Claro, directo.
- No editor de email.
- No configuración SMTP.
- Acción principal visible.

Evitar:
- Lenguaje técnico.
- Exceso de advertencias.
- Wizard largo.
- SaaS genérico.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
Modal o panel desde /admin/certificaciones/:id

Objetivo de esta pantalla:
Permitir que Bedelía confirme el envío o reenvío de una certificación por email. Debe dejar claro que se enviará un nuevo PDF con el mismo QR.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Título: “Enviar certificación” o “Reenviar certificación”.
- Destinatario: nombre y apellido, DNI, email.
- Datos: curso, fechas presentes, número de certificado.
- Mensaje: “Se enviará un nuevo PDF con el mismo QR de validación.”
- Si hubo cambios: “Esta certificación tuvo modificaciones. El PDF será regenerado antes del envío.”
- Acciones: Enviar ahora, Cancelar.
- Estado de confirmación exitoso: “La certificación fue enviada correctamente.”

Reglas y límites:
- Puede ser modal, panel lateral o pantalla compacta, según lo que mejore el flujo.
- No incluir editor completo de email.
- No incluir configuración SMTP.
- No usar lenguaje técnico.
- Acción principal visible y clara.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 19. Revocar certificación

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para el modal o pantalla administrativa de revocación de certificación del IFTS N.° 14.

Se abre desde:
/admin/certificaciones/:id

Objetivo:
Bedelía revoca una certificación. Es una acción crítica institucional.

Dirección visual:
Acción crítica documental. Seria, clara, con confirmación fuerte, pero sin alarmismo.

Contenido:
- Título: “Revocar certificación”.
- Mensaje: “Esta acción cambiará el estado público de la certificación. La validación por QR mostrará que fue revocada.”
- Datos mínimos: alumno, DNI, curso, número de certificado.
- Campo obligatorio: motivo de revocación.
- Confirmación: “Entiendo que esta certificación dejará de mostrarse como válida.”
- Acciones: Revocar certificación, Cancelar.
- Aviso: “La acción quedará registrada en auditoría.”

Composición:
- Modal o panel.
- Rojo moderado.
- Acción peligrosa separada.
- Mucha claridad.
- No mostrar fechas como vigentes.

Evitar:
- Rojo excesivo.
- Mensajes alarmistas.
- Confirmación débil.
- SaaS genérico.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
Modal o panel desde /admin/certificaciones/:id

Objetivo de esta pantalla:
Permitir que Bedelía revoque una certificación. Es una acción crítica institucional, por lo que debe tener confirmación fuerte y motivo obligatorio.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Título: “Revocar certificación”.
- Mensaje: “Esta acción cambiará el estado público de la certificación. La validación por QR mostrará que fue revocada.”
- Datos mínimos: alumno, DNI, curso, número de certificado.
- Campo obligatorio: motivo de revocación.
- Confirmación: “Entiendo que esta certificación dejará de mostrarse como válida.”
- Acciones: Revocar certificación, Cancelar.
- Aviso: “La acción quedará registrada en auditoría.”

Reglas y límites:
- Puede ser modal o panel, pero debe sentirse más serio que una confirmación común.
- Rojo moderado y documental, no alarmista.
- La acción peligrosa debe estar separada visualmente.
- No mostrar fechas como vigentes.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 20. Carga masiva placeholder

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de carga masiva del IFTS N.° 14.

Ruta conceptual:
/admin/carga-masiva

Contexto:
La carga masiva por Excel/CSV está prevista, pero el formato final todavía no está confirmado. La pantalla debe mostrar preparación y claridad, sin dar a entender que las reglas definitivas ya están cerradas.

Objetivo:
Importar alumnos, cursos y asistencias desde una planilla.

Dirección visual:
Importador administrativo preventivo. Claro, sobrio, con validación previa.

Contenido:
- Header/sidebar admin.
- Título: “Carga masiva”.
- Texto: “Importá alumnos, cursos y asistencias desde una planilla.”
- Mensaje visible: “El formato final de la planilla está pendiente de confirmación.”
- Bloque de carga: Seleccionar archivo, Excel o CSV, Descargar plantilla de ejemplo.
- Vista previa mock: filas válidas, filas con errores, alumnos detectados, cursos detectados, asistencias presentes detectadas.
- Tabla de ejemplo: nombre, apellido, DNI, email, curso, fecha, estado.

Composición:
- Desktop-first.
- Bloque de carga claro.
- Vista previa con tabla.
- Errores visibles sin alarmar.
- No hacer que parezca cerrado si está pendiente.

Evitar:
- Procesamiento real.
- Reglas definitivas.
- Ausente/justificada.
- Dashboard SaaS.
- Exceso de colores.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/carga-masiva

Objetivo de esta pantalla:
Diseñar la pantalla futura de carga masiva, dejando claro que el formato final de Excel/CSV todavía está pendiente de confirmación. Debe ser útil como placeholder realista del MVP.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Carga masiva”.
- Texto: “Importá alumnos, cursos y asistencias desde una planilla.”
- Mensaje visible: “El formato final de la planilla está pendiente de confirmación.”
- Bloque de carga: Seleccionar archivo, Excel o CSV, Descargar plantilla de ejemplo.
- Vista previa mock: filas válidas, filas con errores, alumnos detectados, cursos detectados, asistencias presentes detectadas.
- Tabla de ejemplo: nombre, apellido, DNI, email, curso, fecha, estado.

Reglas y límites:
- No debe parecer una funcionalidad cerrada si las reglas todavía no están confirmadas.
- Errores visibles sin alarmar.
- No incluir estados ausente/justificada.
- No simular procesamiento real avanzado.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 21. Auditoría básica

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de auditoría básica del IFTS N.° 14.

Ruta conceptual:
/admin/auditoria

Objetivo:
Ver historial de acciones administrativas relevantes: emisión, envío, reenvío, modificación de asistencias, modificación de fechas y revocación.

Dirección visual:
Bitácora institucional. Debe sentirse como registro administrativo confiable.

Contenido:
- Header/sidebar admin.
- Título: “Auditoría”.
- Filtros: usuario, acción, fecha, certificado, alumno/DNI.
- Lista cronológica:
  - fecha/hora;
  - usuario;
  - acción;
  - entidad afectada;
  - detalle breve.
- Ejemplos: Certificación emitida, PDF reenviado, Asistencia modificada, Curso actualizado, Certificación revocada.
- Empty state.
- Texto: “Este registro permite revisar cambios administrativos del sistema.”

Composición:
- Desktop con lista/tabla.
- Mobile con timeline compacta.
- Sobrio.
- No gráficos.
- No colores excesivos.

Evitar:
- Dashboard de analytics.
- Gráficos.
- Timeline decorativa.
- Estética de red social.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/auditoria

Objetivo de esta pantalla:
Permitir revisar historial de acciones administrativas relevantes: emisión, envío, reenvío, modificación de asistencias, modificación de fechas y revocación.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Auditoría”.
- Filtros: usuario, acción, fecha, certificado, alumno/DNI.
- Lista cronológica: fecha/hora, usuario, acción, entidad afectada, detalle breve.
- Ejemplos: Certificación emitida, PDF reenviado, Asistencia modificada, Curso actualizado, Certificación revocada.
- Empty state.
- Texto: “Este registro permite revisar cambios administrativos del sistema.”

Reglas y límites:
- Debe sentirse como bitácora institucional.
- Desktop con tabla/lista; mobile con timeline compacta si ayuda.
- No usar gráficos de analytics.
- No hacer timeline decorativa tipo red social.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

## 22. Configuración institucional

### Prompt para Google Stitch

```txt
Diseñá 3 variantes visuales para la pantalla administrativa de configuración institucional del IFTS N.° 14.

Ruta conceptual:
/admin/configuracion

Objetivo:
Configurar datos que después aparecen en PDF, emails o pantalla pública. Esta pantalla puede ser de etapa posterior, pero conviene dejar dirección visual.

Dirección visual:
Configuración institucional sobria. No settings SaaS genérico.

Contenido:
- Header/sidebar admin.
- Título: “Configuración institucional”.
- Secciones:
  1. Identidad:
     - nombre visible del instituto;
     - logo;
     - texto institucional.
  2. Certificados:
     - texto del PDF;
     - autoridad responsable;
     - firma pendiente;
     - sello pendiente;
     - formato de número de certificado.
  3. Email:
     - remitente;
     - asunto por defecto;
     - texto base.
  4. Validación pública:
     - texto aclaratorio;
     - enlace al sitio del instituto.
- Avisos:
  - “Firma y sello pendientes de confirmación institucional.”
  - “Los cambios impactan en nuevos documentos generados.”

Composición:
- Formulario por secciones.
- Desktop-first.
- Mobile usable.
- Mucha claridad.
- No exceso de switches.

Evitar:
- Settings SaaS genérico.
- Configuración demasiado técnica.
- Campos sin explicación.
```

### Prompt para v0

```txt
Usá la captura adjunta de Google Stitch como punto de partida visual, no como una maqueta rígida.

Antes de diseñar, aplicá las skills de diseño/frontend que estén disponibles en el entorno, especialmente criterios de:
- frontend-design;
- high-end visual design;
- web design guidelines;
- design taste;
- accessibility;
- anti-cliché UI;
- responsive design;
- component quality.

Tenés libertad para mejorar la interfaz si detectás que la captura de Stitch tiene problemas de jerarquía, composición, espaciado, accesibilidad, densidad, responsive, contraste o identidad visual. No copies errores por fidelidad.

Mantené las reglas funcionales y el contenido obligatorio, pero podés proponer una composición mejor si ayuda a que la pantalla se sienta más auténtica, institucional, moderna y usable.

El proyecto final se portará a Angular + Tailwind. Para esta etapa podés generar React/Tailwind, HTML/Tailwind o la estructura que mejor resuelva el diseño visual, pero evitá dependencias innecesarias y no uses APIs específicas de Next.js que dificulten el port.

Ruta conceptual:
/admin/configuracion

Objetivo de esta pantalla:
Diseñar la pantalla de configuración institucional para una etapa posterior o módulo de administración. Debe preparar datos que luego impactarán en PDF, email y validación pública.

Dirección visual esperada:
- mesa de trabajo de Bedelía;
- archivo institucional digital;
- sistema administrativo académico;
- herramienta clara para operar cursos, asistencias y certificaciones.

Podés mejorar:
- arquitectura de información;
- jerarquía de acciones;
- densidad de tablas;
- estados empty/loading/error;
- orden de formularios;
- navegación admin;
- responsive desktop-first con mobile usable.

Evitá:
- dashboard SaaS genérico;
- métricas decorativas sin valor;
- grillas de cards repetidas;
- CRM comercial;
- fintech;
- colores Tailwind por defecto sin identidad;
- íconos decorativos excesivos;
- gráficos si no aportan.

Contenido obligatorio:
- Header/sidebar admin.
- Título: “Configuración institucional”.
- Sección Identidad: nombre visible del instituto, logo, texto institucional.
- Sección Certificados: texto del PDF, autoridad responsable, firma pendiente, sello pendiente, formato de número de certificado.
- Sección Email: remitente, asunto por defecto, texto base.
- Sección Validación pública: texto aclaratorio, enlace al sitio del instituto.
- Avisos: “Firma y sello pendientes de confirmación institucional.” y “Los cambios impactan en nuevos documentos generados.”

Reglas y límites:
- Formulario por secciones, claro y sobrio.
- No settings SaaS genérico.
- No configuración demasiado técnica.
- Campos con ayuda breve.
- Desktop-first con mobile usable.



Resultado esperado:
- generá una pantalla visualmente refinada y coherente con el sistema;
- si cambiás la composición respecto de Stitch, que sea por una mejora clara;
- mantené el contenido obligatorio;
- cuidá responsive, contraste y accesibilidad;
- al final, explicá brevemente qué decisiones visuales tomaste y qué mejoraste respecto de la captura.
```

---

# 23. Prompt maestro para OpenCode después de aprobar una pantalla

```txt
Implementá en Angular + Tailwind la pantalla aprobada visualmente en Stitch/v0.

Reglas generales:
- No reinterpretar la estética.
- No convertir todo en cards.
- Mantener la dirección visual definida para el proyecto:
  - público: folio técnico institucional / acta académica verificable;
  - admin: mesa de trabajo de Bedelía / archivo institucional digital.
- Usar Angular standalone components.
- Usar Tailwind.
- No usar shadcn como dependencia.
- No usar Next.js.
- No depender de backend real todavía.
- Usar datos mock desde src/app/compartido/mocks.
- Usar interfaces desde src/app/compartido/modelos.
- Preparar servicios para reemplazar mocks por HTTP.
- Nombres de archivos, variables, modelos y funciones en español.
- Comentarios en español argentino formal, primera persona formal cuando corresponda.
- Actualizar documentación en docs/ al finalizar.
- Verificar responsive.
- Verificar accesibilidad.
- Evitar clichés de IA.
```

---

# 24. Checklist anti-cliché antes de aprobar una pantalla

```txt
¿Podría pertenecer a cualquier startup?
Si sí, falta identidad.

¿Todo son cards blancas?
Si sí, falta composición.

¿El estado se ve como badge genérico?
Si sí, convertirlo en banda/sello institucional.

¿Las fechas son chips?
Si sí, convertirlas en registro de asistencia.

¿Hay íconos decorativos en cada bloque?
Si sí, sacar la mayoría.

¿El placeholder del logo parece wireframe?
Si sí, convertirlo en sello/monograma temporal.

¿La pantalla tiene una firma visual memorable?
Si no, definir una.

¿La tipografía parece default de v0/shadcn?
Si sí, ajustar escala, pesos y tratamiento de datos.

¿Hay sombras, blobs o gradientes innecesarios?
Si sí, eliminar.

¿La estructura comunica validación documental o gestión institucional?
Si no, rediseñar.
```
