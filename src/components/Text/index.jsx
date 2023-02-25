import React from "react";

const variantClasses = {
  h1: "text-[9px]",
  h2: "font-bold sm:text-[48px] md:text-[48px] text-[80px]",
  h3: "font-medium sm:text-[48px] md:text-[48px] text-[60px]",
  h4: "font-medium text-[6.56px]",
  h5: "font-bold sm:text-[42px] md:text-[48px] text-[56px]",
  h6: "font-bold sm:text-[40px] md:text-[46px] text-[54px]",
  body1: "font-normal text-[5.83px]",
  body2: "sm:text-[36px] md:text-[38px] text-[40px]",
  body3: "font-bold text-[4.37px]",
  body4: "sm:text-[34px] md:text-[36px] text-[38px]",
  body5: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  body6: "sm:text-[28px] md:text-[30px] text-[32px]",
  body7: "font-medium sm:text-[26.48px] md:text-[28.48px] text-[30.48px]",
  body8: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  body9: "font-bold sm:text-[22px] md:text-[24px] text-[26px]",
  body10: "sm:text-[20px] md:text-[22px] text-[24px]",
  body11: "text-[20px]",
  body12: "text-[18px]",
  body13: "text-[16px]",
  body14: "font-normal text-[15.42px]",
  body15: "text-[14px]",
  body16: "font-bold text-[13.12px]",
  body17: "font-bold text-[125px] sm:text-[48px] md:text-[48px]",
  body18: "text-[12px]",
  body19: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
