import { get, post } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

const userRoomApi = {
    getAllUserInRoom: async (data) => {
        const endpoint = `/user-rooms/users`;
        // eslint-disable-next-line no-return-await

        return await get(endpoint, data, authHeader())
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    postJoinUserRoom: async (body) => {
        const endpoint = `/user-rooms/join`;
        return await post(endpoint, body, {}, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    postCheckAttend: async (userRoomId) => {
        const endpoint = `/user-rooms/check-attendance/${userRoomId}`;

        return await post(endpoint, {}, {}, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    postFinish: async (userRoomId) => {
        const endpoint = `/user-rooms/finish/${userRoomId}`;

        return await post(endpoint, {}, {}, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};

export default userRoomApi;
