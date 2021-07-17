import React from "react";
import "./lopgin.min.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes, initialState } from "./reducer";

export default function Login() {
  const [state, dispatch] = useStateValue();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
        <img src="https://www.messagespace.co.uk/wp-content/uploads/2021/04/principal_captura-de-pantalla-de-2019-11-04-11-45-14.jpg" />
      </div>

      <Button type="submit" onClick={signin}>
        Sign In
      </Button>
    </div>
  );
}
