# Board Game Hoard

Sample Angular application with libs generated with Nx during the ng-conf nx workshop 2020.

## Development Server

Run `nx serve store` to run the front end application and run ` nx serve api` to run the backend
Run `nx storybook store-ui-shared` to view the storybook for the shared ui components

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e store` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:store` to execute the end-to-end tests affected by a change.

### View the dependency graph

Run `nx dep-graph` to view the application dependency graph
