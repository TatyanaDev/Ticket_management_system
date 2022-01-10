import { Button, Col, Modal } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function ModalDeleteUser({ show, handleClose, fullName }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className='p-4 m-2 align-items-start border-bottom-0'>
        <Modal.Title className={style.title}>Are you sure you want to delete user {fullName} ?</Modal.Title>
      </Modal.Header>
      <Modal.Footer className='p-4 m-2 pt-0 mt-0 border-top-0'>
        <Col className='d-flex flex-nowrap'>
          <Button variant='outline-primary' className={cn("w-100 me-3 text-uppercase", style.button_outline)} onClick={handleClose}>
            No
          </Button>
          <Button variant='primary' type='submit' className={cn("w-100 text-uppercase", style.button_primary)} onClick={handleClose}>
            Yes
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
}
