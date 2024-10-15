describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Вошли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
       cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
       cy.get('#loginButton').click(); // Нажал Войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт.вижу текст
       cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // Вошли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст.пароль
        cy.get('#mail').type('german@dom.ru'); // Ввели любой имейл
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Вошли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный имейл
        cy.get('#pass').type('iLove'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Вошли на сайт
        cy.get('#mail').type('man@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Логин без @ и верный пароль ', function () {
        cy.visit('https://login.qa.studio/'); // Вошли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('логин GerMan@Dolnikov.ruGerMan@Dolnikov.ru и верный пароль ', function () {
        cy.visit('https://login.qa.studio/'); // Вошли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
})