import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-[4px]",
  RoundedBorder23: "rounded-[23px]",
  RoundedBorder8: "rounded-[8px]",
  icbCircleBorder36: "rounded-[36px]",
  icbCircleBorder16: "rounded-[16px]",
};
const variants = {
  OutlineBluegray300:
    "border-[1px] border-bluegray_300 border-solid text-bluegray_900",
  GradientOrange200Lime700: "bg-gradient3  text-white_A700",
  FillRed600: "bg-red_600 text-white_A700",
  GradientLightgreen500Lime400: "bg-gradient1  text-white_A700",
  GradientLightgreen501Lime401: "bg-gradient  text-white_A700",
  OutlineBluegray800: "border-[1px] border-bluegray_800 border-solid",
  GradientLightgreen501Lime400a8: "bg-gradient2  text-white_A700",
  FillBlue600: "bg-blue_600",
  FillIndigo901: "bg-indigo_901",
  FillIndigo800: "bg-indigo_800",
  FillBluegray901: "bg-bluegray_901",
  FillGray300: "bg-gray_300 text-bluegray_300",
  OutlineBluegray301:
    "border-[1px] border-bluegray_301 border-solid text-bluegray_301",
  OutlineBlue600: "border-[1px] border-blue_600 border-solid text-blue_600",
  OutlineBluegray600:
    "border-[1px] border-bluegray_600 border-solid text-bluegray_300",
  OutlineBluegray200:
    "border-[1px] border-bluegray_200 border-solid text-bluegray_200",
  OutlineBluegray600_1:
    "bg-white_A700 border-[1px] border-bluegray_600 border-solid",
  FillIndigo900: "bg-indigo_900 text-white_A700",
  FillRed300: "bg-red_300 text-gray_300",
  GradientLightgreen501Lime401_1: "bg-gradient4  text-white_A700",
  OutlineBlack90099:
    "border-[1px] border-black_900_99 border-solid text-black_900_99",
  OutlineGray600: "border-[1px] border-gray_600 border-solid text-gray_600",
  OutlineBlack900: "border-[1px] border-black_900 border-solid text-black_900",
  FillGray501: "bg-gray_501 text-deep_orange_50",
  FillBlack900: "bg-black_900 text-white_A700",
  FillGray401: "bg-gray_401 text-black_900",
  FillGray801: "bg-gray_801 text-deep_orange_50",
  OutlineGray501: "border-[1px] border-gray_501 border-solid text-gray_501",
  icbFillWhiteA700: "bg-white_A700",
  icbFillBluegray901: "bg-bluegray_901",
  icbFillGray800: "bg-gray_800",
  icbFillGray400: "bg-gray_400",
};
const sizes = {
  sm: "p-[5px]",
  md: "p-[10px]",
  lg: "pr-[12px] py-[12px]",
  xl: "p-[14px]",
  "2xl": "p-[17px]",
  smIcn: "p-[6px]",
  mdIcn: "p-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "RoundedBorder23",
    "RoundedBorder8",
    "icbCircleBorder36",
    "icbCircleBorder16",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBluegray300",
    "GradientOrange200Lime700",
    "FillRed600",
    "GradientLightgreen500Lime400",
    "GradientLightgreen501Lime401",
    "OutlineBluegray800",
    "GradientLightgreen501Lime400a8",
    "FillBlue600",
    "FillIndigo901",
    "FillIndigo800",
    "FillBluegray901",
    "FillGray300",
    "OutlineBluegray301",
    "OutlineBlue600",
    "OutlineBluegray600",
    "OutlineBluegray200",
    "OutlineBluegray600_1",
    "FillIndigo900",
    "FillRed300",
    "GradientLightgreen501Lime401_1",
    "OutlineBlack90099",
    "OutlineGray600",
    "OutlineBlack900",
    "FillGray501",
    "FillBlack900",
    "FillGray401",
    "FillGray801",
    "OutlineGray501",
    "icbFillWhiteA700",
    "icbFillBluegray901",
    "icbFillGray800",
    "icbFillGray400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
