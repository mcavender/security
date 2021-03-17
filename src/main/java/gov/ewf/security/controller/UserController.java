/*
This is the RESTful web service that controls web access to the User
Object from the web.
*/
package gov.ewf.security.controller;

import gov.ewf.security.service.UsersService;
import gov.ewf.security.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UsersService usersSerivce;

    @Autowired
    PasswordEncoder passwordEncoder;
    
    // Returns a List of users
    @RequestMapping("/users")
    public List<User> getAllUsers() {
        return usersSerivce.getAllUsers();
    }

    // Returns a single user requested by id
    @RequestMapping("/users/{id}")
    public User getTeamUser(@PathVariable String id) {
        return usersSerivce.getUser(id);
    }
    
    // Adds a user with a POST command.  The user is in JSON in the body 
    // of the request.
    @RequestMapping(method= RequestMethod.POST, value="/users")
    public void addUsers(@RequestBody User users) { usersSerivce.addUser(users); }

    // Updates a user given by the id.  The actual user is in the body of the
    // request.  It also returns the user back to the requestor.
    @RequestMapping(method= RequestMethod.PUT, value="/users/{id}")
    public void updateUser(@RequestBody User user, @PathVariable String id) {        
        usersSerivce.updateUser(id, user);
    }    
    
    // Delete the user given by its id.  It returns the deleted user.
    @RequestMapping(method= RequestMethod.DELETE, value="/users/{id}")
    public void deleteUser(@PathVariable String id) { usersSerivce.deleteUser(id); }

}