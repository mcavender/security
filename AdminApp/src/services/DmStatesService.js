import axios from 'axios';

const DM_STATES_SERVICE_URL = 'dm_states';


class DmStatesService {

    getDmStates() {
        return axios.get(DM_STATES_SERVICE_URL);
    }
}

export default new DmStatesService();