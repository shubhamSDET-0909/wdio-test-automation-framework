Feature: Demo Feature

    @demo
    Scenario Outline: Running first demo feature
        Given Use opened Google Search
        When Search with <SearchItem>
        Then Click on first Search result
        Then URL Should match <ExpectedURL>

        Examples:
            | Test_ID    | SearchItem  | ExpectedURL           |
            | DEMO_TC_01 | WebdriverIO | https://webdriver.io/ |

