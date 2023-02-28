import { post, get } from '../ApiCaller';

const roomAPI = {
    getAllRoomType: async () => {
        const token = localStorage.getItem('token');
        const endpoint = `/rooms/get-all-room-type`;
        return await get(endpoint, {}, { Authorization: 'Bearer ' + token });
    },
};

export default roomAPI;
