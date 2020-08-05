package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class OrangeRegistration extends Util {


    private By _registerSuccessMessage = By.xpath("//a[@id=\"welcome\"]");
    String expectedRegisterSuccessMessage = "Welcome Admin";

    public void verifyUserRegisterSuccessfully(){
        Assert.assertEquals(getTextFromElement(_registerSuccessMessage),expectedRegisterSuccessMessage);
    }
}
