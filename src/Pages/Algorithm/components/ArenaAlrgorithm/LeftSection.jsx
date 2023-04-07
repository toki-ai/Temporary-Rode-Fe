import { Container, Stack } from 'react-bootstrap';

import CountdownTimer from '../../../CssBattle/components/CountDown';
import { TimeText } from '../../styled';
import { Title } from '../LeaderBoard/styled';
import { FormSelectStyled } from '../LeaderBoard/styled';
import { Timer } from '../LeaderBoard/styled';

import Form from 'react-bootstrap/Form';

const LeftSection = () => {
    return (
        <Container className="p-5">
            <Stack direction="horizontal" className="justify-content-between">
                <div>
                    <FormSelectStyled aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </FormSelectStyled>
                </div>
                <Timer>
                    <Title>Times:</Title>
                    <TimeText>
                        <CountdownTimer />
                    </TimeText>
                </Timer>
            </Stack>

            <div> picture</div>
        </Container>
    );
};

export default LeftSection;
