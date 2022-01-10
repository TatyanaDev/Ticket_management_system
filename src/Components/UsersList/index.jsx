import { Container, Button } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Col } from "react-bootstrap";
import { useState } from "react";
import ClientAdmin from "./Tables/ClientAdmin";
import { usersList } from "../../utils/mokeDB";
import SearchBar from "../Shared/SearchBar";
import Moderator from "./Tables/Moderator";
import style from "./styles.module.css";
import UserModal from "./UserModal";

export default function UsersListLayout({ role = "" }) {
  const { data } = usersList;
  const [ticketList, setTicketsList] = useState(data);
  const [show, setShow] = useState(false);

  return (
    <Col className='p-0' style={{ backgroundColor: "#f8f9fa" }}>
      <SearchBar setTicketsList={setTicketsList} data={ticketList} link='/recent_activity'>
        <Button variant='primary' className={style.button_add_user} onClick={() => setShow(true)}>
          <Icon icon='akar-icons:plus' className='fs-6 me-2' style={{ verticalAlign: "top" }} />
          Add User
        </Button>
        <UserModal handleClose={() => setShow(false)} show={show} title='Add New User' />
      </SearchBar>
      <Container fluid style={{ padding: "16px 47px" }}>
        {role === "moderator" ? <Moderator usersList={ticketList} /> : <ClientAdmin usersList={data.filter((userItem) => userItem.user_role[0] === "User" || userItem.user_role[0] === "Approver")} />}
      </Container>
    </Col>
  );
}
