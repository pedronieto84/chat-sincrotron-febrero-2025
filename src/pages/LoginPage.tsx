import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";


function LoginPage() {

    const formSubmitted = (response: FormValues) => {
        console.log('capturo desde login page el response', response);
    }
  return (
    <>
    <h1>LOGIN PAGE</h1>
      <LoginComponent formSubmitted={formSubmitted} type={'login'} />
      <Link className="nav-link btn" to="/register">Crear cuenta</Link>
      
    </>
  );
}

export default LoginPage;
