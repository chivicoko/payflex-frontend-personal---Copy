'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  key?: number;
  href?: string;
  title?: string;
  bgColor?: string;
  btnText1?: string;
  btnText2?: string;
  btnText1Classes?: string;
  btnText2Classes?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  classes?: string;
};

const ButtonLinkNeutral: React.FC<ButtonProps> = ({
  title = '',
  href = '',
  bgColor = '',
  btnText1 = '',
  btnText2 = '',
  btnText1Classes = '',
  btnText2Classes = '',
  icon1 = null,
  icon2 = null,
  classes = '',
}) => {

  return (
    <Link
      href={href}
      key={0}
      title={title || btnText1}
      className={`focus:ring-2 focus:ring-${bgColor ? bgColor+'-700' : 'primary'} focus:ring-offset-2 outline-none transition-all duration-300 ease-in-out ${classes}`}
    >
      {icon1 && <span>{icon1}</span>}
      <span className={`${btnText2Classes}`}>{btnText2}</span>
      <span className={`${btnText1Classes}`}>{btnText1}</span>
      {icon2 && <span>{icon2}</span>}
    </Link>
  );
};

export default ButtonLinkNeutral;
