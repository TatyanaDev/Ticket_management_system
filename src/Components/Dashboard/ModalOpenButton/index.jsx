import { Icon } from "@iconify/react/dist/iconify";
import { Button } from "react-bootstrap";
import { useState } from "react";
import CreateNewTicketModal from "../CreateNewTicketModal";

export default function ModalOpenButton({ content, styleButton, styleIcon }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)} className={styleButton}>
        <Icon icon='gridicons:plus-small' className={styleIcon} />
        {content}
      </Button>

      <CreateNewTicketModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
