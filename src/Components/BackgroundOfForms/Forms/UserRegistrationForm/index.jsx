import { Button, Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import style from "../styles.module.css";

export default function UserRegistrationForm({ margin }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required!"),
    createPassword: Yup.string().trim().min(6, "Password has to be longer than 6 characters!").required("Create password is required!"),
    repeatPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("createPassword")], "Passwords are not the same!")
      .required("Repeat password is required!"),
  });

  const initialValues = {
    email: "",
    createPassword: "",
    repeatPassword: "",
  };

  const createUser = async (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
    try {
    } catch (err) {}
  };

  return (
    <>
      <Formik validateOnChange={false} initialValues={initialValues} validationSchema={validationSchema} onSubmit={createUser}>
        <Form>
          <Row className={style.input_container}>
            <label className='p-0' style={{ color: "#6c757d" }}>
              Email
            </label>
            <Field name='email' className={style.input} type='text' />
            <ErrorMessage name='email' component='div' className={style.error} />
          </Row>

          <Row className={style.input_container}>
            <label className='p-0' style={{ color: "#6c757d" }}>
              Create Password
            </label>
            <Field name='createPassword' className={style.input} type='password' />
            <ErrorMessage name='createPassword' component='div' className={style.error} />
          </Row>

          <Row className={style.input_container}>
            <label className='p-0' style={{ color: "#6c757d" }}>
              Repeat Password
            </label>
            <Field name='repeatPassword' className={style.input} type='password' />
            <ErrorMessage name='repeatPassword' component='div' className={style.error} />
          </Row>
          <Row className={margin} style={{ width: 350 }}>
            <Button className={style.button} type='submit'>
              Create account
            </Button>
          </Row>
        </Form>
      </Formik>

      <Container>
        <Row>
          <Col className={style.before_link} xxl={8}>
            Already have an account?
          </Col>

          <Col className='p-0' style={{ textAlign: "start" }}>
            <Link className={style.link_login} to='/login'>
              Login here
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
