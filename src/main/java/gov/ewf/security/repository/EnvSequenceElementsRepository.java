package gov.ewf.security.repository;

import org.springframework.data.repository.CrudRepository;
import gov.ewf.security.entity.EnvSequenceElements;

public interface EnvSequenceElementsRepository extends CrudRepository<EnvSequenceElements, String> {
    
}
