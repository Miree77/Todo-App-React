import React from "react";
import { Navigate } from "react-router-dom";

const SocialLogin = (props) => {
  const getUrlParameter = (nameParam) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get(nameParam);
  };

  const token = getUrlParameter("token");
  console.log("token parsing: " + token);

  if (token) {
    localStorage.setItem("ACCESS_TOKEN", token);
    return (
      <Navigate
        to={{
          pathname: "/",
          state: { from: props.location },
        }}
      />
    );
  } else {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: props.location },
        }}
      />
    );
  }
};

export default SocialLogin;
