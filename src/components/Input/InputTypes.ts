import { Dispatch, SetStateAction } from "react";

export interface IInputProps {
    placeholder: string,
    name: string,
    inputValue: string | number,
    inputChangeState: Dispatch<SetStateAction<any>>,
    type?: TypeOfInput,
}

export enum TypeOfInput {
    Password = 'password',
    Text = 'text',
    Number = 'number',
}