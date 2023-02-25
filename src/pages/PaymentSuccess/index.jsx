import React from "react";

import { Img, Text, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  function handleNavigate24() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate25() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] items-center justify-between md:px-[20px] px-[72px] py-[8px] w-[100%]">
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
            <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[17%]">
              <div className="flex font-roboto items-start justify-start">
                <a
                  className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                  href="javascript:"
                >
                  My Ticket
                </a>
              </div>
            </li>
            <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[21%]">
              <div className="flex font-roboto items-start justify-start">
                <a
                  className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                  href="javascript:"
                >
                  TIX ID News
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
        <Text
          className="mt-[19px] text-bluegray_900 text-left w-[auto]"
          as="h5"
          variant="h5"
        >
          Payment successful!
        </Text>
        <div className="md:h-[180px] h-[207px] mt-[13px] md:px-[20px] relative w-[20%]">
          <Img
            src="images/img_clapperboard.svg"
            className="absolute h-[167px] left-[0] top-[0] w-[auto]"
            alt="Clapperboard"
          />
          <Img
            src="images/img_movieroll.svg"
            className="absolute bottom-[0] h-[109px] right-[0] w-[auto]"
            alt="MovieRoll"
          />
        </div>
        <Text
          className="font-normal leading-[137.20%] mt-[51px] not-italic text-bluegray_600 text-center sm:w-[100%] w-[48%]"
          variant="body11"
        >
          Transaction details have been sent to your email, you can also check
          other ticket details on my ticket either on the website or on your
          smartphone.
        </Text>
        <Button
          className="cursor-pointer font-medium mt-[36px] sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_300 text-center w-[216px]"
          shape="RoundedBorder8"
          size="2xl"
          variant="OutlineBluegray600"
        >
          My Ticket
        </Button>
        <footer className="bg-white_A700 flex items-center justify-center mt-[132px] md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center mb-[79px] w-[100%]">
            <div className="flex flex-col gap-[12px] items-center justify-center w-[100%]">
              <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[31px] mr-[178px] md:w-[100%] w-[86%]">
                <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                  <Img
                    src="images/img_tixid1_3.png"
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
                            Group 14 News
                          </Text>
                        </div>
                      </li>
                      <li className="w-[50%]">
                        <div className="cursor-pointer flex items-start justify-start">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                            variant="body13"
                          >
                            Cinema
                          </Text>
                        </div>
                      </li>
                      <li className="w-[63%]">
                        <div className="cursor-pointer flex items-start justify-start">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                            variant="body13"
                          >
                            My Ticket
                          </Text>
                        </div>
                      </li>
                      <li className="w-[58%]">
                        <div className="cursor-pointer flex items-start justify-start">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                            variant="body13"
                          >
                            Payment
                          </Text>
                        </div>
                      </li>
                      <li className="w-[70%]">
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
                <div className="flex flex-col gap-[37px] items-start justify-start md:ml-[0] ml-[150px] md:mt-[0] mt-[26px] md:w-[100%] w-[21%]">
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
                          onClick={handleNavigate24}
                          alt="twitter"
                        />
                        <Img
                          src="images/img_facebook.svg"
                          className="common-pointer h-[24px] w-[24px]"
                          onClick={handleNavigate25}
                          alt="facebook"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        Download Application Group 14
                      </Text>
                      <div className="flex flex-row gap-[21px] items-center justify-start md:w-[100%] w-[95%]">
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
                    2022 Group 14
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PaymentSuccessPage;
