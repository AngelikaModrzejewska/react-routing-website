import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
