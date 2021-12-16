import UserRegistrationForm from "../../Components/Forms/UserRegistrationForm";
import { wrapper_form, wrapper_button } from "./styles.module.css";
import BackgroundOfForms from "../../Components/BackgroundOfForms";

export default function Register() {
  return <BackgroundOfForms form={<UserRegistrationForm margin={wrapper_button} />} padding={wrapper_form} />;
}
