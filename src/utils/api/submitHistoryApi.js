import { get } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

const submitHistoryApi = {
    getSubmitHistoryByQuestion: async (questionCode) => {
        const endpoint = `/submit-history/get-by-question/${questionCode}`;
        return await get(endpoint, {}, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getInfoSubmission: async (req) => {
        const endpoint = `/submit-history/get-user-history`;
        return await get(endpoint, req, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};

export default submitHistoryApi;
