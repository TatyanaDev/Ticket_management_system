import { Button, Col, Image, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { styleSelection } from "../../../pages/TicketList/data";
import TableContentContainer from "./TableContentContainer";
import avatar from "../../../icons/test_avatar.svg";
import OpenTableRow from "./OpenTableRow";
import style from "../styles.module.css";

export default function TableContentActionRequired({ ticket }) {
  const icon = {
    warning: <Icon icon='carbon:warning-filled' className={style.warning_icon} />,
    question: <Icon icon='bi:question-circle-fill' className={style.question_icon} />,
  };

  return (
    <TableContentContainer
      tableContent={
        <>
          <td>{icon[ticket.icon]}</td>
          <td>{ticket.id}</td>
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
          <td className={style.column_right}>{ticket.created_date}</td>
          <td>
            <Row className={styleSelection(ticket.status)}>{ticket.status}</Row>
          </td>
        </>
      }
      openTableRow={
        <OpenTableRow
          columnNameLeft={
            <>
              <span className={style.text_bold}>Action Required - </span>
              {ticket.action_required}
            </>
          }
          columnNameRight='Action'
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
