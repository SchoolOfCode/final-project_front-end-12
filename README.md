# Seasonal

**_Seasonal_ is a web application made to help UK-based users make more informed choices about the produce they buy, by providing them information about the food that's currently in season, and what recipes they can make with it.**

**[Deployed live app here!](https://seasonalfood.netlify.app)**

_Seasonal_ was created by six developers from the [School of Code](https://github.com/SchoolOfCode) over the course of four weeks, before being presented to other developers and industry professionals at a virtual exhibition-style Demo Day. This repository holds the front-end documentation for this project.

Our team - 12\*\* (Twelve Exponential) - consists of:

- Andy Johnson [@multi-vit](https://github.com/multi-vit)
- Fiona Kitchen [@fkit00](https://github.com/fkit00)
- Guiji Darar [@Gdarar](https://github.com/Gdarar)
- Madison Lowe [@madisonlowe](https://github.com/madisonlowe)
- Matthew Miller [@codedresser](https://github.com/codedresser)
- Nathan Lee [@N-LEE-94](https://github.com/N-LEE-94)

A recording of our presentation at Bootcamp 12.0 Demo Day can be [viewed here on Youtube](https://www.youtube.com/watch?v=Oit70HijLSY&feature=youtu.be).

To see the back-end for this project, you can follow this link to [the back-end repository](https://github.com/SchoolOfCode/final-project_back-end-12).

To find us on LinkedIn, Twitter, or other places on the web, you can check out [our team LinkTree](https://linktr.ee/twelve_exponential) too.

Thanks for stopping by!

---

## Table of Contents

- [Seasonal](#seasonal)
  - [Table of Contents](#table-of-contents)
    - [Project Description](#project-description)
      - [Demonstration](#demonstration)
      - [About](#about)
      - [Accessibility](#accessibility)
      - [Links](#links)
    - [Getting Started](#getting-started)
    - [Directory Structure](#directory-structure)
    - [Roadmap](#roadmap)
    - [Credits](#credits)

---

## Project Description

### Demonstration

![Recorded demonstration of the Seasonal App](./Seasonal-Demo.gif)

### About

Seasonal is our final project with the [School of Code](https://github.com/SchoolOfCode). In an agile team, over the course of a month, we researched, designed, and built the first iteration of our application. We're still working on the app today, and are currently implementing more stretch goals!

**The core aim of Seasonal is to make it easier and more accessible for users to find out what food is in season in the UK during any given month.**

Our research identitified a desire from users to make more enviromentally-concious choices. Shopping seasonally is a great way to do this. Shopping in season can reduce costs for shoppers and farmers, lessens the enviromental impact of meals (as it takes a lot more resources to grow or import out-of-season food), and can also introduce people to produce they might never have encountered otherwise. In order to make these choices easier, we also provide ways to search for recipes by seasonal ingredient, using TheMealDB API.

Users will be immediately provided with foods currently in season on the landing page. They can then navigate to more food currently in season, or can perform searches for different months, items and recipes. Through searching, they can see when different items are in season, and get information on cooking and growing those items, as well as on their ecological impact.

In the future, we hope to make our app more community-centric and include spaces for users to submit their own recipes. While the app doesn't yet have full coverage of produce avaliable, this is in the works for future iterations! For more details on what we intend on doing next with Seasonal, please refer to our project roadmap!

### Accessibility

Building an accessible app has been central to our design process. By designing and coding with acessibillity in mind, we are looking to be part of the postive change in making the internet more accesible and open to all.

We're currently using Lighthouse and Axe testing software for automated accessibility testing, and perform periodic manual screen reader testing too. We have really appreciated the feedback we've received from users, mentors, and other developers that's enabled us to learn, improve, and keep implementing more useful changes.

However, we're still learning and we're really open to feedback, so please get in touch with us if you spot a problem that compromises your experience of the app!

### Links

General links:

- [Back-end repository for this app.](https://github.com/SchoolOfCode/final-project_back-end-12)
- [YouTube recording of our presentation at Demo Day.](https://www.youtube.com/watch?v=Oit70HijLSY&feature=youtu.be)
- [Our team LinkTree.](https://linktr.ee/twelve_exponential)

Our team on GitHub:

- Andy Johnson [@multi-vit](https://github.com/multi-vit)
- Fiona Kitchen [@fkit00](https://github.com/fkit00)
- Guiji Darar [@Gdarar](https://github.com/Gdarar)
- Madison Lowe [@madisonlowe](https://github.com/madisonlowe)
- Matthew Miller [@codedresser](https://github.com/codedresser)
- Nathan Lee [@N-LEE-94](https://github.com/N-LEE-94)

---

## Getting Started

[Clone down](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) the folder from GitHub into your IDE.

Change in to the `seasonal` directory using:

```javascript
cd seasonal
```

Install dependencies using:

```javascript
npm i
```

Run the app locally using:

```javascript
npm run dev
```

The app can then be accessed using the URL [localhost:3000](http://localhost:3000) in any browser.

As the app's back-end is deployed, you shouldn't need to take any further steps in order to get the app up and running locally.

---

## Directory Structure

Our front-end - which is built using Next.js - is currently structured as follows:

```
-final-project_front-end-12
    - seasonal
        - components
        - cypress
            - e2e
                - spec.cy.js
        - pages
        - public
        - styles
        - .gitignore
        - cypress.config.js
        - next.config.js
        - package.json
    - manifesto.md
    - README.md
```

The `pages` directory contains the individual pages which are returned by our front-end, as Next.js provides some handing routing options which we decided would be quite useful in this project.

The `components` directory contains all of our component files.

The `styles` directory contains our styling, which is created using CSS modules. Inside this directoy, `globals.css` contains our root colour variables for the site's branding.

The `manifesto.md` file is a copy of our team manifesto, that we adhered to whilst building _Seasonal_.

The `cypress` directory contains our front-end integration and E2E tests.

---

## Roadmap

Goals completed since Demo Day:

- Add in colour scheme changing functionality, so that the website theme changes according to the season.
- Make all the tags on our card components clickable and add new back-end routes, so users can sort by all tags.
- Accessibility edits made to our button components.

Goals we're working towards:

- Colour theme reiterations and testing design options for accessibility and WCAG compliance.
- More cleanly integrate the recipe arm of our design. Users should be able to search for recipes, and receive seasonal suggestions. The API we are using to retrieve recipes returns irregular data, which might have to be addressed in a more robust way moving forward.
- Expand searchbar functionality with error handling and looking into fuzzy search.
- Integrate a maps API, to allow users to search for local farms, shops and growers near them.
- Integrate community-generated recipe submission functionality.
- Make further accessibility edits. Always actively ongoing!

---

## Credits

This app was developed by [Andy Johnson](https://github.com/multi-vit), [Fiona Kitchen](https://github.com/fkit00), [Guiji Darar](https://github.com/Gdarar), [Madison Lowe](https://github.com/madisonlowe), [Matthew Miller](https://github.com/codedresser), and [Nathan Lee](https://github.com/N-LEE-94).

We've had a lot of really great, insightful, and useful conversations with lots of different people - developers, designers, mentors, coaches, and users - that have helped us grow enormously and taught us a lot. We're grateful to everyone who's helped us (and who continues to help us!) along the journey.

We want to give some extra special thanks as well to [Eda Burns](https://github.com/smurfeda), [Josh Pattison](https://github.com/pattisoj), [Leigh Eastell](https://github.com/Leigh-Eastell), [Simon Partridge](https://github.com/simonpartridge86), [Simran Toor](https://github.com/simran-toor) and [Skandy Rattray](https://github.com/skandog) for their time, feedback and insights regarding our concepts, designs, and product iterations. They're a cracking bunch, and we hope you check them out too!

And thanks finally to the [School of Code](https://github.com/SchoolOfCode) too, for giving us our start on our development journeys, and helping to get more and different people into tech.
