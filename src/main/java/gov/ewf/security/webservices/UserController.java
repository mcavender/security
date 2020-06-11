/*
This is the RESTful web service that controls web access to the User
Object from the web.
*/
package gov.ewf.security.webservices;
import gov.ewf.security.dao.UserRepository;
import gov.ewf.security.model.User;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepo;
    
    @Autowired
    PasswordEncoder passwordEncoder;

    
    // Returns a List of users
    @GetMapping
    public Iterable<User> getAll() {

        return userRepo.findAll();
    }

    // Returns a single user requested by id
    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable int id) {

        return new ResponseEntity(userRepo.findById(Long.valueOf(id)), HttpStatus.OK);
    }
    

    // Adds a user with a POST command.  The user is in JSON in the body 
    // of the request.
    @PostMapping
    public ResponseEntity<User> add(@RequestBody User user) {

        userRepo.save(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    // Updates a user given by the id.  The actual user is in the body of the
    // request.  It also returns the user back to the requestor.
    @PutMapping("/{id}")
    public ResponseEntity<User> update(@RequestBody User user) {

        User existingUser = userRepo.findByUsername(user.getUsername());
        if (existingUser == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } else {
            user.setUsername(user.getUsername());
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            existingUser.setFullname(user.getFullname());
            existingUser.setState(user.getState());
            //existingUser.setZip(zip);
            existingUser.setPhonenumber(user.getPhonenumber());
            //existingUser.setStreet(street);
            //existingUser.setCity(city);
            userRepo.save(existingUser);
            return new ResponseEntity(existingUser, HttpStatus.OK);
        }
    }
    
    
    // Delete the user given by its id.  It returns the deleted user.
    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id) {
        
        Optional<User> user = userRepo.findById(id);
        if (user == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);

        userRepo.deleteById(id);
        return new ResponseEntity<User>(HttpStatus.OK);
    }

}