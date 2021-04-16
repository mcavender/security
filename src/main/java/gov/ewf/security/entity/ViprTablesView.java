package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "vipr_tables_view")
public class ViprTablesView {

    @Id
    private int op_mode_id;
    private int pri_seq;
    private String elnot;
    private int rf_mode;
    private String mode_type;
    private int pd_mode;
    private int sp_mode;
    private int ir_mode;
    private String scan_type;
    private int clstr_id;
    private String parm;
    private int parm_min;
    private int parm_max;
    private int clstr_state_id;
    private int x_min;
    private int x_max;
    private int seq_id;
    private int element_id;
    private int position;

    public ViprTablesView() {

    }

    public ViprTablesView(int op_mode_id, int pri_seq, String elnot, int rf_mode, String mode_type,
            int pd_mode, int sp_mode, int ir_mode, String scan_type, int clstr_id, String parm,
            int parm_min, int parm_max, int clstr_state_id, int x_min, int x_max, int seq_id,
            int element_id, int position) {
        super();
        this.op_mode_id = op_mode_id;
        this.pri_seq = pri_seq;
        this.elnot = elnot;
        this.rf_mode = rf_mode;
        this.mode_type = mode_type;
        this.pd_mode = pd_mode;
        this.sp_mode = sp_mode;
        this.ir_mode = ir_mode;
        this.scan_type = scan_type;
        this.clstr_id = clstr_id;
        this.parm = parm;
        this.parm_min = parm_min;
        this.parm_max = parm_max;
        this.clstr_state_id = clstr_state_id;
        this.x_min = x_min;
        this.x_max = x_max;
        this.seq_id = seq_id;
        this.element_id = element_id;
        this.position = position;
    }

    public int getOp_mode_id() {
        return op_mode_id;
    }

    public void setOp_mode_id(int op_mode_id) {
        this.op_mode_id = op_mode_id;
    }

    public int getPri_seq() {
        return pri_seq;
    }

    public void setPri_seq(int pri_seq) {
        this.pri_seq = pri_seq;
    }

    public String getElnot() {
        return elnot;
    }

    public void setElnot(String elnot) {
        this.elnot = elnot;
    }

    public int getRf_mode() {
        return rf_mode;
    }

    public void setRf_mode(int rf_mode) {
        this.rf_mode = rf_mode;
    }

    public String getMode_type() {
        return mode_type;
    }

    public void setMode_type(String mode_type) {
        this.mode_type = mode_type;
    }

    public int getPd_mode() {
        return pd_mode;
    }

    public void setPd_mode(int pd_mode) {
        this.pd_mode = pd_mode;
    }

    public int getSp_mode() {
        return sp_mode;
    }

    public void setSp_mode(int sp_mode) {
        this.sp_mode = sp_mode;
    }

    public int getIr_mode() {
        return ir_mode;
    }

    public void setIr_mode(int ir_mode) {
        this.ir_mode = ir_mode;
    }

    public String getScan_type() {
        return scan_type;
    }

    public void setScan_type(String scan_type) {
        this.scan_type = scan_type;
    }

    public int getClstr_id() {
        return clstr_id;
    }

    public void setClstr_id(int clstr_id) {
        this.clstr_id = clstr_id;
    }

    public String getParm() {
        return parm;
    }

    public void setParm(String parm) {
        this.parm = parm;
    }

    public int getParm_min() {
        return parm_min;
    }

    public void setParm_min(int parm_min) {
        this.parm_min = parm_min;
    }

    public int getParm_max() {
        return parm_max;
    }

    public void setParm_max(int parm_max) {
        this.parm_max = parm_max;
    }

    public int getClstr_state_id() {
        return clstr_state_id;
    }

    public void setClstr_state_id(int clstr_state_id) {
        this.clstr_state_id = clstr_state_id;
    }

    public int getX_min() {
        return x_min;
    }

    public void setX_min(int x_min) {
        this.x_min = x_min;
    }

    public int getX_max() {
        return x_max;
    }

    public void setX_max(int x_max) {
        this.x_max = x_max;
    }

    public int getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(int seq_id) {
        this.seq_id = seq_id;
    }

    public int getElement_id() {
        return element_id;
    }

    public void setElement_id(int element_id) {
        this.element_id = element_id;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }   
    
}
