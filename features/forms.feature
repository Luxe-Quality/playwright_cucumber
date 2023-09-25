@all @form
Feature: Forms scenarios

  @form
    Scenario: Send form submission on the “All Access” page
      Given Navigate to 'wework-all-access' page
      When Scroll page down till the "Connect with a WeWork All Access expert today" form
      Then Fill in all fields in the All Access form
      And Click on the "Submit" button in the All Access form
      And Check data in payload of the event "leads" in the All Access page
      | contact_name | John Smite |
      | country_code | UA |
      | desks_interested_min | 11 |
      | email | testemail@mail.com |
      | phone | +380-123456789 |
      | marketing_consent | true |
      | lead_source | WeWork.com |
      | lead_source_detail | [Product] All Access |
      | lead_source_subtype | Consultation - Product Interest |

  @form
    Scenario: Send form submission on the “On Demand” page
      Given Navigate to 'wework-on-demand' page
      When Scroll page down till the "Connect with a WeWork All Access expert today" form
      Then Fill in all fields in the On Demand form
      And Click on the "Submit" button in the On Demand form
      And Check data in payload of the event "leads" in the On Demand page
      | contact_name | John Smite |
      | company_name | Corporation of Good |
      | company_size | 20-100 |
      | country_code | UA |
      | mixpanel_id |   |
      | email | test.inc@mail.com |
      | phone | +420-987654321 |
      | marketing_consent | true |
      | lead_source | wework.com |
      | lead_source_detail | On Demand Market Waitlist |
      | lead_source_subtype | [Product] On Demand Market Waitlist |

  @form
    Scenario: "Get in touch" form on the “Contact Us” page
      Given Navigate to 'contact-us' page
      And 'ContactUs' page is open
      When User fill all fields on Contact US form
      And Click "Submit" on 'contact-us' page
      Then Check data in payload of the event "leads"
      | contact_name         | John Smite |
      | company_name  | Corporation of Good |
      | email        | test.inc@mail.com |
      | company_size  | 20-100 |
      | country_code | UA |
      | phone        | +420-987654321 |

  @form
    Scenario: Send form submission on the landing special discount page
      Given 'Home' page is open
      When Navigate to 'US version' page
      Then Click on the link of the top banner "Learn more"
      And Scroll page down till the "Get in touch to redeem your special discount today" form
      And Fill in all fields in the special discount form
      And Click on the "Submit" button in the special discount form
      And Success message is displayed

  @form
    Scenario: Send form submission on the Building page
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
      | locale | en-US |
      #todo | move_in_date | 2022-04-18 |

  @form
    Scenario Outline: Search page is opened with the slug which include city '<city>' chosen in the "Find Workspace In" dropdown
      Given 'Home' page is open
      When Select '<city>' city from the dropdown find your flexible workspace module
      Then User click 'start' button
      And Verify redirected url for 'slug' with parameter '<slug>'
      Examples:
      | city | slug |
      | Milan | milan |
      | London | london |
      | Tokyo | tokyo   |