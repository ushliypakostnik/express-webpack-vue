Express start project with Webpack bundler
==========================================

<<<<<<< HEAD
Стартовый проект на Express c Webpack, Nunjucks, SCSS, Fontello and Hot Reloading in dev mode.

=======
cd f:/projects/express/express-with-webpack
>>>>>>> 384ec1741188f28d225936fd5cdef20cb2235203

Deploy
------

Установка зависимостей npm packages

    $ npm install

Запуск сервера для разработки
-----------------------------

    // navigate to localhost:8080 for local dev
    $ npm start

Режим для разработки статики
----------------------------

    $ npm watch

Cборка
------

<<<<<<< HEAD
Сборка статики для разработки

    $ npm run buildDev

 Сборка статики в продакшен

    $ npm run prod


This is the bare-bones Express and Webpack boilerplate with ES6+ babel transpilation, ESLint linting, Hot Module Reloading.

Has two build modes: Development and Production.

When you run `npm run buildDev`, Javascript, HTML, and CSS files are unminified and not uglified, meaning that you can easily inspect them in Chrome Dev Tools. Hot Module Reloading is enabled via `webpack-dev-middleware` and `webpack-hot-middleware`. 

When you run `npm run buildProd`, Javascript, HTML, and CSS files are all minified and uglified, and images are encoded as Base64 directly into your CSS file, which results in less calls to the server for image files.
=======
Сборка статики в продакшен

    $ npm run build

 Сборка бекенда в продакшен

    $ npm run prod
>>>>>>> 384ec1741188f28d225936fd5cdef20cb2235203
