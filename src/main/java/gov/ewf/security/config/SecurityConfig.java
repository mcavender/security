/*
  The class controls the Spring Security.
 */
package gov.ewf.security.config;

import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web
                        .configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web
                        .configuration.WebSecurityConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation
             .authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web
             .builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
  

  // This is a Spring implemented class that handles Spring security
  @Autowired
  private UserDetailsService userDetailsService;
  
  
  // This module forces a web user to have to login to access any URL.  The
  //login page is called login, and the page the user will be directed to is
  // index.  These files are actually in the resources/template directory.
  @Override
  protected void configure(HttpSecurity http) throws Exception {
      
      
        http
            .authorizeRequests()
            .antMatchers("/css/**").permitAll()
            
            .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/index")
                .permitAll()
                .and()
                .logout()
                .permitAll()
                .and().csrf().disable();
      
  }

  // Use the BCryptPassword encodder on passwords
  @Bean
  public PasswordEncoder encoder() {
    return new BCryptPasswordEncoder();
  }
  
  
  @Autowired
  DataSource dataSource;

  @Override
  protected void configure(AuthenticationManagerBuilder auth)
      throws Exception {
    
    auth
    .userDetailsService(userDetailsService);
    
  }

}