package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "env_sequence_elements")
public class EnvSequenceElements {

    @Id
    private Number seq_id;
    private Number element_id;
    private Number position;

    public EnvSequenceElements() {

    }

    public EnvSequenceElements(Number seq_id, Number element_id, Number position) {
        this.seq_id = seq_id;
        this.element_id = element_id;
        this.position = position;
    }

    public Number getSeq_id() {
        return seq_id;
    }

    public void setSeq_id(Number seq_id) {
        this.seq_id = seq_id;
    }

    public Number getElement_id() {
        return element_id;
    }

    public void setElement_id(Number element_id) {
        this.element_id = element_id;
    }

    public Number getPosition() {
        return position;
    }

    public void setPosition(Number position) {
        this.position = position;
    }
    
    
}
