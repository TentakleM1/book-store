"use client"
import Form from "@/components/form/form";
import mail from "../../../../../public/imgs/mail.png";
import hide from "../../../../../public/imgs/hide.png";
import { useAppDispatch } from "@/store/store";
import { IUser, signUp } from "@/store/userSlice/userSlice";

export default function SignUp() {
  const dispatch = useAppDispatch();
  const SignUpInputs = [
    {
      src: mail,
      type: "email",
      placeholder: "Email",
      inputName: "email",
    },
    {
      src: hide,
      type: "password",
      placeholder: "Password",
      inputName: "password",
    },
    {
      src: hide,
      type: "password",
      placeholder: "Password replay",
      inputName: "password",
    },
  ];

  const registration = (data: IUser) => {
    dispatch(signUp(data));
  };

  return (
    <>
      <h1>Sign Up</h1>
      <Form
        title="Sign Up"
        inputs={SignUpInputs}
        handleForm={registration}
      />
    </>
  );
}
