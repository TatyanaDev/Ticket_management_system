import { Button, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import style from "./styles.module.css";
import FormItem from "./FormItem";

export default function ProfileSettings({ user }) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("First Name is required"),
    lastName: Yup.string().trim().required("Last Name is required"),
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required"),
    currentPassword: Yup.string().trim(),
    newPassword: Yup.string().trim(),
    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("newPassword")], "Passwords are not the same!"),
  });

  const initialValues = {
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const buttonClickHandlerChange = (values) => console.log(values);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={buttonClickHandlerChange}>
      {(formik) => (
        <Form className={style.background} noValidate onSubmit={formik.handleSubmit}>
          <Row className='m-0'>
            <FormItem name='firstName' type='text' placeholder='Enter first name' label='First Name' formik={formik} />
            <FormItem type='password' placeholder='Enter current Password' label='Current Password' name='currentPassword' formik={formik} />
          </Row>

          <Row className='m-0'>
            <FormItem type='text' placeholder='Enter last name' label='Last Name' name='lastName' formik={formik} />
            <FormItem type='password' placeholder='Enter new Password' label='New Password' name='newPassword' formik={formik} />
          </Row>

          <Row className='m-0'>
            <FormItem type='email' placeholder='Enter email' label='Email' name='email' formik={formik} />
            <FormItem type='password' placeholder='Enter confirm Password' label='Confirm Password' name='confirmPassword' formik={formik} />
          </Row>

          <Button className={style.button} variant='outline-primary' type='submit'>
            Change
          </Button>
        </Form>
      )}
    </Formik>
  );
}
