package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.ViprTablesView;
import gov.ewf.security.repository.ViprTablesViewRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ViprTablesViewService {
    
    @Autowired
    private ViprTablesViewRepository viprTablesViewRepository;

    public List<ViprTablesView> getAllViprTablesView() {
        List<ViprTablesView> viprTablesView = new ArrayList<>();
        viprTablesViewRepository.findAll().forEach(viprTablesView::add);
        return viprTablesView;
    }

    public ViprTablesView getViprTablesView(String op_mode_id) {
        return viprTablesViewRepository.findById(op_mode_id).orElse(null);
    }

    public void addViprTablesView(ViprTablesView viprTablesView) {
        viprTablesViewRepository.save(viprTablesView);
    }

    public void updateViprTablesView(String op_mode_id, ViprTablesView viprTablesView) {
        viprTablesViewRepository.save(viprTablesView);
    }

    public void deleteViprTablesView(String op_mode_id) {
        viprTablesViewRepository.deleteById(op_mode_id);
    }

}
