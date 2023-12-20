import React, { useState } from "react";

export const AuthForm = ({ onSubmit, isLoginPage }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(inputs);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input value={inputs.email} onChange={onChange} name="email" />
      <input
        value={inputs.password}
        onChange={onChange}
        name="password"
        type="password"
      />

      <button>{isLoginPage ? "Login" : "Register"}</button>
    </form>
  );
};
