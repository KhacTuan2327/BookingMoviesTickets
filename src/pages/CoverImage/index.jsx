import React from "react";

import { Img, Text, SelectBox, List, Button } from "components";

const CoverImagePage = () => {
  return (
    <>
      <div className="bg-white_A700 font-roboto h-[960px] mx-[auto] relative w-[100%]">
        <Img
          src="images/img_rectangle178.png"
          className="absolute bottom-[0] h-[844px] inset-x-[0] mx-[auto] object-cover w-[100%]"
          alt="Rectangle178"
        />
        <div className="absolute bg-amber_A400 bottom-[0] flex h-[961px] md:h-[auto] inset-x-[0] items-center justify-end max-w-[961px] mx-[auto] p-[128px] md:px-[20px] rounded-[480px] w-[100%]">
          <div className="flex h-[434px] md:h-[704px] justify-end mb-[246px] mt-[24px] relative w-[100%]">
            <div className="flex h-[100%] items-center justify-start mt-[auto] mx-[auto] shadow-bs w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-gray_901 h-[8px] w-[8%]"></div>
                <Img
                  src="images/img_applemacbookpro.png"
                  className="h-[34px] md:h-[auto] object-cover w-[100%]"
                  alt="AppleMacbookPro"
                />
              </div>
            </div>
            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <div className="h-[434px] relative w-[100%]">
                <Img
                  src="images/img_applemacbookpro_434x704.png"
                  className="h-[434px] m-[auto] object-cover w-[100%]"
                  alt="AppleMacbookPro One"
                />
                <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[75%]">
                  <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="md:h-[37px] h-[53px] relative w-[100%]">
                        <Text
                          className="absolute bottom-[0] left-[5%] text-bluegray_900 text-left w-[auto]"
                          variant="body16"
                        >
                          PILIH KURSI
                        </Text>
                        <div className="absolute bg-white_A700 flex flex-row sm:gap-[40px] inset-x-[0] items-center justify-between mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] top-[0] sm:w-[100%] w-[524px]">
                          <div className="flex items-start justify-start px-[3px] w-[11%]">
                            <Img
                              src="images/img_tixid1.png"
                              className="h-[32px] md:h-[auto] object-cover w-[32px]"
                              alt="tixidOne"
                            />
                          </div>
                          <div className="flex flex-row gap-[17.49px] items-center justify-end w-[auto]">
                            <div className="flex font-roboto items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-center text-indigo_800 w-[auto]"
                                variant="body12"
                              >
                                Home
                              </Text>
                            </div>
                            <div className="flex font-roboto items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_900 text-center w-[auto]"
                                variant="body12"
                              >
                                Tiket Saya
                              </Text>
                            </div>
                            <div className="flex font-roboto items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_900 text-center w-[auto]"
                                variant="body12"
                              >
                                TIX ID News
                              </Text>
                            </div>
                            <Img
                              src="images/img_notification.svg"
                              className="h-[11px] w-[11px]"
                              alt="notification"
                            />
                            <Text
                              className="bg-gradient3  flex font-poppins h-[14px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[14px]"
                              as="h4"
                              variant="h4"
                            >
                              A
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="mt-[7px] not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        Pilih kursi yang akan kamu tempati selama pemutaran film
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[19px] md:w-[100%] w-[77%]">
                        <SelectBox
                          className="font-medium sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-left w-[auto]"
                          placeholderClassName="text-bluegray_900"
                          name="time"
                          placeholder="14:40"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[11px] w-[11px] rounded-[1px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                        <div className="flex flex-row gap-[8.75px] items-center justify-start w-[auto]">
                          <div className="flex flex-row gap-[4.37px] items-center justify-start w-[auto]">
                            <div className="bg-bluegray_901 h-[5px] w-[5px]"></div>
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              Terisi
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4.37px] items-center justify-start w-[auto]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_300 border-solid h-[5px] w-[5px]"></div>
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              Kursi Kosong
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4.37px] items-center justify-start w-[auto]">
                            <div className="bg-blue_600 h-[5px] w-[5px]"></div>
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              Dipilih
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-start mt-[4px] md:w-[100%] w-[77%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <List
                            className="flex-col gap-[2px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A3
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A4{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A5
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A7
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A8
                              </Text>
                              <List
                                className="sm:flex-1 sm:flex-col flex-row gap-[4px] grid grid-cols-2 sm:ml-[0] ml-[4px] sm:w-[100%] w-[9%]"
                                orientation="horizontal"
                              >
                                <div className="bg-bluegray_901 h-[15px] px-[4px] py-[16px] relative rounded-[6px] w-[43%]">
                                  <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                  <Text
                                    className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                    variant="body18"
                                  >
                                    A9
                                  </Text>
                                </div>
                                <div className="bg-bluegray_901 h-[15px] px-[4px] py-[16px] relative rounded-[6px] w-[43%]">
                                  <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                  <Text
                                    className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                    variant="body18"
                                  >
                                    A10
                                  </Text>
                                </div>
                              </List>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A11
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A12
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A13
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A14{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                A20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B2
                              </Text>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B3
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B4{" "}
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B5
                                </Text>
                              </div>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B7
                              </Text>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B8
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B9
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B10
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B11
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B12
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B13
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  B14{" "}
                                </Text>
                              </div>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                B20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C3
                              </Text>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C4{" "}
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C5
                                </Text>
                              </div>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C7
                              </Text>
                              <div className="bg-blue_600 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-blue_600 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C8
                                </Text>
                              </div>
                              <div className="bg-blue_600 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-blue_600 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C9
                                </Text>
                              </div>
                              <div className="bg-blue_600 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-blue_600 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C10
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-y-[0] left-[27%] my-[auto] text-center text-white_A700 w-[auto]"
                                  variant="body18"
                                >
                                  C11
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C12
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C13
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C14{" "}
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  C15
                                </Text>
                              </div>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                C20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D3
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D4{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D5
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D6
                              </Text>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  D7
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  D8
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  D9
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  D10
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  D11
                                </Text>
                              </div>
                              <div className="bg-bluegray_901 h-[15px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] relative rounded-[6px] w-[14px]">
                                <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                <Text
                                  className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                  variant="body18"
                                >
                                  D12
                                </Text>
                              </div>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D13
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D14{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                D20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E3
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E4{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E5
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E7
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E8
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E9
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E10
                              </Text>
                              <List
                                className="sm:flex-1 sm:flex-col flex-row gap-[4px] grid grid-cols-3 sm:ml-[0] ml-[29px] sm:w-[100%] w-[14%]"
                                orientation="horizontal"
                              >
                                <div className="bg-bluegray_901 h-[15px] px-[4px] py-[16px] relative rounded-[6px] w-[27%]">
                                  <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                  <Text
                                    className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                    variant="body18"
                                  >
                                    E11
                                  </Text>
                                </div>
                                <div className="bg-bluegray_901 h-[15px] px-[4px] py-[16px] relative rounded-[6px] w-[27%]">
                                  <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                  <Text
                                    className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                    variant="body18"
                                  >
                                    E12
                                  </Text>
                                </div>
                                <div className="bg-bluegray_901 h-[15px] px-[4px] py-[16px] relative rounded-[6px] w-[27%]">
                                  <div className="absolute bg-bluegray_901 h-[13px] inset-[0] m-[auto] px-[4px] py-[16px] rounded-[6px] w-[14px]"></div>
                                  <Text
                                    className="absolute font-bold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                    variant="body18"
                                  >
                                    E13
                                  </Text>
                                </div>
                              </List>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E14{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                E20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F3
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F4{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F5
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F7
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F8
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F9
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F10
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F11
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F12
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F13
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F14{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                F20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G3
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G4{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G5
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G7
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G8
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G9
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G10
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G11
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G12
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G13
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G14{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                G20
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start my-[0] w-[100%]">
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H1
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H2
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H3
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H4{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H5
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H6
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H7
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H8
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H9
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H10
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[29px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H11
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H12
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H13
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H14{" "}
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H15
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H16
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H17
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H18
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H19
                              </Text>
                              <Text
                                className="border-[1px] border-bluegray_300 border-solid h-[13px] sm:ml-[0] ml-[4px] px-[4px] py-[16px] rounded-[6px] text-bluegray_900 text-center w-[auto]"
                                variant="body3"
                              >
                                H20
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] sm:min-w-[100%] min-w-[524px] mt-[37px] text-[8.75px] text-center text-gray_300 w-[auto]"
                        size="sm"
                        variant="FillBlue600"
                      >
                        Layar Bioskop Disini
                      </Button>
                      <Text
                        className="mt-[19px] text-bluegray_600 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Kursi
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_901 h-[8px] mt-[4px] w-[11%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_group40.png"
          className="absolute h-[256px] inset-x-[0] mx-[auto] object-cover top-[0] md:w-[100%] w-[auto]"
          alt="GroupForty"
        />
        <div className="absolute inset-x-[0] mx-[auto] overflow-x-auto top-[0] w-[100%]">
          <div className="h-[256px] sm:h-[327px] md:h-[615px] overflow-auto md:px-[20px] relative w-[100%]">
            <div className="absolute flex md:flex-col flex-row gap-[33px] inset-x-[0] items-end justify-between mx-[auto] top-[0] w-[100%]">
              <div className="h-[256px] md:mt-[0] mt-[71px] relative w-[100%]">
                <Img
                  src="images/img_01stiffpaper1.png"
                  className="absolute h-[255px] inset-y-[0] left-[0] my-[auto] object-cover w-[21%]"
                  alt="01StiffPaperOne"
                />
                <Img
                  src="images/img_01stiffpaper1.png"
                  className="absolute h-[255px] inset-y-[0] left-[20%] my-[auto] object-cover w-[21%]"
                  alt="01StiffPaperTwo"
                />
                <Img
                  src="images/img_01stiffpaper1.png"
                  className="absolute h-[255px] inset-[0] justify-center m-[auto] object-cover w-[21%]"
                  alt="01StiffPaperThree"
                />
                <Img
                  src="images/img_01stiffpaper1.png"
                  className="h-[255px] ml-[auto] mr-[293px] my-[auto] object-cover w-[21%]"
                  alt="01StiffPaperFour"
                />
                <div className="absolute bg-gray_900_05 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[34px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1432px] mb-[40px] w-[100%]">
                    <div className="flex h-[147px] items-center justify-center p-[18px] w-[147px]">
                      <Img
                        src="images/img_tix1.png"
                        className="h-[29px] md:h-[auto] my-[40px] object-cover w-[98%]"
                        alt="tixOne"
                      />
                    </div>
                    <Text
                      className="leading-[42.73px] md:max-w-[100%] max-w-[509px] text-bluegray_900 text-right"
                      variant="body7"
                    >
                      {" "}
                      A Booking Movie Tickets Website Design Exploration
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_01stiffpaper6.png"
                className="h-[326px] md:h-[auto] object-cover w-[326px]"
                alt="01StiffPaperSix"
              />
            </div>
            <Img
              src="images/img_01stiffpaper6.png"
              className="absolute h-[326px] object-cover right-[0] top-[0] w-[326px]"
              alt="01StiffPaperFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverImagePage;
