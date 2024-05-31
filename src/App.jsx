import { Header } from "./views/Header/Header.jsx";
import { Footer } from "./views/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog.jsx";
import { Goods } from "./views/Goods/Goods.jsx";
import { Order } from "./components/Order/Order.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { Card } from "./components/Card/Card.jsx";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { Container } from "./views/Container/Container.jsx";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs/>
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/order/:orderId",
    element: (
      <>
        <Header />
        <main>
          <Order />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs/>
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return (
      <Container>
        <div>Загрузка...</div>;
      </Container>
    );
  }

  return <RouterProvider router={router} />;
};

export default App;
