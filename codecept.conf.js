exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://creative-raccoon-3z3p5z-dev-ed.lightning.force.com/lightning/page/home',
      show: true,
      browser: 'chromium',
      waitForAction: 500
    }
  },
  include: {
    I: './steps_file.js',
    create_oportunidade_page:'./pages/create_oportunidade_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    reportportal: { 
      enabled : true, 
      projectName:'demostracao-salesforce-bdd',
      require : '@reportportal/agent-js-codecept', 
      token : 'd645cb0d-a4ba-413c-8f07-a0ddb598f1b9', 
      endpoint : 'https://demo.reportportal.io/api/v1', 
      launchName : 'luananderson_SALESFORCE_DEMONSTRACAO', 
    } ,
    allure: {
      enabled: false,
      
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful:false,
      fullPageScreenshots: false,
      screenshotsForAllureReport: true
    },
    screenshotOnFail: {
      enabled: false,
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
       login: (I) => {
            I.amOnPage('/');
            I.fillField('#username', 'luan.familiasantos@creative-raccoon-3z3p5z.com')
            I.fillField('#password','Tivit@03')
            I.click('#Login')
            //pause()
          },
        check: (I) => {
             I.amOnPage('https://creative-raccoon-3z3p5z-dev-ed.lightning.force.com/lightning/page/home');
             I.seeElement("//span[@title='Marketing']");
          }
        }
      }
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },

  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'demostracao-salesforce-bdd'
}