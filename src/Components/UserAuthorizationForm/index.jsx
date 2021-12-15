import { Link } from "react-router-dom";
import { Form, Field } from "formik";
import style from "./styles.module.css";

export default function UserAuthorizationForm({ errors, touched }) {
  return (
    <Form>
      <article className={style.input_container}>
        <label className={style.label}>Email </label>
        <Field className={style.input} name='email' />
        {errors.email && touched.email && <p className={style.error}>{errors.email}</p>}
      </article>

      <article className={style.input_container}>
        <label className={style.label}>Password </label>
        <Field className={style.input} name='password' type='password' />
        {errors.password && touched.password && <p className={style.error}>{errors.password}</p>}
      </article>

      <article className={style.input_container}>
        <Field className={style.checkbox} name='checked' type='checkbox' />
        <label className={style.remember_me}>Remember me</label>
        <Link className={style.forgot_password} to='/login'>
          Forgot Password?
        </Link>
      </article>

      <nav>
        <ul>
          <li>
            <button className={style.button} type='submit'>
              Login
            </button>
          </li>
          <li className={style.wrapper_link_login}>
            <span>Dont have an account? </span>
            <Link className={style.link_login} to='/'>
              Join free today
            </Link>
          </li>
        </ul>
      </nav>
    </Form>
  );
}
