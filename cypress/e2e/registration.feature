Feature: User Registration

  Scenario: Successful new user registration
    Given a visitor is on the registration page
    When they enter valid user details and submit the form
    Then their account is created and they are redirected to the login page

  Scenario: Failed registration due to missing required information
    Given a visitor is on the registration page
    When they attempt to submit the form without providing all required information
    Then the registration fails and they see a message requesting the missing details
