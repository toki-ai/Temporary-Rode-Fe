import { useContext } from 'react';

import { Stack } from 'react-bootstrap';

import { UserContext } from '../../../Context/User.context';
import SliverAward from '../../../assets/AwardIcon/Vector2.png';
import CooperAward from '../../../assets/AwardIcon/Vector3.png';
import GoldAward from '../../../assets/AwardIcon/Vector.png';
import { RankBox, RankContainer, YourRankBox } from '../styled';

const Rank = ({ rank }) => {
    const { currentUser } = useContext(UserContext);
    console.log(rank);
    return (
        <RankContainer>
            {rank.length !== 0 ? (
                <>
                    <div className="rankHead"> Your rank</div>
                    {rank.map((item, id) => {
                        if (item.account.id === currentUser.id) {
                            return (
                                <YourRankBox>
                                    <Stack direction="horizontal" className="justify-content-start">
                                        <div className="rankNumber">{id + 1}</div>
                                        <div>
                                            <div className="textAward">
                                                <div className="nameRank">
                                                    {item?.account.fullname}
                                                </div>{' '}
                                                <span>-</span>
                                                <div className="nameRank">
                                                    {item?.account.studentId}
                                                </div>
                                            </div>
                                            <span className="textAward">
                                                {item?.totalSpace + ' '}char
                                            </span>
                                        </div>
                                    </Stack>
                                </YourRankBox>
                            );
                        }
                    })}
                    <div className="rankHead"> Overall rating</div>
                    {rank.map((item, id) => {
                        return (
                            <RankBox id={id}>
                                <Stack
                                    direction="horizontal"
                                    className="justify-content-start gap-2"
                                >
                                    {id == 0 && <img src={GoldAward} alt="gold_award" />}
                                    {id == 1 && <img src={SliverAward} alt="silver_award" />}
                                    {id == 2 && <img src={CooperAward} alt="cooper_award" />}
                                    {id >= 3 && <div className="rankNumber">{id + 1}</div>}
                                    <div>
                                        <div className="textAward">
                                            <div className="nameRank">{item?.account.fullname}</div>{' '}
                                            <span>-</span>
                                            <div className="nameRank">
                                                {item?.account.studentId}
                                            </div>
                                        </div>
                                        <span className="textAward">
                                            {item?.totalSpace + ' '}char
                                        </span>
                                    </div>
                                </Stack>
                            </RankBox>
                        );
                    })}
                </>
            ) : (
                <div className="text-danger">Rank is empty</div>
            )}
        </RankContainer>
    );
};

export default Rank;
