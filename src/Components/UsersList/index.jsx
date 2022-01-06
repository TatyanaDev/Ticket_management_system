import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";
import ButtonCreate from "../Shared/ButtonCreate";
import ClientAdmin from "./Tables/ClientAdmin";
import { usersList } from "../../utils/mokeDB";
import SearchBar from "../Shared/SearchBar";
import Moderator from "./Tables/Moderator";
import UserModal from "./UserModal";

export default function UsersListLayout({ role = "moderator" }) {
  const { data } = usersList;
  const [ticketList, setTicketsList] = useState(data);
  const [show, setShow] = useState(false);

  return (
    <Col className='p-0' style={{ backgroundColor: "#f8f9fa" }}>
      <SearchBar setTicketsList={setTicketsList} data={ticketList} link='/recent_activity'>
        <ButtonCreate value='Add User' onClick={() => setShow(true)} />
        <UserModal handleClose={() => setShow(false)} show={show} title='Add New User' />
      </SearchBar>
      <Container fluid style={{ padding: "16px 47px" }}>
        {role === "moderator" ? <Moderator usersList={ticketList} /> : <ClientAdmin usersList={data.filter((userItem) => userItem.user_role[0] === "User" || userItem.user_role[0] === "Approver")} />}
      </Container>
    </Col>
  );
}
