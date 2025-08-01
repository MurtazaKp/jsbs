"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import videoImg from "../../public/images/others/video-06.jpg";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/Context";

const LoginComponent = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setIsLogin, isLogin } = useAppContext();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLogin(true);

    Cookies.set("isLogin", "true", { path: "/" });
    router.push("/");
  };

  return (
    <div className="rbt-video-area bg-color-white rbt-section-gap" id="about">
      <div className="container">
        <div className="row g-5 align-items-center d-flex">
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="video-popup-wrapper">
              <Image
                className="w-100 rbt-radius"
                src={videoImg}
                width={638}
                height={407}
                alt="Video Images"
              />
            </div>
          </div>

          {/* Login Form Section */}
          <div className="col-lg-6">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="btn btn-sm text-orange fs-4 mb-3"
            >
              <i className="feather-arrow-left"></i> Back
            </button>

            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <h3 className="title">Login</h3>
              <form className="max-width-auto" onSubmit={handleLogin}>
                <div className="form-group">
                  <input name="con_name" type="number" placeholder="ITS No" />
                  <span className="focus-border"></span>
                </div>

                <div className="form-group position-relative">
                  <input
                    name="con_email"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password *"
                  />
                  <span className="focus-border"></span>

                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={togglePassword}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      lineHeight: 1,
                    }}
                  >
                    <i
                      className={`feather ${
                        showPassword ? "feather-eye-off" : "feather-eye"
                      }`}
                    ></i>
                  </button>
                </div>

                <div className="form-submit-group">
                  <button
                    type="submit"
                    className="rbt-btn btn-md bg-orange hover-icon-reverse w-100"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Log In</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
