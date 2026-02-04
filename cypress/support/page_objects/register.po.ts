export class RegisterPage {
  static getUsernameInput() {
    return cy.get('[data-testid="register-username"]');
  }

  static getPasswordInput() {
    return cy.get('[data-testid="register-password"]');
  }

  static getNameInput() {
    return cy.get('[data-testid="register-name"]');
  }

  static getSubmitButton() {
    return cy.get('[data-testid="register-submit"]');
  }

  static getErrorMessage() {
    return cy.get('[data-testid="register-error"]');
  }

  static typeUsername(username: string) {
    this.getUsernameInput().clear().type(username);
  }

  static typePassword(password: string) {
    this.getPasswordInput().clear().type(password);
  }

  static typeName(name: string) {
    this.getNameInput().clear().type(name);
  }

  static submitForm() {
    this.getSubmitButton().click();
  }
}
