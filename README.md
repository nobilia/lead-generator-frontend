## Requirements

- Angular CLI: Version 12.0.5 or later, < 13.
- Yarn: Version 1.15 or later.
- Node.js: The most recent 14.x version is required.
- SAP Commerce Cloud 1905 or newer

## Development server

- Add 'lead-gen-dashboard.local' to the 'hosts' file(only first time)
- yarn install(only first time)
- yarn start
- Navigate to `https://lead-gen-dashboard.local:4200/`. The app will automatically reload if you change any of the
  source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

- `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
- `ng qa` to build the project for qas

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package
that implements end-to-end testing capabilities.
