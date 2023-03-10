import React from "react";

import { Img, Text, Line, Button } from "components";

const DaftarPage = () => {
  return (
    <>
      <div className="bg-gray_201 flex sm:flex-col md:flex-col flex-row font-roboto gap-[213px] sm:gap-[40px] md:gap-[40px] items-center mx-[auto] p-[64px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Img
          src="images/img_vector.svg"
          className="h-[70px] md:ml-[0] ml-[250px] w-[auto]"
          alt="Vector"
        />
        <div className="bg-white_A700 flex items-start justify-end mr-[56px] p-[40px] md:px-[20px] md:w-[100%] w-[52%]">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] mt-[56px] md:w-[100%] w-[68%]">
            <Text
              className="font-medium text-black_900 text-left w-[auto]"
              variant="body2"
            >
              Daftar TIX ID
            </Text>
            <Text
              className="font-normal mt-[73px] not-italic text-gray_601 text-left w-[auto]"
              variant="body12"
            >
              ALAMAT EMAIL
            </Text>
            <div className="flex items-center justify-start mt-[18px] md:w-[100%] w-[99%]">
              <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body11"
                  >
                    @darlene.robert@gmail.com
                  </Text>
                  <Img
                    src="images/img_eye_bluegray_903.svg"
                    className="h-[22px] w-[22px]"
                    alt="eye"
                  />
                </div>
                <Line className="bg-gray_506 h-[1px] rotate-[-90deg] w-[100%]" />
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium mt-[37px] text-[16px] text-center text-deep_orange_50 w-[399px]"
              shape="RoundedBorder4"
              size="2xl"
              variant="FillGray501"
            >
              Daftar TIX ID
            </Button>
            <Text
              className="font-light leading-[16.00px] mt-[41px] text-black_900 text-left w-[100%]"
              variant="body18"
            >
              *Dengan mendaftar saya menyetujui Syarat dan Ketentuan serta
              Kebijakan Privasi
            </Text>
            <div className="flex flex-row gap-[58px] items-start justify-start mt-[256px] md:w-[100%] w-[57%]">
              <Text
                className="font-light text-black_900 text-left w-[auto]"
                variant="body18"
              >
                ?? 2009-2021, PT TIX ID
              </Text>
              <Text
                className="font-light text-black_900 text-left w-[auto]"
                variant="body18"
              >
                Bantuan
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarPage;
