import Pagination from 'react-bootstrap/Pagination';

const PaginationRoom = ({ totalPages, currentPage, action }) => {
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

    var leftHidden =
        currentPage == 1 ? (
            <Pagination.Prev disabled />
        ) : (
            <Pagination.Prev onClick={() => action(currentPage - 1)} />
        );
    var rightHidden =
        currentPage == totalPages ? (
            <Pagination.Next disabled />
        ) : (
            <Pagination.Next onClick={() => action(currentPage + 1)} />
        );
    return (
        <Pagination className="justify-content-center">
            <Pagination.First onClick={() => action(1)} />
            {leftHidden}
            {items}

            {items.length >= 10 && <Pagination.Ellipsis />}
            {rightHidden}
            <Pagination.Last onClick={() => action(items.length)} />
        </Pagination>
    );
};

export default PaginationRoom;
