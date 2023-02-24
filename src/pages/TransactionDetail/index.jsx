import React from "react";

import { Img, Text, Line, List } from "components";
import { useNavigate } from "react-router-dom";

const TransactionDetailPage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate21() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
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
                    className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    Home
                  </a>
                </div>
              </li>
              <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[17%]">
                <div className="flex font-roboto items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-center text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    Tiket Saya
                  </a>
                </div>
              </li>
              <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[24%]">
                <div className="flex font-roboto items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    Group 14 News
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
            className="mt-[30px] text-bluegray_900 text-left w-[auto]"
            variant="body5"
          >
            Transaction Details
          </Text>
          <div className="h-[492px] mt-[85px] md:px-[20px] relative rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] md:w-[100%] w-[45%]">
            <div className="bg-bluegray_901 flex items-start justify-start mb-[-22px] mx-[auto] p-[32px] sm:px-[20px] w-[100%] z-[1]">
              <div className="flex flex-col gap-[29px] items-start justify-start my-[10px] md:w-[100%] w-[73%]">
                <Text
                  className="font-medium text-left text-orange_200 w-[auto]"
                  variant="body10"
                >
                  Spiderman: No Way Home
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start sm:w-[100%] w-[46%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Located
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Hung Vuong Plaza CGV
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Date
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        16 December 2021
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:ml-[0] ml-[12px] sm:mt-[0] mt-[84px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-bluegray_300 text-left w-[auto]"
                      variant="body13"
                    >
                      Time
                    </Text>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body12"
                    >
                      14:40
                    </Text>
                  </div>
                  <Line className="bg-bluegray_300 h-[136px] sm:h-[1px] sm:ml-[0] ml-[39px] sm:w-[100%] w-[1px]" />
                  <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start sm:ml-[0] ml-[40px] sm:w-[100%] w-[22%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Class
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Regular 2D
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Studio
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body12"
                      >
                        Studio 1
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex h-[234px] items-start justify-start mt-[auto] mx-[auto] p-[32px] sm:px-[20px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group80.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between mb-[43px] mt-[29px] md:w-[100%] w-[92%]">
                <div className="flex flex-col items-start justify-start sm:w-[100%] w-[55%]">
                  <div className="flex flex-row gap-[34px] items-center justify-start w-[100%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body13"
                    >
                      Booking code
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      037491740184392
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start mt-[14px] md:w-[100%] w-[68%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body13"
                    >
                      Password Key{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      147294
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[94px] items-start justify-start mt-[15px] md:w-[100%] w-[75%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body13"
                    >
                      Chair
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      C8, C9, 10
                    </Text>
                  </div>
                </div>
                <div className="border-[3px] border-bluegray_900 border-solid flex h-[80px] items-center justify-start sm:mt-[0] mt-[15px] p-[8px] w-[80px]">
                  <Img
                    src="images/img_download.svg"
                    className="h-[64px] w-[64px]"
                    alt="download"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="font-medium md:ml-[0] ml-[401px] mt-[35px] text-black_900 text-left w-[auto]"
          variant="body10"
        >
          Purchase Details
        </Text>
        <div className="flex flex-col items-center mt-[25px] sm:px-[20px] px-[401px] md:px-[40px] w-[100%]">
          <List
            className="flex-col gap-[15px] grid items-center w-[100%]"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between max-w-[636px] my-[0] w-[100%]">
              <Text
                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                variant="body13"
              >
                REGULAR SEAT
              </Text>
              <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                  variant="body13"
                >
                  Pr: 50.000 VND
                </Text>
                <Text
                  className="font-bold text-bluegray_700 text-right w-[auto]"
                  variant="body13"
                >
                  X3
                </Text>
              </div>
            </div>
            <Line className="self-center h-[1px] bg-gray_300 w-[100%]" />
            <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between max-w-[636px] my-[0] w-[100%]">
              <Text
                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                variant="body13"
              >
                SERVICE COST
              </Text>
              <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                  variant="body13"
                >
                  Pr: 3.000 VND
                </Text>
                <Text
                  className="font-bold text-bluegray_700 text-right w-[auto]"
                  variant="body13"
                >
                  X3
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row sm:gap-[40px] items-start justify-between max-w-[636px] mt-[21px] w-[100%]">
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              PROMO GROUP 14
            </Text>
            <div className="flex items-start justify-start w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                variant="body13"
              >
                - Pr: 70.000 VND
              </Text>
            </div>
          </div>
          <div className="flex flex-row sm:gap-[40px] items-start justify-between max-w-[638px] mt-[36px] w-[100%]">
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              TOTAL PAYMENT
            </Text>
            <div className="flex items-start justify-start w-[auto]">
              <Text
                className="font-bold text-bluegray_900 text-right w-[auto]"
                variant="body13"
              >
                Pr: 89.000 VND
              </Text>
            </div>
          </div>
        </div>
        <div
          className="common-pointer flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[401px] mt-[48px] md:px-[20px] w-[auto]"
          onClick={() => navigate("/myticketactiveticket")}
        >
          <Img
            src="images/img_arrowleft_bluegray_901.svg"
            className="h-[32px] rounded-[4px] w-[32px]"
            alt="arrowleft"
          />
          <Text
            className="font-bold text-bluegray_901 text-left w-[auto]"
            variant="body10"
          >
            Return
          </Text>
        </div>
        <div className="flex items-center mt-[174px] w-[100%]">
          <footer className="bg-white_A700 flex items-center justify-center md:px-[20px] w-[100%]">
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
                            onClick={handleNavigate20}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate21}
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
      </div>
    </>
  );
};

export default TransactionDetailPage;
