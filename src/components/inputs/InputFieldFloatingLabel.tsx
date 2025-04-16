'use client';

import { forwardRef, ReactNode } from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  key?: number;
  placeholderText?: string;
  floatingLabel?: string;
  classes?: string;
  classes2?: string;
  label?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  leftIconProps?: {
    icon: ReactNode;
    onClick: () => void;
  };
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  error?: FieldError;
};



const InputFieldFloatingLabel = forwardRef<HTMLInputElement, Omit<InputProps, "ref">>(
  (
    {
      placeholderText = "",
      floatingLabel = "",
      classes = "",
      type = "text",
      icon2 = null,
      error,
      onClick = () => {},
      ...props
    },
    ref
  ) => {
  return (
    <div className="relative w-full">
      <div
        className={`${
          props.disabled
            ? "opacity-50 border-neutral-400 cursor-not-allowed"
            : "border-customGray"
        } w-full bg-white border flex items-center justify-between rounded-xl focus-within:outline-none focus-within:ring-[1px] focus-within:ring-primary`}
        >
          
        <input 
          ref={ref}
          id={props.name}
          type={type}
          placeholder={placeholderText}
          {...props}
          className={`${
            props.disabled
              ? "opacity-50 border-neutral-400 cursor-not-allowed"
              : "border-customGray"
          } ${classes} block h-10 pt-2 px-3 rounded-radius-12 text-sm outline-none bg-transparent appearance-none hover:ring-primary peer`}
        />

        {icon2 && (
          <button type="button" onClick={onClick} className="border-l px-2">
            {icon2}
          </button>
        )}
        <label 
          htmlFor={props.name}
          className="absolute text-gray-400 peer-placeholder-shown:text-gray-500 peer-focus:text-gray-600 text-sm transform -translate-y-1 scale-90 top-[2px] left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          {floatingLabel}
        </label>
      </div>


      {error?.message && (
        <p className="text-red-600 text-xs">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
});

InputFieldFloatingLabel.displayName = "InputFieldFloatingLabel";

export default InputFieldFloatingLabel;
