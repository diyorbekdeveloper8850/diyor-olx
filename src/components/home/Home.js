import React, { useEffect, useState } from "react";
import NavFot from "../navfot/NavFot";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useUserContext } from "../../Contexts/Context";
import FilterSearch from "../filter/FilterSearch";
import FilterCategory from "../filter/FilterCategory";
import Products from "../products/Products";
import { Alert } from "@mui/material";
import FilterProducts from "../products/FilterProducts";
import { useAuthContext } from "../../Contexts/AuthContext";
import firebase from "firebase";
import { auth, db } from "../../firebase.config";
import { toast } from "react-toastify";
import "./home.scss";
function Home() {
  const { products, filteredProducts } = useUserContext();

  //   Uid
  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }
  const uid = GetUserUid();
  function UserTimeOut() {
    db.collection("users").doc(uid).update({
      timeout: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  useEffect(() => {
    let timer = 0;
    if (uid !== null) {
      // timer = setInterval(() => {
      UserTimeOut();
      console.log("update", timer + 1);
      // }, 1000);
    }
  });
  const [delay, setDelay] = useState(true); //default holatda loader ko'rinadi

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false); //5s sekundan keyin loader o'chadi false qiymatga o'tadi
    }, 2000); //5s loader aylanishi
  }, [products]);
  return (
    <>
      {products && delay ? (
        <Loading />
      ) : (
        <div className="row">
          <NavFot>
            <Alert severity="warning">
              <strong>
                E’tibor bering, DiyorOLX - da yetkazib berish xizmati mavjud
                emas
              </strong>
              <br />
              <small>
                Eng muhimi, hech qachon bank kartangiz maxfiy raqamini hech
                kimga bermang.{" "}
                <a
                  className="text-dark"
                  href="https://help.olx.uz/hc/ru/articles/360013813097-Xavfsizlik-to-g-risida-umumiy-ma-lumot-"
                >
                  Internetda xavfsiz xarid qilishni bilib oling
                </a>
              </small>
            </Alert>
            {uid !== null ? null : (
              <Alert severity="error" className="mt-2">
                {" "}
                E'lon joylashtirish uchun ro'yxatdan o'tishingiz kerak.
                <Link to="/login" className="mar-l">
                  Login
                </Link>
                <Link to="/register" className="mar-l">
                  Register
                </Link>
              </Alert>
            )}
            <FilterSearch />
            <FilterCategory />
            <Products />
          </NavFot>
        </div>
      )}
    </>
  );
}

export default Home;
