import { Stack } from 'react-bootstrap';

import SliverAward from '../../../assets/AwardIcon/vector2.png';
import CooperAward from '../../../assets/AwardIcon/vector3.png';
import GoldAward from '../../../assets/AwardIcon/vector.png';
import { RankBox } from '../styled';

const LIST_RANK = [
    { name: 'Lê Thành Long', studentID: 'SE170022', char: '23' },
    { name: 'Trần Hải Đăng', studentID: 'SE172233', char: '454' },
    { name: 'Võ Minh Tiến', studentID: 'SE171213', char: '323' },
    { name: 'Trần Văn Thọ', studentID: 'SE171412', char: '323' },
];
const Rank = () => {
    return (
        <>
            {LIST_RANK.map((item, id) => {
                return (
                    <RankBox id={id}>
                        <Stack direction="horizontal" className="justify-content-between">
                            <div>
                                <div className="textAward">
                                    {' '}
                                    {item.name} - {item.studentID}
                                </div>
                                <span className="textAward">{item.char + ' '}char</span>
                            </div>

                            {id == 0 && <img src={GoldAward} alt="gold_award" />}
                            {id == 1 && <img src={SliverAward} alt="gold_award" />}
                            {id == 2 && <img src={CooperAward} alt="gold_award" />}
                        </Stack>
                    </RankBox>
                );
            })}
        </>
    );
};

export default Rank;
