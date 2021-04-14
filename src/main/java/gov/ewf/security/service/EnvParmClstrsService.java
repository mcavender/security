package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.EnvParmClstrs;
import gov.ewf.security.repository.EnvParmClstrsRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnvParmClstrsService {
    
    @Autowired
    private EnvParmClstrsRepository envParmClstrsRepository;

    public List<EnvParmClstrs> getAllEnvParmClstrs() {
        List<EnvParmClstrs> envParmClstrs = new ArrayList<>();
        envParmClstrsRepository.findAll().forEach(envParmClstrs::add);
        return envParmClstrs;
    }

    public EnvParmClstrs getEnvParmClstrs(String clstr_id) {
        return envParmClstrsRepository.findById(clstr_id).orElse(null);
    }

    public void addEnvParmClstrs(EnvParmClstrs envParmClstrs) {
        envParmClstrsRepository.save(envParmClstrs);
    }

    public void updateEnvParmClstrs(String clstr_id, EnvParmClstrs envParmClstrs) {
        envParmClstrsRepository.save(envParmClstrs);
    }

    public void deleteEnvParmClstrs(String clstr_id) {
        envParmClstrsRepository.deleteById(clstr_id);
    }

}
