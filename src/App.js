import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import Admin from "./components/admin/dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes className="content">
          {/* It's the best to avoid optional parameter */}
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/posts/:year/:month" element={<Posts />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/messages" element={<Navigate to="/" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
