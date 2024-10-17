import React from "react";
import Background from "../components/Background";
import Login from "../components/Login";
import clientService from "../services/clientService";


export default function LoginPage() {
  return (
    <Background
      component={React.createElement(Login, {clientService: clientService})}
    />
  );
}
