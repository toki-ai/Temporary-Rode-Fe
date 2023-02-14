import { post } from '../ApiCaller';

const authApi = {
    login: async (credential) => {
        const endpoint = `/auth/login/${credential}`;
        // eslint-disable-next-line no-return-await

        return await post(endpoint, {
            'Access-Control-Allow-Origin': '*',
        })
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};

export default authApi;
