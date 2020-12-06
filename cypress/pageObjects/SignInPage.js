class SignInPage {
  visit() {
    cy.visit('?controller=my-account');
  }
}

export default SignInPage;