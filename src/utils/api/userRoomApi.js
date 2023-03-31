import { get, post } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

const userRoomApi = {
    getAllUserInRoom: async (data) => {
        const endpoint = `/user-rooms/users`;
        // eslint-disable-next-line no-return-await

        return await get(endpoint, data, authHeader())
            .then((res) => {
                console.log('14: ', res);
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },
    postJoinUserRoom: async (body) => {
        const endpoint = `/user-rooms/join`;
        return await post(endpoint, body, {}, authHeader())
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err) => {
                console.log('🚀 ~ file: accountsApi.js:17 ~ getAll: ~ err:', err);
                return err;
            });
    },
    postCheckAttend: async (userRoomId) => {
        const endpoint = `/user-rooms/check-attendance/${userRoomId}`;
        console.log(userRoomId);
        return await post(endpoint, {}, {}, authHeader())
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};

export default userRoomApi;
