import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';

import submitHistoryApi from '../../../../utils/api/submitHistoryApi';
import PaginationLeaderboard from './PaginationLeaderboard';
import { LeaderBoardStyled, HeaderLB, QuestionLB, TitleLB, TableLB, PaginationLB } from './styled';

import Table from 'react-bootstrap/Table';

const LeaderBoard = () => {
    // fix cứng QuestionCode -> Cần sửa lại
    const [userSubmitHistory, setUserSubmitHistory] = useState([]);
    useEffect(() => {
        const questionCode = 'ffb8287d-1b01-4daf-8eb4-3127e1fb21hg';
        const fetchDataSubmitHistory = async () => {
            submitHistoryApi.getSubmitHistoryByQuestion(questionCode).then((response) => {
                // console.log('Fake data: ', response.data.data.items);
                setUserSubmitHistory(response.data.data.items);
            });
        };
        fetchDataSubmitHistory();
    }, []);
    console.log(userSubmitHistory);
    return (
        <LeaderBoardStyled>
            <Row sm={12} md={12} lg={12} className="w-100">
                <HeaderLB>
                    <TitleLB>LeaderBoard</TitleLB>

                    <QuestionLB aria-label=" ">
                        <option value="1">Question 1</option>
                        <option value="2">Question 2</option>
                        <option value="2">Question 3</option>
                    </QuestionLB>
                </HeaderLB>
                <Row className="m-0">
                    <TableLB>
                        <Table striped hover bordered variant="dark">
                            <thead className="thead_table">
                                <tr>
                                    <th>Top</th>
                                    <th>Name</th>
                                    <th>Student ID</th>
                                    <th>Score</th>
                                    <th>Language</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            {userSubmitHistory.map((item, index) => (
                                <tbody key={index} className="tbody_table">
                                    <th>{index}</th>
                                    <th>{item.account.fname + ' ' + item.account.lname}</th>
                                    <th>{item.account.studentId}</th>
                                    <th>{item.score}</th>
                                    <th>{item.language}</th>
                                    <th>{item.time}</th>
                                </tbody>
                            ))}
                        </Table>
                    </TableLB>
                </Row>
                <PaginationLB>
                    <PaginationLeaderboard />
                </PaginationLB>
            </Row>
        </LeaderBoardStyled>
    );
};

export default LeaderBoard;
