import axios from 'axios';

const USERS_URL = 'users';


class UsersService {

    getUsers() {
        return axios.get(USERS_URL);
    }
}

export default new UsersService();