import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import style from "./styles.module.css";

export default function PaginatedItems({ itemsPerPage, data, setTicketsList }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    endOffset && setTicketsList(data.slice(itemOffset, endOffset));
    data && setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, setTicketsList, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return <ReactPaginate nextLabel='Next' onPageChange={handlePageClick} pageRangeDisplayed={3} marginPagesDisplayed={2} pageCount={pageCount} previousLabel='Previous' pageClassName='page-item' pageLinkClassName='page-link' previousClassName='page-item' previousLinkClassName='page-link' nextClassName='page-item' nextLinkClassName='page-link' breakLabel='...' breakClassName='page-item' breakLinkClassName='page-link' containerClassName='pagination' activeClassName='active' renderOnZeroPageCount={null} className={style.pagination} />;
}
