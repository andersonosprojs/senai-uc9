package testsFront;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PageHome {
	private WebDriver driver;
	
	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", System.getenv("Driver"));
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		//driver.get("https://www.google.com.br/");
		driver.get("https://www.sp.senai.br/");		
	}
	
	@Test
	public void acessarSite() {		
		//driver.findElement(By.className("gLFyf")).sendKeys("Senai");
		//driver.findElement(By.className("gLFyf")).sendKeys(Keys.ENTER);
		//driver.findElement(By.className("gNO89b")).click();	
		
		//driver.findElement(By.className("LC20lb")).click();
		driver.findElement(By.id("idControle_0")).click();
		driver.findElement(By.id("ctl00_Header1_MenuSuperior1_rptMenuLateral_ctl00_rptMenu_ctl05_lnkMenu")).click();
		driver.findElement(By.id("oqEstabuscando")).click();
		driver.findElement(By.id("oqEstabuscando")).sendKeys("técnico");
		driver.findElement(By.className("btnBuscaJavaScript")).click();
		driver.findElement(By.xpath("//*[@id=\"ctl00_cp_lv_ctrl0_lnkTitu\"]")).click();
		
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@After
	public void close() {		
		driver.close();		
	}
}
