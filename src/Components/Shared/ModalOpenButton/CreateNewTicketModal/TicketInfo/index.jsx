import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterWithTwoButtons from "../FooterWithTwoButtons";
import BodyTicketInfo from "./BodyTicketInfo";
import Header from "../Header";

export default function TicketInfo({ activeStep, onCancel, onNext, setTicketTitle, setTicketType, ticketTitle, ticketType, priority, setPriority }) {
  const validationSchema = Yup.object().shape({
    type: Yup.string().required("Ticket Type is required"),
    title: Yup.string().trim().max(30, "Ticket Title must not be more than 30 characters long!").required("Ticket Title is required!"),
  });
  
  const initialValues = {
    type: ticketType,
    title: ticketTitle,
  };

  const handleSubmit = (values) => {
    console.log(values);
    setTicketType(values.type);
    setTicketTitle(values.title);
    onNext();
  };

  return (
    <>
      <Header title='Create New Ticket' description='To create a new ticket, provide the details below.' />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {(formik) => (
          <Form noValidate onSubmit={formik.handleSubmit} className='d-flex flex-column flex-grow-1'>
            <BodyTicketInfo activeStep={activeStep} formik={formik} priority={priority} setPriority={setPriority} />
            <FooterWithTwoButtons primaryButtonTitle='Next' secondaryButtonTitle='Cancel' secondaryButtonClick={onCancel} />
          </Form>
        )}
      </Formik>
    </>
  );
}
