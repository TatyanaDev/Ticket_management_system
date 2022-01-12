import { Modal } from "react-bootstrap";
import Loader from "./Loader";

export default function CreateNewTicketModal(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Loader />
    </Modal>
  );
}
