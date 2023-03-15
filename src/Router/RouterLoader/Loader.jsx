import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';

export async function loaderInfoGG() {
    const credential = Localstorage.getCredential();
    const info = await authApi.getInfoFromGG(credential);
    return info.data.data;
}
