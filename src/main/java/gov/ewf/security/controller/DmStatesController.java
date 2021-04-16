package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.DmStates;
import gov.ewf.security.service.DmStatesService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class DmStatesController {
    
    @Autowired
    private DmStatesService dmStatesService;

    @RequestMapping("/dm_states")
    public List<DmStates> getAllDmStates() {

        return dmStatesService.getAllDmStates();
    }

    @RequestMapping("/dm_states/{state_id}")
    public DmStates getDmStates(@PathVariable String state_id) {
        return dmStatesService.getDmStates(state_id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/dm_states")
    public void addDmStates(@RequestBody DmStates dmStates) {
        dmStatesService.addDmStates(dmStates);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/dm_states/{state_id}")
    public void updateDmStates(@RequestBody DmStates dmStates, @PathVariable String state_id) {
        dmStatesService.updateDmStates(state_id, dmStates);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/dm_states/{state_id}")
    public void deleteDmStates(@PathVariable String state_id) {
        dmStatesService.deleteDmStates(state_id);
    }

}
