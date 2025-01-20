import { Button, Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import style from "../styles.module.css";

export default function UserAuthorizationForm({ margin }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required!"),
    password: Yup.string().trim().min(6, "Password has to be longer than 6 characters!").required("Password is required!"),
    rememberMe: Yup.boolean(),
  });

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const checkUser = async (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
    navigate("/dashboard");

    try {
    } catch (err) {}
  };

  return (
    <>
      <Formik validateOnChange={false} initialValues={initialValues} validationSchema={validationSchema} onSubmit={checkUser}>
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
              Password
            </label>
            <Field name='password' className={style.input} type='password' />
            <ErrorMessage name='password' component='div' className={style.error} />
          </Row>

          <Row className={style.input_container}>
            <Col className='p-0'>
              <Field name='rememberMe' type='checkbox' style={{ marginRight: 7, cursor: "pointer" }} />
              <label style={{ color: "var(--bs-dark)", fontSize: 16 }}>Remember Me</label>
            </Col>
            <Col style={{ textAlign: "end", paddingBottom: 1 }}>
              <Link className={style.link_forgot_password} style={{ fontSize: 16 }} to='/login'>
                Forgot Password?
              </Link>
            </Col>
          </Row>

          <Row className={margin} style={{ width: 350 }}>
            <Button className={style.button} type='submit'>
              Login
            </Button>
          </Row>
        </Form>
      </Formik>

      <Container>
        <Row>
          <Col className={style.before_link} xxl={7}>
            Dont have an account?
          </Col>

          <Col className='p-0' style={{ textAlign: "start" }}>
            <Link className={style.link_login} to='/'>
              Join free today
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
