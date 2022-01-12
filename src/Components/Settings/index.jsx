import { Container, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useNavigate } from "react-router-dom";
import NotificationSettings from "./NotificationSettings";
import { currentUser } from "../../utils/mokeDB";
import ProfileSettings from "./ProfileSettings";
import style from "./styles.module.css";

export default function SettingsLayout() {
  const navigate = useNavigate();
  const { data } = currentUser;

  return (
    <>
      <Row className={style.background}>
        <Col xs='auto' className='ps-0'>
          <Button variant='link' className={style.button} onClick={() => navigate(-1)}>
            <Icon icon='ph:caret-left-bold' className={style.icon_btn} />
            Back
          </Button>
        </Col>
      </Row>

      <Container fluid className='pe-5 ps-5 pt-3 pb-4'>
        <Row className={style.title}>Profile Settings</Row>
        <ProfileSettings user={data[0]} />
        <Row className={style.title}>Notification Settings</Row>
        <NotificationSettings />
      </Container>
    </>
  );
}
