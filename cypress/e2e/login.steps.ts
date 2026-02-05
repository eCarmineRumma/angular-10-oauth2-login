import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../support/pages/login.po';

Given('the user is on the login page', () => {
  LoginPage.visit();
});

When('the user enters valid credentials and submits the login form', function () {
  LoginPage.fillForm('valid_username', 'valid_password');
  LoginPage.submit();
});

When('the user enters invalid credentials and submits the login form', function () {
  LoginPage.fillForm('invalid_username', 'invalid_password');
  LoginPage.submit();
});

Then('the user is redirected to the secure area', () => {
  cy.url().should('include', '/secure');
});

Then('the user remains on the login page and sees an error message', () => {
  cy.url().should('include', '/login');
  cy.get('[data-testid="login-error"]').should('be.visible');
});
