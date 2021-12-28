import style from "../styles.module.css";
import { Button, Col, Image, ProgressBar, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { styleSelection } from "../../../pages/TicketList/data";
import TableContentContainer from "./TableContentContainer";
import avatar from "../../../icons/test_avatar.svg";
import OpenTableRow from "./OpenTableRow";

export default function TableContentTicketList({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={style.column_center}>{ticket.id}</td>
          <td>{ticket.name}</td>
          <td>
            <Row>
              <Col xs='auto'>
                <Image src={avatar} roundedCircle className={style.avatar} />
              </Col>
              <Col>{ticket.approver}</Col>
            </Row>
          </td>
          <td className={style.column_priority}>
            <Row className={styleSelection(ticket.priority)}>{ticket.priority}</Row>
          </td>
          <td>
            <ProgressBar now={ticket.complexity} className={style.progress_bar} />
          </td>
          <td className={style.column_center}>{ticket.created_date}</td>
          <td>
            <Row className={styleSelection(ticket.status)}>{ticket.status}</Row>
          </td>
        </>
      }
      openTableRow={
        <OpenTableRow
          columnNameLeft={<span className={style.text_bold}>Ticket description</span>}
          columnNameRight='  Followup Ticket'
          contentLeft={ticket.description}
          contentRight={
            <Link to='#'>
              <Button variant='outline-primary' className={style.button}>
                Go to ticket
                <Icon icon='ph:caret-right-bold' className={style.icon_caret_right} />
              </Button>
            </Link>
          }
        />
      }
    />
  );
}
