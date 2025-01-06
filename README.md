# Proyecto de Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas desarrollada en Angular. A continuación, se describen los pasos necesarios para instalar las dependencias y ejecutar el proyecto localmente.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [Angular CLI](https://angular.io/cli) (puedes instalarlo globalmente ejecutando `npm install -g @angular/cli`)

## Instalación

Sigue estos pasos para configurar el proyecto:

1. **Clonar el repositorio:**

   git clone https://github.com/gonzalocopes/gestion-tareas
 

2. **Instalar las dependencias:**

   Ejecuta el siguiente comando en el directorio raíz del proyecto:

   ```bash
   npm install
   ```

   Esto instalará todas las dependencias definidas en el archivo `package.json`.

## Ejecución del proyecto

Para ejecutar la aplicación en un servidor de desarrollo local:

1. **Iniciar el servidor:**

   ```bash
   ng serve
   ```

2. **Abrir la aplicación en el navegador:**

   Una vez iniciado el servidor, abre tu navegador y accede a la siguiente URL:

   ```
   http://localhost:4200
   ```

   La aplicación estará disponible en ese enlace.

## Estructura del proyecto

A continuación, se describe brevemente la estructura principal del proyecto:

- **`src/app`**: Contiene los componentes principales de la aplicación, como `login`, `register`, `home`, entre otros.
- **`src/assets`**: Almacena imágenes y otros recursos estáticos.
- **`src/environments`**: Contiene archivos de configuración para diferentes entornos (desarrollo y producción).
- **`angular.json`**: Archivo de configuración principal de Angular.
- **`package.json`**: Define las dependencias y scripts del proyecto.

## Notas adicionales

- Asegúrate de mantener el puerto `4200` libre en tu sistema antes de ejecutar `ng serve`.
- Si deseas personalizar el entorno de ejecución, puedes modificar los archivos dentro de la carpeta `src/environments`.

¡Gracias por utilizar esta aplicación! Si tienes alguna duda o sugerencia, no dudes en compartirla.
