import { Pagination } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function CustomPagination() {
  return (
    <Pagination className={cn("justify-content-center", style.pagination)}>
      <Pagination.Prev className={style.pagination_item}>Previous</Pagination.Prev>
      <Pagination.Item className={style.pagination_item}>{1}</Pagination.Item>
      <Pagination.Item className={style.pagination_item}>{2}</Pagination.Item>
      <Pagination.Item className={style.pagination_item}>{3}</Pagination.Item>
      <Pagination.Next className={style.pagination_item}>Next</Pagination.Next>
    </Pagination>
  );
}
