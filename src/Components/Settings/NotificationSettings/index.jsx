import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useState } from "react";
import NotificationSettingsItem from "./NotificationSettingsItem";
import style from "./styles.module.css";

export default function NotificationSettings() {
  const [onlineNotificationSettings, setOnlineNotificationSettings] = useState({});
  const [emailNotificationSettings, setEmailNotificationSettings] = useState({});

  const notifications = [
    { id: 1, title: "Someone comments on one of my tickets", checked: true, disabled: false },
    { id: 2, title: "Ony of my ticket is approved", checked: false, disabled: false },
    { id: 3, title: "One of my ticket’s status change", checked: true, disabled: false },
    { id: 4, title: "One of my ticket gets on hold", checked: false, disabled: true },
    { id: 5, title: "My comment is approved", checked: true, disabled: false },
    { id: 6, title: "I create a new ticket", checked: true, disabled: false },
  ];

  const emailNotifications = [
    { id: 1, title: "Someone comments on one of my tickets", checked: true, disabled: false },
    { id: 2, title: "Ony of my ticket is approved", checked: false, disabled: false },
    { id: 3, title: "One of my ticket’s status change", checked: true, disabled: false },
    { id: 4, title: "One of my ticket gets on hold", checked: false, disabled: true },
    { id: 5, title: "My comment is approved", checked: false, disabled: true },
    { id: 6, title: "I create a new ticket", checked: true, disabled: false },
  ];

  return (
    <Row className={style.wrapper}>
      <Form as={Col} className={style.background}>
        <Stack gap={3}>
          <Row className={style.title}>Notify me when:</Row>
          {notifications.map((notification) => (
            <NotificationSettingsItem key={notification.id} notification={notification} setSettings={setOnlineNotificationSettings} settings={onlineNotificationSettings} />
          ))}
          <Button variant='primary' className={style.button} onClick={() => console.log("onlineNotificationSettings", onlineNotificationSettings)}>
            Save
          </Button>
        </Stack>
      </Form>

      <Form as={Col} className={style.background}>
        <Stack gap={3}>
          <Row className={style.title}>Email me when:</Row>
          {emailNotifications.map((notification) => (
            <NotificationSettingsItem key={notification.id} notification={notification} setSettings={setEmailNotificationSettings} settings={emailNotificationSettings} />
          ))}
          <Button variant='primary' className={style.button} onClick={() => console.log("emailNotificationSettings", emailNotificationSettings)}>
            Save
          </Button>
        </Stack>
      </Form>
    </Row>
  );
}
