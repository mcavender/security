package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.EnvModeMaps;
import gov.ewf.security.repository.EnvModeMapsRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnvModeMapsService {

    @Autowired
    private EnvModeMapsRepository envModeMapsRepository;

    public List<EnvModeMaps> getAllEnvModeMaps() {
        List<EnvModeMaps> envModeMaps = new ArrayList<>();
        envModeMapsRepository.findAll().forEach(envModeMaps::add);
        return envModeMaps;
    }

    public EnvModeMaps getEnvModeMaps(String op_mode_id) {
        return envModeMapsRepository.findById(op_mode_id).orElse(null);
    }

    public void addEnvModeMaps(EnvModeMaps envModeMaps) {
        envModeMapsRepository.save(envModeMaps);
    }

    public void updateEnvModeMaps(String op_mode_id, EnvModeMaps envModeMaps) {
        envModeMapsRepository.save(envModeMaps);
    }

    public void deleteEnvModeMaps(String op_mode_id) {
        envModeMapsRepository.deleteById(op_mode_id);
    }
    
}
