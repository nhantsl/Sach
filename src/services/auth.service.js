import {getUser} from '../../models/db.js';

const login = async (username, password) => {
    try {
        const results = await getUser(username, password);

        if (!results || results.length === 0) {
            return null;
        }

        return results[0];
    } catch (err) {
        throw err;
    }
};

export default login;