import { get, post } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

const roomApi = {
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
    createOne: async (data) => {
        const token = localStorage.getItem('token');
        const endpoint = `/rooms/create-one`;
        return await post(endpoint, data, {}, { Authorization: 'Bearer ' + token })
            .then((res) => console.log(res))
            .catch((err) => console.err(err));
    },
    getAllRoomType: async () => {
        const token = localStorage.getItem('token');
        const endpoint = `/rooms/get-all-room-type`;
        return await get(endpoint, {}, { Authorization: 'Bearer ' + token })
            .then((res) => console.log(res))
            .catch((err) => console.err(err));
    },
};

export default roomApi;
