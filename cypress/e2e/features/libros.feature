Feature: Pruebas de la sección de libros en "Relatos de Papel"

  Scenario: Verificar que los libros se cargan correctamente
    Given: el usuario abre la página de libros
    Then: la lista de libros debería mostrarse

  Scenario: Buscar un libro por nombre
    Given: el usuario está en la página de libros
    When: busca "Cien años de soledad"
    Then: solo debería ver resultados relacionados con "Cien años de soledad"

  Scenario: Ver detalles de un libro
    Given: el usuario está en la página de libros
    When: hace clic en el botón "+ info" del libro "Cien años de soledad"
    Then: debería ser redirigido a la página de detalles del libro
