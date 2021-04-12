package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.Intercepts;
import gov.ewf.security.service.InterceptsService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class InterceptsController {

     @Autowired
    private InterceptsService InterceptsService;

    @RequestMapping("/intercepts")
    public List<Intercepts> getAllIntercepts() {

        return InterceptsService.getAllIntercepts();
    }

    @RequestMapping("/intercepts/{id}")
    public Intercepts getIntercepts(@PathVariable String elnot) {
        return InterceptsService.getIntercepts(elnot);
    }

    @RequestMapping(method= RequestMethod.POST, value="/intercepts")
    public void addIntercepts(@RequestBody Intercepts Intercepts) {
        InterceptsService.addIntercepts(Intercepts);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/intercepts/{elnot}")
    public void updateIntercepts(@RequestBody Intercepts Intercepts, @PathVariable String elnot) {
        InterceptsService.updateIntercepts(elnot, Intercepts);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/intercepts/{elnot}")
    public void deleteIntercepts(@PathVariable String elnot) {
        InterceptsService.deleteIntercepts(elnot);
    }
    
}
