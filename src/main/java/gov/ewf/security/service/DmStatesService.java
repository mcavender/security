package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.DmStates;
import gov.ewf.security.repository.DmStatesRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class DmStatesService {

    @Autowired
    private DmStatesRepository dmStatesRepository;

    public List<DmStates> getAllDmStates() {
        List<DmStates> dmStates = new ArrayList<>();
        dmStatesRepository.findAll().forEach(dmStates::add);
        return dmStates;
    }

    public DmStates getDmStates(String state_id) {
        return dmStatesRepository.findById(state_id).orElse(null);
    }

    public void addDmStates(DmStates dmStates) {
        dmStatesRepository.save(dmStates);
    }

    public void updateDmStates(String state_id, DmStates dmStates) {
        dmStatesRepository.save(dmStates);
    }

    public void deleteDmStates(String state_id) {
        dmStatesRepository.deleteById(state_id);
    }
    
}
