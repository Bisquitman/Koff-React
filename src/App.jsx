import { Header } from "./views/Header/Header.jsx";
import { Main } from "./views/Main/Main.jsx";
import { Footer } from "./views/Footer/Footer.jsx";

const App = () => (
  <>
    <Header />
    <Main>
      <p>Text1</p>
    </Main>
    <Footer>Text2</Footer>
  </>
);

export default App;
