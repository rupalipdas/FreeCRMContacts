package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class ContactsPage {
	
	WebDriver driver;
	
	@FindBy(xpath="//span[contains(text(),'Contacts')]")
	WebElement Contacts;	
	
	@FindBy(xpath="//button[contains(text(),'New')]")
	WebElement Newbutton;
		
	public ContactsPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
	public void clickContacts() throws InterruptedException {
    Contacts.click();
    Thread.sleep(2000);
   
}
	public void Newbutton() throws InterruptedException
{
    Newbutton.click();
    Thread.sleep(3000);
   
}
	
	@FindBy(name="first_name")
	WebElement FN;	
	
	@FindBy(name="last_name")
	WebElement LN;	
	
	@FindBy(xpath="//input[@placeholder='Email address']")
	WebElement Contactsemail;	
	
	@FindBy(xpath="//div[@name='category']")
	WebElement categ;
	
	@FindBy(xpath="//div[@name='status']")
	WebElement stat;
	
	@FindBy(name="description")
	WebElement desc;
	
	@FindBy(xpath="//div[@name='channel_type']")
	WebElement Schannel;
	
	@FindBy(xpath="//div[@name='timezone']//input[@class='search']")
	WebElement TZone;
	
	@FindBy(name="address")
	WebElement Stadd;
	
	@FindBy(name="city")
	WebElement cname;
	
	@FindBy(name="state")
	WebElement statename;	
	
	@FindBy(name="zip")
	WebElement zcode;
		
	@FindBy(name="value")
	WebElement phNumber;
	
	@FindBy(name="position")
	WebElement postn;
	
	@FindBy(xpath="//div[@class='ui toggle checkbox']//label[contains(text(),'Do not Call')]")
	WebElement clickDNcall;
	
	@FindBy(xpath="//div[@class='ui toggle checkbox']//label[contains(text(),'Do not Text')]")
	WebElement clickDNemail;
	
	@FindBy(name="image")
	WebElement img;
	@FindBy(xpath="//button[@class='ui linkedin button']")
	WebElement savebtn;
	
	public void Contacts() {
		Contacts.click();
	}
	public void NewButton() {
		Newbutton.click();
	}
	public void firstname(String fname) {
		FN.sendKeys(fname);
	}
	public void lastname(String lname) {
		LN.sendKeys(lname);
	}
	public void Contsemail(String cemail) {
		Contactsemail.sendKeys(cemail);
	}
	public void selectCategory(String category) {
		Select xp = new Select (categ);
		xp.selectByVisibleText(category);
	}
	public void SelectStatus(String status) {
		Select xp = new Select (stat);
		xp.selectByVisibleText(status);
	}
	public void Description(String description) {
		desc.sendKeys(description);
	}
	public void SelectChannel(String channeltype) {
		Select xp = new Select (Schannel);
		xp.selectByVisibleText(channeltype);
	}
	public void SelectTimeZone(String timezone) {
		Select xp = new Select (TZone);
		xp.selectByVisibleText(timezone);
	}
	public void Address(String address) {
		Stadd.sendKeys(address);
	}
	public void City(String city) {
		cname.sendKeys(city);
	}
	public void State(String state) {
		statename.sendKeys(state);
	}
	public void Zip(String zip) {
		zcode.sendKeys(zip);
	}
	public void Cont(String value) {
		phNumber.sendKeys(value);
	}
	public void Position(String position) {
		postn.sendKeys(position);
	}
	public void DoNotCall() {
		clickDNcall.click();
	}
	public void DoNotEmail() {
		clickDNemail.click();
	}
	public void image() {
		img.click();
	}
	public void Save() {
		savebtn.click();
	}
	
}
