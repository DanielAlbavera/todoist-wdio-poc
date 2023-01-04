import { URLS } from "./test/data/constants.js"

export const config = {
   
    runner: 'local',
 
    specs: [
        './test/specs/**/*.js'
    ],
 
    exclude: [
      
    ],
    
    maxInstances: 10,

    //
    capabilities: [{
    
        
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true

    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: URLS.BASE,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['chromedriver'],
    

    framework: 'mocha',

    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
