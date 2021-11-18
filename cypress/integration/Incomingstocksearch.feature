Feature: Incomingstocksearch feature

  Scenario: Incomingstocksearch scenario 
    Given user login to Application
    Then  user should land in homepage
    And  User  clicks on homedropdown which is present on top left
    And  user selects OrderFullfillment from dropdown 
    And  user click on Incoming Stock
    And  user Enter PO Number value in Search box
    And click on search