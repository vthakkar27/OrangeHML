package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;

public class Util extends BasePage {
    public static void clickOnElement(By by, int time) {
        driver.findElement(by).click();
    }

    public static void typeText(By by, String text, int time) {
        driver.findElement(by).sendKeys(text);
    }

    public static String getTextFromElement(By by) {
        return driver.findElement(by).getText();
    }

    public static String getUrl() {
        System.out.println("currentUrl" + driver.getCurrentUrl());
        return driver.getCurrentUrl();
    }


    public static void ScreenShotCapture(String NameOfScreenshot) {
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        //The below method will save the screen shot in d drive with test method name
        try {
            // String ScreenShotName = new String();
            // FileUtils.copyFile(scrFile, new File(("src\\ScreenShort\\" + NameOfScreenshot + ".png")));
            FileUtils.copyFile(scrFile, new File("src\\ScreenShort\\" + NameOfScreenshot + ".png"));

        } catch (IOException e) {
            e.printStackTrace();

        }


    }


}
