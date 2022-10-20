import React, { MouseEventHandler, useState } from "react";
import "./main.scss";
import Login from "./pages/Login";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { TypeOfInput } from "./components/Input/InputTypes";

const useInputController = (defaultState: object) => {
  const [inputValue, setInputValue] = useState(defaultState);

  const changeValue = (event: any) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return {
    changeValue,
    inputValue
  };
};
interface ILogin {
  email: string;
  password: string;
}

function App() {
  const [login, setLogin] = useState({ email: "", password: "" });

  const inputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleOnClick = () => {
    console.log('Click');
  }

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
