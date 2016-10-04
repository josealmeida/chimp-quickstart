Feature: Search the Web

  As a human
  I want to search the web
  So I can find information

  Scenario: Go to NICE pathways
    Given I have visited the NICE website
    When I click NICE Pathways
    Then I see the url "https://pathways.nice.org.uk/"

  @watch
  Scenario: Search NICE pathways
    Given I have visited the NICE website
    When I click NICE Pathways
    And click "B" in the "AZ" tab
    And click "Back pain, low" link
    Then I see the url "https://pathways.nice.org.uk/pathways/low-back-pain-early-management"