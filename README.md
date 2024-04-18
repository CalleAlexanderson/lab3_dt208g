# MyAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Mitt arbete

Jag har skapat en webbsida med hjälp av Angular 17, webbsidan har 3 undersidor och består av 5 komponenter. En av komponenterna fungerar som startsida då jag inte använder mig av index.html, jag har med hjälp av app.routes.ts ändrat så att när användaren söker på webbplatsen skickas hen vidare till home.component.html istället för det vanliga index.html. 

En annan komponent fungerar som en sida där jag skrivt om mitt arbete och den tredje undersidan är också en komponent och där ligger det lite kinesiska trivia och ger också använmdaren möjlighet att konvertera kg till kinesiska catty samt konvertera sek till cny. 

De två sista komponenterna är en header (navigering) och footer (kontakinformation) som lagts in i de andra komponenterna.

Jag har använt SASS (SCSS) för styling och har försökt hålla mig så gått det går med avgränsning av styling till de relevanta filerna (global, components, enskild component).
