import React, { useState } from "react";
import "./App.scss";
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
    console.log(value);
    setLogin({ ...login, [name]: value });
  };

  return (
    <div className="App">
      <Input
        placeholder="Correo"
        name="email"
        inputValue={login.email}
        inputChangeState={inputHandleChange}
      />
      <Input
        placeholder="Contraseña"
        name="password"
        inputValue={login.password}
        inputChangeState={inputHandleChange}
        type={TypeOfInput.Password}
      />
    </div>
  );
}

export default App;
