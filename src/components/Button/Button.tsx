import { IButtonProps } from "./ButtonTypes";

export default function Button({title, handleOnClick}: IButtonProps) {
  return <button onClick={handleOnClick}>{title}</button>;
}
