import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";


function LoginPage() {

    const formSubmitted = (response) => {
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
