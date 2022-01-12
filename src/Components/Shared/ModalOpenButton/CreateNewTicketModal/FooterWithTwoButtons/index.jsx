import { Button, Modal } from "react-bootstrap";
import style from "./styles.module.css";

export default function FooterWithTwoButtons({ secondaryButtonTitle, primaryButtonTitle, secondaryButtonClick, primaryButtonClick = () => {} }) {
  return (
    <Modal.Footer className={style.footer}>
      <Button variant='secondary' onClick={secondaryButtonClick} className={style.button_outline}>
        {secondaryButtonTitle}
      </Button>
      <Button variant='primary' type='submit' className={style.button_primary} onClick={primaryButtonClick}>
        {primaryButtonTitle}
      </Button>
    </Modal.Footer>
  );
}
