/*
This is the Spring way of performing CRUD (create, retrieve, update, and delete)
operations.  Spring substitutes the CrudRepository at runtime.
 */
package gov.ewf.security.repository;

import gov.ewf.security.entity.User;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author mark
 */
public interface UserRepository extends CrudRepository<User, Long> {

  User findByUsername(String username);
  
}