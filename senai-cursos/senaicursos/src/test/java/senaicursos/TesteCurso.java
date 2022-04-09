package senaicursos;

import java.util.concurrent.TimeUnit;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteCurso {
	private WebDriver driver;
	
	@Before
	public void abrirNavegador() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chrome-driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}	

	@Test
	public void testeNavegador() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://informatica.sp.senai.br/");
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.id("Busca1_txtFiltro")).sendKeys("gestão");
		driver.findElement(By.id("Busca1_btnBusca")).click();
	}	
}