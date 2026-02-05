// login.steps.ts

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../support/login.po';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I enter valid credentials and submit the form', () => {
  LoginPage.typeUsername('validUser');
  LoginPage.typePassword('validPass');
  LoginPage.submit();
});

When('I enter invalid credentials and submit the form', () => {
  LoginPage.typeUsername('invalidUser');
  LoginPage.typePassword('invalidPass');
  LoginPage.submit();
});

Then('I am redirected to the secure area of the application', () => {
  cy.url().should('include', '/secure');
});

Then('I am informed that the login attempt has failed', () => {
  // Deterministic wait: Wait for error message to be visible.
  // Assuming data-testid="login-error"
  cy.get('[data-testid="login-error"]').should('be.visible');
});
