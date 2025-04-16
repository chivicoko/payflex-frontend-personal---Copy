'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  key?: number;
  title?: string;
  href?: string;
  processText?: string;
  btnText1?: string;
  btnText2?: string;
  btnText1Classes?: string;
  btnText2Classes?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
};

const ButtonLinkOne: React.FC<ButtonProps> = ({
  title = '',
  href = '',
  btnText1 = '',
  btnText2 = '',
  btnText1Classes = '',
  btnText2Classes = '',
  icon1 = null,
  icon2 = null,
  classes = '',
  type = 'button',
}) => {

  return (
    <Link
      key={0}
      type={type}
      href={href}
      title={title || btnText1}
      className={`flex items-center justify-center gap-2 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-8 hover:cursor-pointer shadow-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none transition-all duration-300 ease-in-out ${classes}`}
    >
      {icon1 && <span>{icon1}</span>}
      <span className={`${btnText2Classes}`}>{btnText2}</span>
      <span className={`${btnText1Classes}`}>{btnText1}</span>
      {icon2 && <span>{icon2}</span>}
    </Link>
  );
};

export default ButtonLinkOne;
