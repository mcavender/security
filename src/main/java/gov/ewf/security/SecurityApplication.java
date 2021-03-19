/*
This is the main class that gets every thing started off
 */
package gov.ewf.security;


//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 *
 * @author mark
 */
@SpringBootApplication
public class SecurityApplication implements CommandLineRunner {

  public static void main(String[] args) {
    SpringApplication.run(SecurityApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {

  }
}