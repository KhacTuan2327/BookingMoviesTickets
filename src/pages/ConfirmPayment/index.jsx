import React from "react";

import { Text, Img, Line, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const ConfirmPaymentPage = () => {
  const navigate = useNavigate();

  function handleNavigate23() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate31() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="sm:h-[104px] h-[145px] md:h-[184px] md:px-[20px] relative w-[100%]">
            <Text
              className="absolute bottom-[0] left-[5%] text-bluegray_900 text-left w-[auto]"
              variant="body5"
            >
              PAYMENT CONFIRMATION
            </Text>
            <header className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] inset-x-[0] items-center justify-between mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] top-[0] w-[100%]">
              <div
                className="common-pointer flex md:flex-1 items-start justify-start px-[8px] md:w-[100%] w-[9%]"
                onClick={() => navigate("/popupmessage")}
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
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[15%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                      href="javascript:"
                    >
                      My Ticket
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[26%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                      href="javascript:"
                    >
                      FILM WILL News
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[7%] my-[4px]">
                  <Img
                    src="images/img_notification.svg"
                    className="common-pointer h-[32px] w-[32px]"
                    onClick={() => navigate("/popupmessage")}
                    alt="notification"
                  />
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="common-pointer bg-gradient3  cursor-pointer flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-[18px] text-center hover:text-indigo_800 text-white_A700 w-[40px]"
                    onClick={() => navigate("/popupmessage")}
                  >
                    A
                  </a>
                </li>
              </ul>
            </header>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[72px] mt-[21px] not-italic text-bluegray_600 text-left w-[auto]"
            variant="body13"
          >
            Confirmation of payment from the seat you reserved
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-start justify-start md:ml-[0] ml-[70px] mt-[84px] md:px-[20px] md:w-[100%] w-[70%]">
            <div className="flex flex-col items-start justify-start md:mt-[0] mt-[19px] md:w-[100%] w-[43%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-medium md:ml-[0] ml-[2px] text-bluegray_900 text-left w-[auto]"
                    variant="body10"
                  >
                    Schedule Details
                  </Text>
                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[30px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                      variant="body13"
                    >
                      Movie Title
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body10"
                    >
                      SPIDERMAN NO WAY HOME
                    </Text>
                  </div>
                  <Line className="bg-gray_300 h-[1px] md:ml-[0] ml-[2px] mt-[17px] w-[100%]" />
                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[17px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                      variant="body13"
                    >
                      Date
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body10"
                    >
                      THURSDAY, 17 DESEMBER 2021
                    </Text>
                  </div>
                  <Line className="bg-gray_300 h-[1px] md:ml-[0] ml-[2px] mt-[17px] w-[100%]" />
                  <div className="flex flex-row gap-[76px] items-center justify-start mt-[17px] md:w-[100%] w-[67%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Class
                      </Text>
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        REGULAR 2D
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[61px]">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Time
                      </Text>
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        14:40
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_300 h-[1px] md:ml-[0] ml-[2px] mt-[17px] w-[100%]" />
                  <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[2px] mt-[17px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                      variant="body13"
                    >
                      Ticket (3)
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body10"
                    >
                      C8, C9, C10
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray_300 h-[1px] md:ml-[0] ml-[2px] mt-[17px] w-[100%]" />
              <div
                className="common-pointer flex flex-row gap-[24px] items-center justify-start mt-[62px] w-[auto]"
                onClick={() => navigate("/popupmessage")}
              >
                <Img
                  src="images/img_arrowleft_bluegray_600.svg"
                  className="h-[32px] rounded-[4px] w-[32px]"
                  alt="arrowleft"
                />
                <Text
                  className="font-bold text-bluegray_600 text-left w-[auto]"
                  variant="body10"
                >
                  Return
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 border-[1px] border-gray_400 border-solid flex items-center justify-start p-[27px] sm:px-[20px] rounded-[13px] shadow-bs3 md:w-[100%] w-[50%]">
              <div className="flex flex-col items-start justify-start mb-[20px] md:w-[100%] w-[95%]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  variant="body10"
                >
                  Order Summary
                </Text>
                <Text
                  className="font-bold mt-[29px] text-bluegray_900 text-left w-[auto]"
                  variant="body13"
                >
                  Transaction Details
                </Text>
                <List
                  className="flex-col gap-[3.5px] grid items-center mt-[16px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[419px]">
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
                  <Line className="self-center h-[1px] bg-bluegray_200 w-[100%]" />
                  <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[419px]">
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
                <Text
                  className="font-bold mt-[59px] text-bluegray_900 text-left w-[auto]"
                  variant="body13"
                >
                  Promo & Voucher
                </Text>
                <div className="flex flex-row items-start justify-between mt-[16px] sm:w-[100%] w-[419px]">
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    PROMO TIX ID
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
                <div className="flex flex-row items-start justify-between mt-[45px] sm:w-[100%] w-[419px]">
                  <Text
                    className="font-bold text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Total Bayar
                  </Text>
                  <Text
                    className="font-bold text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Pr: 89.000 VND
                  </Text>
                </div>
                <div className="flex flex-row items-end justify-between mt-[49px] sm:w-[100%] w-[419px]">
                  <Text
                    className="font-bold text-bluegray_900 text-left w-[auto]"
                    variant="body13"
                  >
                    Payment Method
                  </Text>
                  <Text
                    className="font-bold text-blue_600 text-left w-[auto]"
                    variant="body18"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start mt-[24px] md:w-[100%] w-[45%]">
                  <Img
                    src="images/img_logodanapng2160p.png"
                    className="h-[16px] md:h-[auto] object-cover w-[31%]"
                    alt="LogoDANAPNG2160p"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body12"
                  >
                    Techcombank
                  </Text>
                </div>
                <Text
                  className="font-normal mt-[28px] not-italic text-left text-red_300 w-[auto]"
                  variant="body18"
                >
                  * Ticket purchase cannot be cancelled
                </Text>
                <Button
                  className="cursor-pointer font-medium mt-[22px] sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[419px]"
                  shape="RoundedBorder8"
                  size="2xl"
                  variant="FillBluegray901"
                >
                  BUY TICKET
                </Button>
              </div>
            </div>
          </div>
          <footer className="bg-white_A700 flex items-center justify-center mt-[136px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[79px] w-[100%]">
              <div className="flex flex-col gap-[12px] items-center justify-center w-[100%]">
                <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[31px] mr-[166px] md:w-[100%] w-[87%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                    <Img
                      src="images/img_tixid1_96x130.png"
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
                              TIX ID News
                            </Text>
                          </div>
                        </li>
                        <li className="w-[63%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Cinema
                            </Text>
                          </div>
                        </li>
                        <li className="w-[79%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              My Ticket
                            </Text>
                          </div>
                        </li>
                        <li className="w-[72%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Payment
                            </Text>
                          </div>
                        </li>
                        <li className="w-[87%]">
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
                  <div className="flex flex-col gap-[37px] items-start justify-start md:ml-[0] ml-[172px] md:mt-[0] mt-[26px] md:w-[100%] w-[22%]">
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
                            onClick={handleNavigate31}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate23}
                            alt="facebook"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Download Application FILM WILL
                        </Text>
                        <div className="flex flex-row gap-[21px] items-center justify-start md:w-[100%] w-[91%]">
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
                      2022 FILM WILL - Group 14
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

export default ConfirmPaymentPage;
