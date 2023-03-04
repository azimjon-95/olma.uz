import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../router/cart/Cart";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import Favorites from "../router/favorite/Favorites";
import { useSelector } from "react-redux";
import SignIn from "../components/signIn/SignIn";
import Footer from "../components/footer/Footer";
import MyProfile from "../router/myProfile/MyProfile";
import SearchBar from "../components/searchBar/SearchBar";
import BackBtn from "../components/ScrollBackToTop/Scroll";
import Admin from "../router/admin/Admin";
function App() {
  const auth = useSelector((s) => s?.auth);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {auth ? (
          <Route path="/" element={<Navigate replace to="/admin" />} />
        ) : (
          <Route path="/admin" element={<Navigate replace to="/" />} />
        )}
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin/*" element={<Admin />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/myProfile" element={<MyProfile />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <BackBtn />
      <Footer />
    </div>
  );
}

export default App;
