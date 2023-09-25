@all @locale
Feature: Locale scenarios

  @locale
  Scenario Outline: Verify locale '<locale>' is saved in the URL after redirection from the wework.com to wework.com/ideas
    Given 'Home' page is open
    When select language via dropdown to '<language>'
    And page is opened with selected locale '<locale>'
    And User click 'ideas' 'Link' in section 'topBar'
    And page is opened with selected locale '<locale>'
    And 'Ideas' page is open
    And User click 'home' 'Link'
    And 'Home' page is open
    And page is opened with selected locale '<locale>'
    And User click 'locations' 'Link' in section 'topBar'
    And page is opened with selected locale '<locale>'
    And User click 'logo' 'Link' in section 'topBar'
    And 'Home' page is open
    Then page is opened with selected locale '<locale>'
    Examples:
      | language    | locale  |
      | English (United Kingdom) | en-GB |
      | English (South Africa) | en-ZA |
      | Čeština | cs-CZ |
      | Deutsch | de-DE |
      | Español (España) | es-ES |
      | Español (Latinoamérica) | es-LA |
      | Français | fr-FR |
      | Français (Canada) | fr-CA |
      | Italiano | it-IT |
      | Polski | pl-PL |
      | Português (Brasil) | pt-BR |
      | Pусский | ru-RU |
      | 日本語 | ja-JP |
      | 한국어 | ko-KR |
#      todo: uncomment cuase failing with this countries, uncommnet when it will be fixed
#      | Bahasa Indonesi | id-ID |
#      | Bahasa Melayu | ms-MY |
#      | Català | ca-ES |
#      |  עברית | he-IL |
#      | Nederlands | nl-NL |
#      | Norsk | nb-NO |
#      | ไทย | th-TH |
#      | Tiếng Việt | vi-VN |
#      | 中文 (简体) | zh-CN |
#      | 中文 (繁體) | zh-TW |

  @locale
  Scenario Outline: Verify locale '<locale>' is saved in the URL after redirecting to another page of the wework.com
    Given 'Home' page is open
    When select language via dropdown to '<language>'
    And page is opened with selected locale '<locale>'
    And User click 'locations' 'Link' in section 'topBar'
    And page is opened with selected locale '<locale>'
    And User click 'logo' 'Link' in section 'topBar'
    And 'Home' page is open
    Then page is opened with selected locale '<locale>'
    Examples:
      | language    | locale  |
      | English (United Kingdom) | en-GB |
      | English (South Africa) | en-ZA |
      | Čeština | cs-CZ |
      | Deutsch | de-DE |
      | Español (España) | es-ES |
      | Español (Latinoamérica) | es-LA |
      | Français | fr-FR |
      | Français (Canada) | fr-CA |
      | Italiano | it-IT |
      | Polski | pl-PL |
      | Português (Brasil) | pt-BR |
      | Pусский | ru-RU |
      | 日本語 | ja-JP |
      | 한국어 | ko-KR |
      | Bahasa Indonesi | id-ID |
      | Bahasa Melayu | ms-MY |
      | Català | ca-ES |
      | עברית | he-IL |
      | Nederlands | nl-NL |
      | Norsk | nb-NO |
      | ไทย | th-TH |
      | Tiếng Việt | vi-VN |
      | 中文 (简体) | zh-CN |
      | 中文 (繁體) | zh-TW |
