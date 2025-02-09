import { Link, useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues, User } from "../types/globalTypes";

import { useDispatch } from "react-redux";
import { loginAsync } from "./../store/actions";



function LoginPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmitted = async (response: FormValues) => {

    const user = await dispatch(loginAsync(response.email, response.password) as any) as User

    if (user.id) {

      navigate('/hall');
      return
    }
    navigate('/register');
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
