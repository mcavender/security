package gov.ewf.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import gov.ewf.security.entity.TeamUsers;
import gov.ewf.security.repository.TeamUsersRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeamUsersService {

    @Autowired
    private TeamUsersRepository teamUsersRepository;

    public List<TeamUsers> getAllTeamUsers() {
        List<TeamUsers> teamUsers = new ArrayList<>();
        teamUsersRepository.findAll().forEach(teamUsers::add);
        return teamUsers;
    }

    public TeamUsers getTeamUser(String id) {
        return teamUsersRepository.findById(id).orElse(null);
    }

    public void addTeamUser(TeamUsers teamUsers) {
        teamUsersRepository.save(teamUsers);
    }

    public void updateTeamUser(String id, TeamUsers teamUsers) {
        teamUsersRepository.save(teamUsers);
    }

    public void deleteTeamUser(String id) {
        teamUsersRepository.deleteById(id);
    }
    
}
