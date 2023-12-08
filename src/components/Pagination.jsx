// Pagination.js
import PropTypes from 'prop-types';
import { Button} from "react-bootstrap";
const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className='d-flex justify-content-end' >
      {pageNumbers.map((number) => (
        <Button key={number} onClick={() => onPageChange(number)} className="bg-light text-dark border-light mx-3" disabled={currentPage === number}>
          {number}
        </Button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

export default Pagination;
