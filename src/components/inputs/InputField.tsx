"use client";

import { ReactNode, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  key?: number;
  placeholderText?: string;
  mode?: string;
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

const InputField = forwardRef<HTMLInputElement, Omit<InputProps, "ref">>(
  (
    {
      placeholderText = "",
      mode = "",
      classes = "",
      classes2 = "",
      type = "text",
      label = "",
      icon2 = null,
      error,
      onClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <>
        {type === "radio" ? (
          <div className="flex flex-col">
            <div className={`flex items-center gap-2 ${classes2}`}>
              <div className="">
                <input
                  ref={ref}
                  id={props.name}
                  {...props}
                  placeholder={placeholderText}
                  className={`${classes} `}
                />
              </div>
              <label htmlFor={props.name} className="text-sm text-neutral-700">
                {label}
              </label>
            </div>

            {error?.message && (
              <p className="text-red-600 text-xs">
                {error.message.toString()}
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <label htmlFor={props.name} className="text-sm text-neutral-700">
              {label}
            </label>
            <>
              <div
                className={`${
                  props.disabled
                    ? mode === 'uneditable' ? "opacity-50 border-neutral-400 cursor-not-allowed" : mode === 'editable' ? "border-transparent cursor-not-allowed" : ''
                    : "border-customGray"
                } w-full bg-white border flex items-center justify-between rounded-xl focus-within:ring-1 focus-within:ring-primary hover:ring-primary`}
              >
                <input
                  ref={ref}
                  id={props.name}
                  type={type}
                  placeholder={placeholderText}
                  className={`${classes} ${
                    props.disabled ? mode === 'uneditable' ? "opacity-40 cursor-not-allowed" : mode === 'editable' ? "cursor-not-allowed" : '' : ""
                  } bg-transparent w-full py-[10px] px-3 rounded-xl border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]`}
                  {...props}
                />
                {icon2 && (
                  <button type="button" onClick={onClick} className="border-l px-2">
                    {icon2}
                  </button>
                )}
              </div>
            </>
            {error?.message && (
              <p className="text-red-600 text-xs">
                {error.message.toString()}
              </p>
            )}
          </div>
        )}
      </>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
