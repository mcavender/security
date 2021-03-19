package gov.ewf.security.entity;

import javax.persistence.*;

@Entity
@Table(name = "team_users")
public class TeamUsers {

    @Id
    private int userid;
    private String rank;
    private String name;
    private int team;
    private String status;
    private String email_address;

    public TeamUsers() {

    }

    public TeamUsers(int userid, String rank, String name, int team, String status, String email_address) {
        super();
        this.userid = userid;
        this.rank = rank;
        this.name = name;
        this.team = team;
        this.status = status;
        this.email_address = email_address;
    }

    public int getUserid() {
        return userid;
    }
    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getRank() {
        return rank;
    }
    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getTeam() {
        return team;
    }
    public void setTeam(int team) {
        this.team = team;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public String getEmail_address() {
        return email_address;
    }
    public void setEmail_address(String email_address) {
        this.email_address = email_address;
    }
    
}
