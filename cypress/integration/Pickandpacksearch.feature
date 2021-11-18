Feature: pick and pack search with email Functionality

  Scenario: pick and pack search with email 
    Given user login to Application
    And  User  clicks on homedropdown which is present on top left
    And  user selects OrderFullfillment from dropdown 
    And Click on pick and pack
    And  Enter Email value in Search box
    And  click on search

  Scenario: pick and pack search with email substring
    Given user login to Application
    And  User  clicks on homedropdown which is present on top left
    And  user selects OrderFullfillment from dropdown 
    And Click on pick and pack
    And  Enter Email substring value in Search box
    And  click on search
 
  Scenario: pick and pack search with email click cross 
    Given user login to Application
    And  User  clicks on homedropdown which is present on top left
    And  user selects OrderFullfillment from dropdown 
    And Click on pick and pack
    And  Enter Email substring value in Search box
    And  click on search 
    And Click on Clear button in Search box 