package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class LoginPage extends Util {
    LoadProp loadProp = new LoadProp();
    private By _userName = By.id("txtUsername");
    private By _password = By.id("txtPassword");
    private By _loginButton = By.id("btnLogin");
    private By _errorMessage = By.xpath("//span[@id=\"spanMessage\"]");


    public void userEnterUserName() {
        typeText(_userName,loadProp.getProperty("userName"),60);

    }
    public void userEnterPassword(){
        typeText(_password,loadProp.getProperty("password"),40);

    }
    public void userClicksOnLoginButton(){
        clickOnElement(_loginButton,60);
    }
    public void AssertForURL () {
        String URL = driver.getCurrentUrl();
        Assert.assertEquals(URL, "https://opensource-demo.orangehrmlive.com/");

    }
    public void userEnterInvalidUserName(String Invalid_username ){
        typeText(_userName,Invalid_username,40);

    }
    public void userEnterInvalidPassword(String Invalid_password){
        typeText(_password,Invalid_password,40);

    }

     public void userShouldSeeErrorMessageDisplayed(String errorMessage){
        getTextFromElement(_errorMessage);
         System.out.println(" errorMessage  :  " +  errorMessage);

}
}