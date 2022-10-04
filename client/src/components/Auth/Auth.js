import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { login, register } from "../../actions/auth";

const initialState = {
  userType: "",
  firstName: "",
  lastName: "",
  userName: "",
  mail: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(register(formData, history));
    } else {
      dispatch(login(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup
            ? isLanguageEnglish
              ? "Sign up"
              : "Zarejestruj się"
            : isLanguageEnglish
            ? "Sign in"
            : "Kirish się"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label={isLanguageEnglish ? "First Name" : "Ism"}
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label={isLanguageEnglish ? "Last Name" : "Familya"}
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="userType"
                  label={
                    isLanguageEnglish
                      ? "User type"
                      : "Ustoz yoki Talaba: Bosh harf bilan yozing!"
                  }
                  handleChange={handleChange}
                />
                <Input
                  name="mail"
                  label={isLanguageEnglish ? "Email address" : "Email manzil"}
                  handleChange={handleChange}
                  type="email"
                />
              </>
            )}

            <Input
              name="userName"
              label={isLanguageEnglish ? "User Name" : "Foydalanuvchi nomi"}
              handleChange={handleChange}
            />
            <Input
              name="password"
              label={isLanguageEnglish ? "Password" : "Maxfiy parol"}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label={
                  isLanguageEnglish
                    ? "Repeat password"
                    : "Maxfiy parol qayta tering!"
                }
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup
              ? isLanguageEnglish
                ? "Sign up"
                : "Ro`yhatdan o`ting"
              : isLanguageEnglish
              ? "Sign in"
              : "Kirish"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? isLanguageEnglish
                    ? "Already have an account? Sign in"
                    : "Allaqachon hiobingiz bormi? Kirish"
                  : isLanguageEnglish
                  ? "Don't have an account? Sign Up"
                  : "Hisobingiz bo`lmasa, Ro`yhatdan o`tish."}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
