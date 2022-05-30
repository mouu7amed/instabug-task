describe("Tests the login form", () => {
  // Scenario 1
  it("Outputs error your email and/or password are incorrect", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[type="text"]')
      .type("mouu7amed@gmail.com")
      .should("have.value", "mouu7amed@gmail.com")
      .get('input[type="password"]')
      .type("123456Mm")
      .should("have.value", "123456Mm")
      .type("{enter}")
      .get(".error-alert")
      .should("have.text", "Your email and/or password are incorrect");
  });

  // Scenario 3
  it("Redirects to the welcome page", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[type="text"]')
      .type("mohamed@instabug.com")
      .should("have.value", "mohamed@instabug.com")
      .get('input[type="password"]')
      .type("A12345678")
      .should("have.value", "A12345678")
      .type("{enter}")
      .url()
      .should("contain", "/welcome");
  });
});
