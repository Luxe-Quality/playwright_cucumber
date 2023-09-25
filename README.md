## Playwright end-to-end test automation with CucumberJS
    
## Getting Started

* To install dependencies : `npm install`
 
## To execute the tests

 - Create file .env with your user data (see .env_example)

`npm run test ` for running all test
`npm run e2e ` for running all e2e tests
`npm run wip ` for running wip test


### Run specific test
For running specific tests engineer have to add '@wip' before scenario or feature that should be tested and run `npm run wip`


### Run tests in Headless mode
All tests are running in not Headless mode. 
If engineer need to run tests in headless - should be added parameter --HEADLESS='True'

`npm run e2e --HEADLESS='True' `

### Run tests on mobile screen resolution
All tests are running for desktop screen resolution by default
If engineer need to run tests using mobile screen resolution - should be added parameter --DEVICE='True'

`npm run test --DEVICE='True'`
