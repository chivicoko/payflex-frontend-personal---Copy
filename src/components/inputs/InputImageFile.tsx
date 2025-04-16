'use client';

import Image from "next/image";
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  key?: number;
  placeholderText?: string;
  classes?: string;
  imageContainerClasses?: string;
  imageInputClasses?: string;
  labelClasses?: string;
  inputClasses?: string;
  inputContainerClasses?: string;
  value?: string | number | boolean;
  type?: 'file';
  imgLabel?: '';
  imgAlt?: '';
  name?: string;
  label?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  error?: FieldError;
  defaultValue?: string;
  // register: any;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputImageFile: React.FC<InputProps> = ({
  key = null,
  placeholderText = '',
  classes = '',
  imageInputClasses = '',
  imageContainerClasses = '',
  labelClasses = '',
  inputClasses = '',
  inputContainerClasses = '',
  // value = '',
  type = 'file',
  imgLabel = '',
  imgAlt = '',
  name="",
  label="",
  // icon1 = null,
  icon2 = null,
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  error,
  defaultValue,
  // register,
  inputProps,
  onClick = () => {},
  onChange = () => {},
}) => {

  return (
    <div className={`${classes} ${disabled ? 'opacity-50 border-neutral-400 cursor-not-allowed' : 'border-customGray'} "flex flex-col cursor-pointer`}>
      <label htmlFor={name} className={`${labelClasses} cursor-pointer`}>
        {label && label}
        {imgLabel && <div className={`relative size-10 ${imageContainerClasses}`}>
          <Image
            src='/icons/alert-circle.svg'
            // src={imgLabel}
            alt={imgAlt}
            fill
            priority
            className={`object-contain ${imageInputClasses}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>}
      </label>
    
      <div className={`${inputContainerClasses}`}>
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
          defaultValue={defaultValue}
          {...inputProps}
          // {...register(name)}
          className={`${inputClasses} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
        />
        {icon2 && <button type="button" onClick={onClick} className="border-l px-2">{icon2}</button>}
      </div>

      {error?.message && <p className='text-red-600 text-xs'>{error.message.toString()}</p>}
    </div>
  );
};

export default InputImageFile;
