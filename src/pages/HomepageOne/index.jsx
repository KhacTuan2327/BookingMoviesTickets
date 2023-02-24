import React from "react";

import {
  Img,
  Text,
  Line,
  Button,
  List,
  Slider,
  PagerIndicator,
} from "components";
import { useNavigate } from "react-router-dom";

const HomepageOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="bg-white_A700 flex flex-row md:gap-[40px] items-center justify-between md:px-[20px] px-[72px] py-[8px] w-[100%]">
            <div className="flex items-start justify-start px-[8px] w-[9%]">
              <Img
                src="images/img_tixid1_2.png"
                className="h-[88px] md:h-[auto] object-cover w-[88px]"
                alt="tixidOne"
              />
            </div>
            <ul className="flex md:flex-col flex-row gap-[48px] md:hidden items-center justify-end w-[auto] common-row-list">
              <li className="mt-[13px] mb-[12px] sm:w-[100%] sm:my-[10px] w-[8%]">
                <div className="flex items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-center text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    Home
                  </a>
                </div>
              </li>
              <li className="mt-[13px] mb-[12px] sm:w-[100%] sm:my-[10px] w-[12%]">
                <div className="flex items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    My ticket
                  </a>
                </div>
              </li>
              <li className="mt-[13px] mb-[12px] sm:w-[100%] sm:my-[10px] w-[22%]">
                <div className="flex items-start justify-start">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                    href="javascript:"
                  >
                    FILM WILL News
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[1%] my-[12px]">
                <Line className="bg-bluegray_300 h-[24px] md:h-[2px] md:w-[100%] w-[2px]" />
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[6%] my-[8px]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[32px] w-[32px]"
                  alt="notification"
                />
              </li>
              <li className="sm:w-[100%] sm:my-[10px] text-center">
                <Button
                  className="cursor-pointer font-medium leading-[normal] text-[18px] text-center text-orange_200"
                  shape="RoundedBorder4"
                  size="xl"
                  variant="FillBluegray901"
                >
                  Login{" "}
                </Button>
              </li>
            </ul>
          </header>
          <div className="md:h-[1800px] h-[856px] sm:h-[908px] max-w-[1300px] mt-[56px] mx-[auto] md:px-[20px] relative w-[100%]">
            <List
              className="absolute sm:flex-col flex-row md:gap-[40px] gap-[75px] grid md:grid-cols-1 grid-cols-2 inset-[0] justify-center m-[auto] w-[83%]"
              orientation="horizontal"
            >
              <div
                className="common-pointer flex flex-col gap-[52px] items-center justify-start w-[100%]"
                onClick={() => navigate("/choosingscheduletwo")}
              >
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_image2.png"
                    className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="imageTwo"
                  />
                </div>
                <div className="flex flex-col gap-[24px] h-[97px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="rotate-[-1deg] text-bluegray_900 text-center w-[auto]"
                    variant="body5"
                  >
                    Spider-Man: No Way Home
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
              <div className="flex flex-col gap-[52px] items-center justify-start pl-[3px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_yowisben.png"
                    className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="YowisBen"
                  />
                </div>
                <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-center w-[auto]"
                    variant="body5"
                  >
                    Doctor Strange: M.O.M
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
            </List>
            <div className="absolute flex flex-row md:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                size="mdIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[32px]"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                size="mdIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[32px]"
                  alt="arrowright"
                />
              </Button>
            </div>
          </div>
          <div className="font-lato h-[304px] md:h-[394px] max-w-[1368px] mt-[90px] mx-[auto] md:px-[20px] relative w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="m-[auto] w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-gradient6  flex items-center justify-start mx-[10px]">
                    <div className="h-[304px] relative w-[100%]">
                      <div className="absolute bg-gradient6  flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[95%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                          <div className="bg-gray_100 flex flex-1 items-start justify-start sm:px-[20px] md:px-[40px] px-[89px] w-[100%]">
                            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[94%]">
                              <div className="flex flex-col gap-[18px] justify-start mb-[24px] md:w-[100%] w-[48%]">
                                <div className="flex items-start justify-start px-[8px] md:w-[100%] w-[23%]">
                                  <Img
                                    src="images/img_tixid1_1.png"
                                    className="h-[88px] md:h-[auto] object-cover w-[88px]"
                                    alt="tixidOne One"
                                  />
                                </div>
                                <div className="flex flex-col md:gap-[40px] gap-[61px] items-start justify-start md:ml-[0] ml-[14px] md:w-[100%] w-[98%]">
                                  <Text
                                    className="font-bold leading-[48.00px] text-black_900 text-left w-[100%]"
                                    variant="body4"
                                  >
                                    RENT/BUY FILM and SERIAL at FILM WILL now!
                                  </Text>
                                  <div className="flex flex-row items-start justify-start md:w-[100%] w-[39%]">
                                    <Img
                                      src="images/img_globe.svg"
                                      className="h-[12px] w-[12px]"
                                      alt="globe"
                                    />
                                    <Text
                                      className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
                                      variant="body18"
                                    >
                                      14cine.io
                                    </Text>
                                    <Img
                                      src="images/img_camera.svg"
                                      className="h-[12px] ml-[29px] w-[12px]"
                                      alt="camera"
                                    />
                                    <Text
                                      className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
                                      variant="body18"
                                    >
                                      group14.cine
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:mt-[0] mt-[72px] relative md:w-[100%] w-[31%]">
                                <Img
                                  src="images/img_image7.png"
                                  className="h-[232px] my-[auto] object-cover w-[47%]"
                                  alt="imageSeven"
                                />
                                <Img
                                  src="images/img_image3.png"
                                  className="h-[222px] ml-[-53px] mt-[auto] object-cover w-[70%] z-[1]"
                                  alt="imageThree"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-center overflow-auto w-[1%] md:w-[100%]">
                            <Line className="bg-gradient7  md:h-[1px] h-[304px] md:w-[100%] w-[1px]" />
                            <Img
                              src="images/img_image4_1.png"
                              className="h-[122px] sm:h-[auto] md:ml-[0] ml-[501px] md:mt-[0] mt-[30px] object-cover w-[100%]"
                              alt="imageFour"
                            />
                            <Img
                              src="images/img_image5_32x1.png"
                              className="h-[32px] sm:h-[auto] md:ml-[0] ml-[529px] md:mt-[0] mt-[212px] object-cover w-[100%]"
                              alt="imageFive"
                            />
                            <Text
                              className="font-normal md:ml-[0] ml-[539px] md:mt-[0] mt-[145px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body10"
                            >
                              {" "}
                              Download Now!
                            </Text>
                            <div className="h-[31px] md:ml-[0] ml-[660px] md:mt-[0] mt-[212px] w-[100%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row md:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <Button
                          className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[32px]"
                            alt="arrowleft One"
                          />
                        </Button>
                        <Button
                          className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="h-[32px]"
                            alt="arrowright One"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[8px] bg-gray_701 w-[8px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[8px] bg-gray_700_4c w-[8px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[10%] flex h-[8px] inset-x-[0] justify-center mx-[auto] w-[32px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-gray_701 w-[8px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-gray_700_4c w-[8px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[2.00px]"
              unselectedWrapperCss="inline-block mx-[2.00px]"
            />
          </div>
          <div className="flex flex-row font-roboto md:gap-[40px] items-start justify-between max-w-[1297px] mt-[185px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-medium mb-[6px] text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              FILM WILL News
            </Text>
            <Text
              className="font-medium mt-[6px] text-blue_600 text-right w-[auto]"
              variant="body10"
            >
              View All
            </Text>
          </div>
          <Text
            className="font-normal mt-[6px] not-italic text-bluegray_600 text-left w-[auto]"
            variant="body13"
          >
            The latest news about the world of cinema for you!
          </Text>
          <List
            className="sm:flex-col flex-row font-roboto gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1297px] mt-[49px] mx-[auto] md:px-[20px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex sm:flex-1 flex-col gap-[40px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_image13.png"
                  className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="imageThirteen"
                />
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[355px]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[72px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                  size="sm"
                  variant="OutlineBluegray800"
                >
                  Spotlight
                </Button>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[355px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    Spider-Man: No Way Home Releases New Trailer.
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
                  src="images/img_image13_237x419.png"
                  className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="imageThirteen One"
                />
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[355px]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[72px] not-italic text-[12px] text-bluegray_900 text-center w-[auto]"
                  size="sm"
                  variant="OutlineBluegray800"
                >
                  Spotlight
                </Button>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[355px] text-bluegray_900 text-left"
                    variant="body10"
                  >
                    Yowis Ben Finale Movie Facts You Need To Know Before
                    Watching!.
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
                  src="images/img_image13_1.png"
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
                    Ghostbusters: Afterlife Comes With New Ghost Variations
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
          <div className="flex flex-row font-roboto md:gap-[40px] items-start justify-between max-w-[1297px] mt-[85px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-medium mb-[10px] text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              Next
            </Text>
            <Text
              className="font-medium mt-[10px] text-blue_600 text-right w-[auto]"
              variant="body10"
            >
              View All
            </Text>
          </div>
          <Text
            className="font-normal mt-[2px] not-italic text-bluegray_700 text-left w-[auto]"
            variant="body13"
          >
            Wait for his presence in your favorite cinema!
          </Text>
          <List
            className="sm:flex-col flex-row font-roboto md:gap-[40px] gap-[81px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1239px] mt-[30px] mx-[auto] md:px-[20px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[53px] items-start justify-start w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-center justify-start rounded-[16px] w-[100%]">
                  <Img
                    src="images/img_16401365147741.png"
                    className="h-[507px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="16401365147741"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[359px]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  variant="body10"
                >
                  The Matrix: Resurrections
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
            <div className="flex flex-col gap-[53px] items-start justify-start w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_residentevil.png"
                  className="h-[507px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                  alt="ResidentEvil"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[359px]">
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
                    variant="GradientLightgreen501Lime401"
                  >
                    BHD
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[53px] items-start justify-start w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_swordartonline.png"
                  className="h-[507px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                  alt="SwordArtOnline"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[359px]">
                <Text
                  className="font-medium leading-[32.00px] md:max-w-[100%] max-w-[359px] text-bluegray_900 text-left"
                  variant="body10"
                >
                  Sword Art Online: Progressive - Aria of a Starless Night
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
          </List>
          <footer className="bg-white_A700 flex font-roboto items-center justify-center mt-[128px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[79px] w-[100%]">
              <div className="flex flex-col gap-[12px] items-center justify-center w-[100%]">
                <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[31px] mr-[166px] md:w-[100%] w-[87%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                    <Img
                      src="images/img_tixid1_96x130.png"
                      className="h-[96px] md:h-[auto] object-cover w-[100%]"
                      alt="tixidOne Two"
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
                            onClick={handleNavigate}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate1}
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

export default HomepageOnePage;
