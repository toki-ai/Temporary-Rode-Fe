import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Table } from 'react-bootstrap';

import roomApi from '../../../../utils/api/roomApi';
import PaginationRoom from '../../AdminRoom/components/Pagination';

const titlesAll = [
    { id: '0', name: 'Rank' },
    { id: '1', name: 'Name' },
    { id: '2', name: 'Total Lines of Code' },
    { id: '3', name: 'Total Score' },
    { id: '4', name: 'Finish at' },
];
const titlesQues = [
    { id: '0', name: 'Rank' },
    { id: '1', name: 'Name' },
    { id: '2', name: 'Match' },
    { id: '3', name: 'Lines of Code' },
    { id: '4', name: 'Score' },
    { id: '5', name: 'Finish at' },
];
const FE = ({ ques, data, questions, questionId }) => {
    const [question, setQuestion] = useState([]);
    const [questionID, setQuestionID] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        setQuestion(questions);
        console.log(question);
        setQuestionID(questionId);
    }, [questions, questionId]);
    useEffect(() => {
        roomApi.getSubmitHistoryByQuestion(questionId).then((res) => {
            console.log(res.data.data);
            setAccounts(res.data.data.items);
            setCurrentPage(res.data.data.meta.currentPage);
            setTotalPage(res.data.data.meta.totalPages);
        });
    }, [questionId, questions]);
    console.log(question);
    console.log(questionID);
    console.log(accounts);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <>
            <Table striped className="mt-2 border-top">
                <thead>
                    <tr>
                        {ques == 'All'
                            ? titlesAll.map((item) => {
                                  return (
                                      <th className="fw-bold" key={item.id}>
                                          {item.name}
                                      </th>
                                  );
                              })
                            : titlesQues.map((item) => {
                                  return (
                                      <th className="fw-bold" key={item.id}>
                                          {item.name}
                                      </th>
                                  );
                              })}
                    </tr>
                </thead>
                <tbody>
                    {accounts?.length ? (
                        accounts.map((account, i) => {
                            return (
                                <tr key={account.id}>
                                    <td>{i + 1}</td>
                                    <td>{account.account.lname + ' ' + account.account.fname}</td>
                                    <td>{account.score}</td>
                                    <td>{account.space}</td>
                                    <td>{account.submittedAt}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td className="text-center" colSpan={1000}>
                                No data available in table
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <PaginationRoom
                action={handlePageChange}
                totalPages={totalPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default FE;
