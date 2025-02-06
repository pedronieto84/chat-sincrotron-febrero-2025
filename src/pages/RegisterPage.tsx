import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

function RegisterPage() {
  return (
    <>
      <h1>Register Page</h1>
      <LoginComponent />
      <Link className="nav-link btn" to="/">Ya tengo  cuenta</Link>
    </>
  );
}

export default RegisterPage;
