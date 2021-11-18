Feature: Logout feature

  @focus
  Scenario: Logout scenario 
    Given user login to Application
    When  user logsout from Application
    Then verify Logout is successful