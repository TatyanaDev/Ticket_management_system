import { Col, Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import TextEditor from "../../../../TextEditor";
import style from "../styles.module.css";
import Loader from "../Loader";
import Steps from "../../Steps";

export default function Bug({ activeStep }) {
  return (
    <Modal.Body className='p-0' style={{ marginBottom: 42 }}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Group className='mb-2'>
          <Form.Label className={style.label} htmlFor='expected_outcome'>
            <HeadingWithTooltipDown tooltip='Steps to  Reproduce' title='Steps to  Reproduce' />
          </Form.Label>
          <TextEditor limit='3000' />
        </Form.Group>

        <Form.Group className='mb-2'>
          <Form.Label className={style.label}>
            <HeadingWithTooltipDown tooltip='Testing Environment' title='Testing Environment' />
          </Form.Label>
          <Form.Control as='textarea' className={style.textarea} />
          <Col className={style.limit}>{}/3000</Col>
        </Form.Group>

        <Form.Group className='mb-2'>
          <Form.Label className={style.label}>
            <HeadingWithTooltipDown tooltip='Resources' title='Resources' />
          </Form.Label>
          <Form.Control type='text' placeholder='Please provide link to the source file if any.' className={style.input} />
        </Form.Group>

        <Loader />
      </Stack>
    </Modal.Body>
  );
}
