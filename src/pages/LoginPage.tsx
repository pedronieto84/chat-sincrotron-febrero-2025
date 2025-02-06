import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";


function LoginPage() {
  return (
    <>
    <h1>LOGIN PAGE</h1>
      <LoginComponent />
      <Link className="nav-link btn" to="/register">Crear cuenta</Link>
      
    </>
  );
}

export default LoginPage;
