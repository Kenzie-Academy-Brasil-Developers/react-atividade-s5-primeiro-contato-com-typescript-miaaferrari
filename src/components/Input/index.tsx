import { InputHTMLAttributes } from "react"
import {InputBox} from './style.js';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label?: string;
}

export const Input = ({ placeholder, label, ...rest }: InputProps) => {

    return (
        <InputBox>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} {...rest} />
        </InputBox>
    )
}