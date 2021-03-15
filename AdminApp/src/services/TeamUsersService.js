import axios from 'axios';

const TEAM_USERS_URL = 'http://localhost:8080/team_users';


class TeamUsersService {

    getTeamUsers() {
        return axios.get(TEAM_USERS_URL);
    }
}

export default new TeamUsersService();