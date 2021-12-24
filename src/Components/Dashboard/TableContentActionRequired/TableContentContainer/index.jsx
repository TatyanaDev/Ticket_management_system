import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import cn from "classnames";
import style from "../../../../pages/Dashboard/styles.module.css";

export default function TableContentContainer({ tableContent, openTableRow }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className={cn(style.wrapper_tbody, isOpen && style.background_active_ticket)}>
        {tableContent}
        <td onClick={() => setIsOpen(!isOpen)} className={style.wrapper_arrow_tbody}>
          <Icon icon='ep:arrow-down-bold' className={cn(style.arrow_tbody, isOpen && style.table_row_active)} />
        </td>
      </tr>
      {isOpen && openTableRow}
    </>
  );
}
