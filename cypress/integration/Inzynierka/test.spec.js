/// <reference types="Cypress" />

import HomePage from '../../pageObjects/HomePage'

describe('Open home page', () => {
    it('Home page is opening', () => {
        const homePage = new HomePage();
        homePage.visit();
    });
    it('Home contact us page', () => {
        const homePage = new HomePage();
        homePage.visit();
        const contactUs = homePage.goToContactUs();

    })
})