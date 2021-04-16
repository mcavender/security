package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.ViprTablesView;
import gov.ewf.security.service.ViprTablesViewService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ViprTablesViewController {
    
    @Autowired
    private ViprTablesViewService viprTablesViewService;

    @RequestMapping("/vipr_tables_view")
    public List<ViprTablesView> getAllViprTablesView() {

        return viprTablesViewService.getAllViprTablesView();
    }

    @RequestMapping("/vipr_tables_view/{op_mode_id}")
    public ViprTablesView getViprTablesView(@PathVariable String op_mode_id) {
        return viprTablesViewService.getViprTablesView(op_mode_id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/vipr_tables_view")
    public void addViprTablesView(@RequestBody ViprTablesView viprTablesView) {
        viprTablesViewService.addViprTablesView(viprTablesView);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/vipr_tables_view/{op_mode_id}")
    public void updateViprTablesView(@RequestBody ViprTablesView viprTablesView, @PathVariable String op_mode_id) {
        viprTablesViewService.updateViprTablesView(op_mode_id, viprTablesView);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/vipr_tables_view/{op_mode_id}")
    public void deleteViprTablesView(@PathVariable String op_mode_id) {
        viprTablesViewService.deleteViprTablesView(op_mode_id);
    }

}
