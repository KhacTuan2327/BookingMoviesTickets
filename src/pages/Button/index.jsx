import React from "react";

import { Text, Button, Img } from "components";

const ButtonPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-start justify-start mx-[auto] p-[91px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] gap-[86px] items-center justify-start mb-[274px] md:ml-[0] ml-[13px] md:w-[100%] w-[58%]">
          <div className="flex flex-col justify-start md:w-[100%] w-[20%]">
            <div className="flex flex-row gap-[81px] items-start justify-start mr-[28px] md:w-[100%] w-[87%]">
              <Text
                className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Large
              </Text>
              <Text
                className="font-normal mb-[2px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Default
              </Text>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[132px] mt-[76px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[99px] mt-[76px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              While Pressed
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[127px] mt-[71px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Disabled
            </Text>
            <div className="flex flex-row gap-[60px] items-center justify-start mt-[135px] md:w-[100%] w-[87%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Medium
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Default
              </Text>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[132px] mt-[61px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[99px] mt-[62px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              While Pressed
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[121px] mt-[64px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Disabled
            </Text>
            <div className="flex flex-row gap-[82px] items-center justify-start md:ml-[0] ml-[7px] mt-[115px] md:w-[100%] w-[87%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Small
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Default
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] justify-start md:w-[100%] w-[73%]">
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] md:w-[100%] w-[71%]">
              <Text
                className="font-normal sm:mt-[0] mt-[4px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Primary
              </Text>
              <Text
                className="font-normal mb-[4px] sm:ml-[0] ml-[196px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Secondary
              </Text>
              <Text
                className="font-normal mb-[4px] sm:ml-[0] ml-[161px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Tertiary
              </Text>
            </div>
            <div className="border-[3px] border-deep_purple_A200 border-solid flex items-start justify-start p-[38px] sm:px-[20px] rounded-[5px] w-[100%]">
              <div className="flex flex-col items-start justify-start mb-[20px] md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[56px] items-center justify-between md:w-[100%] w-[72%]">
                    <Button
                      className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[216px]"
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="FillBluegray901"
                    >
                      BUTTON
                    </Button>
                    <Button
                      className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_300 text-center w-[216px]"
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="OutlineBluegray600"
                    >
                      BUTTON
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[24px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_arrowleft_bluegray_901.svg"
                      className="h-[32px] rounded-[4px] w-[32px]"
                      alt="arrowleft"
                    />
                    <Text
                      className="font-bold text-bluegray_901 text-left w-[auto]"
                      variant="body10"
                    >
                      Button
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[36px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[216px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="FillIndigo901"
                  >
                    BUTTON
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_300 w-[216px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="FillBluegray901"
                  >
                    BUTTON
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[36px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[216px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="FillIndigo800"
                  >
                    BUTTON
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_300 w-[216px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="FillIndigo800"
                  >
                    BUTTON
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[36px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_300 text-center w-[216px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="FillGray300"
                  >
                    BUTTON
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_200 text-center w-[216px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="OutlineBluegray200"
                  >
                    BELI TIKET
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[79px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-amber_A400 text-center w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillBluegray901"
                  >
                    Button
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-bluegray_600 text-center w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineBluegray600_1"
                  >
                    Button
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[40px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-amber_A400 text-center w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillIndigo901"
                  >
                    Button
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-center text-gray_300 w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillIndigo901"
                  >
                    Button
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[40px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-amber_A400 text-center w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillIndigo800"
                  >
                    Button
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-center text-gray_300 w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillIndigo800"
                  >
                    Button
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-[56px] items-center justify-start mt-[38px] md:w-[100%] w-[72%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-bluegray_300 text-center w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillGray300"
                  >
                    Button
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[20px] text-bluegray_200 text-center w-[216px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineBluegray200"
                  >
                    Button
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[62px] mt-[112px] md:w-[100%] w-[50%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[80px] text-[16px] text-amber_A400 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillBluegray901"
                  >
                    Button
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[80px] text-[16px] text-bluegray_600 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="OutlineBluegray600_1"
                  >
                    Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
