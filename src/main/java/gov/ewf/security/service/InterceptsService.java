package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.Intercepts;
import gov.ewf.security.repository.InterceptsRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class InterceptsService {
    
    @Autowired
    private InterceptsRepository interceptsRepository;

    public List<Intercepts> getAllIntercepts() {
        List<Intercepts> intercepts = new ArrayList<>();
        interceptsRepository.findAll().forEach(intercepts::add);
        return intercepts;
    }

    public Intercepts getIntercepts(String elnot) {
        return interceptsRepository.findById(elnot).orElse(null);
    }

    public void addIntercepts(Intercepts intercepts) {
        interceptsRepository.save(intercepts);
    }

    public void updateIntercepts(String elnot, Intercepts intercepts) {
        interceptsRepository.save(intercepts);
    }

    public void deleteIntercepts(String elnot) {
        interceptsRepository.deleteById(elnot);
    }

}
