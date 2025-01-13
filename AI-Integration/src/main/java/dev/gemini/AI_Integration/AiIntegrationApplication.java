package dev.gemini.AI_Integration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http:127:0.0.1:5500")
@SpringBootApplication
public class AiIntegrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(AiIntegrationApplication.class, args);
	}

}
