import UserAuthorizationForm from "../../Components/Forms/UserAuthorizationForm";
import BackgroundOfForms from "../../Components/BackgroundOfForms";
import { wrapper_form, wrapper_button } from "./styles.module.css";

export default function Login() {
  return <BackgroundOfForms form={<UserAuthorizationForm margin={wrapper_button} />} padding={wrapper_form} />;
}
