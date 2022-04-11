package gamemania;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteLoginGameMania {

	private WebDriver driver;
	
	@Before
	public void abrirSiteNoNavegador() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chrome-driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	}	

	@Test
	public void testarEmailESenhaValidos() {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		WebElement email = driver.findElement(By.id("email"));
		WebElement senha = driver.findElement(By.id("senha"));
		WebElement btnEntrar = driver.findElement(By.id("btn-entrar"));
		
		email.sendKeys("anderson.oliveirasilva@gmail.com");
		senha.sendKeys("senha");
		btnEntrar.click();
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}		
	}

	@Test
	public void testar3TentativasComSenhaInvalida() {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		WebElement email = driver.findElement(By.id("email"));
		WebElement senha = driver.findElement(By.id("senha"));
		WebElement btnEntrar = driver.findElement(By.id("btn-entrar"));
		
		String[] senhas = {"senha1", "senha2", "senha3"};
		
		for (String s : senhas) {
			email.clear();
			senha.clear();
			
			email.sendKeys("anderson.oliveirasilva@gmail.com");
			senha.sendKeys(s);
			btnEntrar.click();
			
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}		
	}

	@Test
	public void testarEmailInvalido() {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		WebElement email = driver.findElement(By.id("email"));
		WebElement senha = driver.findElement(By.id("senha"));
		WebElement btnEntrar = driver.findElement(By.id("btn-entrar"));
		
		email.sendKeys("emailinvalido");
		senha.sendKeys("senha");
		btnEntrar.click();
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}		
	}

	@Test
	public void testarEmailESenhaVazios() {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		WebElement email = driver.findElement(By.id("email"));
		WebElement senha = driver.findElement(By.id("senha"));
		WebElement btnEntrar = driver.findElement(By.id("btn-entrar"));		
		btnEntrar.click();
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}		
	}
	
	@After
	public void fehcarONavegador() {		
		driver.close();		
	}
	
}
