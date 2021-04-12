import axios from 'axios';

const INTERCEPTS_URL = 'intercepts';


class InterceptsService {

    getIntercepts() {
        return axios.get(INTERCEPTS_URL);
    }
}

export default new InterceptsService();