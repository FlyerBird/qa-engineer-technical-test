# QA Engineer Technical Test - Playwright Automation

Este repositorio contiene un test automatizado desarrollado con **Playwright** en **TypeScript** para la aplicación web [Demo Blaze](https://www.demoblaze.com/). El objetivo es automatizar un flujo de compra que incluye agregar un producto al carrito, verificar su presencia, completar la compra y validar la confirmación.

## 📋 Características

- Automatización con **Playwright** usando el patrón **Page Object Model (POM)**
- Pruebas de carga con **Artillery**
- Datos de prueba tipados con TypeScript
- Reportes integrados de Playwright y Artillery

## 🔧 Requisitos

- **Node.js**: Versión 16.x o superior (recomendado 18.x).
- **npm** o **pnpm**: Para gestionar las dependencias.
- **Playwright** y **Artillery**: Instalados como dependencias.
- **Sistema operativo**: Windows, macOS o Linux.
- **Navegadores**: Chromium, Firefox y WebKit (instalados por Playwright).

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/qa-engineer-technical-test.git
   cd qa-engineer-technical-test

2. Instala las dependecias
    npm install
    ### O si usas pnpm
    pnpm install

3. Instala los navegadores requeridos por Playwright (Firefox, Chromium, WebKit):
    npx playwright install


## ▶️ Ejecución de los Tests
0. Para ejecutar todos los test (Chromium, Firefox y WebKit):
    npm run pw

1. Para ejecutar en un navegador específico (e.g., Chromium):
    npm run pw -- --project=chromium

2. Para ejecutar en modo visual:
    npx playwright test --headed

3. Para ejecutar en modo debug:
    npx playwright test --debug

4. Para generar y abrir el reporte HTML después de la ejecución:
    npx playwright show-report


## ⚡ Prueba de Estrés con Artillery (Ejercicio 2)

### Configuración
La prueba de estrés se configura en `load-test.yml` para evaluar el endpoint `https://jsonplaceholder.typicode.com/posts`:
- **Duración**: 1 minuto.
- **Usuarios concurrentes**: 100.
- **Reporte**: Generado en formato JSON (`report.json`).

### Ejecución

## Ejecutar la prueba de carga:
npm run load-test

## Generar un reporte JSON:
npm run load-test-report


### Interpretación de los Resultados
- RPS: 81 (inferior a 100 por errores).

- Latency: 50.9ms (p95), 70.1ms (p99) para solicitudes exitosas.

- Error rate: 62.73% (3764 ETIMEDOUT de 6000).

- Solicitudes exitosas: 2237 (37.28%).

El endpoint es eficiente (bajas latencias), pero la alta tasa de errores sugiere problemas de red local, límites del cliente o rate limiting del servidor. Se recomienda repetir con arrivalRate: 50 o en un entorno mejor.

#### **Notas adicionales**
El archivo `report.json` no se ha incluido intencionadamente