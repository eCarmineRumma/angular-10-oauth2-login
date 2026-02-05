// login.po.ts

export class LoginPage {
  // Visits the login page
  static visit() {
    cy.visit('/login');
  }

  // Gets the username input
  static getUsernameInput() {
    return cy.get('[data-testid="username"]');
  }

  // Gets the password input
  static getPasswordInput() {
    return cy.get('[data-testid="password"]');
  }

  // Gets the submit/login button
  static getSubmitButton() {
    return cy.get('[data-testid="login-submit"]');
  }

  // Types username
  static typeUsername(username: string) {
    this.getUsernameInput().clear().type(username);
  }

  // Types password
  static typePassword(password: string) {
    this.getPasswordInput().clear().type(password);
  }

  // Clicks submit
  static submit() {
    this.getSubmitButton().click();
  }

  // Fills the login form
  static fillForm(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
  }
}
