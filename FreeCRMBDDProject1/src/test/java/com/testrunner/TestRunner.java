package com.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features/contacts.feature", plugin = { "pretty",
		"html:reports/cucumber-html-report", "json:reports/cucumber-html-report/jsonreport",
		"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html" }, glue = {
				"com.stepdefinition" })
public class TestRunner {
	@AfterClass
	public static void extendReport() {
		// Reporter.loadXMLConfig("src/test/resources/TestData/extent-config.xml");
		// Reporter.setSystemInfo("user", System.getProperty("user.name"));
		// Reporter.setSystemInfo("os", "Windows");
		// Reporter.setTestRunnerOutput("Sample test runner output message");
	}

}
