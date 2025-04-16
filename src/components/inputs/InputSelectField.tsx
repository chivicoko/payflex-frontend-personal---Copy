"use client";

import { ReactNode, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type SelectInputProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  key?: number;
  label?: string;
  placeholderText?: string;
  mode?: string;
  classes?: string;
  valueArray: string[]; // Options for the select input
  error?: FieldError;
  icon2?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SelectInputField = forwardRef<HTMLSelectElement, Omit<SelectInputProps, "ref">>(
  (
    {
      placeholderText = "",
      mode = "",
      classes = "",
      label = "",
      valueArray = [],
      icon2 = null,
      error,
      onClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={props.name} className="text-sm text-neutral-700">
          {label}
        </label>
        <div
          className={`${
            props.disabled
              ? mode === 'uneditable' ? "opacity-50 border-neutral-400 cursor-not-allowed" : mode === 'editable' ? "border-transparent cursor-not-allowed" : ''
              : "border-customGray"
          } w-full bg-white border pl-2 pr-4 flex items-center justify-between rounded-xl focus-within:ring-1 focus-within:ring-primary hover:ring-primary`}
        >
          <select
            ref={ref}
            id={props.name}
            className={`${classes} ${
              props.disabled ? mode === 'uneditable' ? "opacity-40 cursor-not-allowed" : mode === 'editable' ? "cursor-not-allowed" : '' : ""
            } bg-transparent w-full py-[10px] rounded-xl capitalize border-0 text-xs outline-0 ring-0 text-[#666666]`}
            {...props}
          >
            <option value="" disabled className="text-center">
              -- {placeholderText} --
            </option>
            <hr />
            {valueArray.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {icon2 && (
            <button type="button" onClick={onClick} className="border-l px-2">
              {icon2}
            </button>
          )}
        </div>

        {error?.message && (
          <p className="text-red-600 text-xs">{error.message.toString()}</p>
        )}
      </div>
    );
  }
);

SelectInputField.displayName = "SelectInputField";

export default SelectInputField;
