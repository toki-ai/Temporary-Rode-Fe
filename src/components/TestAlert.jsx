import AlertSuccess from './AlertSuccess';
import { AlertWidth } from './styled';

const Alerts = {
    id: 1,
    title: 'Successfully Successfully Successfully Successfully Successfully Successfully',
    body: 'This is an example test with link. This is an example test with link.',
};
export default function TestAlert() {
    return (
        <AlertWidth>
            <AlertSuccess {...Alerts}></AlertSuccess>
        </AlertWidth>
    );
}
