import React from "react";

import { Text, Img, List, Button, CheckBox, Line } from "components";
import { useNavigate } from "react-router-dom";

const ChoosingSeatsPage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate30() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="sm:h-[104px] h-[145px] md:h-[184px] md:px-[20px] relative w-[100%]">
            <Text
              className="absolute bottom-[0] left-[5%] text-bluegray_900 text-left w-[auto]"
              variant="body5"
            >
              CHOOSE SEATS
            </Text>
            <header className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] inset-x-[0] items-center justify-between mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] top-[0] w-[100%]">
              <div
                className="common-pointer flex md:flex-1 items-start justify-start px-[8px] md:w-[100%] w-[9%]"
                onClick={() => navigate("/")}
              >
                <Img
                  src="images/img_tixid1.png"
                  className="h-[88px] md:h-[auto] object-cover w-[88px]"
                  alt="tixidOne"
                />
              </div>
              <ul className="flex sm:flex-col flex-row gap-[48px] sm:hidden items-center justify-end w-[auto] common-row-list">
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[10%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-center text-indigo_800 w-[auto]"
                      href="javascript:"
                    >
                      Home
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[15%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                      href="javascript:"
                    >
                      My Ticket
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[26%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                      href="javascript:"
                    >
                      FILM WILL News
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[7%] my-[4px]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[32px] w-[32px]"
                    alt="notification"
                  />
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="bg-gradient3  cursor-pointer flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-[18px] text-center hover:text-indigo_800 text-white_A700 w-[40px]"
                    href="javascript:"
                  >
                    A
                  </a>
                </li>
              </ul>
            </header>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[72px] mt-[18px] not-italic text-bluegray_600 text-left text-shadow-ts w-[auto]"
            variant="body13"
          >
            Choose the seat you will occupy during the screening
          </Text>
          <div className="md:h-[416px] h-[474px] max-w-[1120px] mt-[44px] mx-[auto] md:px-[20px] relative w-[100%]">
            <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[98%]">
              <List
                className="flex-col gap-[12px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      A1
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      A2
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold h-[15px] text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      A3
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A4{" "}
                  </Button>
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold h-[15px] text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      A5
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A6
                  </Button>
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold h-[15px] text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      A7
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    A9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    A10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[80px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    A20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      B1
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_300 border-solid flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold text-bluegray_900 text-center w-[auto]"
                      variant="body18"
                    >
                      B2
                    </Text>
                  </div>
                  <div className="bg-bluegray_901 flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body18"
                    >
                      B3
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B4{" "}
                  </Button>
                  <div className="bg-bluegray_901 flex h-[36px] md:h-[auto] items-center justify-center md:ml-[0] ml-[12px] px-[4px] py-[16px] rounded-[6px] w-[40px]">
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body18"
                    >
                      B5
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[80px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    B14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    B20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C1
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C2
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C3
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C4{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C5
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlue600"
                  >
                    C8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlue600"
                  >
                    C9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlue600"
                  >
                    C10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[80px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    C15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    C20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D1
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D2
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D3
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D4{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D5
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    D7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    D8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    D9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    D10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[80px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    D11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    D12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    D20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E1
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E2
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E3
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E4{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E5
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[80px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    E11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    E12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[12px] text-[12px] text-center text-white_A700 w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray901"
                  >
                    E13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    E20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F1
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F2
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F3
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F4{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F5
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[80px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    F20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G1
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G2
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G3
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G4{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G5
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[80px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    G20
                  </Button>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start my-[0] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H1
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H2
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H3
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H4{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H5
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H6
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H7
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H8
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H9
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H10
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[80px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H11
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H12
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H13
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H14{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H16
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H17
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H18
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H19
                  </Button>
                  <Button
                    className="cursor-pointer font-bold md:ml-[0] ml-[12px] text-[12px] text-bluegray_900 text-center w-[40px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    H20
                  </Button>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-row gap-[24px] items-center justify-between right-[1%] top-[8%] w-[auto]">
              <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                <div className="bg-bluegray_901 h-[16px] w-[16px]"></div>
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Chosen
                </Text>
              </div>
              <CheckBox
                className="font-bold leading-[normal] text-[12px] text-bluegray_900 text-left"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                label="Empty"
                name="Empty"
                size="md"
                variant="OutlineBluegray300"
              ></CheckBox>
              <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                <div className="bg-blue_600 h-[16px] w-[16px]"></div>
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Choosing
                </Text>
              </div>
            </div>
            <div className="absolute bg-white_A700 h-[212px] left-[0] top-[0] sm:w-[100%] w-[37%]">
              <div className="bg-white_A700 h-[48px] ml-[24px] mt-[24px] w-[38%]"></div>
              <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] p-[24px] sm:px-[20px] rounded-[12px] shadow-bs3 w-[auto]">
                <div className="flex flex-col gap-[18px] items-start justify-start w-[auto]">
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_clock.svg"
                      className="h-[32px] w-[32px]"
                      alt="clock"
                    />
                    <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        14:40
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="h-[32px] rounded-[4px] w-[32px]"
                        alt="arrowup"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start w-[auto]">
                    <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBluegray901"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        15:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        17:15
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        18:15
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        20:00
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        21:00
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold leading-[normal] md:min-w-[100%] min-w-[1440px] mt-[102px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_300 w-[auto]"
            size="2xl"
            variant="FillBlue600"
          >
            Cinema Screen Here
          </Button>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1118px] mt-[61px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:w-[100%] w-[55%]">
              <div className="flex flex-row items-start justify-between md:w-[100%] w-[72%]">
                <Text
                  className="font-medium mt-[2px] text-bluegray_600 text-left w-[auto]"
                  variant="body12"
                >
                  Total
                </Text>
                <Text
                  className="font-medium mb-[2px] text-bluegray_600 text-left w-[auto]"
                  variant="body12"
                >
                  Choosing
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[36px] items-center justify-between md:ml-[0] ml-[3px] w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  variant="body5"
                >
                  Price: 150.000 VND
                </Text>
                <div className="flex items-start justify-start w-[255px]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    variant="body5"
                  >
                    C8, C9, C10
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] mb-[10px] md:ml-[0] ml-[65px] md:mt-[0] mt-[19px] text-[20px] text-bluegray_600 text-center w-[199px]"
              shape="RoundedBorder4"
              size="xl"
              variant="OutlineBluegray600_1"
            >
              RETURN
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] mb-[10px] md:ml-[0] ml-[24px] md:mt-[0] mt-[19px] text-[20px] text-amber_A400 text-center w-[216px]"
              shape="RoundedBorder4"
              size="xl"
              variant="FillBluegray901"
            >
              CONFIRMATION
            </Button>
          </div>
          <footer className="bg-white_A700 flex items-center justify-center mt-[126px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[79px] w-[100%]">
              <div className="flex flex-col gap-[12px] items-center justify-center w-[100%]">
                <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[30px] mr-[166px] md:w-[100%] w-[87%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                    <Img
                      src="images/img_tixid1_96x130.png"
                      className="h-[96px] md:h-[auto] object-cover w-[100%]"
                      alt="tixidOne One"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[96px] items-start justify-start md:ml-[0] ml-[159px] md:mt-[0] mt-[26px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-center w-[auto]"
                        variant="body12"
                      >
                        Company
                      </Text>
                      <ul className="flex flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                        <li className="w-[100%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Contact Us
                            </Text>
                          </div>
                        </li>
                        <li className="w-[55%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              About
                            </Text>
                          </div>
                        </li>
                        <li className="w-[68%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Partner
                            </Text>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-center w-[auto]"
                        variant="body12"
                      >
                        About
                      </Text>
                      <ul className="flex flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                        <li className="w-[100%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              TIX ID News
                            </Text>
                          </div>
                        </li>
                        <li className="w-[63%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Cinema
                            </Text>
                          </div>
                        </li>
                        <li className="w-[79%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              My Ticket
                            </Text>
                          </div>
                        </li>
                        <li className="w-[72%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Payment
                            </Text>
                          </div>
                        </li>
                        <li className="w-[87%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Instalment
                            </Text>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-center w-[auto]"
                        variant="body12"
                      >
                        Support
                      </Text>
                      <ul className="flex flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                        <li className="w-[54%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Help Center
                            </Text>
                          </div>
                        </li>
                        <li className="w-[64%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Privacy Policy
                            </Text>
                          </div>
                        </li>
                        <li className="w-[19%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              FAQ
                            </Text>
                          </div>
                        </li>
                        <li className="w-[100%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Terms and Conditions
                            </Text>
                          </div>
                        </li>
                        <li className="w-[76%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Update Covid-19
                            </Text>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[37px] items-start justify-start md:ml-[0] ml-[172px] md:mt-[0] mt-[26px] md:w-[100%] w-[22%]">
                    <div className="flex flex-col gap-[42px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Follow Social Media
                        </Text>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_camera_bluegray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="camera"
                          />
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate29}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate30}
                            alt="facebook"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Download Application FILM WILL
                        </Text>
                        <div className="flex flex-row gap-[21px] items-center justify-start md:w-[100%] w-[91%]">
                          <Img
                            src="images/img_googleplay.png"
                            className="h-[33px] md:h-[auto] object-cover w-[46%]"
                            alt="GooglePlay"
                          />
                          <div className="h-[33px] relative w-[46%]">
                            <div className="bg-white_A700 h-[24px] ml-[6px] my-[auto] rounded-[12px] w-[24%]"></div>
                            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                              <Img
                                src="images/img_image6.png"
                                className="h-[33px] md:h-[auto] object-cover w-[100%]"
                                alt="imageSix"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                      variant="body18"
                    >
                      2022 FILM WILL - Group 14
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ChoosingSeatsPage;
