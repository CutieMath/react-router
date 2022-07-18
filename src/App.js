import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes className="content">
          <Route path="/products" element={<Products />} component={Products} />
          <Route path="/posts" element={<Posts />} component={Posts} />
          <Route path="/" element={<Home />} component={Home} />
        </Routes>
      </div>
    );
  }
}

export default App;
