package com.stepdefinition;

import com.baseclass.Library;
import com.pages.ContactsPage;
import com.reusablefunctions.SeleniumUtility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactsStepDefination extends Library{
	
	private ContactsPage contacts;

    private ContactsPage getPage()
    {
        if (contacts == null) {
        	contacts = new ContactsPage(driver);
        }
        return contacts;
    }
	
		SeleniumUtility Utility;
		
	@Given("^User is on Contacts Page$")
	public void user_is_on_Contacts_Page()  {
		getPage().Contacts(); 
	}
	@When("^User clicks on Contacts$")
	public void user_clicks_on_Contacts()  {
	   getPage().Contacts();
	}

	@Then("^User clicks on New button$")
	public void user_clicks_on_New_button() throws InterruptedException {
	    getPage().Newbutton();
	}

	@Then("^User create new contact$")
	public void user_create_new_contact() {
	    getPage().firstname("Parul");
	    getPage().lastname("Nomi");
	    getPage().Contsemail("pnoli@yahoo.com");
	    getPage().selectCategory("Lead");
	    getPage().SelectStatus("New");
	    getPage().Description("Learning to fill up the form");
	    getPage().Address("123 NewYork Plaza");
	    getPage().City("Fiona Town");
	    getPage().State("NewYork");
	}

	@Then("^click save button$")
	public void click_save_button() throws InterruptedException {
	    getPage().Save();
	    Thread.sleep(2000);
	}
	
	@Then("^: Close the browser$")
	public void close_the_browser()  {
		driver.close();
		
}
	}
