import { Container, Image, NavDropdown, Nav } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import { text } from "../styles.module.css";
import style from "./styles.module.css";

export default function ProfileDropdown({ avatar, userName }) {
  return (
    <Nav>
      <NavDropdown
        className={style.dropdown}
        title={
          <Container className={text}>
            <Image src={avatar} className={style.avatar} />
            {userName}
          </Container>
        }
      >
        <NavDropdown.Item href='/settings' className={style.dropdown_item}>
          <Icon icon='iconoir:profile-circled' className={style.icon} />
          Profile Settings
        </NavDropdown.Item>

        <NavDropdown.Item href='/notification_settings' className={style.dropdown_item}>
          <Icon icon='mi:notification' className={style.icon} />
          Notification Settings
        </NavDropdown.Item>

        <NavDropdown.Divider className={style.divider} />

        <NavDropdown.Item href='/' className={cn(style.dropdown_item, style.logout)}>
          <Icon icon='fe:logout' className={style.icon} />
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
