# Seasonal

_Seasonal_ is a web application made to help UK-based users make more informed choices about the produce they buy, by providing them information about the food that's currently in season in the UK.

_Seasonal_ was created by six developers from the [School of Code](https://github.com/SchoolOfCode) over the course of four weeks, before being presented to other developers and industry professionals at a virtual exhibition-style Demo Day. A recording of our presentation of this project at Bootcamp 12.0 Demo Day can be [viewed here on Youtube](https://www.youtube.com/watch?v=Oit70HijLSY&feature=youtu.be).

Our team consists of:

- Andy Johnson [@multi-vit](https://github.com/multi-vit)
- Fiona Kitchen [@fkit00](https://github.com/fkit00)
- Guiji Darar [@Gdarar](https://github.com/Gdarar)
- Madison Lowe [@madisonlowe](https://github.com/madisonlowe)
- Matthew Miller [@codedresser](https://github.com/codedresser)
- Nathan Lee [@N-LEE-94](https://github.com/N-LEE-94)

Thanks for stopping by!

---

## Table of Contents

- [Seasonal](#seasonal)
  - [Table of Contents](#table-of-contents)
    - [Project Description](#project-description)
    - [Getting Started](#getting-started)
    - [Directory Structure](#directory-Structure)
    - [Roadmap](#roadmap)

---

## Project Description

### Demonstration

![Recorded demonstration of the Seasonal App](./Seasonal-Demo.gif)

### About

This repository holds the front-end documentation for Seasonal by Team 12\*\* (Twelve Exponential).

Seasonal is our final project with the [School of Code](https://github.com/SchoolOfCode). In an agile team, over the course of a month, we researched, designed, and built the first iteration of our application. We're still working on the app today, and are currently implementing some stretch goals we couldn't quite get to first time around!

**The core aim of Seasonal is to make it easier and more accessible for users to find out what food is in season in the UK during any given month.**

Our research identitified a desire from users to make more enviromentally-concious choices, and shopping seasonally is a great way to do this. Shopping in season can reduce costs for shoppers and farmers, lessens the enviromental impact of meals (as it takes a lot more resources to grow or import out-of-season food), and can also introduce people to produce they might never have encountered otherwise. In order to make these choices easier, we also provide ways to search for recipes by seasonal ingredient, using TheMealDB API.

Users will be immediately provided with foods currently in season on the landing page. They can then navigate to more food currently in season, or can perform searches for different months, items and recipes. Through searching, they can see when different items are in season, and get information on cooking and growing those items, as well as on their ecological impact.

In the future, we hope to make our app more community-centric and include spaces for users to submit their own recipes. For more details on what we intend on doing next with Seasonal, please refer to our project roadmap!

While the app doesn't yet have full coverage of produce avaliable, this is in the works for future iterations!

### Accessibility

Building an accessible app has been central to our design process. By designing and coding with acessibillity in mind, we are looking to be part of the postive change in making the internet more accesible and open to all.

We're currently using Axe testing software and perform manual screen reader testing, and have really appreciated the feedback we receive from users, mentors, and other developers that's enabled us to learn more and keep implementing more changes.

However, we're still learning and we're really open to feedback, so please get in touch with us if you spot a problem that compromises your experience of the app!

### Links

The back-end for this project can be [found in this linked repository](https://github.com/SchoolOfCode/final-project_back-end-12).

A recording of our presentation of this project at Bootcamp 12.0 Demo Day can be [viewed here on Youtube](https://www.youtube.com/watch?v=Oit70HijLSY&feature=youtu.be).

---

### Getting Started

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

## Roadmap

Goals completed since Demo Day:

- Add in colour scheme changing functionality, so that the website theme changes according to the season.
- Make all the tags on our card components clickable and add new back-end routes, so users can sort by all tags.
- Accessibility edits made to our button components.

Goals we're working towards:

- Colour theme reiterations and colour testing.
- More cleanly integrate the recipe arm of our design. Users should be able to search for recipes, and receive seasonal suggestions. The API we are using to retrieve recipes returns irregular data, which might have to be handled or addressed in a more robust way moving forward.
- Expand searchbar functionality with error handling and looking into fuzzy search.
- Integrate a maps API, to allow users to search for local farms, shops and growers near them.
- Integrate community-generated recipe submission functionality.
- Make further accessibility edits. Always actively ongoing!
