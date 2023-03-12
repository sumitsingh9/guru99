///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('login', () => {

    before(() => {
        cy.fixture('login').then((data) => {
            globalThis.loginData = data
        })
        cy.fixture('confirmPass').then((data) => {
            globalThis.confirmPass = data
        })
    })

    it('Register - DDT', () => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('a[href*="register"]').contains("REGISTER").click()
        cy.get('#email').type(loginData.username)
        cy.get('input[name="password"]').type(loginData.password)
        cy.get('input[name="confirmPassword"]').type(confirmPass.confirmPassword)
        cy.get('input[name="submit"][type="submit"]').click()
        cy.get('a[href*="login"]').contains("sign-in").click()
    });
});
