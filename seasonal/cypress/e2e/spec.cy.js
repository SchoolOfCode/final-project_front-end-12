describe("Typical user journey through our website", () => {
  it("Visits our landing page and checks that the More in Season button is visible", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.contains("More in Season").should("be.visible");
  });

  it("Clicks on More in Season and checks that we have been redirected to the results page", () => {
    cy.contains("More in Season").click();
    cy.url().should("include", "results?month=");
  });

  /*   it("Clicks on Banana (which is always in season) and checks we have been redirected to the item page", () => {
    cy.wait(1000);
    cy.contains("Banana").click();
    cy.url().should("include", "item?food=Banana");
  }); */
});
