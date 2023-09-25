@all @navigation
Feature: Toolbar Navigation scenarios

  @navigation
    Scenario Outline: Check that navigation in top bar works as expected for <link> link
      Given 'Home' page is open
      When User click '<link>' 'Link' in section 'topBar'
      Then '<page>' page is open
      Examples:
      | link    | page  |
      | locations | Locations |
      | solutions | Solutions |
      | enterprise | Enterprise |
      | ideas | Ideas |
      | logIn | LogIn |
      | contactUs | ContactUs |

  @navigation
    Scenario Outline: Verify <link> space card are clickable and redirect to appropriate page with correct URL
      Given 'Home' page is open
      When 'spaceCardBlockTitle' is displayed
      Then 'spaceCardBlockAllSpaceLink' is displayed
      And User hover on '<link>' 'Card'
      And User click '<link>' 'Card'
      And '<Page>' page is open
      And Verify redirected url for '<link>'
      And Check the filters '<link>' '<capacity>' of the search bar
      Examples:
      |link | Page | capacity |
      | privateOffice | Search | 0 |
      | dedicatedDesk | Search | 1 |
      | hotDesk | Search | 1 |
      | events | Events | 0 |

  @navigation
    Scenario: Logo returns user to Home page
      Given 'Home' page is open
      When User click 'locations' 'Link' in section 'topBar'
      And 'Locations' page is open
      And User click 'logo' 'Link' in section 'topBar'
      Then 'Home' page is open