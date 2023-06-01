import { API_URL } from '../../config';
import { post, get } from '../ApiCaller';
import Localstorage from '../Localstorage';
import authHeader from './HeaderAuthorization';

const localFileApi = {
    postImg: async (data) => {
        const endpoint = `/local-files/upload-question-file`;
        const formData = new FormData();
        formData.append('files', data);
        // formData.append('files', data.cover);

        return await post(endpoint, formData, {}, { 'content-type': 'multipart/form-data' })
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getImg: (id) => {
        if (id) {
            return API_URL + `/local-files/file/${id}`;
        }
        return null;
    },
};

export default localFileApi;
