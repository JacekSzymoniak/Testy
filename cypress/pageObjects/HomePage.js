import HeaderTop from './header/HeaderTop';
import ContactUsPage from './ContactUsPage';

class HomePage {
  constructor() {
    this.headerTop = new HeaderTop();
  }

  visit() {
    cy.visit('/');
  }

  goToContactUs() {
    const link = this.headerTop.getContactUsLink();
    link.click();

    const contactUs = new ContactUsPage();
    return contactUs;
  }
}

export default HomePage;