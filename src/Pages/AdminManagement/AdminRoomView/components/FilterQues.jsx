import React, { useState, useEffect } from 'react';

import Loading from '../../../../components/Loading';
import roomApi from '../../../../utils/api/roomApi';
import Btn from './Btn';
import TableAll from './Table/TableAll';
import TableQuestion from './Table/TableQuestion';

const FilterQues = ({ roomId }) => {
    const [ques, setQues] = useState('All');
    const [numOfQues, setNumOfQues] = useState([]);
    const [loading, setLoading] = useState([]);
    const [room, setRoom] = useState([]);
    const [key, setKey] = useState(0);
    useEffect(() => {
        roomApi
            .getRoomById(roomId)
            .then((res) => {
                console.log(res.data.data);
                !res.data.data.questions ? setNumOfQues([]) : setNumOfQues(res.data.data.questions);
                console.log(res.data.data.questions);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleOnClick = (e) => {
        var result = e.target.value;
        setQues(result);
    };
    const TableQues = () => {
        if (ques == 'All') return <TableAll roomID={roomId} />;
        for (let i = 1; i <= numOfQues.length; i++) {
            console.log(i);
            if (ques == `Question ${i}`) return <TableQuestion quesId={numOfQues[i - 1].id} />;
        }
    };
    const LastBtnValue = `Question ${numOfQues.length}`;
    const results = (
        <>
            <div className="my-3 listBtn_custom">
                <Btn
                    name="All"
                    handleOnClick={handleOnClick}
                    className="color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-left"
                />
                {numOfQues?.length >= 2 ? (
                    [...Array(numOfQues.length - 1)].map((item, i) => (
                        <Btn
                            key={i}
                            name={`Question ${i + 1}`}
                            handleOnClick={handleOnClick}
                            className="color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-0 bl-none"
                        />
                    ))
                ) : (
                    <></>
                )}

                <Btn
                    name={LastBtnValue}
                    handleOnClick={handleOnClick}
                    className="color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-right bl-none"
                />
            </div>
            <TableQues />
        </>
    );
    const content = numOfQues?.length ? (
        results
    ) : (
        <>
            <div className="my-3 listBtn_custom">
                <Btn
                    name="All"
                    handleOnClick={handleOnClick}
                    className="color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded"
                />
            </div>
            <TableQues />
        </>
    );
    return loading ? <Loading /> : <>{content}</>;
};

export default FilterQues;
