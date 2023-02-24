import React from "react";

import { Img, Text, List, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const ComingSoonMoviesPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate22() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="flex flex-col md:px-[20px] relative w-[100%]">
            <header className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] items-center justify-between mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] w-[100%]">
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
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-white_A700 w-[auto]"
                      href="javascript:"
                    >
                      Home
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[15%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-white_A700 w-[auto]"
                      href="javascript:"
                    >
                      My Ticket
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[26%]">
                  <div className="flex font-roboto items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-white_A700 w-[auto]"
                      href="javascript:"
                    >
                      FILM WILL News
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
                    className="bg-gradient3  cursor-pointer flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-[18px] text-center text-white_A700 w-[40px]"
                    href="javascript:"
                  >
                    A
                  </a>
                </li>
              </ul>
            </header>
            <Text
              className="ml-[72px] mt-[-1.11px] text-bluegray_900 text-left w-[auto] z-[1]"
              variant="body5"
            >
              Next
            </Text>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[72px] mt-[21px] not-italic text-bluegray_700 text-left w-[auto]"
            variant="body13"
          >
            Wait for his presence in your favorite cinema!
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1239px] mt-[65px] mx-[auto] md:px-[20px] w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-[40px] gap-[81px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[65%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[53px] items-start justify-start mb-[32px] sm:ml-[0] w-[auto]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start rounded-[16px] w-[100%]">
                    <Img
                      src="images/img_16401365147741.png"
                      className="h-[507px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="16401365147741"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    variant="body10"
                  >
                    The Matrix: Resurections
                  </Text>
                  <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[53px] text-[12px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="GradientOrange200Lime700"
                    >
                      Galaxy
                    </Button>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRed600"
                    >
                      CGV
                    </Button>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="GradientLightgreen501Lime401"
                    >
                      BHD
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[53px] items-start justify-start sm:ml-[0] w-[auto]">
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_residentevil.png"
                    className="h-[507px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="ResidentEvil"
                  />
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[359px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    Resident Evil: Welcome to Raccoon City
                  </Text>
                  <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[53px] text-[12px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="GradientOrange200Lime700"
                    >
                      Galaxy
                    </Button>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRed600"
                    >
                      CGV
                    </Button>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="GradientLightgreen501Lime401_1"
                    >
                      BHD
                    </Button>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[53px] items-start justify-start w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_swordartonline.png"
                  className="h-[507px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                  alt="SwordArtOnline"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[359px] text-bluegray_900 text-left"
                  variant="body10"
                >
                  Sword Art Online: Progressive - Aria of a Starless Night
                </Text>
                <div className="flex items-start justify-start w-[auto]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillRed600"
                  >
                    CGV
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-white_A700 flex items-center justify-center mt-[128px] md:px-[20px] w-[100%]">
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
                        <li className="w-[60%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Privicy Policy
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
                  <div className="flex flex-col gap-[37px] items-start justify-start md:ml-[0] ml-[150px] md:mt-[0] mt-[26px] md:w-[100%] w-[22%]">
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
                            onClick={handleNavigate22}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate12}
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

export default ComingSoonMoviesPage;
