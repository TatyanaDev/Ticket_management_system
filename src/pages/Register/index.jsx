import { Formik } from "formik";
import cn from "classnames";
import * as Yup from "yup";
import UserRegistrationForm from "../../Components/UserRegistrationForm";
import logo from "../../icons/Logo.svg";
import style from "./styles.module.css";

export default function Register() {
  const initialValues = {
    email: "",
    createPassword: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required"),
    createPassword: Yup.string().trim().min(6, "Password has to be longer than 6 characters!").required("Create password is required!"),
    repeatPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("createPassword")], "Passwords are not the same!")
      .required("Repeat password is required!"),
  });

  const createUser = async (values, formikBag) => {
    try {
    } catch (err) {}
  };

  return (
    <section className={style.wrapper}>
      <article className={cn(style.container, "container")}>
        <article className={style.wrapper_logo}>
          <img className={style.logo} src={logo} alt='shoplab' />
          <article className={style.wrapper_form}>
            <h1 className={style.heading}>Welcome to</h1>
            <h2 className={style.sub_heading}>Shoplab ticketing system</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={createUser} children={UserRegistrationForm} />
          </article>
        </article>
      </article>
    </section>
  );
}
