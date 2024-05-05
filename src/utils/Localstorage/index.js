import { decodeToken, isExpired } from 'react-jwt';

import { LOCAL_STORAGE_TOKEN } from '../../config';
import { get } from '../ApiCaller';

class LocalStorageUtils {
    getItem(key, defaultValue = '') {
        if (typeof localStorage === 'undefined') {
            return undefined;
        }
        let item = localStorage.getItem(key);
        if (item === undefined) {
            item = defaultValue;
        }
        return item;
    }
    setItem(key, value = '') {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, value);
        }
    }
    removeItem(key) {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(key);
        }
    }
    getJWTUser() {
        if (typeof localStorage !== 'undefined') {
            const token = this.getItem(LOCAL_STORAGE_TOKEN);
            if (token) {
                try {
                    const jwtUser = decodeToken(token);
                    return jwtUser;
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        this.deleteUser();
                    }
                }
            } else return token;
        }
        return undefined;
    }
    getCredentialUser() {
        if (typeof localStorage !== 'undefined') {
            const token = this.getItem('credential');
            if (token) {
                try {
                    const jwtUser = decodeToken(token);
                    return jwtUser;
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        this.deleteCredential();
                    }
                }
            } else return token;
        }
        return undefined;
    }
    getUser() {
        if (typeof localStorage !== 'undefined') {
            const token = this.getItem(LOCAL_STORAGE_TOKEN);
            if (isExpired(token)) {
                this.deleteUser();
                return undefined;
            }
            if (isExpired(token)) {
                this.deleteUser();
                return undefined;
            }
            if (token) {
                try {
                    const { sub } = decodeToken(token);

                    const pattern2 = /(se)+\d+/;
                    const resulted = sub.match(pattern2);
                    const memberId = resulted[0].toUpperCase();
                    const fetchedMember = get(
                        `/member/studentId/${memberId}`,
                        {},
                        { authorization: token }
                    ).then((res) => res.data);

                    return fetchedMember;
                } catch (err) {
                    // eslint-disable-next-line no-console

                    if (err.response && err.response.status === 401) {
                        this.deleteUser();
                    }
                }
            } else {
                return undefined;
            }
        }
    }

    deleteUser() {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    }

    deleteAllLocal() {
        localStorage.removeItem('countdownFuture');
        localStorage.removeItem('authenticated(do not delete)');
        localStorage.removeItem('question');
        localStorage.removeItem('codeBE');
        localStorage.removeItem('language');
    }

    deleteCredential() {
        localStorage.removeItem('credential');
    }
    getToken() {
        return this.getItem(LOCAL_STORAGE_TOKEN);
    }
    getCredential() {
        return this.getItem('credential');
    }
    clear() {
        localStorage.clear();
    }
}

export default new LocalStorageUtils();
