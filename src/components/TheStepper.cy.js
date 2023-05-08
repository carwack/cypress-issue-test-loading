import Stepper from './TheStepper.vue'

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper)
  })
})