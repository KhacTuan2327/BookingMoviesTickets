import React from "react";

import { Img, Text, List, Button, Line } from "components";

const Group14NewsVideoPage = () => {
  function handleNavigate4() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate5() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate6() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="bg-white_A700 flex flex-row md:gap-[40px] h-[104px] md:h-[auto] items-center justify-between md:px-[20px] px-[72px] py-[8px] w-[100%]">
            <div className="flex items-start justify-start px-[8px] w-[9%]">
              <Img
                src="images/img_tixid1.png"
                className="h-[88px] md:h-[auto] object-cover w-[88px]"
                alt="tixidOne"
              />
            </div>
            <ul className="flex sm:flex-col flex-row gap-[48px] sm:hidden items-center justify-end w-[auto] common-row-list">
              <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[19%]">
                <div className="flex font-roboto items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center w-[auto]"
                    href="javascript:"
                  >
                    My Ticket
                  </a>
                </div>
              </li>
              <li className="mt-[9px] mb-[8px] sm:w-[100%] sm:my-[10px] w-[32%]">
                <div className="flex font-roboto items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] hover:text-bluegray_900 text-center text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    FILM WILL News
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[8%] my-[4px]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[32px] w-[32px]"
                  alt="notification"
                />
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="bg-gradient3  cursor-pointer flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-[18px] hover:text-bluegray_900 text-center text-white_A700 w-[40px]"
                  href="javascript:"
                >
                  A
                </a>
              </li>
            </ul>
          </header>
          <div className="flex flex-col gap-[32px] items-start justify-start max-w-[858px] md:ml-[0] ml-[291px] mt-[78px] md:px-[20px] w-[100%]">
            <Text
              className="md:max-w-[100%] max-w-[858px] text-bluegray_900 text-left"
              as="h5"
              variant="h5"
            >
              Spider-Man : No Way Home Releases New Trailer
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
              variant="body10"
            >
              17 Nov 2021 | FILM WILL
            </Text>
          </div>
          <div className="h-[447px] md:h-[526px] md:ml-[0] ml-[291px] mt-[79px] md:px-[20px] relative md:w-[100%] w-[60%]">
            <Img
              src="images/img_poster.png"
              className="h-[447px] m-[auto] object-cover rounded-[12px] w-[100%]"
              alt="Poster"
            />
            <Img
              src="images/img_videoicon.svg"
              className="absolute h-[185px] inset-x-[0] mx-[auto] top-[27%] w-[185px]"
              alt="VideoIcon"
            />
          </div>
          <Text
            className="font-medium md:ml-[0] ml-[291px] mt-[69px] text-bluegray_900 text-left w-[auto]"
            variant="body10"
          >
            Source : Marvel Intertainment | YouTube
          </Text>
          <Text
            className="font-medium md:ml-[0] ml-[291px] mt-[49px] text-bluegray_900 text-left w-[auto]"
            variant="body10"
          >
            Share this Videos
          </Text>
          <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[291px] mt-[16px] md:px-[20px] w-[auto]">
            <Img
              src="images/img_camera_bluegray_900.svg"
              className="h-[24px] w-[24px]"
              alt="camera"
            />
            <Img
              src="images/img_twitter.svg"
              className="common-pointer h-[24px] w-[24px]"
              onClick={handleNavigate4}
              alt="twitter"
            />
            <Img
              src="images/img_facebook.svg"
              className="common-pointer h-[24px] w-[24px]"
              onClick={handleNavigate5}
              alt="facebook"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[580px] mt-[124px] text-black_900 text-center w-[auto]"
            variant="body5"
          >
            See Other Videos
          </Text>
          <List
            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1297px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex sm:flex-1 flex-col gap-[40px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_image13_1.png"
                  className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="imageThirteen"
                />
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[355px]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[55px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                  size="sm"
                  variant="OutlineBluegray800"
                >
                  Video
                </Button>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[355px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    Ghostbusters: Afterlife Comes Featuring New Ghost Variations
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    variant="body13"
                  >
                    08 Nov 2021 | FILM WILL
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[40px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_image13_2.png"
                  className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="imageThirteen One"
                />
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[355px]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[55px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                  size="sm"
                  variant="OutlineBluegray800"
                >
                  Video
                </Button>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[355px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    House of Gucci: The Story of Gucci&#39;s Sole Heir in 1955.{" "}
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    variant="body13"
                  >
                    09 Nov 2021 | FILM WILL
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[40px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_image13_3.png"
                  className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="imageThirteen Two"
                />
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[355px]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[55px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                  size="sm"
                  variant="OutlineBluegray800"
                >
                  Video
                </Button>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[355px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    Donnie Yen&#39;s Action in the Latest Hong Kong Action Film
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                    variant="body13"
                  >
                    15 Nov 2021 | FILM WILL
                  </Text>
                </div>
              </div>
            </div>
          </List>
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
                            alt="camera One"
                          />
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate6}
                            alt="twitter One"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate7}
                            alt="facebook One"
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

export default Group14NewsVideoPage;
