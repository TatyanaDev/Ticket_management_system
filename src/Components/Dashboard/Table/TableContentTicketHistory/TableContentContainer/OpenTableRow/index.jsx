import cn from "classnames";
import ModalOpenButton from "../../../../ModalOpenButton";
import style from "./styles.module.css";

export default function OpenTableRow({ ticket }) {
  return (
    <>
      <tr className={cn(style.wrapper_thead_inner)}>
        <th colSpan='2' className={style.wrapper_thead_item_inner}>
          Ticket description
        </th>
        <th className={style.wrapper_thead_item_inner} style={{ textAlign: "end" }}>
          Submitted date
        </th>
        <th colSpan='2' className={style.wrapper_thead_item_inner} style={{ textAlign: "end" }}>
          Followup Ticket
        </th>
      </tr>

      <tr className={cn(style.wrapper_tbody_inner)}>
        <td colSpan='2' className={style.wrapper_tbody_item_inner}>
          {ticket.ticket_description}
        </td>
        <td className={style.wrapper_tbody_item_inner} style={{ textAlign: "end" }}>
          {ticket.submitted_date}
        </td>
        <td colSpan='2' className={style.wrapper_tbody_item_inner} style={{ textAlign: "end" }}>
          <ModalOpenButton content='Add ticket' styleButton={style.button_add_ticket} styleIcon={style.icon_plus_add} />
        </td>
      </tr>
    </>
  );
}
