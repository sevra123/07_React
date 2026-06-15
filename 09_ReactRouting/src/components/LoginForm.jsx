import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  return <button onClick={handleLogin}>Log in</button>;
}

export default LoginForm;
