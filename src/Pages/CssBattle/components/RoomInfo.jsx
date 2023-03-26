import { useState } from 'react';

import ButtonStyled from '../../../components/Button';
import OffCanvasComponents from '../../../components/OffCanvas/OffCanvas';
import { Box, TextStyled, StyledWrap } from '../styled';
import Colors from './Colors';
import CountdownTimer from './CountDown';
import InfoItem from './InfoItem';
import Rank from './Rank';
import Scores from './Score';

import Stack from 'react-bootstrap/Stack';

const RoomInfo = ({ data }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const LIST_INFO = [
        {
            title: 'Timers',
            body: <CountdownTimer targetDate={data.duration} />,
        },
        {
            title: 'Colors to use',
            body: <Colors />,
        },
        {
            title: 'Scores',
            body: <Scores submitTimes={data?.questions[0]?.maxSubmitTimes} />,
        },
    ];
    return (
        <StyledWrap>
            <OffCanvasComponents title={'LEADERBOARD'} show={show} setShow={setShow}>
                <Rank />
            </OffCanvasComponents>
            <Stack direction="horizontal" className="justify-content-between mb-3">
                <TextStyled>ROOM {data.code}</TextStyled>
            </Stack>

            <Box>
                {LIST_INFO.map((item, id) => (
                    <InfoItem data={item} key={id} />
                ))}
                <ButtonStyled buttonType="borderNeon" onClick={handleShow}>
                    Leaderboard
                </ButtonStyled>
            </Box>
        </StyledWrap>
    );
};

export default RoomInfo;
