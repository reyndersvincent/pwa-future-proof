import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './pagination.css';

const Pagination = ({ nextPage, previousPage, page }) => (
  <div className="pagination">
    <button className="previous" disabled={page === 0} onClick={() => previousPage(page - 1)}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
    <button className="next" onClick={() => nextPage(page + 1)}>
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  </div>
);

export default Pagination;