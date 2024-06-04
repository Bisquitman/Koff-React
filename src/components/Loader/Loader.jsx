import { Container } from "../../views/Container/Container";
import s from "./Loader.module.scss";
import { CircleLoader } from "react-spinners";

export const Loader = () => (
  <Container className={s.loader}>
    <CircleLoader
      color="#36d7b7"
      cssOverride={{
        margin: "0 auto",
      }}
    />
  </Container>
);
