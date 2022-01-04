import { Container, Row, Col, Image } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import cn from "classnames";
import { namePreparation } from "../../../../utils/helpersFunction";
import bug from "../../../../icons/dashboard/bug.svg";
import style from "./styles.module.css";

export default function RecentActivityItems({ ticket }) {
  return (
    <Container className={cn(style.wrapper_recent_activity_ticket, ticket.type === "Take Action" && style.border_take_action)}>
      <Row className='me-0 ms-0'>
        {ticket.type === "Design ticket" ? (
          <Col className={cn(style.icon_recent_activity_ticket, style.background_design_ticket)} style={{ paddingTop: 8 }}>
            <Col className={style.icon_recent_activity_ticket_name}>{namePreparation(ticket.user_name)}</Col>
          </Col>
        ) : (
          <Col className={style.icon_recent_activity_ticket}>
            <Image src={bug} />
          </Col>
        )}
        <Col>
          <Row className={cn(style.wrapper_recent_activity_ticket_name, ticket.type === "Take Action" ? style.design_ticket_color_ticket_name : style.take_action_color_ticket_name)}>{ticket.ticket_name}</Row>
          <Row className={cn(style.wrapper_recent_activity_ticket_type, ticket.type === "Design ticket" ? style.background_design_ticket : style.background_take_action)}>{ticket.type}</Row>
        </Col>
      </Row>

      <Row className='me-0 ms-0'>
        <Col className={style.content_recent_activity_ticket}>
          {ticket.type === "Design ticket" ? (
            <>
              {ticket.user_name}
              <span style={{ fontWeight: "normal" }}> submitted a new ticket </span>“{ticket.ticket_name}”.
            </>
          ) : (
            <>
              {ticket.user_name}
              <span style={{ fontWeight: "normal" }}>asked a new question: </span>“{ticket.question}”<span style={{ fontWeight: "normal" }}> on </span>
              {ticket.on}
              <span style={{ fontWeight: "normal" }}> ticket.</span>
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col className={style.date_recent_activity_ticket}>{ticket.submitted_date}</Col>
        <Col className={style.wrapper_review_link}>
          <Link className={cn(style.link_ticket_list, style.review_link, ticket.type === "Design ticket" ? style.color_reviev_link_design_ticket : style.color_reviev_link_take_action)} to='#'>
            Review
            <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all_block} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
