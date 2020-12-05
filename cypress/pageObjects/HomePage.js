import HeaderTop from './header/HeaderTop';
import ContactUsPage from './ContactUsPage';
import SignInPage from './SignInPage';

class HomePage {
  constructor() {
    this.headerTop = new HeaderTop();
  }
  
  visit() {
    cy.visit('/');
  }

    goToContactUs(){
        const link = this.headerTop.getContactUsLink();
        link.click();

        const contactUs = new ContactUsPage();
        return contactUs;
    }
}

  
 /* getUserAvatar() {
    return cy.get(`[data-testid=UserAvatar]`);
  }
  
  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignInPage();
    return signIn;
  }
}
*/

export default HomePage;