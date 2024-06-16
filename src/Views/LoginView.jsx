import styles from './LoginView.module.css';
import { TextField } from "@mui/material";

const LoginView = () => {
  const login = "login";
  return (
    <div>
      <h3>Авторизация</h3>
      <TextField name="title" type="text" value={login} label="Логин" variant="outlined"></TextField>
    </div>
  );
};

export default LoginView;
