import React from "react";

import { Img, Text, Button } from "components";

const HomepageTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] p-[19px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1368px] mb-[191px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col justify-start md:w-[100%] w-[96%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <Img
                src="images/img_tixid1_64x64.png"
                className="h-[64px] md:h-[auto] object-cover w-[64px]"
                alt="tixidOne"
              />
              <div className="flex md:flex-1 md:flex-col flex-row gap-[48px] items-center justify-end md:w-[100%] w-[auto]">
                <Text
                  className="font-bold font-roboto text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  Home
                </Text>
                <Text
                  className="font-bold font-roboto text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  My Tickets
                </Text>
                <Text
                  className="font-bold font-roboto text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  TIX ID News
                </Text>
                <Text
                  className="font-bold font-roboto text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  Bioskop
                </Text>
                <Img
                  src="images/img_notification_black_900.svg"
                  className="h-[24px] w-[24px]"
                  alt="notification"
                />
                <Text
                  className="bg-gradient8  flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[40px]"
                  variant="body12"
                >
                  s
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] mt-[73px] md:w-[100%] w-[91%]">
              <div className="bg-gray_400 h-[707px] rounded-[16px] w-[43%]"></div>
              <div className="bg-gray_400 h-[707px] md:ml-[0] ml-[76px] rounded-[16px] w-[43%]"></div>
              <Button
                className="flex h-[72px] items-center justify-center mb-[335px] md:ml-[0] ml-[31px] md:mt-[0] mt-[300px] rounded-[50%] w-[72px]"
                size="mdIcn"
                variant="icbFillGray400"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[32px]"
                  alt="arrowright"
                />
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[173px] mt-[46px] md:w-[100%] w-[69%]">
              <Text
                className="font-bold md:mt-[0] mt-[3px] text-black_900 text-center w-[auto]"
                variant="body6"
              >
                Spiderman : No Way Home
              </Text>
              <Text
                className="font-bold mb-[3px] text-black_900 text-center w-[auto]"
                variant="body6"
              >
                Yowis Ben: Finale
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[289px] mt-[30px] md:w-[100%] w-[56%]">
              <div className="bg-gray_400 h-[26px] rounded-[4px] w-[6%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[6%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[6%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[424px] rounded-[4px] w-[6%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[6%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[6%]"></div>
            </div>
          </div>
          <div className="h-[304px] md:h-[422px] mt-[118px] relative w-[100%]">
            <div className="absolute h-[304px] inset-[0] justify-center m-[auto] md:w-[100%] w-[98%]">
              <div className="absolute bg-gray_201 border-[1px] border-gray_400 border-solid flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[43px] sm:px-[20px] md:px-[40px] w-[98%]">
                <Img
                  src="images/img_group4.svg"
                  className="h-[8px] mt-[210px] w-[auto]"
                  alt="GroupFour"
                />
              </div>
              <Button
                className="absolute flex h-[72px] inset-y-[0] items-center justify-center my-[auto] right-[0] rounded-[50%] w-[72px]"
                size="mdIcn"
                variant="icbFillGray400"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[32px]"
                  alt="arrowright One"
                />
              </Button>
            </div>
            <Button
              className="absolute flex h-[72px] inset-y-[0] items-center justify-center left-[0] my-[auto] rotate-[180deg] rounded-[50%] w-[72px]"
              size="mdIcn"
              variant="icbFillGray400"
            >
              <Img
                src="images/img_arrowright_bluegray_500.svg"
                className="h-[32px]"
                alt="arrowright Two"
              />
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start mt-[176px] md:w-[100%] w-[95%]">
            <Text
              className="font-medium md:ml-[0] ml-[4px] text-black_900 text-left w-[auto]"
              variant="body10"
            >
              TIX ID News
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[2px] mt-[14px] not-italic text-black_900 text-left w-[auto]"
              variant="body13"
            >
              Berita tentang dunia perfilman terbaru untuk anda!
            </Text>
            <div className="gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between md:ml-[0] ml-[7px] mt-[44px] w-[100%]">
              <div className="bg-gray_400 h-[214px] rounded-[16px] w-[100%]"></div>
              <div className="bg-gray_400 h-[214px] rounded-[16px] w-[100%]"></div>
              <div className="bg-gray_400 h-[214px] rounded-[16px] w-[100%]"></div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[8px] mt-[32px] md:w-[100%] w-[74%]">
              <Button
                className="cursor-pointer font-normal min-w-[72px] not-italic text-[12px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="OutlineBlack900"
              >
                Spotlight
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[72px] md:ml-[0] ml-[364px] not-italic text-[12px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="OutlineBlack900"
              >
                Spotlight
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[72px] md:ml-[0] ml-[368px] not-italic text-[12px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="OutlineBlack900"
              >
                Spotlight
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:ml-[0] ml-[8px] mt-[12px] md:w-[100%] w-[97%]">
              <Text
                className="font-medium leading-[32.00px] text-black_900 text-left w-[auto]"
                variant="body10"
              >
                Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan Warga
                Net
              </Text>
              <Text
                className="font-medium leading-[32.00px] text-black_900 text-left w-[auto]"
                variant="body10"
              >
                Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan Warga
                Net
              </Text>
              <Text
                className="font-medium leading-[32.00px] text-black_900 text-left w-[auto]"
                variant="body10"
              >
                Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan Warga
                Net
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[9px] mt-[15px] md:w-[100%] w-[79%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                17 Nov 2021 | TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[291px] not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                17 Nov 2021 | TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[295px] not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                17 Nov 2021 | TIX ID
              </Text>
            </div>
            <Text
              className="font-medium md:ml-[0] ml-[4px] mt-[154px] text-black_900 text-left w-[auto]"
              variant="body10"
            >
              Akan Datang
            </Text>
            <div className="gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[72px] w-[100%]">
              <div className="bg-gray_400 h-[507px] rounded-[16px] w-[100%]"></div>
              <div className="bg-gray_400 h-[507px] rounded-[16px] w-[100%]"></div>
              <div className="bg-gray_400 h-[507px] rounded-[16px] w-[100%]"></div>
            </div>
            <div className="gap-[128px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[54px] md:w-[100%] w-[92%]">
              <Text
                className="text-black_900 text-left w-[100%]"
                variant="body9"
              >
                Spiderman : No Way Home
              </Text>
              <Text
                className="text-black_900 text-left w-[100%]"
                variant="body9"
              >
                Spiderman : No Way Home
              </Text>
              <Text
                className="text-black_900 text-left w-[100%]"
                variant="body9"
              >
                Spiderman : No Way Home
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[24px] md:w-[100%] w-[80%]">
              <div className="bg-gray_400 h-[26px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[288px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[288px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[4%]"></div>
              <div className="bg-gray_400 h-[26px] md:ml-[0] ml-[16px] rounded-[4px] w-[4%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageTwoPage;
