import Alert from 'react-bootstrap/Alert';
import { Wrapper } from './styled';
const AlertComponent = () => {
    return (
        <Wrapper>
            <Alert dismissible variant="danger" size="xxl">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>Change this and that and try again.</p>
            </Alert>
        </Wrapper>
    );
};

export default AlertComponent;
