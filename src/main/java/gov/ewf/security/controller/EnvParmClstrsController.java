package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.EnvParmClstrs;
import gov.ewf.security.service.EnvParmClstrsService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class EnvParmClstrsController {
    
    @Autowired
    private EnvParmClstrsService envParmClstrsService;

    @RequestMapping("/envparmclstrs")
    public List<EnvParmClstrs> getAllEnvParmClstrs() {

        return envParmClstrsService.getAllEnvParmClstrs();
    }

    @RequestMapping("/envparmclstrs/{id}")
    public EnvParmClstrs getEnvParmClstrss(@PathVariable String clstr_id) {
        return envParmClstrsService.getEnvParmClstrs(clstr_id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/envparmclstrs")
    public void addEnvParmClstrs(@RequestBody EnvParmClstrs envParmClstrs) {
        envParmClstrsService.addEnvParmClstrs(envParmClstrs);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/envparmclstrs/{clstr_id}")
    public void updateEnvParmClstrs(@RequestBody EnvParmClstrs envParmClstrs, @PathVariable String clstr_id) {
        envParmClstrsService.updateEnvParmClstrs(clstr_id, envParmClstrs);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/envparmclstrs/{clstr_id}")
    public void deleteEnvParmClstrs(@PathVariable String clstr_id) {
        envParmClstrsService.deleteEnvParmClstrs(clstr_id);
    }

}
