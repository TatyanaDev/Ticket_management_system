import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterWithTwoButtons from "../FooterWithTwoButtons";
import BodyOutcome from "./BodyOutcome";
import Header from "../Header";
import Loader from "../Loader";

export default function Outcome({ activeStep, handleClose, onBack, onCreate }) {
  const validationSchema = Yup.object().shape({
    expected_outcome: Yup.string().trim().required("Expected Outcome is required").max(3000, "Expected Outcome must not be more than 30 characters long!"),
    resources: Yup.string().trim(),
  });

  const initialValues = {
    expected_outcome: "",
    resources: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  return (
    <>
      <Header title='Just A Little More...' description='What should we do to make it happen?' />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form noValidate onSubmit={formik.handleSubmit} className='d-flex flex-column flex-grow-1'>
            <BodyOutcome activeStep={activeStep} formik={formik} />
            <Loader />
            <FooterWithTwoButtons primaryButtonTitle='Create' secondaryButtonTitle='Back' primaryButtonClick={onCreate} secondaryButtonClick={onBack} />
          </Form>
        )}
      </Formik>
    </>
  );
}
