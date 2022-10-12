import toast from "react-hot-toast";
import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: AUTH, data });

    toast.success("Muvaffaqiyatli o`tdingiz");
    setInterval(() => history.push("/"), 1000);
  } catch (error) {
    console.log(error);
    toast.error("Parol yoki foydalanuvchi nomi xato");
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    if (formData.password !== formData.confirmPassword) {
      toast.error("tasdiqlash paroli parolga teng bolishi kerak");
    } else if (
      formData.userType !== "Talaba" &&
      formData.userType !== "Ustoz"
    ) {
      toast.error("Foydalanuvchi turi 'Talaba' yoki 'Ustoz' bolishi kerak");
    } else if (formData.userName.length < 6) {
      toast.error("Foydalanuvchi nomi 5 tadan ko'p bo'lishi lozim");
    } else {
      toast.error("email avval ishlatilgan");
    }
    console.log(error);
  }
};