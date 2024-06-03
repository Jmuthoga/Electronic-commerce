import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import Homeproduct from "./Components/Home/home_product";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };

  const allcatefilter = () => {
    setShop(Homeproduct);
  };

  const searchlength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchlength) {
      alert("Please Search Something !");
      setShop(Homeproduct);
    } else {
      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To cart");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <Routes>
          <Route>
            <Route path="/" element={<Home addtocart={addtocart} />} />
            <Route
              path="/shop"
              element={
                <Shop
                  shop={shop}
                  Filter={Filter}
                  allcatefilter={allcatefilter}
                  addtocart={addtocart}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
