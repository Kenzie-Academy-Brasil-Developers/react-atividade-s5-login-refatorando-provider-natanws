import { useAuth } from "../../Providers/Auth";
import { Container } from "./styles";

export const Dashboard = () => {
  const { Logout } = useAuth();

  return (
    <Container>
      <h3>Bem-vind@!</h3>
      <button onClick={Logout}>Logout</button>
    </Container>
  );
};
