Feature:Login functionality

  @ValidCredential
  Scenario:user should be able to login with valid Credentials
  so that user get navigated to Home page

    Given user is on login page
    When User enter valid name
    And user enter valid password
    And user clicks on login button
    Then User should be at the home page successfully

  @InvalidCredential
  Scenario Outline:user should not be able to login with Invalid Credentials
  and error message should display
    Given user is on login page
    When user enter invalid name "<Invalid_username>"
    And user enter invalid password "<Invalid_password>"
    And user clicks on login button
    Then user should not be able to login and "<errorMessage>" should displayed

    Examples:
      | Invalid_username | Invalid_password | errorMessage            |
      | Admin            | admin321         | Invalid credentials      |
      | Adminad          | admin123         | Invalid credentials      |
      |                  | admin123         | Username cannot be empty |
      | Admin            |                  | Password cannot be empty |




