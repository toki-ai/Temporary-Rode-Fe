import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { TiArrowLeft } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import roomApi from '../../../utils/api/roomApi';
import PaginationRoom from '../AdminRoom/components/Pagination';
import BE from './components/BE';
import FE from './components/FE';
import FilterQues from './components/FilterQues';
import RoomInfo from './components/RoomInfo';
import Table from './components/Table';
import { ARViewStyle } from './style';

const titlesAll = [
    { id: 1, name: 'Rank' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Total Score' },
    { id: 4, name: 'Total Execution Time' },
    { id: 5, name: 'Finish at' },
];
const data = [];
const AdminRoomView = () => {
    const { id } = useParams();
    const [room, setRoom] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [quesName, setQuesName] = useState('All');
    const [questionId, setQuestionId] = useState();

    useEffect(() => {
        roomApi
            .getRoomById(id)
            .then((res) => {
                setRoom(res.data.data);
                console.log(res.data.data);
                !res.data.data.questions ? setQuestions([]) : setQuestions(res.data.data.questions);
                console.log(res.data.data.questions);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(questions);
    const handleButtonChange = (e) => {
        console.log(e.target.value);
        setQuesName(e.target.value);
        console.log(questions);
    };
    console.log(questionId);
    return (
        <ARViewStyle>
            <div className="w-100 p-3 box-style">
                <div className="d-flex align-items-center">
                    <Link
                        to="/admin/room"
                        className="fs-1 d-flex justify-items-center color_primary"
                    >
                        <TiArrowLeft />
                    </Link>

                    <div className="color_primary fw-bold fs-2">Room Detail</div>
                </div>
                <hr />
                <div className="p-3">
                    <RoomInfo room={room} />
                    <div className="d-flex mt-2">
                        <div className="w-105">
                            <ButtonStyled
                                variant="outline"
                                value="All"
                                onClick={(e) => {
                                    handleButtonChange(e);
                                    setQuestionId('All');
                                }}
                            >
                                All
                            </ButtonStyled>
                        </div>
                        {questions.map((item, i) => {
                            return (
                                <ButtonStyled
                                    variant="outline"
                                    className="mx-2"
                                    key={item.id}
                                    value={`Question ${i + 1}`}
                                    onClick={(e) => {
                                        handleButtonChange(e);
                                        setQuestionId(item.id);
                                    }}
                                >
                                    Question {i + 1}
                                </ButtonStyled>
                            );
                        })}
                    </div>
                    <div className="w-sm-75 w-md-50 w-lg-50">
                        {room.type == 'BE' ? (
                            <BE
                                ques={quesName}
                                questions={questions}
                                questionId={questionId}
                                roomId={id}
                            />
                        ) : (
                            <FE
                                ques={quesName}
                                questions={questions}
                                questionId={questionId}
                                roomId={id}
                            />
                        )}
                    </div>
                </div>
            </div>
        </ARViewStyle>
    );
};

export default AdminRoomView;
