 @e2e @all
Feature: e2e scenarios

  @e2e
  Scenario: Verify e2e location, navigation, redirection, change language with locale, toolbar links, fill form
    Given 'Home' page is open
    When User hover on 'privateOffice' 'Card'
    And User click 'privateOffice' 'Card'
    And 'Search' page is open
    Then Verify redirected url for 'privateOffice'
    And Check the filters 'privateOffice' '0' of the search bar
    And User click 'logo'
    Then 'Home' page is open
    When User hover on 'dedicatedDesk' 'Card'
    And User click 'dedicatedDesk' 'Card'
    And 'Search' page is open
    Then Verify redirected url for 'dedicatedDesk'
    And Check the filters 'dedicatedDesk' '1' of the search bar
    And User click 'logo'
    Then 'Home' page is open
    When User hover on 'hotDesk' 'Card'
    And User click 'hotDesk' 'Card'
    And 'Search' page is open
    Then Verify redirected url for 'hotDesk'
    And Check the filters 'hotDesk' '1' of the search bar
    And User click 'logo'
    Then 'Home' page is open
    When User hover on 'events' 'Card'
    And User click 'events' 'Card'
    And 'Events' page is open
    Then Verify redirected url for 'events'
    And Check the filters 'events' '0' of the search bar
    And User click 'logo'
    Then 'Home' page is open
    When select language via dropdown to 'Deutsch'
    And page is opened with selected locale 'de-DE'
    And User click 'locations' 'Link' in section 'topBar'
    And page is opened with selected locale 'de-DE'
    And User click 'logo' 'Link' in section 'topBar'
    And 'Home' page is open
    Then page is opened with selected locale 'de-DE'
    Given 'Home' page is open
    When User click 'locations' 'Link' in section 'topBar'
    Then 'Locations' page is open
    And User click 'logo'
    Given 'Home' page is open
    When User click 'solutions' 'Link' in section 'topBar'
    Then 'Solutions' page is open
    And User click 'logo'
    Given 'Home' page is open
    When User click 'enterprise' 'Link' in section 'topBar'
    Then 'Enterprise' page is open
    And User click 'logo'
    Given 'Home' page is open
    When User click 'ideas' 'Link' in section 'topBar'
    Then 'Ideas' page is open
    And User click 'home' 'Link'
    Given 'Home' page is open
    When User click 'contactUs' 'Link' in section 'topBar'
    Then 'ContactUs' page is open
    And User click 'logo'
    Given 'Home' page is open
    When Select 'Houston' city from the dropdown find your flexible workspace module
    Then User click 'start' button
    And Select first building in search results
    And User click 'getInTouch' button
    And Fill in all fields in the Get in touch form
    And Click on the "Submit" button in the Get in touch form
    And Check data in payload of the event "leads" in the Get in touch page
      | contact_name | Test Lead |
      | company_size | 4 |
      | country_code | UA |
      | desired_capacity | 4 |
      | email | test.lead@test.com |
      | phone | +380-987654321 |
      | marketing_consent | true |
      | lead_source | WeWork.com |
      | lead_source_detail | Reserve Workspace |
      | lead_source_subtype | Consultation - Building Interest |
      | product_interests   | Flexible Access |
      | locale | en-GB |
