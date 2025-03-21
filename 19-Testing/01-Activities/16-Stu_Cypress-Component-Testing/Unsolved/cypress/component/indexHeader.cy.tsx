import React from 'react'
import Header from '../../client/src/components/Header/index'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })
})