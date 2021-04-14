package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "env_mode_maps")
public class EnvModeMaps {
    
    @Id
    private Number op_mode_id;
    private Number pri_seq;
    private String elnot;
    private Number rf_mode;
    private String mode_type;
    private Number pd_mode;
    private Number sp_mode;
    private Number ir_mode;
    private String scan_type;

    public EnvModeMaps() {

    }

    public EnvModeMaps(Number op_mode_id, Number pri_seq, String elnot, Number rf_mode, String mode_type,
            Number pd_mode, Number sp_mode, Number ir_mode, String scan_type) {
        this.op_mode_id = op_mode_id;
        this.pri_seq = pri_seq;
        this.elnot = elnot;
        this.rf_mode = rf_mode;
        this.mode_type = mode_type;
        this.pd_mode = pd_mode;
        this.sp_mode = sp_mode;
        this.ir_mode = ir_mode;
        this.scan_type = scan_type;
    }

    public Number getOp_mode_id() {
        return op_mode_id;
    }

    public void setOp_mode_id(Number op_mode_id) {
        this.op_mode_id = op_mode_id;
    }

    public Number getPri_seq() {
        return pri_seq;
    }

    public void setPri_seq(Number pri_seq) {
        this.pri_seq = pri_seq;
    }

    public String getElnot() {
        return elnot;
    }

    public void setElnot(String elnot) {
        this.elnot = elnot;
    }

    public Number getRf_mode() {
        return rf_mode;
    }

    public void setRf_mode(Number rf_mode) {
        this.rf_mode = rf_mode;
    }

    public String getMode_type() {
        return mode_type;
    }

    public void setMode_type(String mode_type) {
        this.mode_type = mode_type;
    }

    public Number getPd_mode() {
        return pd_mode;
    }

    public void setPd_mode(Number pd_mode) {
        this.pd_mode = pd_mode;
    }

    public Number getSp_mode() {
        return sp_mode;
    }

    public void setSp_mode(Number sp_mode) {
        this.sp_mode = sp_mode;
    }

    public Number getIr_mode() {
        return ir_mode;
    }

    public void setIr_mode(Number ir_mode) {
        this.ir_mode = ir_mode;
    }

    public String getScan_type() {
        return scan_type;
    }

    public void setScan_type(String scan_type) {
        this.scan_type = scan_type;
    }

    
}
