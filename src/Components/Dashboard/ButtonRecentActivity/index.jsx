import { Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import style from "./styles.module.css";

export default function ButtonRecentActivity({ recentActivityShow, setRecentActivityShow, summary }) {
  return (
    <Row>
      <Col style={{ textAlign: "end" }}>
        <Button className={cn(style.button_recent_activity, recentActivityShow && style.button_recent_activity_active)} variant='danger' onClick={() => setRecentActivityShow(true)}>
          <Row>
            <Col className={style.wrapper_arrow_button}>
              <Icon icon='fluent:arrow-up-12-filled' className={style.arrow_button} />
            </Col>
            <Col className={cn(style.recent_activity, "p-0")}>Recent activity</Col>
            <Col className={cn(style.value_recent_activity, "p-0")}>{summary.action_required}</Col>
          </Row>
        </Button>
      </Col>
    </Row>
  );
}
