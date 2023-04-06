import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import submitHistoryApi from '../../../../utils/api/submitHistoryApi';
import {
    HeaderSubmission,
    SubmissionStyled,
    TableSubmission,
    TitleSubmission,
    TableSubmitted,
    AnswerSubmitted,
} from './styled';

import Table from 'react-bootstrap/Table';

const Submission = () => {
    const roomInfo = useLoaderData();
    const [dataSubmission, setDataSubmission] = useState([]);
    const [viewResult, setViewResult] = useState(false);
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            submitHistoryApi.getInfoSubmission(roomInfo.id).then((res) => {
                setDataSubmission(res.data.data);
            });
        };
        fetchData();
    }, []);
    // console.log('submission', roomInfo);
    // console.log('dataSubmission', dataSubmission);
    const handleView = (submissions) => {
        // console.log('submissions', submissions);
        setAnswer(submissions);
        setViewResult(true);
    };
    return (
        <SubmissionStyled>
            <Row sm={12} md={12} lg={12} className="w-100">
                <HeaderSubmission>
                    <TitleSubmission>Submission</TitleSubmission>
                </HeaderSubmission>
                <Row className="m-0">
                    <TableSubmission>
                        <Table striped hover bordered variant="dark" className="mb-0">
                            <thead className="thead_table">
                                <tr>
                                    <td>Question</td>
                                    <td>Result</td>
                                    <td>Score</td>
                                    <td>Language</td>
                                    <td>Time</td>
                                    <td></td>
                                </tr>
                            </thead>
                            {dataSubmission?.map((item, index) => (
                                <tbody key={index} className="thanh">
                                    <tr>
                                        <td>??????</td>
                                        {item.time ? (
                                            <td className="accepted">Accepted</td>
                                        ) : (
                                            <td className="error">Compilation error</td>
                                        )}
                                        <td>{item.score}</td>
                                        <td>{item.language}</td>
                                        {item.time ? (
                                            <td>{item.time}</td>
                                        ) : (
                                            <td className="error">NULL</td>
                                        )}
                                        <td
                                            className="viewResult"
                                            onClick={() => handleView(item.submissions)}
                                        >
                                            <a>View Results</a>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </TableSubmission>
                </Row>
                {viewResult && (
                    <Row>
                        <TableSubmitted>
                            <TitleSubmission className="title">
                                submitted code <div onClick={() => setViewResult(false)}>Close</div>
                            </TitleSubmission>
                            <AnswerSubmitted>
                                <div className="text-white">Language C</div>
                                <span className="answer">{answer}</span>
                            </AnswerSubmitted>
                        </TableSubmitted>
                    </Row>
                )}
                {/* <PaginationLB>
            <PaginationLeaderboard />
        </PaginationLB> */}
            </Row>
        </SubmissionStyled>
    );
};

export default Submission;
// ffb8287d-1b01-4daf-8eb4-3127e1fb19hf
// ffb8287d-1b01-4daf-8eb4-3127e1fb20hf
// ffb8287d-1b01-4daf-8eb4-3127e1fb21hg
