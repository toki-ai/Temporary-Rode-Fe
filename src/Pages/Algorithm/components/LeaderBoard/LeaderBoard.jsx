import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import roomApi from '../../../../utils/api/roomApi';
import submitHistoryApi from '../../../../utils/api/submitHistoryApi';
import PaginationLeaderboard from './PaginationLeaderboard';
import { LeaderBoardStyled, HeaderLB, QuestionLB, TitleLB, TableLB, PaginationLB } from './styled';

import Table from 'react-bootstrap/Table';

const LeaderBoard = () => {
    const [userSubmitHistory, setUserSubmitHistory] = useState([]);
    const roomInfo = useLoaderData();
    const [questionCode, setQuestionCode] = useState(roomInfo.questions[1].id || '');
    // console.log('roomInfooooooooooooooooo ', roomInfo);
    useEffect(() => {
        const fetchDataSubmitHistory = async () => {
            submitHistoryApi.getSubmitHistoryByQuestion(questionCode).then((response) => {
                setUserSubmitHistory(response.data.data.items);
            });
        };
        fetchDataSubmitHistory();
    }, [questionCode]);
    return (
        <LeaderBoardStyled>
            <Row sm={12} md={12} lg={12} className="w-100">
                <HeaderLB>
                    <TitleLB>LeaderBoard</TitleLB>

                    <QuestionLB
                        aria-label=""
                        onChange={(e) => setQuestionCode(e.currentTarget.value)}
                    >
                        {roomInfo.questions.map((question, index) => (
                            <option key={question.id} value={question.id}>
                                Question {index + 1}
                            </option>
                        ))}
                    </QuestionLB>
                </HeaderLB>
                <Row className="m-0">
                    <TableLB>
                        <Table striped hover bordered variant="dark" className="mb-0">
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
                                    <tr>
                                        <td>{index}</td>
                                        <td>{item.account.fname + ' ' + item.account.lname}</td>
                                        <td>{item.account.studentId}</td>
                                        <td>{item.score}</td>
                                        <td>{item.language}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </TableLB>
                </Row>
                {/* <PaginationLB>
                    <PaginationLeaderboard />
                </PaginationLB> */}
            </Row>
        </LeaderBoardStyled>
    );
};

export default LeaderBoard;
