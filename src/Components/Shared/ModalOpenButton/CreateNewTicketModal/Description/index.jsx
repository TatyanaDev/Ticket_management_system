import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterWithTwoButtons from "../FooterWithTwoButtons";
import BodyDescription from "./BodyDescription";
import Header from "../Header";

export default function Description({ activeStep, onNext, onBack, setTicketDescription, setUserStory, ticketDescription, userStory }) {
  const validationSchema = Yup.object().shape({
    user_story: Yup.string().trim().required("User Story is required").max(3000, "User Story  must not be more than 30 characters long!"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    setUserStory(values.user_story);
    onNext();
  };

  return (
    <>
      <Header title=' Information' description='We need a bit more information to understand you better' />
      <Formik
        initialValues={{
          user_story: userStory,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form noValidate onSubmit={formik.handleSubmit} className='d-flex flex-column flex-grow-1'>
            <BodyDescription activeStep={activeStep} formik={formik} setTicketDescription={setTicketDescription} ticketDescription={ticketDescription} />
            <FooterWithTwoButtons primaryButtonTitle='Next' secondaryButtonTitle='Back' secondaryButtonClick={onBack} />
          </Form>
        )}
      </Formik>
    </>
  );
}
