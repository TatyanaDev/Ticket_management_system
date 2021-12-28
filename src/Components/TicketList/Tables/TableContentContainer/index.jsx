import style from "../../styles.module.css";
import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";

export default function TableContentContainer({ tableContent, openTableRow }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className={style.table_content}>
        {tableContent}
        <td onClick={() => setIsOpen(!isOpen)}>
          <Icon icon='ph:caret-down-bold' className={isOpen && style.open} />
        </td>
      </tr>
      {isOpen && openTableRow}
    </>
  );
}
