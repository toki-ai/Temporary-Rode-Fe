import { useState, useEffect } from 'react';

import ButtonStyled from '../../../components/Button';
import OffCanvasComponents from '../../../components/OffCanvas/OffCanvas';
import roomApi from '../../../utils/api/roomApi';
import { Box, TextStyled, StyledWrap } from '../styled';
import Colors from './Colors';
import CountdownTimer from './CountDown';
import InfoItem from './InfoItem';
import Rank from './Rank';
import Scores from './Score';

import Stack from 'react-bootstrap/Stack';

const RoomInfo = ({ data, submit }) => {
    const [show, setShow] = useState(false);
    const [rank, setRank] = useState([]);
    const handleShow = () => setShow(true);

    const submitted = JSON.parse(localStorage.getItem('authenticated'));
    const LIST_INFO = [
        {
            title: 'Timers',
            body: <CountdownTimer targetDate={data.duration} />,
        },
        {
            title: 'Colors to use',
            body: <Colors colors={data?.questions[0].colors} />,
        },
        {
            title: 'Scores',
            body: (
                <Scores
                    submitTimes={data?.questions[0].maxSubmitTimes}
                    submit={submitted?.times ? submitted : submit}
                />
            ),
        },
    ];
    useEffect(() => {
        roomApi
            .getSubmitHistoryByRoom(data.id)
            .then((res) => {
                if (res.data.status === 200) {
                    setRank([...res.data.data.items]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <StyledWrap>
            <OffCanvasComponents title={'LEADERBOARD'} show={show} setShow={setShow}>
                <Rank rank={rank} />
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
