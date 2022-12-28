# Challenge week 11 christmas

## Robots

You will have to create a frontend in React that allows the user to manage a list of **robots**.

Create an initial home page and a menu that navigates between the home page and the robots.
The initial page should have some logo along with the number of available robots.

The state and its logic must be in a custom Hook. Optionally you can take its instance to a Context.

The user must be able to list, create, modify and delete robots (CRUD).

Each robot must show a name, an image (internet URL) and characteristics:

-   Speed (0-10)
-   Resistance (0-10)
-   Creation date
-   User who creates the robot

(You can get the image in the API of https://robohash.org)

The data must have persistence in JSON-Server.
Create a service/repository to abstract the interactions with your API.
Use TS classes for this.

## Requirements

Test as much as possible when finishing each component or element.
Be careful: you are missing testing

Improve the CSS. It would be great if you do it with BEM and SASS.

Take care of the semantic value of the HTML and validate it.

Include the Actions of Audit and testing/sonar.

Protect the main branch of github and enforce the actions to merge the PRs
Work with short branches (a few commits)
Take special care of commit messages

Back to testing: make it pick up in sonar and try to get 100% coverage

## Extras

-   Create a favorites page for the bots selected by the user,

-   Create a detail page for the robots.
    You can add to the model any information you can think of to display on this page.

## Netlify

**Deploy:** https://202210-w11-xmas-estcolros.netlify.app/

## SonarCloud

**Overview:** https://sonarcloud.io/summary/overall?id=estcolros_202210-W11-XMAS-EstefaniaColombo
