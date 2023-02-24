import React from "react";

import { Img, Text, Line, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const MyTicketTransactionListPage = () => {
  const navigate = useNavigate();

  function handleNavigate17() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate26() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto gap-[136px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:px-[20px] relative w-[100%]">
          <div className="bg-gray_101 flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[72px] py-[72px] w-[22%]">
            <div className="flex flex-col gap-[10px] items-start justify-start mb-[1120px] mt-[46px] w-[auto]">
              <div
                className="common-pointer flex flex-row gap-[16px] items-center justify-start w-[auto]"
                onClick={() => navigate("/myticketactiveticket")}
              >
                <Img
                  src="images/img_ticket.svg"
                  className="h-[32px] w-[32px]"
                  alt="ticket"
                />
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  variant="body12"
                >
                  ACTIVE TICKET
                </Text>
              </div>
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
              <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_menu.svg"
                  className="h-[32px] w-[32px]"
                  alt="menu"
                />
                <Text
                  className="font-medium text-blue_600 text-left w-[auto]"
                  variant="body12"
                >
                  TRANSACTION LIST
                </Text>
              </div>
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] items-center justify-between max-w-[1440px] ml-[-313px] mr-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] w-[100%] z-[1]">
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
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-end sm:w-[100%] w-[auto]">
              <div className="flex font-roboto items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-bluegray_900 text-center w-[auto]"
                  variant="body12"
                >
                  Home
                </Text>
              </div>
              <div className="flex font-roboto items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-center text-indigo_800 w-[auto]"
                  variant="body12"
                >
                  My Ticket
                </Text>
              </div>
              <div className="flex font-roboto items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-bluegray_900 text-center w-[auto]"
                  variant="body12"
                >
                  Group 14 News
                </Text>
              </div>
              <Img
                src="images/img_notification.svg"
                className="h-[32px] w-[32px]"
                alt="notification"
              />
              <Text
                className="bg-gradient3  flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[40px]"
                variant="body12"
              >
                A
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start ml-[undefinedpx] mr-[271px] mt-[auto] w-[54%] z-[1]">
            <Text
              className="font-medium text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              My Ticket
            </Text>
            <Text
              className="font-normal mt-[14px] not-italic text-bluegray_600 text-left w-[auto]"
              variant="body13"
            >
              List of tickets and transactions you&#39;ve done
            </Text>
            <div className="flex flex-row gap-[18px] items-start justify-start mt-[19px] w-[auto]">
              <Button
                className="cursor-pointer font-normal min-w-[71px] not-italic text-[16px] text-blue_600 text-center w-[auto]"
                shape="RoundedBorder23"
                size="xl"
                variant="OutlineBlue600"
              >
                Film{" "}
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[80px] not-italic text-[16px] text-bluegray_800 text-center w-[auto]"
                shape="RoundedBorder23"
                size="xl"
                variant="OutlineBluegray800"
              >
                Event
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[99px] not-italic text-[16px] text-bluegray_800 text-center w-[auto]"
                shape="RoundedBorder23"
                size="xl"
                variant="OutlineBluegray800"
              >
                Voucher
              </Button>
            </div>
            <List
              className="flex-col gap-[24px] grid items-start max-w-[768px] mt-[39px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start sm:w-[100%] w-[28%]">
                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_spidermannoway_202x135.png"
                        className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="SpidermanNoWay"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        Spiderman: No Way Home
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Thursday, 16 Desember 2021, 14:40{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_location_bluegray_300_32x32.svg"
                        className="h-[32px] w-[32px]"
                        alt="location"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Hung Vuong Plaza CGV
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        ( Regular 2D)
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[110px] text-[16px] text-center text-gray_300 w-[auto]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlue600"
                >
                  Succeed
                </Button>
              </div>
              <Line className="self-center h-[1px] bg-bluegray_200 backdrop-opacity-[0.5] blur-[2.00px] w-[100%]" />
              <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start sm:w-[100%] w-[28%]">
                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_tenet_202x135.png"
                        className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Tenet"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        Tenet
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Thursday, 16 Desember 2021, 14:40{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_location_bluegray_300_32x32.svg"
                        className="h-[32px] w-[32px]"
                        alt="location One"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Hung Vuong Plaza CGV
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        ( Regular 2D)
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[110px] text-[16px] text-center text-gray_300 w-[auto]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlue600"
                >
                  Succeed
                </Button>
              </div>
              <Line className="self-center h-[1px] bg-bluegray_200 backdrop-opacity-[0.5] blur-[2.00px] w-[100%]" />
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start sm:w-[100%] w-[28%]">
                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_tenet_202x135.png"
                        className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Tenet One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        Tenet
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Thursday, 16 Desember 2021, 14:40{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_location_bluegray_300_32x32.svg"
                        className="h-[32px] w-[32px]"
                        alt="location Two"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Hung Vuong Plaza CGV
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        ( Regular 2D)
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[91px] text-[16px] text-center text-gray_300 w-[auto]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillRed300"
                >
                  Failed
                </Button>
              </div>
              <Line className="self-center h-[1px] bg-bluegray_200 backdrop-opacity-[0.5] blur-[2.00px] w-[100%]" />
              <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start sm:w-[100%] w-[25%]">
                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_johnwickchapter_202x135.png"
                        className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="JohnWickChapter"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        John Wick: Chapter 3 - Parabellum{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Thursday, 16 Desember 2021, 14:40{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_location_bluegray_300_32x32.svg"
                        className="h-[32px] w-[32px]"
                        alt="location Three"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Hung Vuong Plaza CGV
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        ( Regular 2D)
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[110px] text-[16px] text-center text-gray_300 w-[auto]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlue600"
                >
                  Succeed
                </Button>
              </div>
              <Line className="self-center h-[1px] bg-bluegray_200 backdrop-opacity-[0.5] blur-[2.00px] w-[100%]" />
              <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start sm:w-[100%] w-[28%]">
                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_avengersendgame_202x135.png"
                        className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="AvengersEndgame"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        variant="body10"
                      >
                        Avengers: Endgame
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        Thursday, 16 Desember 2021, 14:40{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_location_bluegray_300_32x32.svg"
                        className="h-[32px] w-[32px]"
                        alt="location Four"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body13"
                      >
                        Hung Vuong Plaza CGV
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left w-[auto]"
                        variant="body13"
                      >
                        ( Regular 2D)
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[110px] text-[16px] text-center text-gray_300 w-[auto]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlue600"
                >
                  Succeed
                </Button>
              </div>
            </List>
          </div>
        </div>
        <footer className="bg-white_A700 flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center mb-[79px] w-[100%]">
            <div className="flex flex-col gap-[12px] items-center justify-center w-[100%]">
              <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[31px] mr-[178px] md:w-[100%] w-[86%]">
                <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                  <Img
                    src="images/img_tixid1_4.png"
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
                          onClick={handleNavigate26}
                          alt="twitter"
                        />
                        <Img
                          src="images/img_facebook.svg"
                          className="common-pointer h-[24px] w-[24px]"
                          onClick={handleNavigate17}
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

export default MyTicketTransactionListPage;
