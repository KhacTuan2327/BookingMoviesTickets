import React from "react";

import { Img, Text, Button, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const Group14NewsArticlePage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate9() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate10() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate11() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate15() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate16() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:px-[20px] px-[72px] py-[8px] w-[100%]">
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
                    className="cursor-pointer font-medium text-[18px] text-center text-indigo_800 w-[auto]"
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
                  className="bg-gradient3  cursor-pointer flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-[18px] text-center hover:text-indigo_800 text-white_A700 w-[40px]"
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
          <div className="flex items-center justify-start md:ml-[0] ml-[291px] mt-[79px] md:px-[20px] md:w-[100%] w-[60%]">
            <Img
              src="images/img_poster.png"
              className="h-[447px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
              alt="Poster"
            />
          </div>
          <Text
            className="font-normal leading-[28.00px] md:ml-[0] ml-[291px] mt-[67px] not-italic text-bluegray_900 text-left"
            variant="body12"
          >
            The pain itself is love, the main storage system. Laoreet quis vitae
            molestie eleifend in. Proin downtown that&#39;s across the backyard.
            Pregnant vehicle age is now and, arrows in the immune system.
            Pharetra teenagers need to pay bills. The famine loves this one who
            receives it and loves it. They don&#39;t have makeup for the
            industry and. The curse of the arches and the hatred of the
            gridirons Until the consequences of life and the consequences of
            adorning the front of the couch. Diam vitae neque ridiculus diam at
            posuere volutpat. Until the kids are in the backyard.
            <br />
            <br />
            The vengeful comments of the laughter. In the desire to just eu and
            love fusce lorem urna. Who but neither but the dus. Pure for
            teenagers but tomorrow, if not for life. Teenagers hate the sickness
            of the throat. The guy in the free quiver hates Massage the
            torturer, hate the vengeful cartoon.
            <br />
            The bow is hated and not the Vikings Just in order, to hang up the
            throat of the sickness and want to be easy. The film is not owned by
            the mass, right now. Selected element from the null. Commodus is a
            great old age that is incredibly complicated. The arch of the throat
            is the author of the pure
            <br />
            <br />
            Who but the carton but the love and not the eu, the pain. The
            element of the arrows in the entire earth is the place to start the
            crime. And now, no one wants to hate the lion and the want of the
            gridiron. Nor is there no easy earth to be taken at the disease of
            the course. Venenatis at bananas the author of that environment,
            urn. You can create any ugly smile.
          </Text>
          <div className="h-[29px] md:h-[95px] md:ml-[0] ml-[291px] mt-[66px] md:px-[20px] relative w-[13%]">
            <Text
              className="font-medium m-[auto] text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              Share this article
            </Text>
            <Text
              className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-bluegray_900 text-left w-[max-content]"
              variant="body10"
            >
              Share this article
            </Text>
          </div>
          <div className="h-[24px] md:h-[40px] md:ml-[0] ml-[291px] mt-[16px] md:px-[20px] relative w-[108px]">
            <Img
              src="images/img_camera_bluegray_900.svg"
              className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
              alt="camera"
            />
            <Img
              src="images/img_twitter.svg"
              className="common-pointer absolute h-[24px] inset-[0] justify-center m-[auto] w-[24px]"
              onClick={handleNavigate15}
              alt="twitter"
            />
            <Img
              src="images/img_facebook.svg"
              className="common-pointer h-[24px] ml-[auto] my-[auto] w-[24px]"
              onClick={handleNavigate16}
              alt="facebook"
            />
            <div className="absolute flex flex-row gap-[18px] h-[100%] inset-[0] items-center justify-between m-[auto] w-[auto]">
              <Img
                src="images/img_camera_bluegray_900.svg"
                className="h-[24px] w-[24px]"
                alt="camera One"
              />
              <Img
                src="images/img_twitter.svg"
                className="h-[24px] w-[24px]"
                alt="twitter One"
              />
              <Img
                src="images/img_facebook.svg"
                className="h-[24px] w-[24px]"
                alt="facebook One"
              />
            </div>
          </div>
          <Button
            className="flex items-center justify-center md:ml-[0] min-w-[101px] ml-[670px] mt-[48px] sm:ml-[0] text-center w-[auto]"
            leftIcon={
              <Img
                src="images/img_location_bluegray_900.svg"
                className="mr-[3px] text-center"
                alt="location"
              />
            }
            shape="RoundedBorder23"
            size="lg"
            variant="OutlineBluegray800"
          >
            <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[20px] text-bluegray_900 text-left">
              403
            </div>
          </Button>
          <Text
            className="md:ml-[0] ml-[571px] mt-[62px] text-black_900 text-center w-[auto]"
            variant="body5"
          >
            See Other Articles
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
                  News
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
                  News
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
                  News
                </Button>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[355px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    Donnie Yen&#39;s in the Latest Hong Kong Action Film
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
                        Payment
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
                            alt="camera Two"
                          />
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate10}
                            alt="twitter Two"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate11}
                            alt="facebook Two"
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

export default Group14NewsArticlePage;
