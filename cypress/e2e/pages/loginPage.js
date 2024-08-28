// LoginPage class
export class LoginPage {
  constructor() {
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
    this.successMessage = 'div.flash.success';
    this.errorMessage = 'div.flash.error';
    this.loginPageUrl = 'https://the-internet.herokuapp.com/login';
  }

  visit() {
    cy.visit(this.loginPageUrl);
  }

  fillUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  verifyLoginSuccess() {
    cy.url().should('include', '/secure');
    cy.get(this.successMessage).should('contain', 'You logged into a secure area!');
  }

  verifyUsernameLoginFailure() {
    cy.url().should('include', this.loginPageUrl);
    cy.get(this.errorMessage).should('contain', 'Your username is invalid!');
  }

  verifyPasswordLoginFailure() {
    cy.url().should('include', this.loginPageUrl);
    cy.get(this.errorMessage).should('contain', 'Your password is invalid!');
  }
}
