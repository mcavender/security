package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "env_parm_clstrs")
public class EnvParmClstrs {
    
    @Id
    private Number clstr_id;
    private String elnot;
    private String parm;
    private Number parm_min;
    private Number parm_max;
    private Number clstr_state_id;
    private Number x_min;
    private Number x_max;

    public EnvParmClstrs() {

    }

    public EnvParmClstrs(Number clstr_id, String elnot, String parm, Number parm_min, Number parm_max,
            Number clstr_state_id, Number x_min, Number x_max) {
        this.clstr_id = clstr_id;
        this.elnot = elnot;
        this.parm = parm;
        this.parm_min = parm_min;
        this.parm_max = parm_max;
        this.clstr_state_id = clstr_state_id;
        this.x_min = x_min;
        this.x_max = x_max;
    }

    public Number getClstr_id() {
        return clstr_id;
    }

    public void setClstr_id(Number clstr_id) {
        this.clstr_id = clstr_id;
    }

    public String getElnot() {
        return elnot;
    }

    public void setElnot(String elnot) {
        this.elnot = elnot;
    }

    public String getParm() {
        return parm;
    }

    public void setParm(String parm) {
        this.parm = parm;
    }

    public Number getParm_min() {
        return parm_min;
    }

    public void setParm_min(Number parm_min) {
        this.parm_min = parm_min;
    }

    public Number getParm_max() {
        return parm_max;
    }

    public void setParm_max(Number parm_max) {
        this.parm_max = parm_max;
    }

    public Number getClstr_state_id() {
        return clstr_state_id;
    }

    public void setClstr_state_id(Number clstr_state_id) {
        this.clstr_state_id = clstr_state_id;
    }

    public Number getX_min() {
        return x_min;
    }

    public void setX_min(Number x_min) {
        this.x_min = x_min;
    }

    public Number getX_max() {
        return x_max;
    }

    public void setX_max(Number x_max) {
        this.x_max = x_max;
    }

    
}
