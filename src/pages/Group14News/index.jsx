import React from "react";

import { Text, Img, Input, Button, List, Line } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Group14NewsPage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate14() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="sm:h-[104px] h-[145px] md:h-[184px] md:px-[20px] relative w-[100%]">
            <Text
              className="absolute bottom-[0] left-[5%] text-bluegray_900 text-left w-[auto]"
              variant="body5"
            >
              FILM WILL News
            </Text>
            <header className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] inset-x-[0] items-center justify-between mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] top-[0] w-[100%]">
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
          </div>
          <Text
            className="font-normal mt-[45px] not-italic text-bluegray_700 text-left w-[auto]"
            variant="body13"
          >
            The latest news about the world of cinema for you!
          </Text>
          <div className="flex md:flex-col flex-row gap-[24px] items-center justify-start mt-[8px] md:px-[20px] md:w-[100%] w-[47%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
              wrapClassName="flex md:w-[100%] sm:w-[100%] w-[86%]"
              name="SearchBar"
              placeholder="Search Post"
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#9ca7be"
                  />
                ) : (
                  <Img
                    src="images/img_search_bluegray_300.svg"
                    className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder6"
              size="mdSrc"
              variant="srcOutlineBluegray200_1"
            ></Input>
            <div className="flex items-start justify-start w-[auto]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body15"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_18chevrondown.svg"
                  className="h-[18px] rounded-[4px] w-[18px]"
                  alt="18chevrondown"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start mt-[24px] md:px-[20px] md:w-[100%] w-[auto]">
            <Button
              className="cursor-pointer font-normal min-w-[117px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBluegray301"
            >
              Spiderman
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[128px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBluegray301"
            >
              Peter Parker
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[114px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBluegray301"
            >
              Yowis Ben
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[136px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBluegray301"
            >
              Ghostbusters
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[95px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBluegray301"
            >
              Film US
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[86px] not-italic text-[16px] text-bluegray_301 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBluegray301"
            >
              Action
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[63px] items-center justify-start mt-[68px] md:px-[20px] md:w-[100%] w-[81%]">
            <div className="flex items-center justify-start md:w-[100%] w-[51%]">
              <Img
                src="images/img_spiderman.png"
                className="common-pointer h-[410px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                onClick={() => navigate("/group14newsarticle")}
                alt="Spiderman One"
              />
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[512px]">
              <Button
                className="cursor-pointer font-normal min-w-[120px] not-italic text-[20px] text-bluegray_900 text-center w-[auto]"
                size="xl"
                variant="OutlineBluegray800"
              >
                Spotlight
              </Button>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="common-pointer font-medium leading-[50.00px] md:max-w-[100%] max-w-[512px] text-bluegray_900 text-left"
                    variant="body2"
                    onClick={() => navigate("/group14newsarticle")}
                  >
                    Spider-Man : No Way Home Releases New Trailer
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[512px] not-italic text-bluegray_600 text-left"
                    variant="body13"
                  >
                    Spider-Man: No Way Home is a film that many people have been
                    waiting for. This film is a continuation of the story of
                    Peter Parker in ...
                  </Text>
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                  variant="body10"
                >
                  17 Nov 2021 | FILM WILL
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1296px] mt-[105px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[24px] items-start justify-start md:mt-[0] mt-[18px] sm:w-[100%] w-[477px]">
              <Button
                className="cursor-pointer font-normal min-w-[120px] not-italic text-[20px] text-bluegray_900 text-center w-[auto]"
                size="xl"
                variant="OutlineBluegray800"
              >
                Spotlight
              </Button>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[50.00px] md:max-w-[100%] max-w-[477px] text-bluegray_900 text-left"
                    variant="body2"
                  >
                    Yowis Ben Finale Movie Facts You Need To Know Before
                    Watching!
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[477px] not-italic text-bluegray_600 text-left"
                    variant="body13"
                  >
                    Yowis Ben Finale is the final film in the Yowis Ben film
                    tetralogy. The film, directed by Bayu Eko Moektito or the
                    usual...
                  </Text>
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                  variant="body10"
                >
                  06 Nov 2021 | FILM WILL
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[46%]">
              <Img
                src="images/img_yowisben_410x585.png"
                className="h-[410px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                alt="YowisBen One"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1297px] mt-[112px] mx-[auto] md:px-[20px] w-[100%]"
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
          <footer className="bg-white_A700 flex items-center justify-center mt-[168px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[79px] w-[100%]">
              <div className="flex flex-col gap-[12px] items-center justify-center w-[100%]">
                <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[31px] mr-[166px] md:w-[100%] w-[87%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                    <Img
                      src="images/img_tixid1_96x130.png"
                      className="h-[96px] md:h-[auto] object-cover w-[100%]"
                      alt="tixidOne One"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[96px] items-start justify-start md:mt-[0] mt-[26px] sm:w-[100%] w-[auto]">
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
                        <li className="w-[60%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              My ticket
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
                        <li className="w-[57%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Help Center
                            </Text>
                          </div>
                        </li>
                        <li className="w-[67%]">
                          <div className="cursor-pointer flex items-start justify-start">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Privacy Policy
                            </Text>
                          </div>
                        </li>
                        <li className="w-[20%]">
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
                              Terms and Condition
                            </Text>
                          </div>
                        </li>
                        <li className="w-[80%]">
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
                  <div className="flex flex-col gap-[37px] items-start justify-start md:mt-[0] mt-[26px] md:w-[100%] w-[22%]">
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
                            onClick={handleNavigate13}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate14}
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

export default Group14NewsPage;
