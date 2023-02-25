import React from "react";

import { Img, Text, Input, Line, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const SignUpFILMWILLPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto gap-[398px] sm:gap-[40px] md:gap-[40px] justify-end mx-[auto] w-[100%]">
        <div className="flex items-center w-[100%]">
          <div className="h-[1203px] md:h-[900px] pb-[303px] md:px-[20px] relative w-[100%]">
            <Img
              src="images/img_picture_900x1440.png"
              className="h-[900px] mx-[auto] object-cover w-[100%]"
              alt="Picture"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[5%] w-[92%]">
              <div className="flex flex-row gap-[24px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_arrowleft_white_a700.svg"
                  className="common-pointer h-[32px] rounded-[4px] w-[32px]"
                  onClick={() => navigate(-1)}
                  alt="arrowleft"
                />
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body10"
                >
                  Return
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[38px] sm:px-[20px] md:w-[100%] w-[50%]">
                <Text
                  className="md:ml-[0] ml-[41px] mt-[61px] text-black_900 text-left w-[auto]"
                  variant="body5"
                >
                  Register to FILM WILL
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[41px] mt-[63px] not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body12"
                >
                  FULL NAME
                </Text>
                <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[41px] mt-[13px] sm:w-[100%] w-[423px]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Input
                      className="font-normal leading-[normal] not-italic text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      name="Group127"
                      placeholder="Enter Input"
                    ></Input>
                  </div>
                  <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[38px] mt-[28px] not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body12"
                >
                  PASSWORD
                </Text>
                <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[41px] mt-[11px] sm:w-[100%] w-[423px]">
                  <div className="md:h-[32px] h-[37px] relative w-[100%]">
                    <div className="absolute flex inset-x-[0] items-center justify-end mx-[auto] top-[0] sm:w-[100%] w-[423px]">
                      <Input
                        className="font-normal leading-[normal] not-italic text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[90%]"
                        name="Group128"
                        placeholder="Enter Input"
                      ></Input>
                    </div>
                    <Img
                      src="images/img_eye.svg"
                      className="absolute bottom-[0] h-[32px] right-[0] rounded-[4px] w-[32px]"
                      alt="eye"
                    />
                  </div>
                  <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[38px] mt-[30px] not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body12"
                >
                  EMAIL ADDRESS
                </Text>
                <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[38px] mt-[11px] sm:w-[100%] w-[423px]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Input
                      className="font-normal leading-[normal] not-italic text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="email"
                      name="Group129"
                      placeholder="Enter Your Email Address"
                    ></Input>
                  </div>
                  <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] md:ml-[0] ml-[38px] mt-[64px] text-[20px] text-center text-white_A700 w-[423px]"
                  shape="RoundedBorder4"
                  size="xl"
                  variant="FillBluegray901"
                >
                  Sign Up Now
                </Button>
                <Text
                  className="font-normal md:ml-[0] ml-[41px] mt-[115px] not-italic text-black_900 text-left w-[auto]"
                  variant="body18"
                >
                  2022 FILM WILL - Group 14
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] items-center justify-end md:ml-[0] ml-[71px] mr-[728px] md:px-[20px] md:w-[100%] w-[45%]">
          <div className="flex flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between max-w-[638px] w-[100%]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                <Button
                  className="flex h-[32px] items-center justify-center rounded-[50%] w-[32px]"
                  size="smIcn"
                  variant="icbFillBluegray901"
                >
                  <Img src="images/img_star.svg" className="" alt="star" />
                </Button>
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  variant="body10"
                >
                  GRAND INDONESIA CGV
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillRed600"
              >
                CGV
              </Button>
            </div>
            <Text
              className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
              variant="body13"
            >
              JL. MH. TAHMRIN NO.1
            </Text>
          </div>
          <div className="flex flex-col gap-[36px] items-start justify-start md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between max-w-[638px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body10"
                >
                  REGULAR 2D
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_600 text-right w-[auto]"
                  variant="body12"
                >
                  Rp. 45.000 - 50.000
                </Text>
              </div>
              <List
                className="flex-col gap-[16px] grid w-[57%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    12:15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    13:45
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    14:50
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    17:10
                  </Button>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    12:15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    13:45
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    14:50
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    17:10
                  </Button>
                </div>
              </List>
            </div>
            <List
              className="flex-col gap-[36px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between max-w-[638px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_600 text-left w-[auto]"
                    variant="body10"
                  >
                    GOLD CLASS 2D
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-right w-[auto]"
                    variant="body12"
                  >
                    Rp. 45.000 - 50.000
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    12:15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    13:45
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    14:50
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    17:10
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between max-w-[638px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_600 text-left w-[auto]"
                    variant="body10"
                  >
                    VELVET 2D
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-right w-[auto]"
                    variant="body12"
                  >
                    Rp. 45.000 - 50.000
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    12:15
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    13:45
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    14:50
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray300"
                  >
                    17:10
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpFILMWILLPage;
