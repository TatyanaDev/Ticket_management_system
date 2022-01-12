import { Badge, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import DefaultAvatar from "../../Shared/FullNameAvatar/DefaultAvatar";
import style from "./styles.module.css";

export default function ActivityCard({ activity }) {
  return (
    <>
      <Row className='pb-2'>
        {activity.type === "Design ticket" ? (
          <Col xs='auto'>
            <DefaultAvatar userName={activity.user_name} styles='primary_40' />
          </Col>
        ) : (
          <Col xs='auto'>
            <Icon icon='carbon:warning-filled' style={{ fontSize: 40, color: "var(--bs-red)" }} />
          </Col>
        )}
        <Col className='ps-0'>
          <Badge className={activity.type === "Design ticket" ? style.ticket : style.action}>{activity.type}</Badge>
          <Row className={cn("pt-1 ms-0 me-0", style.title, activity.type === "Design ticket" ? style.title_default : style.title_danger)}>{activity.ticket_name}</Row>
        </Col>
        <Col xs='auto' className={style.date}>
          {activity.submitted_date}
        </Col>
      </Row>
      <Row className={cn("ms-0 me-0", style.description)}>
        {activity.type === "Design ticket" ? (
          <>
            {activity.user_name}
            <span className={cn("w-auto ps-1 pe-1", style.fw_normal)}>submitted a new ticket</span>“{activity.ticket_name}”.
          </>
        ) : (
          <>
            {activity.user_name}
            <span className={cn("w-auto ps-1 pe-1", style.fw_normal)}>asked a new question:</span>“{activity.question}”<span className={cn("w-auto ps-1 pe-1", style.fw_normal)}>on</span>
            {activity.on}
            <span className={cn("w-auto ps-1 pe-1", style.fw_normal)}>ticket.</span>
          </>
        )}
      </Row>
    </>
  );
}
