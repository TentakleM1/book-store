"use client";
import Form from "@/components/form/form";
import mail from "../../../../../public/imgs/mail.png";
import hide from "../../../../../public/imgs/hide.png";
import { IUser, loginIn } from "@/store/userSlice/userSlice";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { validate } from "@/shared/utils/validate/validate";
import { loginInSchema } from "@/shared/utils/validate/schema/userSchema";

export default function LoginIn() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const LoginInInputs = [
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
  ];

  const login = async (data: IUser) => {
    validate(loginInSchema, data)
    const user = (await dispatch(loginIn(data))).payload;
    if (user) {
      router.push("/");
    }
  };

  return (
    <>
      <h1>Login in</h1>
      <Form title="Login in" inputs={LoginInInputs} handleForm={login} />
    </>
  );
}
