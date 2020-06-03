# Dojo

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

O objetivo deste projeto é gerar insumo para aplicação em um DOJO de testes Unitários e teste End To End (E2E)

## Development server
Etapas para montagem do ambiente:
...$ git clone https://github.com/atrombetone/dojo-test.git
...$ cd dojo-test
...$ npm install
...$ ng serve --open

Abra um segundo terminal e acesse o dir
...$ cd dojo-test/wiremock
...$ ./run.sh

Aguarde até que o Wiremock suba a API na porta 3002
em seguida volte ao navegador na aplicação http://localhost:4200

## ScreenShots
<table>
    <tr>
        <td><img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/home.png" /></td>
        <td><img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/products.png" /></td>
    </tr>
</table>


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
