import { Container } from "../Container/Container.jsx";
import s from "./Footer.module.scss";
import { Logo } from "../../components/Logo/Logo.jsx";
import { Contacts } from "../../components/Contacts/Contacts.jsx";
import { Developer } from "../../components/Developer/Developer.jsx";

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo/>
      </div>

      <div className={s.contacts}>
        <Contacts/>
      </div>

      <div className={s.developer}>
        <Developer/>
      </div>

      <p className={s.copyright}>&copy;&nbsp;Koff,&nbsp;2024</p>
    </Container>
  </footer>
);