# Seasonal

_Seasonal_ is a web application made to help consumers make more informed choices about the produce they buy, by providing them information about the food that's currently in season.

_Seasonal_ was created by six developers from the [School of Code](https://github.com/SchoolOfCode) over the course of four weeks.

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

### Project Description

This repository holds the front-end documentation for Seasonal by Team 12\*\* (Twelve Exponential). Seasonal is our final project with the [School of Code](https://github.com/SchoolOfCode). In an agile team, over the course of a month, we researched, designed, and built the first iteration of our application, and are currently working on implementing stretch goals.

The core aim of Seasonal is to make it easier and more accessible for users to find out what food is in season in the UK during any given month. Our research identitified that there was a desire from consumers to make more enviromentally concious choices, and shopping seasonaly is a great way to do this. Shopping in season can reduce cost and the enviromental impact of meals as well as exposing cosumers to a wider range of produce. In order to make these choices easier we also provide ways to search for a recipe by the ingredient by using TheMealDB api.

Users will be immediately provided with foods currently in season on the landing page, and then can navigate to more food currently in season, or can perform searches for different months, items and recipes to see when they're in season, as well as information on cooking, growing, and ecological impact. In the future we hope to make our app more communtiy-centric and have user generated recipes. For more details on what we intend on doing next with Seasonal, please refer to our project roadmap!

Building an accessible app has been central to our design process. By designing and coding with acessibillity in mind, we are looking to be part of the postive change in making the internet more accesible and open to all. We're testing our app by using axe testing software - however, we're still learning, so please get in touch in with us if you spot a problem that compromises your experience of the app!

While the app doesn't yet have full coverage of produce avaliable, this is in the works for future iterations!

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

The stretch goal that we're currently working on is to integrate the recipe arm of our product design. With this stretch goal, users should be able to locate and search for seasonal recipes which match up to different foods in season.

Potentially, we will create an intermediary API between our front and back-end which can help sort and tidy the recipes data we are pulling from various places. Regarding the front-end, some stretch goals we'd like to implement next include adding in seasonal colour scheme functionality and expanding our searchbar functionality.

Following meeting this stretch goal, our next goal will be to integrate a maps API, to allow users to search for local farms and growers near them.
