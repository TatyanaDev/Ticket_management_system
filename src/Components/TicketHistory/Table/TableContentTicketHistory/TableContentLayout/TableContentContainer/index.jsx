import ModalOpenButton from "../../../../../Shared/ModalOpenButton";
import FullNameAvatar from "../../../../../Shared/FullNameAvatar";
import style from "./styles.module.css";

export default function TableContentContainer({ ticket }) {
  return (
    <>
      <td className='text-end' style={{ color: "#1c1c28" }}>
        {ticket.ticket_id}
      </td>
      <td>{ticket.ticket_name}</td>
      <td>
        <FullNameAvatar userName={ticket.approver} src={ticket.src} />
      </td>
      <td className='text-end' style={{ color: "#1c1c28" }}>
        {ticket.resolved_date}
      </td>
      <td className='text-center'>
        <ModalOpenButton content='Add ticket' styleButton={style.button_add_ticket} styleIcon={style.icon_plus_add} />
      </td>
    </>
  );
}
