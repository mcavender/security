import axios from 'axios';

const VIPR_TABLES_VIEW_URL = 'vipr_tables_view';


class ViprTablesViewService {

    getViprTablesView() {
        return axios.get(VIPR_TABLES_VIEW_URL);
    }

    updateViprTablesView() {
        return axios.put(VIPR_TABLES_VIEW_URL);
    }
}

export default new ViprTablesViewService();