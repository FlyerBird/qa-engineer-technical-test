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

2. Instala las dependecias:
   ```bash
   npm install
   ```
   O si usas pnpm
   ```bash
    pnpm install
   ```

3. Instala los navegadores requeridos por Playwright (Firefox, Chromium, WebKit):
   ```
    npx playwright install
   ```
---

## 🎭 Automatización con Playwright (Ejercicio 1)
Este ejercicio contiene un test automatizado con Playwright para la aplicación Demo Blaze que realiza las siguientes acciones:

1. Abrir la página de Demo Blaze
2. Agregar un producto al carrito
3. Verificar la presencia del producto en el carrito
4. Completar la compra con datos de prueba
5. Validar el mensaje de confirmación de compra

### ▶️ Ejecución de los Tests
1. Para ejecutar todos los test (Chromium, Firefox y WebKit):
   ```
   npm run pw
2. Para ejecutar en un navegador específico (e.g., Chromium):
   ```
    npm run pw -- --project=chromium
3. Para ejecutar en modo visual:
   ```
    npx playwright test --headed
4. Para ejecutar en modo debug:
   ```
    npx playwright test --debug
5. Para generar y abrir el reporte HTML después de la ejecución:
   ```
    npx playwright show-report

---

## ⚡ Prueba de Estrés con Artillery (Ejercicio 2)

### 📋 Configuración
La prueba de estrés se configura en `load-test.yml` para evaluar el endpoint `https://jsonplaceholder.typicode.com/posts`:
- **Duración**: 1 minuto.
- **Usuarios concurrentes**: 100.
- **Reporte**: Generado en formato JSON (`report.json`).


### ▶️ Ejecutar la prueba de carga:
```
npm run load-test
```

### 👩‍💻 Generar un reporte JSON:
```
npm run load-test-report
```


### 🔎 Interpretación de los Resultados
- RPS: 81 (inferior a 100 por errores).

- Latency: 50.9ms (p95), 70.1ms (p99) para solicitudes exitosas.

- Error rate: 62.73% (3764 ETIMEDOUT de 6000).

- Solicitudes exitosas: 2237 (37.28%).


⚠️
El endpoint es eficiente (bajas latencias), pero la alta tasa de errores sugiere problemas de red local, límites del cliente o rate limiting del servidor. Se recomienda repetir con arrivalRate: 50 o en un entorno mejor.

#### **Notas adicionales**
El archivo `report.json` no se ha incluido intencionadamente en el .gitignore

---

## 🧪 Test Plan (Ejercicio 3)
Se ha creado un plan de pruebas detallado para la funcionalidad de búsqueda avanzada de productos en una tienda online, incluyendo criterios de aceptación en sintaxis Gherkin. Consulta los detalles en `test-plan.md` (./test-plan.md).

---

## 🛠️ Pipeline CI/CD para pruebas (Ejercicio 4)
Se ha configurado un pipeline de CI/CD con GitHub Actions para automatizar las pruebas:
- **Playwright Tests**: Ejecuta los tests automatizados (`npm run pw`) y genera un reporte HTML.
- **Artillery Load Tests**: Ejecuta la prueba de carga (`npm run load-test-report`) y genera un reporte JSON.
- **Reportes**: Ambos reportes se publican como artefactos en GitHub Actions.

Consulta la configuración en [`.github/workflows/playwright-artillery.yml`](./.github/workflows/playwright-artillery.yml).
