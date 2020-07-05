Feature: Free CRM Contacts Feature

Background:

Given User is already on Loginpage
When title of login page is Free CRM
When user enters "rupalipdas@gmail.com" and "009988PPooii"	
Then user clicks on loginbutton
Then user is on homepage



Scenario: Navigate to Contacts Page
Given User is on Contacts Page
Then User clicks on New button
And User create new contact
Then click save button 
Then Close the browser


