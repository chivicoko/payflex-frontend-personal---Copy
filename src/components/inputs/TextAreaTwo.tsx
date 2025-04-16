'use client';

type TextAreaProps = {
  key?: number;
  placeholderText?: string;
  floatingLabel?: string;
  id?: string;
  classes?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

const TextAreaTwo: React.FC<TextAreaProps> = ({
  key = null,
  placeholderText = ' ',
  floatingLabel = ' ',
  id = '',
  classes = '',
  value = '',
  name = '',
  disabled = false,
  required = false,
  autoFocus = false,
  onChange = () => {},
  rows = 3,
}) => {
  return (
    <div className="relative w-full">
      <textarea 
        key={key}
        id={id}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
        value={value}
        name={name}
        placeholder={placeholderText}
        onChange={onChange}
        rows={rows}
        className={`block pt-4 px-3 text-sm text-black bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-[1px] focus:ring-primary peer ${classes}`}
      ></textarea>
      <label 
        htmlFor={id}
        className="absolute text-gray-500 text-sm transform -translate-y-1 scale-90 top-[2px] left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1 transition-all duration-200"
      >
        {floatingLabel}
      </label>
    </div>
  );
};

export default TextAreaTwo;
