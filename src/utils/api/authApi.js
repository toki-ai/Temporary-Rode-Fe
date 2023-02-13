import { get, post } from '../ApiCaller';

const authApi = {
    postChangePassword: async (newPass) => {
        const endpoint = '/auth/change-password';
        // eslint-disable-next-line no-return-await
        return await post(endpoint, newPass, {}, { Authorization: token })
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
