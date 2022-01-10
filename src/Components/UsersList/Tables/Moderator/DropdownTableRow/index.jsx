import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import cn from "classnames";
import OpenTableRow from "./OpenTableRow";
import style from "./styles.module.css";
import TableRow from "./TableRow";

export default function DropdownTableRow({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className={cn("align-middle", style.border, isOpen && style.background_table_row)}>
        <TableRow user={user} />
        <td className='p-3 text-end' onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
          <Icon icon='ep:arrow-down-bold' className={isOpen && style.open} />
        </td>
      </tr>
      {isOpen && (
        <tr className={style.container}>
          <td colSpan={100} className='p-0'>
            <OpenTableRow tickets={user.ticket} />
          </td>
        </tr>
      )}
    </>
  );
}
