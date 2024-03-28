import HelloWorld from '../HelloWorld.vue'
import TheWelcome from '../TheWelcome.vue'

describe('HelloWorld', () => {
  it('playground', () => {
    cy.mount(HelloWorld, {
      props:
        {
          msg: 'Hello Cypress'
        } ,
      slots: {
        default: '<TheWelcome></TheWelcome>'
      }
    })
    cy.get('h1').should('contain', 'Sub component')
  })
})


