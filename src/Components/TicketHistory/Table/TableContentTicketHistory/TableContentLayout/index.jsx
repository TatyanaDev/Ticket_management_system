import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import cn from "classnames";
import TableContentContainer from "./TableContentContainer";
import OpenTableRow from "./OpenTableRow";
import style from "./styles.module.css";

export default function TableContentLayout({ ticket }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className={cn(style.wrapper, isOpen && style.background_active)}>
        <TableContentContainer ticket={ticket} />
        <td style={{ textAlign: "end", cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon='ep:arrow-down-bold' className={isOpen && style.open} />
        </td>
      </tr>
      {isOpen && (
        <tr className={style.container}>
          <td colSpan={100} className='p-0'>
            <OpenTableRow description={ticket.ticket_description} date={ticket.submitted_date} />
          </td>
        </tr>
      )}
    </>
  );
}
