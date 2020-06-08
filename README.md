# Sobre o Projeto

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

O objetivo deste projeto é gerar insumo para aplicação em um DOJO de testes Unitários e teste End To End (E2E)

## WebServer de Desenvolvimento
Etapas para montagem do ambiente:
* ...$ git clone https://github.com/atrombetone/dojo-test.git
* ...$ cd dojo-test
* ...$ npm install
* ...$ ng serve --open

Abra um segundo terminal e acesse o dir
* ...$ cd dojo-test/wiremock
* ...$ ./run.sh

Aguarde até que o Wiremock suba a API na porta 3002
em seguida volte ao navegador na aplicação http://localhost:4200

## ScreenShots
<table>
    <tr>
        <td colspan="2">
            <img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/home_00.png" />
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/products_00.png" />
        </td>
        <td>
            <img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/products_01.png" />
        </td>
    </tr>
</table>

## Testes Unitários

Execute o comando `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).

Uma segunda opção para obter mais detalhes pode ser utilizado o comando `ng test --code-coverage`, dessa forma é gerado um diretório chamado `coverage` na raiz do projeto contendo um relatório detalhado em HTML mostrando o resultado da cobertura.
<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/karma_01.png">
<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/coverage_01.png">

## Teste End To End (E2E)

Execute o comando `ng e2e` para rodar os testes End To End via [Protractor](http://www.protractortest.org/).

<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/e2e_3.png">
