import React from "react";

import {
  Text,
  List,
  Button,
  Img,
  CheckBox,
  Line,
  Input,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";

const InputPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");
  const [inputvalue2, setInputvalue2] = React.useState("");
  const [inputvalue3, setInputvalue3] = React.useState("");
  const [inputvalue4, setInputvalue4] = React.useState("");
  const [inputvalue5, setInputvalue5] = React.useState("");
  const [inputvalue6, setInputvalue6] = React.useState("");
  const [inputvalue7, setInputvalue7] = React.useState("");
  const [inputvalue8, setInputvalue8] = React.useState("");
  const [inputvalue9, setInputvalue9] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 font-roboto h-[3873px] mx-[auto] p-[92px] sm:px-[20px] md:px-[40px] relative w-[100%]">
        <div className="absolute flex flex-col justify-start left-[2%] top-[5%] w-[24%]">
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] md:w-[100%] w-[66%]">
            <Text
              className="font-normal mb-[4px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Unselected
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[49px] sm:mt-[0] my-[2px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[48px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              While Pressing
            </Text>
            <Text
              className="font-normal mb-[4px] sm:ml-[0] ml-[55px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Selected
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[44px] sm:mt-[0] mt-[4px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Disabled
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between md:ml-[0] ml-[6px] mt-[27px] w-[100%]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Date Schedule Input
            </Text>
            <List
              className="border-[2px] border-deep_purple_A200 border-solid sm:flex-col flex-row gap-[37px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 p-[20px] rounded-[5px] shadow-bs2 w-[auto]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center sm:ml-[0] p-[18px] rounded-[8px] w-[auto]">
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body13"
                >
                  21 Oct
                </Text>
                <Text
                  className="font-black text-bluegray_900 text-left w-[auto]"
                  variant="body11"
                >
                  MON
                </Text>
              </div>
              <div className="bg-indigo_901 flex flex-col gap-[4px] items-center justify-center sm:ml-[0] p-[18px] rounded-[8px] w-[auto]">
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body13"
                >
                  21 Oct
                </Text>
                <Text
                  className="font-black text-left text-white_A700 w-[auto]"
                  variant="body11"
                >
                  MON
                </Text>
              </div>
              <div className="bg-indigo_800 flex flex-col gap-[4px] items-center justify-center sm:ml-[0] p-[18px] rounded-[8px] w-[auto]">
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body13"
                >
                  21 Oct
                </Text>
                <Text
                  className="font-black text-left text-white_A700 w-[auto]"
                  variant="body11"
                >
                  MON
                </Text>
              </div>
              <div className="bg-bluegray_901 flex flex-col gap-[4px] items-center justify-center sm:ml-[0] p-[18px] rounded-[8px] w-[auto]">
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body13"
                >
                  21 Oct
                </Text>
                <Text
                  className="font-black text-left text-white_A700 w-[auto]"
                  variant="body11"
                >
                  MON
                </Text>
              </div>
              <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center sm:ml-[0] p-[18px] rounded-[8px] w-[auto]">
                <Text
                  className="font-medium text-bluegray_300 text-left w-[auto]"
                  variant="body13"
                >
                  21 Oct
                </Text>
                <Text
                  className="font-black text-bluegray_300 text-left w-[auto]"
                  variant="body11"
                >
                  MON
                </Text>
              </div>
            </List>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end ml-[auto] mt-[103px] md:w-[100%] w-[56%]">
            <Text
              className="font-normal not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Unselected
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[41px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[27px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              While Press
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[27px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Selected
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[37px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Disabled
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[48px] items-center justify-start mt-[12px] md:w-[100%] w-[85%]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Time Schedule Input
            </Text>
            <div className="border-[2px] border-deep_purple_A200 border-solid flex sm:flex-col flex-row gap-[29px] items-center justify-center p-[20px] rounded-[5px] md:w-[100%] w-[73%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[77px] sm:ml-[0] ml-[2px] text-[14px] text-bluegray_900 text-center w-[auto]"
                shape="RoundedBorder4"
                size="md"
                variant="OutlineBluegray300"
              >
                14:40
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder4"
                size="md"
                variant="FillIndigo901"
              >
                14:40
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder4"
                size="md"
                variant="FillIndigo800"
              >
                14:40
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBluegray901"
              >
                14:40
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[77px] mr-[12px] text-[14px] text-bluegray_300 text-center w-[auto]"
                shape="RoundedBorder4"
                size="md"
                variant="FillGray300"
              >
                14:40
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] ml-[196px] mt-[171px] md:w-[100%] w-[55%]">
            <Text
              className="font-normal not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Filled
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[65px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[43px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Unselected
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[25px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Selected
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[43px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Disabled
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:ml-[0] ml-[55px] mt-[21px] md:w-[100%] w-[88%]">
            <Text
              className="font-normal md:mt-[0] mt-[28px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Seats Input
            </Text>
            <div className="border-[2px] border-deep_purple_A200 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start p-[20px] rounded-[5px] md:w-[100%] w-[85%]">
              <Button
                className="cursor-pointer font-bold leading-[normal] mb-[44px] text-[12px] text-center text-white_A700 w-[40px]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBluegray901"
              >
                A1
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] mb-[44px] sm:ml-[0] ml-[72px] text-[12px] text-center text-white_A700 w-[40px]"
                shape="RoundedBorder4"
                size="md"
                variant="FillIndigo901"
              >
                A1
              </Button>
              <Button
                className="cursor-pointer font-bold mb-[44px] sm:ml-[0] ml-[72px] text-[12px] text-bluegray_900 text-center w-[40px]"
                shape="RoundedBorder4"
                size="md"
                variant="OutlineBluegray300"
              >
                A1
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] mb-[44px] sm:ml-[0] ml-[72px] text-[12px] text-center text-white_A700 w-[40px]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBlue600"
              >
                A1
              </Button>
              <Button
                className="cursor-pointer font-bold mb-[44px] sm:ml-[0] ml-[60px] text-[12px] text-bluegray_300 text-center w-[40px]"
                shape="RoundedBorder4"
                size="md"
                variant="FillGray300"
              >
                A1
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-[20px] items-center justify-start right-[13%] top-[4%] w-[25%]">
          <Text
            className="font-normal not-italic text-black_900_7f text-left w-[auto]"
            variant="body12"
          >
            .base components
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[272px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Dropdown Selection
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[131px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Dropdown Selection Cinema
          </Text>
        </div>
        <div className="absolute flex flex-col justify-start right-[4%] top-[14%] w-[29%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[33px] md:w-[100%] w-[81%]">
            <Text
              className="font-normal mb-[7px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Sortir
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[221px] md:mt-[0] my-[3px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Studio{" "}
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[177px] md:mt-[0] my-[3px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              TIX ID News
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[226px] md:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Studio{" "}
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[57px] items-start justify-between mt-[23px] w-[100%]">
            <div className="border-[2px] border-deep_purple_A200 border-solid flex md:flex-1 items-center justify-start md:mt-[0] mt-[6px] p-[25px] sm:px-[20px] rounded-[5px] md:w-[100%] w-[72%]">
              <div className="flex flex-col gap-[32px] justify-start mb-[43px] mt-[9px] md:w-[100%] w-[98%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[7px] md:w-[100%] w-[83%]">
                  <div className="flex items-start justify-start sm:mt-[0] mt-[3px] w-[auto]">
                    <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body15"
                      >
                        Sortir
                      </Text>
                      <Img
                        src="images/img_18chevrondown.svg"
                        className="h-[18px] rounded-[4px] w-[18px]"
                        alt="18chevrondown"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-start mb-[3px] sm:ml-[0] ml-[190px] w-[auto]">
                    <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body15"
                      >
                        Studio
                      </Text>
                      <Img
                        src="images/img_18chevrondown.svg"
                        className="h-[18px] rounded-[4px] w-[18px]"
                        alt="18chevrondown One"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-start sm:ml-[0] ml-[157px] sm:mt-[0] mt-[3px] w-[auto]">
                    <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body15"
                      >
                        Sortir
                      </Text>
                      <Img
                        src="images/img_18chevrondown.svg"
                        className="h-[18px] rounded-[4px] w-[18px]"
                        alt="18chevrondown Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[12px] md:w-[100%] w-[29%]">
                    <div className="bg-white_A700 md:h-[192px] h-[194px] relative rounded-[4px] shadow-bs3 w-[100%]">
                      <div className="absolute flex flex-row gap-[8px] items-center justify-start left-[4%] p-[8px] top-[6%] w-[101px]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body15"
                        >
                          Sortir
                        </Text>
                        <Img
                          src="images/img_18chevrondown.svg"
                          className="h-[18px] rounded-[4px] w-[18px]"
                          alt="18chevronup"
                        />
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[32px] rounded-[4px] w-[24px]"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="absolute bottom-[6%] flex flex-col gap-[12px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                        <CheckBox
                          className="font-normal leading-[normal] not-italic text-[14px] text-black_900 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="CGV"
                          name="CGV"
                        ></CheckBox>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Harga Termurah{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Alfabet
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[4px] shadow-bs3 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start mt-[4px] p-[8px] w-[76px]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Sortir
                          </Text>
                          <Img
                            src="images/img_18chevrondown.svg"
                            className="h-[18px] rounded-[4px] w-[18px]"
                            alt="18chevronup One"
                          />
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start my-[3px] w-[auto]">
                          <CheckBox
                            className="font-normal leading-[normal] not-italic text-[14px] text-bluegray_900 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Terdekat"
                            name="CGV Two"
                          ></CheckBox>
                          <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Harga Termurah{" "}
                            </Text>
                          </div>
                          <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Alfabet
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[65px] md:w-[100%] w-[29%]">
                    <div className="bg-white_A700 flex flex-col items-start justify-center p-[8px] rounded-[4px] shadow-bs3 w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start mt-[4px] p-[8px] w-[88px]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body15"
                        >
                          Studio
                        </Text>
                        <Img
                          src="images/img_18chevrondown.svg"
                          className="h-[18px] rounded-[4px] w-[18px]"
                          alt="18chevronup Two"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start my-[4px] w-[auto]">
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <div className="flex items-start justify-start w-[100%]">
                            <div className="flex items-center justify-start md:w-[100%] w-[24%]">
                              <Img
                                src="images/img_7249131.png"
                                className="h-[16px] md:h-[auto] object-cover w-[100%]"
                                alt="7249131"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal h-[17px] not-italic text-black_900 text-left w-[auto]"
                            variant="body15"
                          >
                            2D
                          </Text>
                        </div>
                        <Img
                          src="images/img_basedropdown.svg"
                          className="h-[36px] w-[185px]"
                          alt="baseDropdown"
                        />
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body15"
                          >
                            GOLD CLASS 2D
                          </Text>
                        </div>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body15"
                          >
                            VELVET 2D
                          </Text>
                        </div>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <div className="flex items-start justify-start w-[100%]">
                            <Img
                              src="images/img_signal.svg"
                              className="h-[16px] w-[auto]"
                              alt="signal"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body15"
                          >
                            REGULAR 2D
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[39px] md:mt-[0] mt-[12px] md:w-[100%] w-[29%]">
                    <div className="bg-white_A700 h-[194px] relative rounded-[4px] shadow-bs3 w-[100%]">
                      <div className="absolute flex flex-row gap-[8px] items-center justify-start left-[4%] p-[8px] top-[6%] w-[101px]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body15"
                        >
                          Sortir
                        </Text>
                        <Img
                          src="images/img_18chevrondown.svg"
                          className="h-[18px] rounded-[4px] w-[18px]"
                          alt="18chevronup Three"
                        />
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[32px] rounded-[4px] w-[24px]"
                          alt="arrowdown One"
                        />
                      </div>
                      <div className="absolute bottom-[6%] flex flex-col gap-[12px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                        <CheckBox
                          className="font-normal leading-[normal] not-italic text-[14px] text-black_900 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="CGV"
                          name="CGV Eight"
                        ></CheckBox>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Harga Termurah{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Alfabet
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[4px] shadow-bs3 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start mt-[4px] p-[8px] w-[76px]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Sortir
                          </Text>
                          <Img
                            src="images/img_18chevrondown.svg"
                            className="h-[18px] rounded-[4px] w-[18px]"
                            alt="18chevronup Four"
                          />
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start my-[4px] w-[auto]">
                          <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Spotlight
                            </Text>
                          </div>
                          <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body15"
                            >
                              News{" "}
                            </Text>
                          </div>
                          <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Video
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[309px] justify-end relative md:w-[100%] w-[23%]">
              <div className="flex h-[100%] items-center justify-start mb-[30px] ml-[12px] mt-[auto] w-[82%]">
                <div className="bg-white_A700 flex flex-col items-start justify-center p-[8px] rounded-[4px] shadow-bs3 w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[4px] p-[8px] w-[88px]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body15"
                    >
                      Bioskop
                    </Text>
                    <Img
                      src="images/img_18chevrondown.svg"
                      className="h-[18px] rounded-[4px] w-[18px]"
                      alt="18chevronup Five"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start my-[4px] w-[auto]">
                    <div className="flex items-center justify-start px-[8px] w-[185px]">
                      <div className="flex items-start justify-start w-[100%]">
                        <div className="flex items-center justify-start py-[10px] w-[24%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <Img
                              src="images/img_7249131.png"
                              className="h-[16px] md:h-[auto] object-cover w-[100%]"
                              alt="7249131 One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_basedropdown.svg"
                      className="h-[36px] w-[185px]"
                      alt="baseDropdown One"
                    />
                    <div className="flex items-center justify-start px-[8px] w-[185px]">
                      <div className="flex items-start justify-start w-[100%]">
                        <div className="flex items-center justify-start py-[10px] w-[41%]">
                          <Img
                            src="images/img_signal_bluegray_801.svg"
                            className="h-[16px] w-[auto]"
                            alt="signal One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border-[2px] border-deep_purple_A200 border-solid flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[20px] rounded-[5px] w-[100%]">
                <div className="flex items-start justify-start mb-[235px] w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                      variant="body15"
                    >
                      Bioskop
                    </Text>
                    <Img
                      src="images/img_18chevrondown.svg"
                      className="h-[18px] rounded-[4px] w-[18px]"
                      alt="18chevrondown Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[457px] mt-[140px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Hover Location
          </Text>
        </div>
        <div className="absolute flex flex-col gap-[28px] items-center justify-start right-[11%] top-[34%] w-[12%]">
          <div className="flex flex-col md:gap-[40px] gap-[99px] justify-start md:w-[100%] w-[73%]">
            <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col gap-[12px] items-start justify-end md:ml-[0] ml-[7px] p-[15px] rounded-[5px] md:w-[100%] w-[98%]">
              <div className="flex items-start justify-start md:ml-[0] ml-[5px] mt-[5px] w-[auto]">
                <div className="flex flex-col gap-[12px] items-start justify-start pt-[12px] px-[12px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body13"
                  >
                    JAKARTA
                  </Text>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex items-start justify-start md:ml-[0] ml-[5px] sm:w-[100%] w-[auto]">
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                  wrapClassName="w-[auto]"
                  name="baselocation"
                  placeholder="JAKARTA"
                  size="3xl"
                  variant="FillGray300"
                ></Input>
              </div>
            </div>
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Dropdown Location
            </Text>
          </div>
          <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col gap-[54px] justify-start p-[19px] rounded-[5px] w-[100%]">
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[39px] w-[auto]">
              <Img
                src="images/img_location.svg"
                className="h-[32px] w-[32px]"
                alt="location"
              />
              <div className="flex flex-row gap-[8px] items-center justify-start pr-[16px] py-[8px] w-[auto]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body11"
                >
                  JAKARTA
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[32px] rounded-[4px] w-[32px]"
                  alt="arrowdown Two"
                />
              </div>
            </div>
            <div className="flex items-center justify-start mb-[25px] md:ml-[0] ml-[16px] mr-[93px] md:w-[100%] w-[73%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start pb-[22px] rounded-[4px] shadow-bs3 w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[16px] items-start justify-start p-[16px] w-[100%]">
                  <SelectBox
                    className="font-normal leading-[normal] md:ml-[0] ml-[7px] not-italic pr-[16px] text-[20px] text-black_900 text-left sm:w-[100%] w-[57%]"
                    placeholderClassName="text-black_900"
                    name="baseselection"
                    placeholder="JAKARTA"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[32px] w-[32px] rounded-[4px]"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></SelectBox>
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal gap-[4px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                    wrapClassName="flex md:ml-[0] ml-[7px] sm:ml-[0] sm:w-[100%] w-[92%]"
                    name="SearchBar"
                    placeholder="Search City"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#9ca7be"
                        />
                      ) : (
                        <Img
                          src="images/img_search_bluegray_300.svg"
                          className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                          alt="search"
                        />
                      )
                    }
                    shape="srcRoundedBorder6"
                    size="smSrc"
                    variant="srcOutlineBluegray200"
                  ></Input>
                </div>
                <div className="bg-white_A700 flex h-[217px] md:h-[auto] items-start justify-start p-[10px] w-[auto]">
                  <div className="bg-white_A700 h-[207px] md:h-[48px] relative w-[217px]">
                    <List
                      className="bg-white_A700 flex-col gap-[4px] grid h-[207px] items-start m-[auto] w-[auto]"
                      orientation="vertical"
                    >
                      <div className="flex items-start justify-start my-[0] w-[auto]">
                        <div className="flex flex-col gap-[12px] items-start justify-start pt-[12px] px-[12px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body13"
                          >
                            BANDUNG
                          </Text>
                          <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        </div>
                      </div>
                      <div className="flex items-start justify-start my-[0] w-[auto]">
                        <div className="flex flex-col gap-[12px] items-start justify-start pt-[12px] px-[12px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body13"
                          >
                            BEKASI
                          </Text>
                          <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        </div>
                      </div>
                      <div className="flex items-start justify-start my-[0] w-[auto]">
                        <div className="flex flex-col gap-[12px] items-start justify-start pt-[12px] px-[12px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body13"
                          >
                            BOGOR
                          </Text>
                          <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        </div>
                      </div>
                    </List>
                    <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start pt-[12px] px-[12px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body13"
                        >
                          DEPOK
                        </Text>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[210px] md:gap-[40px] justify-start right-[22%] top-[35%] w-[4%]">
          <div className="flex flex-col gap-[42px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Unclicked
            </Text>
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
          </div>
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Before
          </Text>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[24%] w-[34%]">
          <Text
            className="font-normal md:mt-[0] mt-[57px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Time Picker
          </Text>
          <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-col flex-row md:gap-[40px] gap-[94px] items-start justify-start md:ml-[0] ml-[76px] p-[20px] rounded-[5px] md:w-[100%] w-[57%]">
            <SelectBox
              className="font-medium mb-[219px] md:mt-[0] mt-[28px] sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-left md:w-[100%] w-[23%]"
              placeholderClassName="text-bluegray_900"
              name="time"
              placeholder="14:40"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[32px] w-[32px] rounded-[4px]"
                  alt="arrow_down"
                />
              }
              size="sm"
            ></SelectBox>
            <div className="bg-white_A700 h-[212px] md:h-[291px] mb-[79px] md:mt-[0] mt-[4px] relative md:w-[100%] w-[61%]">
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
                        14:40
                      </Button>
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
                        14:40
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
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBluegray300"
                      >
                        14:40
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[347px] md:mt-[0] mt-[9px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            After
          </Text>
        </div>
        <div className="absolute flex flex-col gap-[11px] justify-start right-[28%] top-[5%] w-[33%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start w-[100%]">
            <Text
              className="font-normal md:mt-[0] mt-[6px] not-italic text-black_900 text-left w-[auto]"
              variant="body4"
            >
              Movie Select
            </Text>
            <div className="flex flex-row gap-[8px] items-center justify-start mb-[3px] md:ml-[0] ml-[663px] p-[8px] w-[auto]">
              <Img
                src="images/img_18chevrondown.svg"
                className="h-[18px] rounded-[4px] w-[18px]"
                alt="18chevrondown Four"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body15"
              >
                Bioskop
              </Text>
              <Img
                src="images/img_18chevrondown.svg"
                className="h-[18px] rounded-[4px] w-[18px]"
                alt="18chevrondown Five"
              />
              <Img
                src="images/img_arrowdown.svg"
                className="h-[32px] rounded-[4px] w-[32px]"
                alt="arrowdown Three"
              />
            </div>
            <Text
              className="font-normal mb-[8px] md:ml-[0] ml-[131px] md:mt-[0] mt-[21px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Unclicked
            </Text>
          </div>
          <div className="flex flex-row gap-[56px] items-end justify-end ml-[auto] md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[12px] items-start justify-start pt-[12px] px-[12px] w-[auto]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                JAKARTA
              </Text>
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
            </div>
            <Text
              className="font-normal mb-[3px] mt-[23px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[20%] flex md:flex-col flex-row md:gap-[40px] gap-[74px] inset-x-[0] items-start justify-start max-w-[3206px] mx-[auto] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[34px] justify-start md:w-[100%] w-[68%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <div className="border-[2px] border-deep_purple_A200 border-solid flex md:flex-1 items-start justify-start p-[19px] rounded-[5px] md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[47px] items-center justify-start mb-[16px] md:w-[100%] w-[93%]">
                  <div className="md:gap-[40px] gap-[88px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                    <Input
                      className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="TypePasswordStateUnactive"
                      placeholder="Masukkan Input"
                      suffix={
                        <Img
                          src="images/img_eye.svg"
                          className="ml-[35px] mr-[0] w-[100%] rounded-[4px] my-[auto]"
                          alt="eye"
                        />
                      }
                      size="md"
                      variant="UnderLineBluegray300"
                    ></Input>
                    <Input
                      className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="TypePasswordHidden"
                      placeholder="Masukkan Input"
                      suffix={
                        <Img
                          src="images/img_eye_bluegray_300.svg"
                          className="ml-[35px] mr-[0] w-[100%] rounded-[4px] my-[auto]"
                          alt="eye"
                        />
                      }
                      size="md"
                      variant="UnderLineBluegray300"
                    ></Input>
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                          variant="body11"
                        >
                          +62
                        </Text>
                        <Line className="bg-bluegray_300 h-[18px] w-[1px]" />
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_300 text-left w-[auto]"
                          variant="body11"
                        >
                          Masukkan Nomor Handphone
                        </Text>
                      </div>
                      <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="md:gap-[40px] gap-[88px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                    <Input
                      className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="TypePasswordStateActive"
                      placeholder="Masukkan Input"
                      suffix={
                        <Img
                          src="images/img_eye_bluegray_900.svg"
                          className="ml-[35px] mr-[0] w-[100%] rounded-[4px] my-[auto]"
                          alt="eye"
                        />
                      }
                      size="md"
                      variant="UnderLineBluegray300"
                    ></Input>
                    <Input
                      className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      type="password"
                      name="password"
                      placeholder="***********"
                      suffix={
                        <Img
                          src="images/img_eye_bluegray_900_32x32.svg"
                          className="ml-[35px] mr-[0] w-[100%] rounded-[4px] my-[auto]"
                          alt="eye"
                        />
                      }
                      size="sm"
                      variant="UnderLineBluegray300"
                    ></Input>
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body11"
                        >
                          +62
                        </Text>
                        <Line className="bg-bluegray_300 h-[18px] w-[1px]" />
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body11"
                        >
                          917 0234 2791
                        </Text>
                      </div>
                      <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="md:gap-[40px] gap-[88px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                    <Input
                      className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[20px] text-left placeholder:text-red_300 text-red_300 w-[100%]"
                      wrapClassName="w-[100%]"
                      name="TypePasswordStateError"
                      placeholder="Masukkan Input"
                      size="lg"
                      variant="UnderLineRed300"
                    ></Input>
                    <Input
                      className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[20px] text-left placeholder:text-red_300 text-red_300 w-[100%]"
                      wrapClassName="w-[100%]"
                      type="password"
                      name="password One"
                      placeholder="***********"
                      size="sm"
                      variant="UnderLineRed300"
                    ></Input>
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-left text-red_300 w-[auto]"
                          variant="body11"
                        >
                          +62
                        </Text>
                        <Line className="bg-red_300 h-[18px] w-[1px]" />
                        <Text
                          className="flex-1 font-normal not-italic text-left text-red_300 w-[auto]"
                          variant="body11"
                        >
                          000 0000 0000
                        </Text>
                      </div>
                      <Line className="bg-red_300 h-[1px] w-[100%]" />
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-normal md:mt-[0] mt-[225px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Unclicked
              </Text>
            </div>
            <div className="flex flex-col gap-[58px] items-start justify-start md:ml-[0] ml-[2080px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Hover
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Selected
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[22px] justify-start md:mt-[0] mt-[104px] md:w-[100%] w-[31%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[6px] md:w-[100%] w-[85%]">
              <Text
                className="font-normal sm:mt-[0] mt-[32px] not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Payment Selection Component
              </Text>
              <Text
                className="font-normal mb-[9px] not-italic text-black_900 text-left w-[auto]"
                variant="body4"
              >
                Select Payment
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <List
                className="border-[2px] border-deep_purple_A200 border-solid md:flex-1 flex-col gap-[34px] grid md:mt-[0] mt-[7px] p-[20px] rounded-[5px] md:w-[100%] w-[42%]"
                orientation="vertical"
              >
                <div className="flex flex-col gap-[6px] items-start justify-start pl-[8px] pt-[6px] w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                    <div className="flex h-[40px] items-center justify-start p-[4px] w-[40px]">
                      <div className="flex h-[32px] items-center justify-start w-[32px]">
                        <Img
                          src="images/img_danalogo.png"
                          className="h-[32px] md:h-[auto] object-cover w-[32px]"
                          alt="DanaLogo"
                        />
                      </div>
                    </div>
                    <Text
                      className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body13"
                    >
                      DANA
                    </Text>
                  </div>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
                <div className="bg-gray_300 flex flex-col gap-[6px] items-start justify-start pl-[8px] pt-[6px] w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                    <div className="flex h-[40px] items-center justify-start p-[4px] w-[40px]">
                      <div className="flex h-[32px] items-center justify-start w-[32px]">
                        <Img
                          src="images/img_danalogo.png"
                          className="h-[32px] md:h-[auto] object-cover w-[32px]"
                          alt="DanaLogo One"
                        />
                      </div>
                    </div>
                    <Text
                      className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body13"
                    >
                      DANA
                    </Text>
                  </div>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[6px] items-start justify-start pl-[8px] pt-[6px] w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                    <div className="flex h-[40px] items-center justify-start p-[4px] w-[40px]">
                      <div className="flex h-[32px] items-center justify-start w-[32px]">
                        <Img
                          src="images/img_danalogo.png"
                          className="h-[32px] md:h-[auto] object-cover w-[32px]"
                          alt="DanaLogo Two"
                        />
                      </div>
                    </div>
                    <CheckBox
                      className="font-normal not-italic text-[16px] text-bluegray_800 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="DANA"
                      name="DANA Two"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
              </List>
              <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-start justify-start sm:px-[20px] px-[24px] py-[32px] rounded-[12px] shadow-bs3 sm:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[8px] items-center justify-center w-[367px]">
                  <Text
                    className="flex-1 font-medium text-bluegray_900 text-left w-[auto]"
                    variant="body10"
                  >
                    Pilih Pembayaran
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="h-[24px] w-[24px]"
                    alt="close"
                  />
                </div>
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body12"
                >
                  Dompet Virtual
                </Text>
                <div className="flex flex-col gap-[6px] items-start justify-start pl-[8px] pt-[6px] w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                    <div className="flex h-[40px] items-center justify-start p-[4px] w-[40px]">
                      <div className="flex h-[32px] items-center justify-start w-[32px]">
                        <Img
                          src="images/img_danalogo.png"
                          className="h-[32px] md:h-[auto] object-cover w-[32px]"
                          alt="DanaLogo Three"
                        />
                      </div>
                    </div>
                    <Text
                      className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body13"
                    >
                      DANA
                    </Text>
                  </div>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body12"
                >
                  Minimarket
                </Text>
                <List
                  className="flex-col grid items-start w-[auto]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[6px] items-start justify-start my-[0] pl-[8px] pt-[6px] w-[auto]">
                    <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                      <div className="flex h-[40px] items-center justify-start w-[40px]">
                        <div className="flex items-center justify-start my-[12px] md:w-[100%] w-[95%]">
                          <Img
                            src="images/img_indomaretlogo.png"
                            className="h-[13px] md:h-[auto] object-cover w-[100%]"
                            alt="IndomaretLogo"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body13"
                      >
                        Indomaret
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start my-[0] pl-[8px] pt-[6px] w-[auto]">
                    <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                      <div className="flex h-[40px] items-center justify-start w-[40px]">
                        <div className="flex items-center justify-start my-[13px] md:w-[100%] w-[93%]">
                          <Img
                            src="images/img_alfamartlogo.png"
                            className="h-[12px] md:h-[auto] object-cover w-[100%]"
                            alt="AlfamartLogo"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body13"
                      >
                        Alfamart
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </div>
                </List>
                <Text
                  className="font-medium text-bluegray_600 text-left w-[auto]"
                  variant="body12"
                >
                  Transfer Bank
                </Text>
                <List
                  className="flex-col grid items-start w-[auto]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[6px] items-start justify-start my-[0] pl-[8px] pt-[6px] w-[auto]">
                    <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                      <div className="flex h-[40px] items-center justify-start p-[3px] w-[40px]">
                        <div className="flex items-center justify-start my-[11px] md:w-[100%] w-[98%]">
                          <Img
                            src="images/img_bankbca.png"
                            className="h-[11px] md:h-[auto] object-cover w-[100%]"
                            alt="BankBCA"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body13"
                      >
                        Bank BCA
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start my-[0] pl-[8px] pt-[6px] w-[auto]">
                    <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                      <div className="flex h-[40px] items-center justify-start p-[4px] w-[40px]">
                        <div className="flex items-center justify-start my-[2px] md:w-[100%] w-[97%]">
                          <Img
                            src="images/img_bankbri.png"
                            className="h-[27px] md:h-[auto] object-cover w-[100%]"
                            alt="BankBRI"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body13"
                      >
                        Bank BRI
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start my-[0] pl-[8px] pt-[6px] w-[auto]">
                    <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                      <div className="flex h-[40px] items-center justify-start p-[2px] w-[40px]">
                        <div className="flex items-center justify-start my-[13px] md:w-[100%] w-[98%]">
                          <Img
                            src="images/img_bankbni.png"
                            className="h-[10px] md:h-[auto] object-cover w-[100%]"
                            alt="BankBNI"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body13"
                      >
                        Bank BNI
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start my-[0] pl-[8px] pt-[6px] w-[auto]">
                    <div className="flex flex-row gap-[16px] items-center justify-start pr-[8px] w-[100%]">
                      <div className="flex h-[40px] items-center justify-start p-[3px] w-[40px]">
                        <div className="flex items-center justify-start my-[12px] w-[100%]">
                          <Img
                            src="images/img_bankmandiri.png"
                            className="h-[10px] md:h-[auto] object-cover w-[100%]"
                            alt="BankMandiri"
                          />
                        </div>
                      </div>
                      <Text
                        className="flex-1 font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body13"
                      >
                        Bank Mandiri
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-[40px] items-start justify-between right-[34%] top-[8%] w-[27%]">
          <div className="flex flex-col items-start justify-start md:w-[100%] w-[65%]">
            <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
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
              <div className="flex flex-col gap-[36px] items-start justify-start w-[auto]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <div className="md:h-[29px] h-[32px] relative w-[362px]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[0] my-[auto] text-bluegray_600 text-left w-[auto]"
                      variant="body10"
                    >
                      REGULAR 2D
                    </Text>
                    <div className="absolute flex h-[max-content] inset-y-[0] items-end justify-start my-[auto] p-[2px] right-[0] w-[auto]">
                      <Text
                        className="font-normal mr-[7px] not-italic text-bluegray_600 text-right w-[auto]"
                        variant="body12"
                      >
                        Price: 50.000 VND
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[16px] grid items-center w-[100%]"
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
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[362px]">
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
                        {" "}
                        Price: 100.000 VND
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
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[362px]">
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
                        Price: 100.000 VND
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
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[362px]">
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
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[362px]">
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
            <Text
              className="font-normal md:ml-[0] ml-[21px] mt-[137px] not-italic text-black_900 text-left w-[auto]"
              variant="body4"
            >
              Pop-Up Message
            </Text>
            <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-start mt-[36px] p-[24px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[auto]">
              <div className="flex flex-row sm:gap-[40px] items-center justify-between sm:w-[100%] w-[566px]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  variant="body10"
                >
                  Ingin Kembali?
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="h-[32px] w-[32px]"
                  alt="close One"
                />
              </div>
              <Text
                className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[447px] not-italic text-bluegray_600 text-left"
                variant="body13"
              >
                Kursi yang kamu pilih sebelumnya akan dibatalkan dan kamu harus
                memilih ulang
              </Text>
              <div className="flex flex-row gap-[20px] items-start justify-end sm:w-[100%] w-[566px]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[80px] not-italic text-[16px] text-bluegray_300 text-center w-[auto]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGray300"
                >
                  Button
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[80px] text-[16px] text-amber_A400 text-center w-[auto]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillBluegray901"
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between ml-[auto] mt-[208px] md:w-[100%] w-[54%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Before Click
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                After Click
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-[40px] gap-[69px] items-center justify-start md:mt-[0] mt-[299px] md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Before Click
            </Text>
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              After Click
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col justify-start left-[3%] top-[28%] w-[4%]">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[31px] md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Default
            </Text>
            <Text
              className="font-normal mt-[54px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Hover
            </Text>
            <Text
              className="font-normal mt-[48px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Click
            </Text>
            <Text
              className="font-normal mt-[167px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Spotlight
            </Text>
            <Text
              className="font-normal mt-[54px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              News
            </Text>
            <Text
              className="font-normal mt-[74px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Video
            </Text>
          </div>
          <Text
            className="font-normal mr-[12px] mt-[240px] not-italic text-black_900 text-center w-[auto]"
            variant="body12"
          >
            No Placeholder
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[56px] mt-[67px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Hover
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[27px] mt-[64px] not-italic text-black_900 text-center w-[auto]"
            variant="body12"
          >
            Placeholder
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[12px] mt-[222px] not-italic text-black_900 text-center w-[auto]"
            variant="body12"
          >
            No Placeholder
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[26px] mt-[81px] not-italic text-black_900 text-center w-[auto]"
            variant="body12"
          >
            Placeholder
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[54px] mt-[58px] not-italic text-black_900 text-center w-[auto]"
            variant="body12"
          >
            Error
          </Text>
        </div>
        <div className="absolute flex flex-col justify-start left-[7%] top-[28%] w-[33%]">
          <div className="flex sm:flex-col flex-row gap-[57px] items-center justify-start md:w-[100%] w-[48%]">
            <List
              className="sm:flex-col flex-row gap-[52px] grid grid-cols-2 sm:w-[100%] w-[64%]"
              orientation="horizontal"
            >
              <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col items-start justify-end sm:ml-[0] p-[18px] rounded-[5px] w-[100%]">
                <Button
                  className="cursor-pointer font-normal min-w-[102px] md:ml-[0] ml-[2px] mt-[2px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
                  shape="RoundedBorder23"
                  size="xl"
                  variant="OutlineBluegray301"
                >
                  Title Tag
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[102px] md:ml-[0] ml-[2px] mt-[27px] not-italic text-[16px] text-bluegray_800 text-center w-[auto]"
                  shape="RoundedBorder23"
                  size="xl"
                  variant="OutlineBluegray800"
                >
                  Title Tag
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[102px] md:ml-[0] ml-[2px] mt-[21px] not-italic text-[16px] text-bluegray_800 text-center w-[auto]"
                  shape="RoundedBorder23"
                  size="xl"
                  variant="OutlineBluegray800"
                >
                  Title Tag
                </Button>
              </div>
              <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col gap-[27px] items-start justify-end sm:ml-[0] p-[12px] rounded-[5px] w-[100%]">
                <Button
                  className="cursor-pointer font-normal min-w-[102px] md:ml-[0] ml-[8px] mt-[8px] not-italic text-[16px] text-bluegray_800 text-center w-[auto]"
                  shape="RoundedBorder23"
                  size="xl"
                  variant="OutlineBluegray800"
                >
                  Title Tag
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[102px] md:ml-[0] ml-[8px] not-italic text-[16px] text-blue_600 text-center w-[auto]"
                  shape="RoundedBorder23"
                  size="xl"
                  variant="OutlineBlue600"
                >
                  Title Tag
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[102px] md:ml-[0] ml-[8px] not-italic text-[16px] text-blue_600 text-center w-[auto]"
                  shape="RoundedBorder23"
                  size="xl"
                  variant="OutlineBlue600"
                >
                  Title Tag
                </Button>
              </div>
            </List>
            <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col gap-[58px] items-start justify-start p-[20px] rounded-[5px] sm:w-[100%] w-[28%]">
              <Button
                className="flex items-center justify-center min-w-[101px] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_location_bluegray_900.svg"
                    className="mr-[3px] text-center"
                    alt="location"
                  />
                }
                shape="RoundedBorder23"
                size="lg"
                variant="OutlineBluegray800"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[20px] text-bluegray_900 text-left">
                  403
                </div>
              </Button>
              <Button
                className="flex items-center justify-center mb-[35px] min-w-[101px] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_32_like.svg"
                    className="mr-[3px] text-center"
                    alt="32 / like"
                  />
                }
                shape="RoundedBorder23"
                size="lg"
                variant="OutlineBlue600"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[20px] text-blue_600 text-left">
                  404
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[31px] mt-[67px] md:w-[100%] w-[19%]">
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
              Small
            </Text>
          </div>
          <div className="border-[2px] border-deep_purple_A200 border-solid flex items-start justify-start mt-[16px] p-[20px] rounded-[5px] md:w-[100%] w-[30%]">
            <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[82%]">
              <div className="flex flex-row items-center justify-between w-[100%]">
                <Button
                  className="cursor-pointer font-normal min-w-[120px] not-italic text-[20px] text-bluegray_900 text-center w-[auto]"
                  size="xl"
                  variant="OutlineBluegray800"
                >
                  Spotlight
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[72px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                  size="sm"
                  variant="OutlineBluegray800"
                >
                  Spotlight
                </Button>
              </div>
              <List
                className="flex-col gap-[32px] grid w-[96%]"
                orientation="vertical"
              >
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Button
                      className="cursor-pointer font-normal min-w-[91px] not-italic text-[20px] text-bluegray_900 text-center w-[auto]"
                      size="xl"
                      variant="OutlineBluegray800"
                    >
                      News
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[55px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                    size="sm"
                    variant="OutlineBluegray800"
                  >
                    News
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Button
                      className="cursor-pointer font-normal min-w-[91px] not-italic text-[20px] text-bluegray_900 text-center w-[auto]"
                      size="xl"
                      variant="OutlineBluegray800"
                    >
                      Video
                    </Button>
                  </div>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[55px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                    size="sm"
                    variant="OutlineBluegray800"
                  >
                    Video
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[53px] mt-[142px] md:w-[100%] w-[68%]">
            <Text
              className="font-normal md:mt-[0] mt-[2px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Big
            </Text>
            <Text
              className="font-normal mb-[2px] md:ml-[0] ml-[357px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Medium
            </Text>
            <Text
              className="font-normal mb-[2px] md:ml-[0] ml-[344px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Small
            </Text>
          </div>
          <div className="border-[2px] border-deep_purple_A200 border-solid flex items-start justify-start md:ml-[0] ml-[14px] mt-[29px] p-[20px] rounded-[5px] md:w-[100%] w-[99%]">
            <List
              className="flex-col gap-[39px] grid w-[88%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] w-[100%]">
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="flex md:w-[100%] sm:w-[100%] w-[29%]"
                  name="SearchBarNoPlaceholder"
                  placeholder="Search Post"
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue1("")}
                        color="#9ca7be"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_300.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray200_1"
                ></Input>
                <Input
                  value={inputvalue2}
                  onChange={(e) => setInputvalue2(e?.target?.value)}
                  className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[102px] mt-[5px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[29%]"
                  name="SearchBarNoPlaceholder One"
                  placeholder="Search Post"
                  suffix={
                    inputvalue2?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue2("")}
                        color="#9ca7be"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_300.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray200_1"
                ></Input>
                <Input
                  value={inputvalue3}
                  onChange={(e) => setInputvalue3(e?.target?.value)}
                  className="flex-1 font-normal gap-[4px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:w-[100%] ml-[72px] sm:ml-[0] sm:w-[100%] w-[26%]"
                  name="SearchBarDefault"
                  placeholder="Search City"
                  suffix={
                    inputvalue3?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue3("")}
                        color="#9ca7be"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_300.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="smSrc"
                  variant="srcOutlineBluegray200_1"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] w-[100%]">
                <Input
                  value={inputvalue4}
                  onChange={(e) => setInputvalue4(e?.target?.value)}
                  className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="flex md:w-[100%] sm:w-[100%] w-[29%]"
                  name="SearchBarHover"
                  placeholder="Search Post"
                  suffix={
                    inputvalue4?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue4("")}
                        color="#9ca7be"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_300.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray200_2"
                ></Input>
                <Input
                  value={inputvalue5}
                  onChange={(e) => setInputvalue5(e?.target?.value)}
                  className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[102px] mt-[4px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[29%]"
                  name="SearchBarHover One"
                  placeholder="Search Post"
                  suffix={
                    inputvalue5?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue5("")}
                        color="#9ca7be"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_300.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray200_2"
                ></Input>
                <Input
                  value={inputvalue6}
                  onChange={(e) => setInputvalue6(e?.target?.value)}
                  className="flex-1 font-normal gap-[4px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[72px] my-[4px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[26%]"
                  name="SearchBarHover Two"
                  placeholder="Search City"
                  suffix={
                    inputvalue6?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue6("")}
                        color="#9ca7be"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_300.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="smSrc"
                  variant="srcOutlineBluegray200_3"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] w-[100%]">
                <Input
                  value={inputvalue7}
                  onChange={(e) => setInputvalue7(e?.target?.value)}
                  className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                  wrapClassName="flex md:w-[100%] sm:w-[100%] w-[29%]"
                  name="SearchBarPlaceholder"
                  placeholder="Search Post"
                  suffix={
                    inputvalue7?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue7("")}
                        color="#333333"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray600"
                ></Input>
                <Input
                  value={inputvalue8}
                  onChange={(e) => setInputvalue8(e?.target?.value)}
                  className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[102px] mt-[4px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[29%]"
                  name="SearchBarPlaceholder One"
                  placeholder="Grand Indonesia"
                  suffix={
                    inputvalue8?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue8("")}
                        color="#333333"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray600"
                ></Input>
                <Input
                  value={inputvalue9}
                  onChange={(e) => setInputvalue9(e?.target?.value)}
                  className="flex-1 font-normal gap-[4px] not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[72px] mt-[4px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[26%]"
                  name="SearchBarPlaceholder Two"
                  placeholder="Search City"
                  suffix={
                    inputvalue9?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        onClick={() => setInputvalue9("")}
                        color="#333333"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="smSrc"
                  variant="srcOutlineBluegray600"
                ></Input>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[55px] mt-[107px] md:w-[100%] w-[93%]">
            <Text
              className="font-normal mb-[2px] not-italic text-black_900 text-center w-[auto]"
              variant="body12"
            >
              Password
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[436px] md:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Password Hidden
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[369px] md:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Phone Number
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[36px] justify-start right-[27%] top-[9%] w-[auto]">
          <Text
            className="font-normal md:ml-[0] ml-[13px] not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Selected
          </Text>
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body12"
          >
            Hover Selected
          </Text>
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-[40px] gap-[73px] items-center justify-center right-[13%] top-[5%] w-[15%]">
          <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col items-start justify-start p-[20px] rounded-[5px] sm:w-[100%] w-[46%]">
            <div className="flex items-center justify-start px-[8px] py-[10px] w-[185px]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body15"
              >
                CGV
              </Text>
            </div>
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
              wrapClassName="mt-[30px] w-[185px]"
              name="DropdownSelectionHover"
              placeholder="CGV"
              size="xl"
              variant="FillGray300"
            ></Input>
            <CheckBox
              className="font-normal leading-[normal] mt-[22px] not-italic text-[14px] text-black_900 text-left"
              inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
              label="CGV"
              name="CGV Fifteen"
            ></CheckBox>
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
              wrapClassName="flex mb-[8px] mt-[21px] sm:w-[100%] w-[91%]"
              name="DropdownSelectionHover One"
              placeholder="CGV"
              suffix={
                <Img
                  src="images/img_checkmark.svg"
                  className="ml-[35px] mr-[8px] my-[auto]"
                  alt="checkmark"
                />
              }
              size="2xl"
              variant="FillGray300"
            ></Input>
          </div>
          <div className="border-[2px] border-deep_purple_A200 border-solid flex flex-col gap-[22px] items-center justify-start p-[20px] rounded-[5px] sm:w-[100%] w-[42%]">
            <List
              className="flex-col gap-[30px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex items-center justify-start my-[0] px-[8px] w-[185px]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start py-[10px] w-[24%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Img
                        src="images/img_7249131.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="7249131 Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_300 flex items-center justify-start my-[0] px-[8px] w-[185px]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start py-[10px] w-[24%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Img
                        src="images/img_7249131.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="7249131 Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <List
              className="flex-col gap-[22px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-row gap-[8px] items-center justify-start px-[8px] w-[185px]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start py-[10px] w-[28%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Img
                        src="images/img_7249131.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="7249131 Four"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_checkmark.svg"
                  className="h-[18px] w-[18px]"
                  alt="checkmark One"
                />
              </div>
              <div className="bg-gray_300 flex flex-row gap-[8px] items-center justify-start px-[8px] w-[185px]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start py-[10px] w-[28%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Img
                        src="images/img_7249131.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="7249131 Five"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_checkmark.svg"
                  className="h-[18px] w-[18px]"
                  alt="checkmark Two"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputPage;
