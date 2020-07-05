package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CalenderPage {
	
	WebDriver driver;

    	// objects
    	@FindBy(xpath = "//*[@id='main-nav']/a[2]")
    	WebElement calenderButton;
      
    
    	@FindBy(linkText="New")
    	//*[@id="dashboard-toolbar"]/div[2]/div/a
    	WebElement NewClick;
    
    	public CalenderPage(WebDriver driver)
    {
        this.driver = driver;

        //initializing the page objects
        PageFactory.initElements(driver, this);
    }
    	public void clickCalender() throws InterruptedException
    {
        calenderButton.click();
        Thread.sleep(2000);
       
    }
    	public void clickNew() throws InterruptedException
    {
        NewClick.click();
        Thread.sleep(3000);
       
    }
    

    
}
