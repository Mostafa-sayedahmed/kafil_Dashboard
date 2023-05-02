import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { db, auth } from "../../Firebase/Firebase";
import Swal from "sweetalert2";

import "../../index.css";
import { useNavigate } from "react-router-dom";

import Language from "../../components/Language/Language";

import { useTranslation } from "react-i18next";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  function Alert() {
    Swal.fire({
      title: t("This_email"),
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  function AlertError() {
    Swal.fire({
      title: t("email_or_password"),
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('rememberMe', rememberMe);
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await db
          .collection("users")
          .doc(user.uid)
          .get()
          .then((res) => {
            console.log(res.data());
            const userDoc = res.data();
            console.log(userDoc.isAdmin);
            if (userDoc.isAdmin) {
              localStorage.setItem("isLogged", true);
              localStorage.setItem("user", JSON.stringify(userDoc));
              // console.log(window.location);
              window.location = "/home";
              // navigate("/home");
            } else {
              Alert();
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        AlertError();
      });
  };



  useEffect( () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe');
  
    if (storedRememberMe && storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, [] );



  return (
    <>
      <div className="container">
        <Language />
        <div className="row m-4 bg-light">
          <div className="col-md-6 p-3 bg-white pt-5">
            <h2 className="title text-center text-black fw-bold mt-5">
              {t("Login_name")}
            </h2>
            <form onSubmit={handleSubmit}>
              <label for="floatingEmail" className="p-2">
                {t("Email")}
              </label>
              <br />
              <div className="form-floating">
                <input
                  required
                  type="email"
                  value={email}
                  className="form-control"
                  id="floatingEmail"
                  placeholder={t("Email")}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <label for="floatingPassword " className="p-2">
                {t("Password")}
              </label>
              <div className="form-floating">
                <input
                  required
                  type="password"
                  value={password}
                  className="form-control"
                  id="floatingPassword"
                  placeholder={t("Password")}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="d-flex p-2 m-2 justify-content-between">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  {t("RememberMe")}
                </div>

                <Link
                  to="/forgetpassword"
                  type="button"
                  className="text-decoration-none text-success"
                >
                  {t("ForgottenPassword")}
                </Link>
              </div>

              <button
                type="submit"
                className="btn bg-success text-white w-100 mt-2"
              >
                {t("Login")}
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <img
              src="https://kafiil.com/modules/base/img/static/login.svg"
              alt="imagelogin"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
