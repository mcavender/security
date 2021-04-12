package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "intercepts")
public class Intercepts {
    
    @Id
    private String elnot;
    private String rf1;
    private String rf2;
    private String rf3;
    private String pri1;
    private String pri2;
    private String pri3;
    private String pd;
    private String scan_type;
    private String ir;
    private String scan_period;
    private String mod_type;

    public Intercepts() {

    }

    public Intercepts(String elnot, String rf1, String rf2, String rf3, String pri1, String pri2, String pri3, String pd,
        String scan_type, String ir, String scan_period, String mod_type) {
        super();
        this.elnot = elnot;
        this.rf1 = rf1;
        this.rf2 = rf2;
        this.rf3 = rf3;
        this.pri1 = pri1;
        this.pri2 = pri2;
        this.pri3 = pri3;
        this.pd = pd;
        this.scan_type = scan_type;
        this.ir = ir;
        this.scan_period = scan_period;
        this.mod_type = mod_type;
    }

    public String getElnot() {
        return elnot;
    }

    public void setElnot(String elnot) {
        this.elnot = elnot;
    }

    public String getRf1() {
        return rf1;
    }

    public void setRf1(String rf1) {
        this.rf1 = rf1;
    }

    public String getRf2() {
        return rf2;
    }

    public void setRf2(String rf2) {
        this.rf2 = rf2;
    }

    public String getRf3() {
        return rf3;
    }

    public void setRf3(String rf3) {
        this.rf3 = rf3;
    }

    public String getPri1() {
        return pri1;
    }

    public void setPri1(String pri1) {
        this.pri1 = pri1;
    }

    public String getPri2() {
        return pri2;
    }

    public void setPri2(String pri2) {
        this.pri2 = pri2;
    }

    public String getPri3() {
        return pri3;
    }

    public void setPri3(String pri3) {
        this.pri3 = pri3;
    }

    public String getPd() {
        return pd;
    }

    public void setPd(String pd) {
        this.pd = pd;
    }

    public String getScan_type() {
        return scan_type;
    }

    public void setScan_type(String scan_type) {
        this.scan_type = scan_type;
    }

    public String getIr() {
        return ir;
    }

    public void setIr(String ir) {
        this.ir = ir;
    }

    public String getScan_period() {
        return scan_period;
    }

    public void setScan_period(String scan_period) {
        this.scan_period = scan_period;
    }

    public String getMod_type() {
        return mod_type;
    }

    public void setMod_type(String mod_type) {
        this.mod_type = mod_type;
    }
}
