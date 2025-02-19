import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario abre la página de libros", () => {
  cy.visit("https://relatos-de-papel-rouge.vercel.app/");
  cy.contains("books").click(); 
});

Then("la lista de libros debería mostrarse", () => {
  cy.get(".books-list__table").should("be.visible"); 
});

Given("el usuario está en la página de libros", () => {
  cy.visit("https://relatos-de-papel-rouge.vercel.app/");
  cy.contains("books").click(); 
});

When("busca {string}", (bookName) => {
  cy.get('input[placeholder="Busca tu libro por título..."]').type(bookName); 
  cy.get('button[type="submit"]').click(); 
});
Then("solo debería ver resultados relacionados con {string}", (bookName) => {
  cy.get(".books-list__cards").each(($el) => { 
    cy.wrap($el).should("contain.text", bookName);
  });
});


Given("el usuario está en la página de libros", () => {
  cy.visit("https://relatos-de-papel-rouge.vercel.app/");
  cy.contains("books").click(); 
});

When("hace clic en el botón \"+ info\" del libro {string}", (bookName) => {
  cy.contains(".book-card", bookName).within(() => {
    cy.get(".book-card__details-link").click();
  });
});

Then("debería ser redirigido a la página de detalles del libro", () => {
  cy.location("pathname").should("match", /\/books\/\d+/);
  cy.get(".book-details").should("be.visible");
  cy.get(".book-details__author").should("contain.text", "Cien años de soledad");
  cy.get(".book-details__author").should("be.visible");
  cy.get(".book-details__description").should("be.visible");
});