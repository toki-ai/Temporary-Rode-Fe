import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';
import roomApi from '../../utils/api/roomApi';

export async function loaderInfoGG() {
    const credential = Localstorage.getCredential();
    const info = await authApi.getInfoFromGG(credential);
    return info.data.data;
}
export async function GetInfoRoomByCode({ params }) {
    const CodeID = params.id;
    const info = await roomApi.getRoomByCode(CodeID);
    return info.data.data;
}
