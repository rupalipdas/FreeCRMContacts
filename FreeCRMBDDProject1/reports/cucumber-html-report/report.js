$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on loginbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "k.meeraanand@gmail.com",
        "Dhanush123"
      ],
      "line": 12,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"k.meeraanand@gmail.com\" and \"Dhanush123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on loginbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Loginpage()"
});
formatter.result({
  "duration": 11915518700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 189748400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "k.meeraanand@gmail.com",
      "offset": 13
    },
    {
      "val": "Dhanush123",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2683116200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_loginbutton()"
});
formatter.result({
  "duration": 162193300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
});