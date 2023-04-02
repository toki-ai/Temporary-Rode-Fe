import { get, post } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

// export const api = axios.create({
//     baseURL: 'http://jsonplaceholder.typicode.com',
// });
// export const getInfos = async () => {
//     const response = await api.get('/posts');
//     return response.data;
// };

const adminRoomApi = {
    getAllRoom: async () => {
        const endpoint = `/rooms/admin-get-all`;
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
};
export default adminRoomApi;
