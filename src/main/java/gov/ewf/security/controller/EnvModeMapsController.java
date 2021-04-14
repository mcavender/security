package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.EnvModeMaps;
import gov.ewf.security.service.EnvModeMapsService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class EnvModeMapsController {
    
    @Autowired
    private EnvModeMapsService envModeMapsService;

    @RequestMapping("/envmodemaps")
    public List<EnvModeMaps> getAllEnvModeMaps() {

        return envModeMapsService.getAllEnvModeMaps();
    }

    @RequestMapping("/envmodemaps/{id}")
    public EnvModeMaps getEnvModeMaps(@PathVariable String op_mode_id) {
        return envModeMapsService.getEnvModeMaps(op_mode_id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/envmodemaps")
    public void addEnvModeMaps(@RequestBody EnvModeMaps envModeMaps) {
        envModeMapsService.addEnvModeMaps(envModeMaps);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/envmodemaps/{op_mode_id}")
    public void updateEnvModeMaps(@RequestBody EnvModeMaps envModeMaps, @PathVariable String op_mode_id) {
        envModeMapsService.updateEnvModeMaps(op_mode_id, envModeMaps);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/envmodemaps/{op_mode_id}")
    public void deleteEnvModeMaps(@PathVariable String op_mode_id) {
        envModeMapsService.deleteEnvModeMaps(op_mode_id);
    }

}
