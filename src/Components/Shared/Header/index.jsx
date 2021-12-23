import { Col, Navbar, Row, Image } from "react-bootstrap";
import headerAvatar from "../../../icons/shared/HeaderAvatar.svg";
import { Icon } from "@iconify/react/dist/iconify";
import logo from "../../../icons/shared/Logo.svg";
import ProfileDropdown from "./ProfileDropdown/";
import style from "./styles.module.css";

export default function Header({ activePageTitle, userName = "Battulga Enkhtur", avatar = headerAvatar }) {
  return (
    <Row className={style.wrapper_header}>
      <Navbar className={style.background_header}>
        <Col className={style.wrapper_logo}>
          <Navbar.Brand className={style.wrapper_logo}>
            <Image src={logo} alt='Shoplab' className={style.logo} />
          </Navbar.Brand>
        </Col>

        <Col className={style.text}>{activePageTitle}</Col>

        <Col sm={2} md={2} lg={2} xl={2} xxl={2}>
          <Row>
            <Col className={style.inner_wrapper}>
              <Icon icon='mi:notification' className={style.icon_notification} />
            </Col>

            <Col className={style.inner_wrapper}>
              <ProfileDropdown avatar={avatar} userName={userName} />
            </Col>
          </Row>
        </Col>
      </Navbar>
    </Row>
  );
}
