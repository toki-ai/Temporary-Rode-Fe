import { Stack } from 'react-bootstrap';

import SliverAward from '../../../assets/AwardIcon/Vector2.png';
import CooperAward from '../../../assets/AwardIcon/Vector3.png';
import GoldAward from '../../../assets/AwardIcon/Vector.png';
import { RankBox } from '../styled';

const Rank = ({ rank }) => {
    return (
        <>
            {rank.length !== 0 ? (
                rank.map((item, id) => {
                    return (
                        <RankBox id={id}>
                            <Stack direction="horizontal" className="justify-content-between">
                                <div>
                                    <div className="textAward">
                                        {item?.account.fullname} - {item?.account.studentId}
                                    </div>
                                    <span className="textAward">{item?.totalSpace + ' '}char</span>
                                </div>

                                {id == 0 && <img src={GoldAward} alt="gold_award" />}
                                {id == 1 && <img src={SliverAward} alt="silver_award" />}
                                {id == 2 && <img src={CooperAward} alt="cooper_award" />}
                            </Stack>
                        </RankBox>
                    );
                })
            ) : (
                <div className="text-danger">Rank is empty</div>
            )}
        </>
    );
};

export default Rank;
