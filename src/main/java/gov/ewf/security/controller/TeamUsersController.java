package gov.ewf.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import gov.ewf.security.entity.TeamUsers;
import gov.ewf.security.service.TeamUsersService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TeamUsersController {

    @Autowired
    private TeamUsersService teamUsersService;

    @RequestMapping("/team_users")
    public List<TeamUsers> getAllTeamUsers() {

        return teamUsersService.getAllTeamUsers();
    }

    @RequestMapping("/team_users/{id}")
    public TeamUsers getTeamUser(@PathVariable String id) {
        return teamUsersService.getTeamUser(id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/team_users")
    public void addTeamUser(@RequestBody TeamUsers teamUsers) {
        teamUsersService.addTeamUser(teamUsers);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/team_users/{id}")
    public void updateTeamUser(@RequestBody TeamUsers teamUsers, @PathVariable String id) {
        teamUsersService.updateTeamUser(id, teamUsers);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/team_users/{id}")
    public void deleteTeamUser(@PathVariable String id) {
        teamUsersService.deleteTeamUser(id);
    }
    
}
