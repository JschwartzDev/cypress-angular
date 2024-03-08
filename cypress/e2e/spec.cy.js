describe("My First Test", () => {
  it("Visits the localhost", () => {
    cy.visit("http://localhost:4200/");
    cy.get(".create-new-product-btn").click();
    cy.get("#price").type("4.87");
    cy.get("#rating").type("2");
    cy.get("#url").type("https://source.unsplash.com/random/200x200?sig=1020");
    cy.get(".save").click();
  });
});
