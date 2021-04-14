package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.EnvSequenceElements;
import gov.ewf.security.repository.EnvSequenceElementsRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnvSequenceElementsService {

    @Autowired
    private EnvSequenceElementsRepository envSequenceElementsRepository;

    public List<EnvSequenceElements> getAllEnvSequenceElements() {
        List<EnvSequenceElements> envSequenceElements = new ArrayList<>();
        envSequenceElementsRepository.findAll().forEach(envSequenceElements::add);
        return envSequenceElements;
    }

    public EnvSequenceElements getEnvSequenceElements(String seq_id) {
        return envSequenceElementsRepository.findById(seq_id).orElse(null);
    }

    public void addEnvSequenceElements(EnvSequenceElements envSequenceElements) {
        envSequenceElementsRepository.save(envSequenceElements);
    }

    public void updateEnvSequenceElements(String seq_id, EnvSequenceElements envSequenceElements) {
        envSequenceElementsRepository.save(envSequenceElements);
    }

    public void deleteEnvSequenceElements(String seq_id) {
        envSequenceElementsRepository.deleteById(seq_id);
    }
    
}
