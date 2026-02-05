Feature: User Login

  Scenario: Successful user login
    Given the user is on the login page
    When the user enters valid credentials and submits the login form
    Then the user is redirected to the secure area

  Scenario: Failed user login due to invalid credentials
    Given the user is on the login page
    When the user enters invalid credentials and submits the login form
    Then the user remains on the login page and sees an error message
