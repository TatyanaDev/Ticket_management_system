import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import style from "../styles.module.css";

export default function NotificationSettingsItem({ notification, setSettings, settings }) {
  const [checked, setChecked] = useState(notification.checked);

  const switchChangeHandler = ({ target }) => {
    setChecked(target.checked);
    setSettings({
      ...settings,
      [notification.id]: target.checked,
    });
  };

  return (
    <Row className='m-0 align-items-center'>
      <Col className={style.description}>{notification.title}</Col>
      <Col xs='auto' className='pe-0'>
        <Form.Check type='switch' id={notification.id} disabled={notification.disabled} className={style.switch} onChange={switchChangeHandler} checked={checked} />
      </Col>
    </Row>
  );
}
