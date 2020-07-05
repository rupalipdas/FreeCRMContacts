$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts Feature",
  "description": "",
  "id": "free-crm-contacts-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already on Loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"rupalipdas@gmail.com\" and \"009988PPooii\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on loginbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Loginpage()"
});
formatter.result({
  "duration": 14349091200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 13597800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rupalipdas@gmail.com",
      "offset": 13
    },
    {
      "val": "009988PPooii",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 791876600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_loginbutton()"
});
formatter.result({
  "duration": 150575300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Navigate to Contacts Page",
  "description": "",
  "id": "free-crm-contacts-feature;navigate-to-contacts-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User is on Contacts Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User create new contact",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefination.user_is_on_Contacts_Page()"
});
formatter.result({
  "duration": 2134097600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefination.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 4464938800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefination.user_create_new_contact()"
});
formatter.result({
  "duration": 2954278200,
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"div\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MDQS5A3\u0027, ip: \u0027192.168.92.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\r\n\tat com.pages.ContactsPage.selectCategory(ContactsPage.java:104)\r\n\tat com.stepdefinition.ContactsStepDefination.user_create_new_contact(ContactsStepDefination.java:44)\r\n\tat ✽.And User create new contact(src/test/resources/Features/contacts.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactsStepDefination.click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});