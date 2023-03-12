///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Register on Guru99', () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
    })

    it('Register', () => {
        // cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('a[href*="register"]').contains("REGISTER").click()
        cy.get('#email').type("Sumit")
        cy.get('input[name="password"]').type("1234")
        cy.get('input[name="confirmPassword"]').type("1234")
        cy.get('input[name="submit"][type="submit"]').click()
        cy.get('a[href*="login"]').contains("sign-in").click()

    });
    it('Log in and Bok flight', () => {
        // Log in
        cy.get('input[name="userName"]').type("Sumit")
        cy.get('input[name="password"]').type("1234")
        cy.get('input[name="submit"][type="submit"]').click()

        //book a flight
        cy.get('a[href*="reservation"]').contains("Flights").click()
        cy.get('input[name="tripType"][value="oneway"]').click()
        cy.get('select[name="passCount"]').select('3')
        cy.get('select[name="fromPort"]').select('Paris')
        cy.get('select[name="toMonth"]').select('October')
        cy.get('select[name="toDay"]').select('17')
        cy.get('input[name="servClass"][value="Coach"]').click()
        cy.get('input[name="servClass"][value="First"]').click()
        cy.get('select[name="airline"]').select('Unified Airlines')
        cy.get('input[src*="continue"][name="findFlights"]').click()
    });
    it.only('validate links', () => {
        // Log in
        cy.get('input[name="userName"]').type("Sumit")
        cy.get('input[name="password"]').type("1234")
        cy.get('input[name="submit"][type="submit"]').click()

        //validate links
        cy.get('.mouseOut').each(($el, index, $list) => {
            
        })
    })
});
