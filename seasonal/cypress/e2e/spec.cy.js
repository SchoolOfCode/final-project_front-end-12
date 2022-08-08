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

  it("Clicks on Banana (which is always in season) and checks we have been redirected to the item page", () => {
    cy.wait(1000);
    cy.contains("Banana").click();
    cy.url().should("include", "item?food=Banana");
  });
});

describe("Test that the RandomFiveArray works as expected", () => {
  it("Returns five cards on the page", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("button").should("have.length", 7);
  });
  // please complete below test teehee
  it("Returns specifically five different things in the array", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get(".randomarray");
    // visit the page
    // perceive the page
    // perceive that there are five cards upon the page
    // perceive that these five cards, all alike in dignity, in fair seasonalfood app where we lay our scene, are different
    // profit x2
  });
});

describe("Test that searching for terms behaves as expected", () => {
  it("Returns a correct search for an item", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("input").type("pear");
    cy.get("select").select("Item");
    cy.contains("Submit").click();
    cy.url().should("include", "item?food=pear");
    cy.wait(1000);
    cy.get("h2").contains("Pear");
  });

  it("Returns a correct search for a month", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("input").type("january");
    cy.get("select").select("Month");
    cy.contains("Submit").click();
    cy.url().should("include", "results?month=january");
    cy.wait(1000);
    cy.contains("Apple").click().wait(1000);
    cy.get("h2").contains("Apple");
    cy.get("ol").children().contains("January");
  });

  it("Returns a correct error message for an incorrect search where wrong filter is selected", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("input").type("january");
    cy.get("select").select("Item");
    cy.contains("Submit").click();
    cy.url().should("include", "item?food=january");
    cy.wait(1000);
    cy.get("p").contains("Loading");
  });

  it.only("Returns a correct error message for an incorrect search where numbers are entered", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("input").type("12345");
    cy.get("select").select("Item");
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Please use letters only in your search");
    });
  });
});

// WHAT NEEDS DOING
// test the burger icon links work (make sure clicking on each one works and routes properly)
// test the random five array works (done-ish, need to finish line 26)
// test recipe user journey if completed?
