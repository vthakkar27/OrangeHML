package org.example;

import org.openqa.selenium.MutableCapabilities;
import  org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;


import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {
    public static LoadProp loadProp = new LoadProp();
    public static final String USERNAME = loadProp.getProperty("SAUCE_USERNAME"); //Username for SauceLab account
    public static final String ACCESS_KEY = loadProp.getProperty("SAUCE_ACCESS_KEY"); //Access key for SauceLab Account
    public static final String URL =" https://"+loadProp.getProperty("SAUCE_USERNAME")+":"+loadProp.getProperty("SAUCE_ACCESS_KEY")+"@ondemand.eu-central-1.saucelabs.com:443/wd/hub";
   // public static final String URL = "https://"+ USERNAME + ":" + ACCESS_KEY + "@ondemand.eu-central-1.saucelabs.com:443/wd/hub";
   // https://Vthakkar:7fe30a14-419e-429e-9312-875e69c4597d@ondemand.eu-central-1.saucelabs.com:443/wd/hub

    public void SetBrowser()//(String browser) throws Exception
    {
        String browserName = loadProp.getProperty("browserName");//user can change browser name as per requirement

        boolean sauceLab = true;// if condition is true framework will run test suit in SauceLab

        if (sauceLab) {
            System.out.println("Runing in SauceLab......with browser " + browserName);

            if (browserName.equalsIgnoreCase("firefox"))
            {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                FirefoxOptions browserOptions = new FirefoxOptions();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "43.0");
                browserOptions.setCapability("sauce:options", sauceOptions);
                DesiredCapabilities caps = DesiredCapabilities.firefox();
                try{
                    driver = new RemoteWebDriver(new URL(URL),caps);
                }catch (MalformedURLException e){
                    e.printStackTrace();
                }
            } else if (browserName.equalsIgnoreCase("chrome")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                ChromeOptions browserOptions = new ChromeOptions();
                browserOptions.setExperimentalOption("w3c", true);
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "71.0");
                browserOptions.setCapability("sauce:options", sauceOptions);
                DesiredCapabilities caps = DesiredCapabilities.chrome();

                try{
                    driver = new RemoteWebDriver(new URL(URL),caps);
                }catch (MalformedURLException e){
                    e.printStackTrace();
                }
            } else if (browserName.equalsIgnoreCase("ie")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                InternetExplorerOptions browserOptions = new InternetExplorerOptions();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "11.285");
                browserOptions.setCapability("sauce:options", sauceOptions);
                DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
                try{
                    driver = new RemoteWebDriver(new URL(URL),caps);
                }catch (MalformedURLException e){
                    e.printStackTrace();
                }
            }
            else if (browserName.equalsIgnoreCase("Safari")){

                MutableCapabilities sauceOptions = new MutableCapabilities();

                EdgeOptions browserOptions = new EdgeOptions ();
                browserOptions.setCapability("platformName", "macOS 10.14");
                browserOptions.setCapability("browserVersion", "84.0");
                browserOptions.setCapability("sauce:options", sauceOptions);
                DesiredCapabilities caps = DesiredCapabilities.safari();
                try{
                    driver = new RemoteWebDriver(new URL(URL),caps);
                }catch (MalformedURLException e){
                    e.printStackTrace();
                }
            }
            else {
                System.out.println("BrowserName is not correct or empty " + browserName);
            }
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/");

        } else {//Check if parameter passed from TestNG is 'firefox'
            if (browserName.equalsIgnoreCase("firefox")) {
                //create firefox instance
                System.setProperty("webdriver.gecko.driver", "src\\test\\Resources\\BrowserDriver\\geckodriver.exe");
                driver = new FirefoxDriver();
            }
            //Check if parameter passed as 'chrome'
            else if (browserName.equalsIgnoreCase("chrome")) {
                //set path to chromedriver.exe

                System.setProperty("webdriver.chrome.driver", "src\\test\\Resources\\BrowserDriver\\chromedriver.exe");
                ChromeOptions options = new ChromeOptions();
                options.setExperimentalOption("useAutomationExtension", false);
                options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
                driver = new ChromeDriver(options);
            } else {
                //If no browser passed throw exception
                //throw new Exception("Browser is not correct");
                System.out.println("Browser is not correct");
            }
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
            driver.manage().window().maximize();
        }

    }


}









//
//        //Check if parameter passed from TestNG is 'firefox'
//        if(browserName.equalsIgnoreCase("firefox"))
//        {
//            //create firefox instance
//            System.setProperty("webdriver.gecko.driver", "src\\test\\Resources\\BrowserDriver\\geckodriver.exe");
//            driver = new FirefoxDriver();
//        }
//        //Check if parameter passed as 'chrome'
//        else if(browserName.equalsIgnoreCase("chrome"))
//        {
//            //set path to chromedriver.exe
//
//            System.setProperty("webdriver.chrome.driver", "src\\test\\Resources\\BrowserDriver\\chromedriver.exe");
//            ChromeOptions options = new ChromeOptions();
//            options.setExperimentalOption("useAutomationExtension", false);
//            options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
//            driver = new ChromeDriver(options);
//        }else{
//            //If no browser passed throw exception
//            //throw new Exception("Browser is not correct");
//            System.out.println("Browser is not correct");
//        }
//        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//        driver.get("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
//        driver.manage().window().maximize();
//    }
//
//    public void closingMethod(){
//        driver.close();}
////System.setProperty("webdriver.chrome.driver", "src\\test\\resouces\\BrowserDrivers\\chromedriver.exe");
//}
