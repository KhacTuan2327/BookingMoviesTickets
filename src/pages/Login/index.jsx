import React from "react";

import { Img, Text, Line, Button } from "components";

const LoginPage = () => {
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
              Masuk ke TIX ID
            </Text>
            <Text
              className="font-normal mt-[75px] not-italic text-gray_601 text-left w-[auto]"
              variant="body12"
            >
              NOMOR HANDPHONE
            </Text>
            <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] w-[55%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body11"
              >
                +62
              </Text>
              <Line className="bg-gray_400 h-[17px] ml-[20px] mt-[4px] w-[1px]" />
              <Text
                className="font-normal ml-[20px] not-italic text-black_900 text-left w-[auto]"
                variant="body11"
              >
                917 0234 2791
              </Text>
            </div>
            <Line className="bg-gray_506 h-[1px] mt-[12px] rotate-[-90deg] w-[99%]" />
            <Text
              className="font-normal mt-[40px] not-italic text-gray_601 text-left w-[auto]"
              variant="body12"
            >
              PASSWORD
            </Text>
            <div className="flex items-center justify-start mt-[17px] md:w-[100%] w-[99%]">
              <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-start justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-normal not-italic text-bluegray_100 text-left w-[auto]"
                    variant="body11"
                  >
                    Masukkan Password
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
            <Text
              className="font-normal mt-[14px] not-italic text-gray_601 text-left w-[auto]"
              variant="body18"
            >
              Lupa Password ? Reset Password
            </Text>
            <Button
              className="cursor-pointer font-medium leading-[normal] mt-[30px] sm:text-[16.27px] md:text-[18.27px] text-[20.27px] text-center text-deep_orange_50 w-[399px]"
              shape="RoundedBorder4"
              size="xl"
              variant="FillGray501"
            >
              Masuk
            </Button>
            <Text
              className="font-normal md:ml-[0] ml-[147px] mt-[28px] not-italic text-center text-gray_601 w-[auto]"
              variant="body18"
            >
              Belum punya akun?
            </Text>
            <Button
              className="cursor-pointer font-medium leading-[normal] mt-[9px] sm:text-[16.27px] md:text-[18.27px] text-[20.27px] text-center text-gray_501 w-[399px]"
              shape="RoundedBorder4"
              size="xl"
              variant="OutlineGray501"
            >
              Daftar Sekarang
            </Button>
            <div className="flex flex-row gap-[29px] items-start justify-start mt-[94px] md:w-[100%] w-[49%]">
              <Text
                className="font-light text-black_900 text-left w-[auto]"
                variant="body18"
              >
                © 2009-2021, PT TIX ID
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

export default LoginPage;
