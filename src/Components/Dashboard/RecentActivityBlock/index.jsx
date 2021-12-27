import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import cn from "classnames";
import RecentActivityItems from "./RecentActivityItems";
import style from "./styles.module.css";

export default function RecentActivityBlock({ recentActivity, recentActivityShow, setRecentActivityShow }) {
  return (
    <Col xs={recentActivityShow ? { span: 3 } : "auto"} xxl={recentActivityShow ? { span: 2 } : "auto"} className={cn(style.recent_activity_block, recentActivityShow && style.recent_activity_block_active)}>
      <Row className='me-0 ms-0'>
        <Col className={style.button_recent_activity_block} onClick={() => setRecentActivityShow(false)}>
          <Icon icon='fluent:arrow-down-12-filled' style={{ fontSize: 12 }} />
          Recent Activity
        </Col>
        <Col className={style.wrapper_link_ticket_list_block}>
          <Link className={style.link_ticket_list} to='/recent_activity'>
            See all
            <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all_block} />
          </Link>
        </Col>
      </Row>

      {recentActivity.map((ticket) => (
        <RecentActivityItems ticket={ticket} key={ticket.ticket_id} />
      ))}
    </Col>
  );
}
