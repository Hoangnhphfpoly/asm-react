import React from "react";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import Catalog from "./components/Catalog";
import Detail_product from "./components/Detail_product";
import ScrollToTop from "./ScrollToTop ";
import Cart from "./components/Cart";
import { CartProvider } from "./context/Cart";
import Detail_post from "./components/Detail_post";
// import bg from "./image/bg.jpg";

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-900">
        <Router>
          <ScrollToTop />
          <div className="fixed bg-gray-900 border-b border-gray-800 w-screen">
            <div className="container mx-auto">
              <Nav />
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/products/:id">
              <Detail_product />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/posts/:id">
              <Detail_post />
            </Route>
          </Switch>
        </Router>

        <div className="container mx-auto border-t-2 border-gray-800">
          <Brand />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
