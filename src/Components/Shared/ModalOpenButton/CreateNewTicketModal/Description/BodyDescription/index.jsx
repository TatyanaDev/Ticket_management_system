import { Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../.../../../../../HeadingWithTooltipDown";
import FormikTextarea from "../../../../FormikTextArea";
import TextEditor from "../../../../TextEditor";
import style from "./styles.module.css";
import Steps from "../../Steps";

export default function BodyDescription({ activeStep, formik, setTicketDescription, ticketDescription }) {
  return (
    <Modal.Body className={style.body}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Group className='mb-2'>
          <Form.Label className={style.label} htmlFor='user_story'>
            <HeadingWithTooltipDown tooltip='Ticket Description' title='Ticket Description' />
          </Form.Label>
          <TextEditor limit='3000' value={ticketDescription} setValue={setTicketDescription} />
        </Form.Group>
        <FormikTextarea formik={formik} label={<HeadingWithTooltipDown tooltip='User Story' title='User Story' />} name='user_story' limit='3000' />
      </Stack>
    </Modal.Body>
  );
}
