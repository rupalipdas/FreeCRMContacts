Feature: Free CRM Calender Feature

Background:

Given User is already on Loginpage
When title of login page is Free CRM
When user enters "k.meeraanand@gmail.com" and "Dhanush123"	
Then user clicks on loginbutton
Then user is on homepage

Scenario: Navigate to Calender Page
Given User is on homepage
When  User clicks on Calender
Then User clicks on New




