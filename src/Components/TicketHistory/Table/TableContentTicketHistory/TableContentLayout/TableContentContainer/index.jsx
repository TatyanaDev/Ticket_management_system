import { Icon } from "@iconify/react/dist/iconify";
import { Button } from "react-bootstrap";
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
        <Button variant='outline-primary' className={style.button_outline}>
          <Icon icon='akar-icons:plus' className='fs-6 me-2' />
          Add Ticket
        </Button>
      </td>
    </>
  );
}
