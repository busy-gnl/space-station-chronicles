describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get("#root > div > div:nth-child(2) > h2:nth-child(2)").as("1rsth2").contains('International Space Station')
    cy.get("#root > div > div:nth-child(2) > h2:nth-child(4)").as("2ndh2").contains('Date de lancement du premier module : 20 novembre 1998')
    cy.get("#root > div > div:nth-child(2) > h2:nth-child(6)").as("3rdh2").contains("Envoyez un message à l'équipage")
    cy.get("#root > div > div:nth-child(2) > div").as("carousel").find("div").as("carouselItems")
    cy.get("#root > div > div:nth-child(2) > div > div:nth-child(3) > img").as("slide1")
    cy.get("@slide1").should("have.attr", "src").should("include", "https://www.parlonspeuparlonscience.com/wp-content/uploads/2021/01/Nasa-scaled.jpg")
    cy.get("@slide1").should(slide => {
      expect(slide[0].naturalWidth).to.be.greaterThan(0)
    })
    cy.get("@slide1").should(slide => {
      expect(slide[0].naturalHeight).to.be.greaterThan(0)
    })
    cy.get('@slide1').should(slide => {
      expect(slide[0].getBoundingClientRect().left).to.be.equal(0)
    })
    cy.get("#root > div > div:nth-child(2) > div > svg.rightArrow").as("next")
    cy.get("@next").click()
    cy.get(".sc-aXZVg dBnkUG").as("slide2")
    cy.get("@slide2").should(slide => {
      expect(slide[0].getBoundingClientRect().left).to.be.equal(0)
    })
    cy.get("@next").click()
    cy.get("#root > div > div:nth-child(2) > div > div:nth-child(9) > img").as("slide3")
    cy.get("@slide3").should(slide => {
      expect(slide[0].getBoundingClientRect().left).to.be.equal(0)
    })
    cy.get("#root > div > div:nth-child(2) > div > svg.leftArrow").as("prev")
  })
})