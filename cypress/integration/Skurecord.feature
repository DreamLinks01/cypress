Feature: Skurecord page  feature

  Scenario: Skurecord scenario 
    Given user login to Application
    Then  verify login is successful
    And  User  clicks on homedropdown which is present on top left
    And  user selects OrderFullfillment from dropdown 
    And  user click on inventory
    And enter value in SKU search
    And click on search
    And  user click on Displayed Value
    Then verify the entered value is displayed