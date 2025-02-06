import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function LoginComponent({formSubmitted, type}: {formSubmitted: (response) => void, type: string}) {

        // Estados para los campos del formulario
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Estados para los errores de validación
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  // Estado para habilitar/deshabilitar el botón de enviar
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Expresiones regulares para validación
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z0-9]{6,}$/;

    // Validar el email
    const validateEmail = () => {
        if (!emailRegex.test(email)) {
          setEmailError('Por favor, introduce un email válido.');
          return false;
        } else {
          setEmailError('');
          return true;
        }
      };
    
      // Validar la contraseña
      const validatePassword = () => {
        if (!passwordRegex.test(password)) {
          setPasswordError('La contraseña debe tener al menos 6 caracteres alfanuméricos.');
          return false;
        } else {
          setPasswordError('');
          return true;
        }
      };

        // Validar el formulario completo
  useEffect(() => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
        
        console.log(email, password)
        formSubmitted({email, password});
      // Aquí puedes hacer una llamada API o redireccionar
    }
  };
  return (
    <>
    <Form onSubmit={handleSubmit}>
        {/* Campo de Email */}
        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">
                {emailError}
            </Form.Control.Feedback>
        </Form.Group>

        {/* Campo de Contraseña */}
        <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!passwordError}
            />
            <Form.Control.Feedback type="invalid">
                {passwordError}
            </Form.Control.Feedback>
        </Form.Group>

        {/* Botón de Enviar */}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" type="submit" disabled={!isFormValid}>
            {type === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
        </Button>
        </div>
     
    </Form></>
  );
}

export default LoginComponent;
