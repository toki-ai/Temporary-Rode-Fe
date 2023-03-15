import { post, get } from '../ApiCaller';
import Localstorage from '../Localstorage';
import authHeader from './HeaderAuthorization';

const roomApi = {
    getAllRoom: async (credential) => {
        const endpoint = `/rooms/get-all`;
        // eslint-disable-next-line no-return-await

        return await get(endpoint, {}, authHeader())
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getRoomByCode: async (code) => {
        const endpoint = `/rooms/get-one-by-code/${code}`;
        return await get(endpoint, {}, authHeader())
            .then((res) => {
                console.log(res);
                console.log(res.data.id);
                return res;
            })
            .catch((err) => {
                console.log('🚀 ~ file: roomApi.js:17 ~ getAll: ~ err:', err);
                return err;
            });
    },
};

export default roomApi;
