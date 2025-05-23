import { useState } from "react";
import React from "react";
import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard";
// import OrderList from "./pages/Order";
// import Customers from "./pages/Customer";
// import NotFound from "./pages/Notfound";
// import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayouts";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import Loading from "./components/Loading";

import GuestLayout from './layouts/GuestLayout';
import Guest from './pages/guest';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const OrderList = React.lazy(() => import("./pages/Order"));
const UserList = React.lazy(() => import("./pages/User"));
const Customers = React.lazy(() => import("./pages/Customer"));
const NotFound = React.lazy(() => import("./pages/Notfound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));



function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route element={<MainLayout />}>
          <Route path="/errors/:code" element={<ErrorPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<UserList />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        // GuestLayout
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
