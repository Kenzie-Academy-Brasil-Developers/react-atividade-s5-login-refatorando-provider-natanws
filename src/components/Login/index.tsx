import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";

interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const loginUser = (data: UserData) => {
    signIn(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(loginUser)}>
        <input type="text" placeholder="E-mail" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};
