import { post, get } from '../ApiCaller';
import Localstorage from '../Localstorage';
import authHeader from './HeaderAuthorization';

const authApi2 = {
    login: async (username, password) => {
        const endpoint = `/auth/login/${username}`;
        // eslint-disable-next-line no-return-await

        return await get(endpoint, {}, {})
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    getUser: async () => {
        const endpoint = `/auth/self`;
        // eslint-disable-next-line no-return-await

        return await get(endpoint, {}, authHeader())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
    // getInfoFromGG: async (credential) => {
    //     const endpoint = `/auth/get-info-from-google/${credential}`;
    //     // eslint-disable-next-line no-return-await

    //     return await get(endpoint, {}, {})
    //         .then((res) => {
    //             return res;
    //         })
    //         .catch((err) => {
    //             return err;
    //         });
    // },
    // register: async (formData) => {
    //     const endpoint = `/accounts/create-one`;
    //     // eslint-disable-next-line no-return-await

    //     return await post(endpoint, formData, {}, {})
    //         .then((res) => {
    //             // if (res.data.code !== 200) console.log(res.response);

    //             return res;
    //         })
    //         .catch((err) => {
    //             return err;
    //         });
    // },
};

export default authApi2;
