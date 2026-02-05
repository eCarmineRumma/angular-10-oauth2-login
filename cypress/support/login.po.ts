// login.po.ts

export class LoginPage {
  static visit() {
    cy.visit('/login');
  }

  static getUsernameInput() {
    return cy.get('[data-testid="username-input"]');
  }

  static getPasswordInput() {
    return cy.get('[data-testid="password-input"]');
  }

  static getSubmitButton() {
    return cy.get('[data-testid="login-submit"]');
  }

  static typeUsername(username: string) {
    this.getUsernameInput().clear().type(username);
  }

  static typePassword(password: string) {
    this.getPasswordInput().clear().type(password);
  }

  static submit() {
    this.getSubmitButton().click();
  }
}
