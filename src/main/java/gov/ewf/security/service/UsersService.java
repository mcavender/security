package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.User;
import gov.ewf.security.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User getUser(String id) { return userRepository.findById(id).orElse(null); }

    public void addUser(User users) { userRepository.save(users); }

    public void updateUser(String id, User users) { userRepository.save(users); }

    public void deleteUser(String id) { userRepository.deleteById(id); }
    
}
