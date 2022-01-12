import { Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import FormikInput from "../../../../FormikInput";
import TextEditor from "../../../../TextEditor";
import style from "./styles.module.css";
import Steps from "../../Steps";

export default function BodyOutcome({ activeStep, formik }) {
  return (
    <Modal.Body className={style.body}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Group className='mb-2'>
          <Form.Label className={style.label} htmlFor='expected_outcome'>
            <HeadingWithTooltipDown tooltip='Expected Outcome' title='Expected Outcome' />
          </Form.Label>
          <TextEditor limit='3000' />
        </Form.Group>
        <FormikInput name='resources' type='text' placeholder='Please provide link to the source file if any.' formik={formik} label={<HeadingWithTooltipDown tooltip='Resources' title='Resources' />} />
      </Stack>
    </Modal.Body>
  );
}
