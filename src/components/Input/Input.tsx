import "./Input.scss";
import { IInputProps, TypeOfInput } from "./InputTypes";

export default function Input({
  placeholder,
  name,
  inputChangeState,
  inputValue = "",
  type = TypeOfInput.Text,
}: IInputProps) {
  return (
    <input
      className="focus-border-primaryColor"
      type={type}
      placeholder={placeholder}
      name={name}
      value={inputValue}
      onChange={inputChangeState}
    />
  );
}
