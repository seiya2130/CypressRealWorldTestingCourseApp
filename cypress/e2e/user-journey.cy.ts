declare namespace Cypress {
    interface Chainable {
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
  }
  
  Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })  

describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit("http://localhost:3000")
        cy.getByData("course-0").find("a").contains('Get started').click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/app-install-and-overview"
        )
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
        )
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
          "eq",
          "/testing-your-first-application/setting-up-data-before-each-test"
        )
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
    
        cy.location("pathname").should("equal", "/")
    })
})