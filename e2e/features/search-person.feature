Feature: Search for a Star Wars character
    
    Scenario Outline: Search by full name
        Given I navigate to "localhost"
        When I search for "Luke Skywalker" name
        Then I see person gender: "<gender>", birth year: "<birthYear>", eye color: "<eyeColor>" and skin color: "<skinColor>"
    Examples:
    | gender | birthYear | eyeColor | skinColor|
    | male   | 19BBY     | blue     | fair     |

    Scenario Outline: Search by planet
        Given I navigate to "localhost"
        When I search for "Hoth" planet
        Then I see person population: "<population>", climate: "<climate>" and gravity: "<gravity>"
    Examples:
    | population | climate | gravity      |
    | unknown    | frozen  | 1.1 standard |


