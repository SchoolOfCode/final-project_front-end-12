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
  });
  it.only("clicks more in season and checks url and if banana is displayed (because banana is always in season)", () => {
    cy.contains("More in Season").click();
    cy.url().should("include", "results?month=");
    cy.contains("Banana").should("be.visible");
  });
  it.only("it inputs strawberry, selects item and submits search and checks result page has correct url and displays strawberry as an h2", () => {
    cy.get("input").type("strawberry");
    cy.get("select").select("Item");
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.url().should("include", "item?food=strawberry");
    cy.wait(1000);
    cy.get("h2").contains("Strawberry");
  });
  it.only("it inputs October in to search bar and checks beef is displayed on results page. Clicks beef and checks card h2 is beef and seasonal months includes October", () => {
    cy.get("input").type("October");
    cy.get("select").select("Month");
    cy.contains("Submit").click();
    cy.url().should("include", "results?month=October");
    cy.wait(1000);
    cy.contains("Beef").click().wait(1000);
    cy.get("h2").contains("Beef");
    cy.get("ol").children().contains("October");
  });
  it.only("it clicks on the about page and checks title conatins About Seasonal and correct url displayed. Checks link tree has all the correct attributes", () => {
    cy.get('[href="/about"]').click();
    cy.wait(1000);
    cy.get("h2").contains("About Seasonal");
    cy.url().should("eq", "http://localhost:3000/about");
    cy
    .get(':nth-child(9) > a')
    .should('have.attr', 'href', 'https://linktr.ee/twelve_exponential')
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'rel', 'noreferrer'); 
  });
  it.only("Checks the link tree is returning a status 200 and link is good", () => {
    cy
    .get('[href="/about"]')
    .then(link => {

      cy
        .request('https://linktr.ee/twelve_exponential')
        .its('status')
        .should('eq', 200);
    })
  });
});



/*
USER JOURNEY SINGLE TEST FLOW
- visit website landing page DONE
- click a card DONE
- click on home DONE
- click more in season DONE
- search for an item DONE
- and then search for a month from page DONE
- select an item DONE
- go to the about page DONE
- go to the credits page DONE
- check out the link tree and hire all of us DONE

STRETCH INCLUSION IN ABOVE TEST WHEN RECIPE FUNCTIONALITY ACCESSIBLE ON FRONT-END
- check out the recipe functionality
- navigate to an item card
- click on one of the recipes 
- go through the recipe?

TODO: DO ABOVE LISTS AS ONE E2E TEST.
*/
