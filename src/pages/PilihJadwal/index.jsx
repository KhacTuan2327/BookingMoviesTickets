import React from "react";

import { Text, Img, List, Line, Button, RatingBar } from "components";

const PilihJadwalPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-start justify-end mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[72px] py-[72px] w-[100%]">
        <div className="flex flex-col gap-[32px] justify-start mt-[20px] md:w-[100%] w-[94%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between mr-[19px] md:w-[100%] w-[99%]">
            <div className="flex flex-col justify-start md:w-[100%] w-[auto]">
              <Text
                className="md:ml-[0] ml-[72px] text-black_900 text-left w-[auto]"
                variant="body5"
              >
                JADWAL
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] mt-[57px] md:w-[100%] w-[94%]">
                <Img
                  src="images/img_arrowleft_bluegray_500.svg"
                  className="h-[15px] w-[auto]"
                  alt="arrowleft"
                />
                <List
                  className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 md:ml-[0] ml-[15px] md:w-[100%] w-[94%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_400 flex flex-col h-[86px] items-start justify-end p-[15px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[8px] text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      21 Oct
                    </Text>
                    <Text
                      className="font-black md:ml-[0] ml-[5px] mt-[4px] text-bluegray_900 text-left w-[auto]"
                      variant="body11"
                    >
                      SEN
                    </Text>
                  </div>
                  <div className="border-[2px] border-gray_400 border-solid flex flex-col h-[86px] items-center justify-end p-[15px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[8px] text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      22 Oct
                    </Text>
                    <Text
                      className="font-black mt-[4px] text-bluegray_900 text-left w-[auto]"
                      variant="body11"
                    >
                      SEL
                    </Text>
                  </div>
                  <div className="border-[2px] border-gray_400 border-solid flex flex-col h-[86px] items-center justify-end p-[15px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[8px] text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      22 Oct
                    </Text>
                    <Text
                      className="font-black mt-[4px] text-bluegray_900 text-center w-[auto]"
                      variant="body11"
                    >
                      RAB
                    </Text>
                  </div>
                  <div className="border-[2px] border-gray_400 border-solid flex flex-col h-[86px] items-center justify-end p-[15px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[8px] text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      22 Oct
                    </Text>
                    <Text
                      className="font-black mt-[4px] text-bluegray_900 text-center w-[auto]"
                      variant="body11"
                    >
                      KAM
                    </Text>
                  </div>
                  <div className="border-[2px] border-gray_400 border-solid flex flex-col h-[86px] items-center justify-end p-[15px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[8px] text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      22 Oct
                    </Text>
                    <Text
                      className="font-black mt-[4px] text-bluegray_900 text-center w-[auto]"
                      variant="body11"
                    >
                      JUM
                    </Text>
                  </div>
                  <div className="border-[2px] border-gray_400 border-solid flex flex-col h-[86px] items-center justify-end p-[15px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[8px] text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      22 Oct
                    </Text>
                    <Text
                      className="font-black mt-[4px] text-bluegray_900 text-center w-[auto]"
                      variant="body11"
                    >
                      JUM
                    </Text>
                  </div>
                </List>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[15px] md:ml-[0] ml-[17px] w-[auto]"
                  alt="arrowright"
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-[40px] w-[100%]">
                <div className="h-[78px] relative w-[100%]">
                  <div className="absolute bg-gray_102 flex flex-row gap-[9px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[22px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_location_black_900.svg"
                      className="h-[32px] ml-[50px] mt-[2px] w-[32px]"
                      alt="location"
                    />
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body11"
                    >
                      TANGERANG
                    </Text>
                  </div>
                  <Line className="absolute bg-bluegray_600 h-[1px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
                  <Line className="absolute bg-bluegray_600 h-[77px] inset-y-[0] my-[auto] right-[0] w-[1px]" />
                </div>
                <Line className="bg-bluegray_600 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="bg-gray_400 h-[214px] md:mt-[0] mt-[91px] rounded-[16px] w-[33%]"></div>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[66px] md:w-[100%] w-[95%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[91%]">
              <div className="flex h-[37px] justify-end relative md:w-[100%] w-[22%]">
                <Text
                  className="mb-[6px] ml-[18px] mt-[auto] not-italic text-gray_502 text-left w-[auto]"
                  variant="body14"
                >
                  Cari Bioskop
                </Text>
                <div className="absolute border-[1px] border-bluegray_900 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[4px] rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_search.svg"
                    className="h-[21px] my-[3px] w-[auto]"
                    alt="search"
                  />
                </div>
              </div>
              <Text
                className="font-normal md:ml-[0] ml-[250px] not-italic text-black_900 text-left w-[auto]"
                variant="body15"
              >
                Bioskop
              </Text>
              <div className="flex flex-col gap-[5px] justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[51%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_18chevrondown_bluegray_500.svg"
                    className="h-[24px] sm:mt-[0] mt-[22px] rounded-[5px] w-[24px]"
                    alt="18chevrondown"
                  />
                  <Text
                    className="font-normal sm:ml-[0] ml-[23px] sm:mt-[0] mt-[25px] not-italic text-black_900 text-left w-[auto]"
                    variant="body15"
                  >
                    Sortir
                  </Text>
                  <Img
                    src="images/img_18chevrondown_bluegray_500.svg"
                    className="h-[24px] sm:ml-[0] ml-[4px] sm:mt-[0] mt-[22px] rounded-[5px] w-[24px]"
                    alt="18chevrondown One"
                  />
                  <Text
                    className="font-medium mb-[17px] sm:ml-[0] ml-[125px] text-bluegray_900 text-left w-[auto]"
                    variant="body10"
                  >
                    SPIDERMAN : NO WAY HOME
                  </Text>
                </div>
                <div className="flex flex-row gap-[70px] items-center justify-end ml-[auto] md:w-[100%] w-[29%]">
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Genre
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Action
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[9px] md:w-[100%] w-[78%]">
              <Button
                className="flex h-[32px] items-center justify-center rounded-[50%] w-[32px]"
                size="smIcn"
                variant="icbFillGray800"
              >
                <Img
                  src="images/img_airplane.svg"
                  className=""
                  alt="airplane"
                />
              </Button>
              <Text
                className="font-medium md:ml-[0] ml-[16px] text-black_900 text-left w-[auto]"
                variant="body10"
              >
                GRAND INDONESIA CGV
              </Text>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[301px] md:mt-[0] my-[3px] rounded-[4px] w-[5%]"></div>
              <Text
                className="font-normal md:ml-[0] ml-[125px] md:mt-[0] mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body13"
              >
                Durasi
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[66px] md:mt-[0] mt-[4px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body13"
              >
                2j 25m
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[3px] w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[14px] md:w-[100%] w-[55%]">
                <Text
                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body13"
                >
                  JL. MH. TAHMRIN NO.1
                </Text>
                <div className="flex items-center justify-start mt-[31px] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                      <Text
                        className="font-bold text-gray_503 text-left w-[auto]"
                        variant="body10"
                      >
                        REGULAR 2D
                      </Text>
                      <Text
                        className="font-normal mt-[5px] not-italic text-gray_504 text-left w-[auto]"
                        variant="body12"
                      >
                        Rp. 45.000 - Rp. 50.000
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[18px] items-center justify-start mt-[16px] md:w-[100%] w-[56%]">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[18px] items-center justify-start mt-[16px] md:w-[100%] w-[41%]">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                    </div>
                    <div className="flex flex-row sm:gap-[40px] items-end justify-between mt-[33px] md:w-[100%] w-[99%]">
                      <Text
                        className="font-bold text-gray_503 text-left w-[auto]"
                        variant="body10"
                      >
                        GOLD CLASS 2D
                      </Text>
                      <Text
                        className="font-normal mt-[6px] not-italic text-gray_504 text-right w-[auto]"
                        variant="body12"
                      >
                        Rp. 70.000
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[19px] items-center justify-start mt-[17px] md:w-[100%] w-[56%]">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        12:20
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineBlack900"
                      >
                        14:40
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[64px] w-[100%]">
                  <Button
                    className="flex h-[32px] items-center justify-center md:mt-[0] mt-[10px] rounded-[50%] w-[32px]"
                    size="smIcn"
                    variant="icbFillGray800"
                  >
                    <Img
                      src="images/img_airplane.svg"
                      className=""
                      alt="airplane One"
                    />
                  </Button>
                  <Text
                    className="font-medium md:ml-[0] ml-[16px] md:mt-[0] mt-[10px] text-black_900 text-left w-[auto]"
                    variant="body10"
                  >
                    ARION XXI
                  </Text>
                  <div className="bg-gray_400 h-[26px] mb-[16px] md:ml-[0] ml-[450px] rounded-[4px] w-[7%]"></div>
                </div>
                <Text
                  className="font-normal mt-[20px] not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body13"
                >
                  ARION PLAZA LT. 4 JL. PEMUDA KAV. 3-4, RAWAMANGUN
                </Text>
                <Text
                  className="font-bold mt-[32px] text-gray_503 text-left w-[auto]"
                  variant="body10"
                >
                  2D
                </Text>
                <div className="flex flex-row gap-[18px] items-center justify-start mt-[16px] md:w-[100%] w-[41%]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    14:40
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    14:40
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-black_900 text-center w-[auto]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    14:40
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[36%]">
                <div className="flex flex-row gap-[43px] items-center justify-start md:w-[100%] w-[42%]">
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Sutradara
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Sutradara
                  </Text>
                </div>
                <div className="flex flex-row gap-[32px] items-start justify-start mt-[12px] md:w-[100%] w-[35%]">
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Rating Usia
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    R13+
                  </Text>
                </div>
                <Line className="bg-bluegray_600 h-[1px] mt-[30px] w-[100%]" />
                <div className="flex items-center justify-start mt-[16px] md:w-[100%] w-[32%]">
                  <RatingBar
                    className=""
                    value={5}
                    starCount={5}
                    activeColor="#c4c4c4"
                    size={24}
                  ></RatingBar>
                </div>
                <div className="flex items-center justify-start mt-[9px] w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-start md:w-[100%] w-[19%]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body19"
                      >
                        9.457 Pemilih
                      </Text>
                      <Img
                        src="images/img_arrowleft_bluegray_500_18x18.svg"
                        className="h-[18px] rounded-[5px] w-[18px]"
                        alt="arrowleft One"
                      />
                    </div>
                    <Line className="bg-bluegray_600 h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="h-[323px] md:h-[385px] mt-[62px] relative w-[100%]">
                  <div className="flex flex-col h-[100%] items-start justify-start m-[auto] w-[90%]">
                    <Text
                      className="text-black_900 text-left w-[auto]"
                      variant="body8"
                    >
                      GRAND INDONESIA CGV
                    </Text>
                    <Text
                      className="font-light mt-[6px] text-bluegray_900 text-left w-[auto]"
                      variant="body19"
                    >
                      JL. MH. TAHMRIN NO.1
                    </Text>
                    <Text
                      className="font-normal mt-[98px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body18"
                    >
                      *Pemiliihan kursi dapat dilakukan setelah ini
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mt-[30px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-deep_orange_50 w-[388px]"
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="FillGray501"
                    >
                      BELI TIKET
                    </Button>
                  </div>
                  <div className="absolute border-[1px] border-gray_400 border-solid flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[20px] rounded-[8px] w-[100%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start mb-[123px] mt-[100px] md:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body15"
                      >
                        Senin, 23 Oktober 2021
                      </Text>
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-medium text-black_900 text-left w-[auto]"
                          variant="body10"
                        >
                          GOLD CLASS 2D{" "}
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-black_900 text-left w-[auto]"
                          variant="body12"
                        >
                          14:40
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PilihJadwalPage;
