# Test Plan: Búsqueda Avanzada de Productos en Tienda Online

## Objetivo de la Prueba
Evaluar la funcionalidad de búsqueda avanzada de productos en una tienda online para garantizar que los usuarios puedan encontrar productos de manera eficiente y precisa utilizando filtros como categoría, rango de precio, marca, palabras clave y ordenamiento. La prueba verificará que los resultados sean correctos, consistentes y que la interfaz sea usable.

## Requisitos Previos
- **Entorno**: Acceso a la tienda online desplegada en un entorno de pruebas (e.g., staging).
- **Datos de prueba**: Base de datos poblada con al menos 50 productos variados, cubriendo:
  - Múltiples categorías (e.g., Electrónica, Ropa, Hogar).
  - Rangos de precio (e.g., $0-$50, $50-$100, $100+).
  - Diferentes marcas (e.g., Samsung, Nike, Sony).
- **Navegadores**: Pruebas en Chrome, Firefox y Safari (versiones recientes).
- **Permisos**: Acceso de usuario estándar (no administrador).
- **Herramientas**:
  - Playwright para pruebas automatizadas (si aplica).
  - Herramientas manuales (e.g., inspección visual, Postman para validar API si la búsqueda usa un endpoint).

## Casos de Prueba

### Caso 1: Búsqueda por palabras clave
- **Descripción**: Verificar que la búsqueda por palabras clave devuelve productos relevantes.
- **Pasos**:
  1. Navegar a la página de búsqueda avanzada.
  2. Ingresar "Samsung" en el campo de palabras clave.
  3. Hacer clic en "Buscar".
- **Resultado esperado**:
  - Se muestran productos que contienen "Samsung" en el nombre o descripción.
  - No se muestran productos irrelevantes (e.g., Nike).
- **Prioridad**: Alta.

### Caso 2: Filtrado por categoría y rango de precio
- **Descripción**: Verificar que los filtros de categoría y precio funcionan correctamente.
- **Pasos**:
  1. Seleccionar la categoría "Electrónica".
  2. Establecer un rango de precio entre $50 y $100.
  3. Hacer clic en "Buscar".
- **Resultado esperado**:
  - Solo se muestran productos de la categoría "Electrónica" con precios entre $50 y $100.
  - No se muestran productos fuera del rango o de otras categorías.
- **Prioridad**: Alta.

### Caso 3: Filtrado por marca y ordenamiento
- **Descripción**: Verificar que el filtro por marca y el ordenamiento por precio funcionan.
- **Pasos**:
  1. Seleccionar la marca "Sony".
  2. Ordenar por "Precio: Ascendente".
  3. Hacer clic en "Buscar".
- **Resultado esperado**:
  - Solo se muestran productos de la marca "Sony".
  - Los productos están ordenados de menor a mayor precio.
- **Prioridad**: Media.

### Caso 4: Búsqueda sin resultados
- **Descripción**: Verificar el comportamiento cuando no hay resultados.
- **Pasos**:
  1. Ingresar "ProductoInexistenteXYZ" en palabras clave.
  2. Seleccionar categoría "Ropa", marca "Nike", rango de precio $0-$10.
  3. Hacer clic en "Buscar".
- **Resultado esperado**:
  - Se muestra un mensaje claro: "No se encontraron productos que coincidan con los criterios".
  - No se muestran productos irrelevantes.
- **Prioridad**: Media.

### Caso 5: Validación de campos requeridos y límites
- **Descripción**: Verificar el manejo de entradas inválidas o extremas.
- **Pasos**:
  1. Dejar el rango de precio vacío o con valores negativos (e.g., -10 a 50).
  2. Ingresar caracteres especiales en palabras clave (e.g., "<script>").
  3. Hacer clic en "Buscar".
- **Resultado esperado**:
  - Si el rango de precio es inválido, se muestra un mensaje de error (e.g., "Rango de precio no válido").
  - Caracteres especiales son sanitizados; no se ejecuta código malicioso ni se rompe la búsqueda.
- **Prioridad**: Alta.

### Caso 6: Rendimiento de la búsqueda con múltiples filtros
- **Descripción**: Evaluar el tiempo de respuesta al usar varios filtros.
- **Pasos**:
  1. Combinar filtros: categoría "Hogar", marca "Sony", rango de precio $20-$80, palabras clave "lámpara", ordenar por "Precio: Descendente".
  2. Hacer clic en "Buscar".
  3. Medir el tiempo de respuesta.
- **Resultado esperado**:
  - La búsqueda se completa en menos de 2 segundos.
  - Los resultados son correctos según los filtros aplicados.
- **Prioridad**: Media.

## Criterios de Aceptación (en Gherkin)

### Escenario 1: Filtrado correcto de productos
DADO QUE estoy en la página de búsqueda avanzada  
Y hay productos disponibles en la base de datos  
CUANDO selecciono la categoría "Electrónica"  
Y establezco un rango de precio entre 50 y 100 dólares  
Y busco productos  
ENTONCES veo solo productos de la categoría "Electrónica" con precios entre 50 y 100 dólares  
Y no veo productos de otras categorías o fuera del rango de precio  

### Escenario 2: Resultados precisos sin productos irrelevantes
DADO QUE estoy en la página de búsqueda avanzada  
Y hay productos variados en la base de datos  
CUANDO ingreso la palabra clave "Samsung"  
Y busco productos  
ENTONCES veo solo productos relacionados con "Samsung" en nombre o descripción  
Y no veo productos irrelevantes como "Nike"  

### Escenario 3: Mensaje claro cuando no hay resultados
DADO QUE estoy en la página de búsqueda avanzada  
CUANDO ingreso una palabra clave que no existe como "ProductoInexistenteXYZ"  
Y busco productos  
ENTONCES veo un mensaje que dice "No se encontraron productos que coincidan con los criterios"  
Y no veo productos en la lista de resultados  

### Escenario 4: Manejo de entradas inválidas sin romper la interfaz
DADO QUE estoy en la página de búsqueda avanzada  
CUANDO ingreso un rango de precio inválido como "-10" a "50"  
Y busco productos  
ENTONCES veo un mensaje de error que dice "Rango de precio no válido"  
Y la interfaz no se rompe ni muestra errores inesperados  

### Escenario 5: Tiempo de respuesta aceptable con múltiples filtros
DADO QUE estoy en la página de búsqueda avanzada  
Y hay productos disponibles en la base de datos  
CUANDO selecciono la categoría "Hogar"  
Y selecciono la marca "Sony"  
Y establezco un rango de precio entre 20 y 80 dólares  
Y ingreso la palabra clave "lámpara"  
Y ordeno por "Precio: Descendente"  
Y busco productos  
ENTONCES la búsqueda se completa en menos de 2 segundos  
Y los resultados son correctos según los filtros aplicados  

### Escenario 6: Compatibilidad con navegadores
DADO QUE estoy en la página de búsqueda avanzada  
Y estoy usando un navegador soportado como Chrome, Firefox o Safari  
CUANDO ingreso la palabra clave "Samsung"  
Y busco productos  
ENTONCES los resultados se muestran correctamente sin errores de visualización  
Y la funcionalidad de búsqueda es consistente en todos los navegadores  

### Escenario 7: Seguridad contra inyección de caracteres especiales
DADO QUE estoy en la página de búsqueda avanzada  
CUANDO ingreso caracteres especiales como "<script>" en el campo de palabras clave  
Y busco productos  
ENTONCES los caracteres especiales son sanitizados  
Y no se ejecuta código malicioso ni se rompe la funcionalidad de búsqueda  

## Estrategia de Ejecución
1. **Pruebas manuales**:
   - Ejecutar los casos 1-5 manualmente en Chrome para validar la funcionalidad básica.
   - Verificar usabilidad (mensajes de error, diseño) y compatibilidad visual en Firefox y Safari.
2. **Pruebas automatizadas**:
   - Automatizar los casos 1, 2 y 3 con Playwright para verificar funcionalidad en múltiples navegadores.
   - Configurar assertions para validar resultados (e.g., productos mostrados, ordenamiento).
3. **Pruebas de rendimiento**:
   - Usar Artillery o JMeter para simular 50 usuarios concurrentes ejecutando el caso 6.
   - Medir tiempo de respuesta y estabilidad del servidor.
4. **Entorno**:
   - Ejecutar en el entorno de staging con datos reales.
   - Usar un navegador limpio (sin caché) para evitar falsos positivos.
5. **Reporte**:
   - Generar un reporte con resultados de cada caso (pasado/fallado), capturas de pantalla para fallos y métricas de rendimiento.
   - Incluir recomendaciones (e.g., optimizar queries si el tiempo de respuesta excede 2s).

## Notas
- Priorizar casos de alta prioridad (1, 2, 5) antes de los de prioridad media.
- Si se usa una API para la búsqueda, validar el endpoint con Postman para confirmar que los filtros se aplican correctamente en el backend.