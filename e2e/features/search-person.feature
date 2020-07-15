Feature: Search for a Star Wars character
    
    Scenario: Search by full name
        Given I navigate to "localhost"
        When I search for "Luke Skywalker" name
        Then I see person gender: "male", birth year: "19BBY", eye color: "blue" and skin color: "fair"

    Scenario: Search by partial name
        Given I navigate to "localhost"
        When I search for "Darth" name
        Then I get "2" results 
    | gender | birthYear | eyeColor | skinColor|
    | male   | 41.9BBY   | yellow   | white    |
    | male   | 54BBY     | yellow   | red      |


    Scenario Outline: Search by planet
        Given I navigate to "localhost"
        When I search for "Hoth" planet
        Then I see person population: "<population>", climate: "<climate>" and gravity: "<gravity>"
    Examples:
    | population | climate | gravity      |
    | unknown    | frozen  | 1.1 standard |

    Scenario: Search not found
        Given I navigate to "localhost"
        When I search for "IsThereAPostServiceInStartWars?" name
        Then I get result not found

