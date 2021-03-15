/*
This file makes it so that the SecurityConfig class can reference the login.html and
index.html by login and index.  Not sure if it is needed, but it was used in 
the example.
 */
package gov.ewf.security.webservices;

import org.springframework.context.annotation.Configuration;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

  // tag::customLoginViewController[]
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
        
    registry.addViewController("/").setViewName("login");
    registry.addViewController("/index").setViewName("index");
    registry.addViewController("/login").setViewName("login");
 
  }

}