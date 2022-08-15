describe('Accessibility test', () => {

  beforeEach('Visit url and create axe on the webpage',()=>{
    cy.visit('https://www.babbangona.com')
    cy.injectAxe() //This will inject the axe-core runtime into the page under test
  } )

  it('Accessing the whole webpage', () => {
    
    cy.checkA11y() //This will run axe against the document at the point in which it is called.
  })

  it('Accessing Career button', () => {
    
    cy.get('#menu-1-a3bcb3e > .menu-item-3661 > .elementor-item').click() //This will run axe against the component with id mentioned
    cy.wait(5000)
    cy.checkA11y()  
  })

  it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(null, {
      includedImpacts: ['critical']
    })

    it('Only logs a11y violations while allowing the test to pass', () => {
      // Do not fail the test when there are accessibility failures
      cy.checkA11y(null, null, null, true)
    })
  })
 })