import cn from "classnames";
import style from "../../../../../pages/Dashboard/styles.module.css";
import ModalOpenButton from "../../../ModalOpenButton";

export default function OpenTableRow({ ticket }) {
  return (
    <>
      <tr className={cn(style.wrapper_thead_inner)}>
        <th colSpan='2' className={style.wrapper_thead_item_inner}>
          Ticket description
        </th>
        <th className={cn(style.wrapper_thead_item_inner, style.text_end)}>Submitted date</th>
        <th colSpan='2' className={cn(style.wrapper_thead_item_inner, style.text_end)}>
          Followup Ticket
        </th>
      </tr>

      <tr className={cn(style.wrapper_tbody_inner)}>
        <td colSpan='2' className={style.wrapper_tbody_item_inner}>
          {ticket.ticket_description}
        </td>
        <td className={cn(style.wrapper_tbody_item_inner, style.text_end)}>{ticket.submitted_date}</td>
        <td colSpan='2' className={cn(style.wrapper_tbody_item_inner, style.text_end)}>
          <ModalOpenButton content='Add ticket' styleButton={style.button_add_ticket} styleIcon={style.icon_plus_add} />
        </td>
      </tr>
    </>
  );
}
