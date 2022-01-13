import { Col, Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import PriorityRange from "../../PriorityRange";
import FormikSelect from "./FormikSelect";
import FormikInput from "./FormikInput";
import style from "./styles.module.css";
import Steps from "../../Steps";

export default function BodyTicketInfo({ activeStep, formik, priority, setPriority, resetFilledData }) {
  return (
    <Modal.Body className='p-0' style={{ marginBottom: 42 }}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Label className={style.label}>
          <HeadingWithTooltipDown tooltip='What is your ticket type?' title='Ticket Type' />
        </Form.Label>
        <FormikSelect
          onChange={resetFilledData}
          name='type'
          formik={formik}
          placeholder='What is your ticket type?'
          options={[
            { id: 1, value: "Story" },
            { id: 2, value: "Bug" },
            { id: 3, value: "Task" },
          ]}
        />
        <FormikInput name='title' type='text' placeholder='Ticket Title' formik={formik} label='Ticket Title' limit='30' />
        <PriorityRange priority={priority} setPriority={setPriority} />
        <Col className={style.description}>
          <span className={style.bold}>Note:</span>
          Choosing higher priority may require additional amount in payment.
        </Col>
      </Stack>
    </Modal.Body>
  );
}
