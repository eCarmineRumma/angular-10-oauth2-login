import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { RegisterPage } from '../support/page_objects/register.po';

// Scenario: Successful new user registration
Given('a visitor is on the registration page', () => {
  cy.visit('/register');
});

When('they enter valid user details and submit the form', () => {
  RegisterPage.typeUsername('newuser');
  RegisterPage.typePassword('P@ssw0rd!');
  RegisterPage.typeName('Test User');
  RegisterPage.submitForm();
});

Then('their account is created and they are redirected to the login page', () => {
  cy.url().should('include', '/login');
});

// Scenario: Failed registration due to missing required information
When('they attempt to submit the form without providing all required information', () => {
  RegisterPage.typeUsername(''); // Leaving username blank
  RegisterPage.typePassword(''); // Leaving password blank
  RegisterPage.typeName('');     // Leaving name blank
  RegisterPage.submitForm();
});

Then('the registration fails and they see a message requesting the missing details', () => {
  RegisterPage.getErrorMessage().should('be.visible');
});
