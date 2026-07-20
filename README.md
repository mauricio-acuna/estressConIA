# Pausa · IA y estrés con criterio

Sitio web educativo en español sobre el uso responsable de la inteligencia artificial como apoyo para gestionar el estrés. El proyecto propone herramientas breves para observar patrones, organizar información y preparar conversaciones con profesionales, sin presentar la IA como sustituto de atención sanitaria.

> [!IMPORTANT]
> Este proyecto ofrece información general. No realiza diagnósticos, no recomienda tratamientos y no interpreta urgencias médicas o psicológicas.

## Estado del proyecto

**Publicado y en desarrollo activo.** La aplicación está disponible como sitio estático mediante GitHub Pages. Las mejoras posteriores se incorporarán de forma versionada en este repositorio.

Repositorio: [github.com/mauricio-acuna/estressConIA](https://github.com/mauricio-acuna/estressConIA)

URL prevista: [mauricio-acuna.github.io/estressConIA](https://mauricio-acuna.github.io/estressConIA/)

## Propósito

Pausa parte de una idea sencilla: una IA puede ayudar a formular mejores preguntas y estructurar información, pero no debe cerrar un diagnóstico ni tomar decisiones de salud.

La experiencia está diseñada alrededor de tres acciones:

1. **Observar:** registrar contexto, duración y efectos del estrés.
2. **Actuar:** elegir una acción pequeña y proporcionada al momento.
3. **Escalar:** priorizar apoyo humano cuando el malestar persiste o existe una situación urgente.

## Funcionalidades

- Página informativa responsive en español.
- Check-in orientativo que no calcula diagnósticos ni niveles clínicos de riesgo.
- Pausa guiada de respiración de un minuto.
- Página independiente con orientación al presente, descarga de tareas, revisión corporal suave y preparación de consultas.
- Guía editorial, directorio de recursos y explicación detallada de privacidad.
- Ejemplos de instrucciones copiables para interactuar con una IA.
- Recomendaciones de privacidad antes de compartir información.
- Límites explícitos sobre diagnóstico, urgencias y atención profesional.
- Enlaces directos a fuentes sanitarias institucionales.
- Información de ayuda urgente para España y orientación para visitantes de otros países.

## Privacidad

El sitio no utiliza cuentas, analítica, cookies ni servicios de almacenamiento. Las respuestas del check-in se procesan únicamente en el navegador y no se transmiten.

Esta afirmación corresponde a la implementación actual y deberá revisarse si en el futuro se incorporan formularios remotos, analítica o servicios de terceros.

## Accesibilidad

La implementación incluye:

- estructura semántica con `header`, `nav`, `main`, `section` y `footer`;
- enlace para saltar directamente al contenido;
- formularios con `fieldset`, `legend` y etiquetas asociadas;
- mensajes dinámicos anunciados mediante `aria-live`;
- navegación y controles utilizables con teclado;
- diseño adaptable a pantallas móviles;
- soporte para `prefers-reduced-motion`;
- información importante expresada mediante texto, no solo mediante color.

Estas medidas no equivalen por sí solas a una certificación WCAG. Antes de una publicación estable se recomienda realizar pruebas con teclado, lector de pantalla, zoom al 200 %, contraste y herramientas automáticas.

## Tecnologías

El proyecto evita dependencias y procesos de compilación:

- HTML5
- CSS3
- JavaScript nativo
- GitHub Pages como alojamiento previsto

## Estructura

```text
estressConIA/
├── index.html       # Contenido y estructura de la página
├── ayuda.html        # Herramientas domésticas previas o complementarias a consulta
├── guia.html         # Marco para usar IA con criterio propio
├── recursos.html     # Fuentes sanitarias y rutas de ayuda
├── privacidad.html   # Tratamiento local de datos y límites
├── styles.css       # Sistema visual y diseño responsive
├── script.js        # Check-in, copiado y pausa guiada
├── ayuda.js          # Interacciones privadas de la página de herramientas
├── README.md        # Documentación del proyecto
├── repositorio.txt  # Referencia al repositorio remoto
└── .gitignore       # Exclusiones del control de versiones
```

## Ejecución local

No es necesario instalar paquetes. Puedes abrir `index.html` directamente o utilizar un servidor local.

Con Python:

```bash
python -m http.server 8000
```

Después abre [http://localhost:8000](http://localhost:8000) en el navegador.

## Publicación en GitHub Pages

Cuando los archivos se encuentren en la rama `main`:

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda la configuración y espera a que termine el despliegue.
5. Comprueba la aplicación en `https://mauricio-acuna.github.io/estressConIA/`.

Todos los recursos emplean rutas relativas, por lo que el sitio es compatible con la ruta de proyecto utilizada por GitHub Pages.

## Fuentes sanitarias

El contenido enlaza a fuentes públicas para que las afirmaciones puedan verificarse:

- [Estrés — MedlinePlus en español](https://medlineplus.gov/spanish/stress.html)
- [Línea 024 de atención a la conducta suicida — Ministerio de Sanidad de España](https://www.sanidad.gob.es/linea024/home.htm)

En España, ante una emergencia vital inmediata debe llamarse al **112**. La Línea **024** ofrece atención a personas con pensamientos o riesgo de conducta suicida, así como a familiares y allegados. Quienes visiten el sitio desde otro país deben utilizar los servicios de emergencia correspondientes a su ubicación.

## Criterios editoriales

- Lenguaje claro, prudente y no estigmatizante.
- Ausencia de promesas terapéuticas o diagnósticas.
- Separación visible entre autocuidado, consulta profesional y emergencia.
- Preferencia por fuentes públicas e institucionales.
- Revisión explícita de cualquier afirmación sanitaria antes de publicarla.

## Próximos pasos

- Ejecutar una auditoría de accesibilidad y rendimiento.
- Probar la experiencia en navegadores y tamaños de pantalla reales.
- Añadir capturas del sitio una vez estabilizado el diseño.
- Definir una licencia para aclarar las condiciones de reutilización.

## Contribuciones

Las propuestas pueden documentarse mediante un *issue* antes de modificar el contenido, especialmente si afectan mensajes sanitarios, privacidad o rutas de ayuda. Toda contribución debe conservar el carácter educativo y no diagnóstico del proyecto.

## Licencia

El repositorio todavía no incluye una licencia. Hasta que se añada una, no deben asumirse permisos de copia, modificación o redistribución.
