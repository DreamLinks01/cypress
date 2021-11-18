Feature: OrderFullfillment page  feature

Background:
    Given user login to Application
    Then  verify login is successful
    And  User  clicks on homedropdown which is present on top left
    And  user selects OrderFullfillment from dropdown 
    And  user click on Incoming Stock
    When user click on inventory


  Scenario: OrderFullfillment scenario 


    When  user logsout from Application
    Then verify Logout is successful

    @focus
    Scenario: Verify Clear button(cross mark) functionality in Search box in Inventory tab

    And enter value in SKU search
    And click on search
    And Click on Clear button in Search box
    When  user logsout from Application
    Then verify Logout is successful
