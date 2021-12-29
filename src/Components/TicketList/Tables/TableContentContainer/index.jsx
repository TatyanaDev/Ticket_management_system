import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import style from "../../styles.module.css";

export default function TableContentContainer({ tableContent, openTableRow }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className={style.table_content}>
        {tableContent}
        <td className={style.wrapper_tbody_item} style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon='ep:arrow-down-bold' className={isOpen && style.open} />
        </td>
      </tr>
      {isOpen && openTableRow}
    </>
  );
}
