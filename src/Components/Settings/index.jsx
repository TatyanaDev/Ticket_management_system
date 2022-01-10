import { Container, Row } from "react-bootstrap";
import NotificationSettings from "./NotificationSettings";
import { currentUser } from "../../utils/mokeDB";
import ProfileSettings from "./ProfileSettings";
import SearchBar from "../Shared/SearchBar";
import style from "./styles.module.css";

export default function SettingsLayout() {
  const { data } = currentUser;

  return (
    <>
      <SearchBar data={data} link='/recent_activity' />
      <Container fluid className='pe-5 ps-5 pt-3 pb-4'>
        <Row className={style.title}>Profile Settings</Row>
        <ProfileSettings user={data[0]} />
        <Row className={style.title}>Notification Settings</Row>
        <NotificationSettings />
      </Container>
    </>
  );
}
