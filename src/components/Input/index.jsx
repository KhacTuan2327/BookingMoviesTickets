import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillBluegray901: "bg-bluegray_901",
  FillIndigo901: "bg-indigo_901",
  FillIndigo800: "bg-indigo_800",
  FillGray300: "bg-gray_300",
  UnderLineBluegray300: "border-b-[1px] border-bluegray_300",
  UnderLineRed300: "border-b-[1px] border-red_300",
  srcOutlineBluegray600: "border-[1px] border-bluegray_600 border-solid",
  srcOutlineBluegray200:
    "bg-white_A700 border-[1px] border-bluegray_200 border-solid",
  srcOutlineBluegray200_1: "border-[1px] border-bluegray_200 border-solid",
  srcOutlineBluegray200_2:
    "bg-gray_300_99 border-[1px] border-bluegray_200 border-solid",
  srcOutlineBluegray200_3:
    "bg-bluegray_50 border-[1px] border-bluegray_200 border-solid",
};
const shapes = { srcRoundedBorder6: "rounded-[6px]" };
const sizes = {
  sm: "pb-[16px]",
  md: "pb-[11px] pt-[5px]",
  lg: "pb-[11px] pr-[5px] pt-[5px]",
  xl: "px-[8px] py-[9px]",
  "2xl": "pl-[8px] py-[9px]",
  "3xl": "pb-[16px] pt-[13px] px-[12px]",
  smSrc: "pl-[9px] py-[10px]",
  mdSrc: "pl-[13px] py-[14px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder6"]),
  variant: PropTypes.oneOf([
    "FillBluegray901",
    "FillIndigo901",
    "FillIndigo800",
    "FillGray300",
    "UnderLineBluegray300",
    "UnderLineRed300",
    "srcOutlineBluegray600",
    "srcOutlineBluegray200",
    "srcOutlineBluegray200_1",
    "srcOutlineBluegray200_2",
    "srcOutlineBluegray200_3",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "smSrc",
    "mdSrc",
  ]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
