import { Icon } from "@iconify/react/dist/iconify";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../styles.module.css";

export default function OpenTableRow({ ticket, description, rightDescription }) {
  return (
    <>
      <tr className={style.background_dropdown}>
        <td colSpan='6'>{description}</td>
        <td colSpan='2' style={{ textAlign: "center" }}>
          {rightDescription}
        </td>
      </tr>

      <tr className={style.background_dropdown_shadow}>
        <td colSpan='6' className={style.description}>
          {ticket.ticket_description}
        </td>
        <td colSpan='2' style={{ textAlign: "center" }}>
          <Link to='#'>
            <Button variant='outline-primary' className={style.button}>
              Go to ticket
              <Icon icon='ph:caret-right-bold' className={style.icon_caret_right} />
            </Button>
          </Link>
        </td>
      </tr>
    </>
  );
}
