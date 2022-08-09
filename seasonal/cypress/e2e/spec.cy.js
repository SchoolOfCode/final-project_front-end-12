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

  it("Returns five different things in the array", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get('[data-cy="random-five-array-container"]')
      .children()
      .should("have.length", 5);
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

  it("Returns a correct error message for an incorrect search where numbers are entered", () => {
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

describe("Burger menu works as expected on below 600px devices", () => {
  it("Ensures burger menu displays on tablet and mobile view and that links work", () => {
    cy.viewport(600, 750);
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get('[data-cy="burger-menu"]').should("be.visible").click();
    cy.get('[data-cy="dropdown-menu"]').children().should("have.length", 3);
    cy.get('[data-cy="dropdown-menu"] > [href="/"]').click();
    // cy.wait(1000);
    // cy.url().should("eq", "http://localhost:3000");
    // assert for home url using above code when links are sorted
    // check that the burger menu open and closes properly
  });
});

describe("Navbar works as expected", () => {
  it("Lorem", () => {});
});

describe("Full user journey tests", () => {
  it.only("visits website landing page and checks it has loaded 5 random cards", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get('[data-cy="random-five-array-container"]')
      .children()
      .should("have.length", 5);
  });
  it.only("clicks on a random 5 card and checks the card loads by looking for the in season months are displayed", () => {
    cy.get('[data-cy="random-five-array-container"] > :nth-child(1)')
      .click();
    cy.wait(1000);
    cy.get('[data-cy="card-months-container"]').should("be.visible");
  });
  it.only("it clicks on Seasonal Logo and expects to load home page with correct url", () => {
    cy.contains("SEASONAL").click();
    cy.wait(1000);
    cy.url().should("eq", "http://localhost:3000/");
        // cy.url().should("eq", "http://localhost:3000");

  });


});

/*
USER JOURNEY SINGLE TEST FLOW
- visit website landing page 
- click a card
- click on home
- click more in season
- search for an item
- and then search for a month from page 
- select an item
- go to the about page 
- go to the credits page 
- check out the link tree and hire all of us 

STRETCH INCLUSION IN ABOVE TEST WHEN RECIPE FUNCTIONALITY ACCESSIBLE ON FRONT-END
- check out the recipe functionality
- navigate to an item card
- click on one of the recipes 
- go through the recipe?

TODO: DO ABOVE LISTS AS ONE E2E TEST.
*/
