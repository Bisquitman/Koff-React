import s from "./Main.module.scss";
import { Goods } from "../../components/Goods/Goods.jsx";
import { Catalog } from "../../components/Catalog/Catalog.jsx";

export const Main = () => (
  <main className={s.main}>
    <Catalog/>
    <Goods/>
  </main>
);
