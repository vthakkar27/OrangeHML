package org.example;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

import static org.example.Util.clickOnElement;

public class MyStepDefs {
    LoginPage loginpage = new LoginPage();
    OrangeRegistration orangeRegistration = new OrangeRegistration();

    @Given("^user is on login page$")
    public void user_is_on_login_page()  {

    }

    @When("^User enter valid name$")
    public void user_enter_valid_name()  {
        loginpage.userEnterUserName();

    }

    @When("^user enter valid password$")
    public void user_enter_valid_password()  {
        loginpage.userEnterPassword();

    }

    @When("^user clicks on login button$")
    public void user_clicks_on_login_button()  {
        loginpage.userClicksOnLoginButton();
    }

    @Then("^User should be at the home page successfully$")
    public void user_should_be_at_the_home_page_successfully()  {
       orangeRegistration.verifyUserRegisterSuccessfully();
    }

    @When("^user enter invalid name \"([^\"]*)\"$")
    public void user_enter_invalid_name(String Invalid_username) {
        loginpage.userEnterInvalidUserName(Invalid_username);

    }

    @When("^user enter invalid password \"([^\"]*)\"$")
    public void user_enter_invalid_password(String Invalid_password) {
        loginpage.userEnterInvalidPassword(Invalid_password);

    }

    @Then("^user should not be able to login and \"([^\"]*)\" should displayed$")
    public void user_should_not_be_able_to_login_and_should_displayed(String errorMessage)  {
        loginpage.userShouldSeeErrorMessageDisplayed(errorMessage);

    }


}





