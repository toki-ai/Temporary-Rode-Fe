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
                console.log('🚀 ~ file: roomApi.js:17 ~ getAll: ~ err:', err);
                return err;
            });
    },
};

export default submitHistoryApi;
