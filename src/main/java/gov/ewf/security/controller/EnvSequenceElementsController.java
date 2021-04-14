package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.EnvSequenceElements;
import gov.ewf.security.service.EnvSequenceElementsService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class EnvSequenceElementsController {
    
    @Autowired
    private EnvSequenceElementsService envSequenceElementsService;

    @RequestMapping("/envsequenceelements")
    public List<EnvSequenceElements> getAllEnvSequenceElements() {

        return envSequenceElementsService.getAllEnvSequenceElements();
    }

    @RequestMapping("/envsequenceelements/{seq_id}")
    public EnvSequenceElements getEnvSequenceElements(@PathVariable String seq_id) {
        return envSequenceElementsService.getEnvSequenceElements(seq_id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/envsequenceelements")
    public void addEnvSequenceElements(@RequestBody EnvSequenceElements nvSequenceElements) {
        envSequenceElementsService.addEnvSequenceElements(nvSequenceElements);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/envsequenceelements/{seq_id}")
    public void updateEnvSequenceElements(@RequestBody EnvSequenceElements nvSequenceElements, @PathVariable String seq_id) {
        envSequenceElementsService.updateEnvSequenceElements(seq_id, nvSequenceElements);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/envsequenceelements/{seq_id}")
    public void deleteEnvSequenceElements(@PathVariable String seq_id) {
        envSequenceElementsService.deleteEnvSequenceElements(seq_id);
    }

}
