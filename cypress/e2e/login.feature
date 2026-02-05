Feature: User Login

  As a user
  I want to access my account by logging in
  So that I can use secure features of the application

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials and submit the form
    Then I am redirected to the secure area of the application

  Scenario: Unsuccessful login due to invalid credentials
    Given I am on the login page
    When I enter invalid credentials and submit the form
    Then I am informed that the login attempt has failed
