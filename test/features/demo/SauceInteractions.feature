Feature: SauceIntractions Feature

    @sauceInteraction
    Scenario Outline: SauceLab Interactions
        Given Login to inventory web app
        # Then Inventory page should list <NumberofProducts>
        # Then Validate all products have valid price (price > 0)


        Examples:
            | Test_ID   | NumberofProducts |
            | WEB_TC_02 | 6                |

