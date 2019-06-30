Express start project with Webpack bundler and Vue
==================================================

Стартовый проект на Express c Webpack и Vue. C Nunjucks, SCSS, Fontello. С ES и style линтерами и Hot Reloading в режиме разработки.


Deploy
------

Установка зависимостей npm packages

    $ npm install

Запуск сервера
--------------

    // navigate to localhost:8080 for local dev
    $ npm start

Cборка
------

Сборка статики для разработки

    $ npm run buildDev

Сборка статики в продакшен

    $ npm run buildProd

Тесты
-----

Запуск cтатического анализатора ES

    $ npm run eslint

Запуск cтатического анализатора стилей

    $ npm run stylelint

Запуск модульных тестов

    $ npm run test

Создать и посмотреть статистику по бандлу:

    $ npm run build:stats
    $ npm run view:stats

