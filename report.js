
const reporter = require("cucumber-html-reporter");
 const options ={
    theme:'bootstrap',
    screenshotsDirectory: 'report/screenshots',
    jsonFile:'report/report.json',
    output:'report/cucumber-html-report.html',
     retry: 0,
    reportSuiteAsScenarios:true,
    launchReport:false,
}
reporter.generate(options)
