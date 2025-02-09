import { Link, useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues, User } from "../types/globalTypes";


// Imports para redux
import { useDispatch } from "react-redux";
import { createUserAsync } from "./../store/actions";

function RegisterPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Instancio el dispatch
  
  const formSubmitted = async (response: FormValues) => {

    const user = await dispatch(createUserAsync(response.email, response.password) as any) as User
    
   
    
    if(user.id){
      // Navego alHall
      navigate('/hall');
      return
    }
    // navego a RegisterPage
    navigate('/register');

}
  return (
    <>
      <h1>Register Page</h1>
      <LoginComponent
        formSubmitted={formSubmitted}
        type={"register"}
       />
      <Link className="nav-link btn" to="/">Ya tengo  cuenta</Link>
    </>
  );
}

export default RegisterPage;
