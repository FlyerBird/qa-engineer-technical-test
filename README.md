# QA Engineer Technical Test - Playwright Automation

Este repositorio contiene un test automatizado desarrollado con **Playwright** en **TypeScript** para la aplicación web [Demo Blaze](https://www.demoblaze.com/). El objetivo es automatizar un flujo de compra que incluye agregar un producto al carrito, verificar su presencia, completar la compra y validar la confirmación.

## 📋 Características

- Framework de automatización basado en **Playwright**
- Implementación del patrón **Page Object Model (POM)**
- Separación clara de acciones, aserciones y localizadores
- Sistema de fixtures para reutilización de código
- Datos de prueba tipados con TypeScript
- Reportes integrados de Playwright

## 🔧 Requisitos

- **Node.js**: Versión 16.x o superior (recomendado 18.x).
- **npm** o **pnpm**: Para gestionar las dependencias.
- **Playwright**: Instalado como dependencia del proyecto.

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/qa-engineer-technical-test.git
   cd qa-engineer-technical-test

2. Instala las dependecias
    npm install
    # O si usas pnpm
    pnpm install

3. Instala los navegadores requeridos por Playwright (Firefox, Chromium, WebKit):
    npx playwright install


## ▶️ Ejecución de los Tests
    Corre el test en Chromium, Firefox y WebKit:
    npx playwright test

1. Para ejecutar en un navegador específico:
    npx playwright test --project=chromium

2. Para ejecutar en modo visual:
    npx playwright test --headed

3. Para ejecutar en modo debug:
    npx playwright test --debug

4. Para generar y abrir el reporte HTML después de la ejecución:
    npx playwright show-report
