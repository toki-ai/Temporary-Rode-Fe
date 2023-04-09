import Pagination from 'react-bootstrap/Pagination';

const PaginationAttend = ({ totalPages, currentPage, action }) => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => {
                    action(number);
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <Pagination className="justify-content-center">
            <Pagination.First onClick={() => action(1)} />
            <Pagination.Prev onClick={() => action(currentPage - 1)} />
            {items}

            {items.length >= 10 && <Pagination.Ellipsis />}
            <Pagination.Next onClick={() => action(currentPage + 1)} />
            <Pagination.Last onClick={() => action(items.length)} />
        </Pagination>
    );
};

export default PaginationAttend;
