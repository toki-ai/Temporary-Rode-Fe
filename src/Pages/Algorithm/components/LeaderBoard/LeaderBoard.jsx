import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import roomApi from '../../../../utils/api/roomApi';
import submitHistoryApi from '../../../../utils/api/submitHistoryApi';
import PaginationLeaderboard from './PaginationLeaderboard';
import {
    LeaderBoardStyled,
    HeaderLB,
    QuestionLB,
    TitleLB,
    TableLB,
    PaginationLB,
    ChooseQWrapper,
} from './styled';

import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

const LeaderBoard = () => {
    const [userSubmitHistory, setUserSubmitHistory] = useState([]);
    const roomInfo = useLoaderData();
    const [questionCode, setQuestionCode] = useState(roomInfo?.questions[0].id || '');

    useEffect(() => {
        const fetchDataSubmitHistory = async () => {
            submitHistoryApi.getSubmitHistoryByQuestion(questionCode).then((response) => {
                setUserSubmitHistory(response.data.data.items);
            });
        };
        fetchDataSubmitHistory();
    }, [questionCode]);

    const handleQuestionChange = (eventKey, e) => {
        setQuestion({
            current: e.target.name,
            questionImg: eventKey,
        });
    };
    const [question, setQuestion] = useState({
        current: 'Question 1',
    });
    return (
        <LeaderBoardStyled>
            <Row sm={12} md={12} lg={12} className="w-100">
                <HeaderLB>
                    <TitleLB>LeaderBoard</TitleLB>
                    <ChooseQWrapper>
                        <Dropdown className="d-inline mx-2" onSelect={handleQuestionChange}>
                            <Dropdown.Toggle
                                id="dropdown-autoclose-true"
                                className="bg border button head"
                            >
                                {question.current}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="bg border transform menu">
                                {roomInfo.questions.length !== 0 ? (
                                    roomInfo.questions.map((question, id) => {
                                        return (
                                            <Dropdown.Item
                                                key={id}
                                                name={`Question ${id + 1}`}
                                                onClick={() => setQuestionCode(question.id)}
                                            >
                                                Question {id + 1}
                                            </Dropdown.Item>
                                        );
                                    })
                                ) : (
                                    <div className="white-text">No Information</div>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </ChooseQWrapper>
                </HeaderLB>
                <Row className="m-0">
                    <TableLB>
                        <Table striped hover className="mb-0">
                            <thead className="thead_table">
                                <tr>
                                    <td>Top</td>
                                    <td>Name</td>
                                    <td>Student ID</td>
                                    <td>Score</td>
                                    <td>Language</td>
                                    <td>Time</td>
                                </tr>
                            </thead>
                            {userSubmitHistory?.map((item, index) => (
                                <tbody key={index} className="">
                                    {index < 3 ? (
                                        <tr className={index % 2 != 0 ? 'bg-even' : 'bg-old'}>
                                            <td class="color-green">{index + 1}</td>
                                            <td class="color-green">
                                                {item.account.fname + ' ' + item.account.lname}
                                            </td>
                                            <td class="color-green">{item.account.studentId}</td>
                                            <td class="color-green">{item.score}</td>
                                            <td class="color-green">{item.language}</td>
                                            <td class="color-green">{item.time}</td>
                                        </tr>
                                    ) : (
                                        <tr className={index % 2 != 0 ? 'bg-even' : 'bg-old'}>
                                            <td>{index + 1}</td>
                                            <td>{item.account.fname + ' ' + item.account.lname}</td>
                                            <td>{item.account.studentId}</td>
                                            <td>{item.score}</td>
                                            <td>{item.language}</td>
                                            <td>{item.time}</td>
                                        </tr>
                                    )}
                                </tbody>
                            ))}
                        </Table>
                    </TableLB>
                </Row>
            </Row>
        </LeaderBoardStyled>
    );
};

export default LeaderBoard;
