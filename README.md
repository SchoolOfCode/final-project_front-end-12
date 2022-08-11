[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8143652&assignment_repo_type=AssignmentRepo)

# final-project_front-end

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
