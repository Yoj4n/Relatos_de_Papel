import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el usuario visita la página principal", () => {
  cy.visit("https://relatos-de-papel-rouge.vercel.app/books");
});

Then("la página debe mostrar el título {string}", (title) => {
  cy.get("h1").should("have.text", title);
});
