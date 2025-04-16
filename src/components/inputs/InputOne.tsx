'use client';

import { ReactNode } from "react";

type InputProps = {
  key?: number;
  placeholderText?: string;
  classes?: string;
  classes2?: string;
  value?: string | number | boolean;
  type?: 'text' | 'email' | 'password' | 'number' | 'file' | 'checkbox' | 'radio';
  name?: string;
  label?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputOne: React.FC<InputProps> = ({
  key = null,
  placeholderText = '',
  classes = '',
  classes2 = '',
  // value = '',
  type = 'text',
  name="",
  label="",
  // icon1 = null,
  icon2 = null,
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  onClick = () => {},
  onChange = () => {},
}) => {

  return (
    <>
    {type === 'radio' ?
    <div className={`flex items-center gap-2 ${classes2}`}>
      <div className=''>
        <input
          key={key}
          id={name}
          type={type}
          name={name}
          required={required}
          placeholder={placeholderText}
          autoFocus={autoFocus}
          checked={checked}
          // value={value}
          disabled={disabled}
          onChange={onChange}
          className={`${classes} `}
        />
      </div>
      <label htmlFor={name} className="text-sm text-neutral-700">{label}</label>
    </div>
    :
    <>
    <label htmlFor={name} className="text-sm text-neutral-700">{label}</label>
    <div className={`${disabled ? 'opacity-50 border-neutral-400 cursor-not-allowed' : 'border-customGray'} w-full bg-white border flex items-center justify-between rounded-radius-12 focus-within:ring-1 focus-within:ring-primary hover:ring-primary`}>
      <input
        key={key}
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholderText}
        autoFocus={autoFocus}
        checked={checked}
        // value={value}
        disabled={disabled}
        onChange={onChange}
        className={`${classes} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} bg-transparent w-full py-[10px] px-3 rounded-radius-12 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]`}
      />
      {icon2 && <button type="button" onClick={onClick} className="border-l px-2">{icon2}</button>}
    </div>
    </>
    }
    </>
  );
};

export default InputOne;
