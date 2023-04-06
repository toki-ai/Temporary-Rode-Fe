import React from 'react';

import { MyPagination } from '../styled';

import Pagination from 'react-bootstrap/Pagination';

function PaginationRoom({ currentPage, totalPages, handlePageChange }) {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage}>
                {number}
            </Pagination.Item>
        );
        console.log(currentPage);
        console.log(items);
    }
    return (
        <MyPagination>
            {/* <Pagination className="position-absolute bottom-0 left-0 bg-color pagination"> */}
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
            {console.log(totalPages)}
            {items}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
            <Pagination.Last onClick={() => handlePageChange(items.length)} />
            {/* </Pagination> */}
        </MyPagination>
    );
}

export default PaginationRoom;
