package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "dm_states")
public class DmStates {

    @Id
    private String state_id;
    private String state;

    public DmStates() {

    }

    public DmStates(String state_id, String state) {
        this.state_id = state_id;
        this.state = state;
    }

    public String getState_id() {
        return state_id;
    }

    public void setState_id(String state_id) {
        this.state_id = state_id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    
    
}
