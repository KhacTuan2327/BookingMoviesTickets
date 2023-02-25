import React from "react";

import {
  Text,
  Img,
  List,
  Slider,
  PagerIndicator,
  Button,
  Line,
} from "components";

const PrototypePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] p-[140px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[86px] items-start justify-start max-w-[3109px] mb-[131px] mx-[auto] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[88%]">
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Advertisment Prototype
            </Text>
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Movie Carousel Prototype
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[3px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[196px] md:gap-[40px] justify-start md:w-[100%] w-[47%]">
              <div className="border-[3px] border-deep_purple_A200 border-solid h-[1689px] md:ml-[0] ml-[12px] rounded-[5px] w-[100%]"></div>
              <div className="flex flex-col md:gap-[40px] gap-[63px] items-start justify-start md:w-[100%] w-[61%]">
                <Text
                  className="text-black_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Date Prototype
                </Text>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[18px] h-[139px] items-start justify-start p-[20px] rounded-[5px] w-[139px]">
                    <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[32px] rounded-[4px] w-[32px]"
                        alt="arrowleft"
                      />
                    </div>
                    <div className="bg-gray_300 flex h-[32px] items-center justify-start mb-[17px] rounded-[4px] w-[32px]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[32px] rounded-[4px] w-[32px]"
                        alt="arrowleft One"
                      />
                    </div>
                  </div>
                  <div className="border-[2px] border-deep_purple_A200 border-solid flex md:flex-1 flex-col gap-[46px] items-center justify-start p-[20px] rounded-[5px] md:w-[100%] w-[76%]">
                    <div className="h-[82px] px-[6px] relative w-[100%]">
                      <div className="absolute flex flex-row sm:gap-[40px] h-[max-content] inset-[0] items-center justify-between m-[auto] md:w-[100%] w-[610px]">
                        <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_arrowleft.svg"
                            className="h-[32px] rounded-[4px] w-[32px]"
                            alt="arrowleft Two"
                          />
                        </div>
                        <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_arrowright_bluegray_900.svg"
                            className="h-[32px] rounded-[4px] w-[32px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[86%]">
                        <List
                          className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-5 justify-start sm:w-[100%] w-[auto]"
                          orientation="horizontal"
                        >
                          <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              15 Des
                            </Text>
                            <Text
                              className="font-black text-bluegray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              RAB
                            </Text>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              16 Des
                            </Text>
                            <Text
                              className="font-black text-bluegray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              KAM
                            </Text>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              17 Des
                            </Text>
                            <Text
                              className="font-black text-bluegray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              JUM
                            </Text>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              18 Des
                            </Text>
                            <Text
                              className="font-black text-bluegray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              SAB
                            </Text>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              19 Des
                            </Text>
                            <Text
                              className="font-black text-bluegray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              MIN
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                    <List
                      className="flex-col gap-[39px] grid items-center mb-[30px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="h-[82px] px-[6px] relative w-[100%]">
                        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[86%]">
                          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                16 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                KAM
                              </Text>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                17 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                JUM
                              </Text>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                18 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                SAB
                              </Text>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                19 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                MIN
                              </Text>
                            </div>
                            <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_300 text-left w-[auto]"
                                variant="body13"
                              >
                                20 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_300 text-left w-[auto]"
                                variant="body11"
                              >
                                MON
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row sm:gap-[40px] h-[max-content] inset-[0] items-center justify-between m-[auto] md:w-[100%] w-[610px]">
                          <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[32px] rounded-[4px] w-[32px]"
                              alt="arrowleft Three"
                            />
                          </div>
                          <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                            <Img
                              src="images/img_arrowright_bluegray_900.svg"
                              className="h-[32px] rounded-[4px] w-[32px]"
                              alt="arrowright One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[82px] px-[6px] relative w-[100%]">
                        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[86%]">
                          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                17 Des
                              </Text>
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                JUM
                              </Text>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                18 Des
                              </Text>
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                SAB
                              </Text>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                19 Des
                              </Text>
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                MIN
                              </Text>
                            </div>
                            <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                                variant="body13"
                              >
                                20 Des
                              </Text>
                              <Text
                                className="font-bold text-bluegray_300 text-left w-[auto]"
                                variant="body11"
                              >
                                MON
                              </Text>
                            </div>
                            <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                                variant="body13"
                              >
                                21 Des
                              </Text>
                              <Text
                                className="font-bold text-bluegray_300 text-left w-[auto]"
                                variant="body11"
                              >
                                SEL
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row sm:gap-[40px] h-[max-content] inset-[0] items-center justify-between m-[auto] md:w-[100%] w-[610px]">
                          <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[32px] rounded-[4px] w-[32px]"
                              alt="arrowleft Four"
                            />
                          </div>
                          <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                            <Img
                              src="images/img_arrowright_bluegray_900.svg"
                              className="h-[32px] rounded-[4px] w-[32px]"
                              alt="arrowright Two"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[82px] px-[6px] relative w-[100%]">
                        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[86%]">
                          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                18 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                SAB
                              </Text>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_600 text-left w-[auto]"
                                variant="body13"
                              >
                                19 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_900 text-left w-[auto]"
                                variant="body11"
                              >
                                MIN
                              </Text>
                            </div>
                            <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_300 text-left w-[auto]"
                                variant="body13"
                              >
                                20 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_300 text-left w-[auto]"
                                variant="body11"
                              >
                                MON
                              </Text>
                            </div>
                            <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_300 text-left w-[auto]"
                                variant="body13"
                              >
                                21 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_300 text-left w-[auto]"
                                variant="body11"
                              >
                                SEL
                              </Text>
                            </div>
                            <div className="bg-gray_300 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_300 text-left w-[auto]"
                                variant="body13"
                              >
                                22 Des
                              </Text>
                              <Text
                                className="font-black text-bluegray_300 text-left w-[auto]"
                                variant="body11"
                              >
                                RAB
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row sm:gap-[40px] h-[max-content] inset-[0] items-center justify-between m-[auto] md:w-[100%] w-[610px]">
                          <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[32px] rounded-[4px] w-[32px]"
                              alt="arrowleft Five"
                            />
                          </div>
                          <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                            <Img
                              src="images/img_arrowright_bluegray_900.svg"
                              className="h-[32px] rounded-[4px] w-[32px]"
                              alt="arrowright Three"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-1 flex-col font-lato gap-[126px] md:gap-[40px] items-end justify-start pr-[20px] py-[20px] rounded-[5px] md:w-[100%] w-[44%]">
              <div className="overflow-x-auto w-[100%]">
                <div className="flex flex-col relative w-[100%]">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      1050: { items: 4 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[0.37] mt-[-NaNpx] z-[1]"
                    magnifiedIndex={1}
                    centerMode
                    ref={sliderRef}
                    className="mx-[auto] w-[100%]"
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="h-[304px] md:h-[628px] mx-[10px] relative">
                          <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[95%]">
                            <div className="bg-gray_100 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[89px] w-[100%]">
                              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[94%]">
                                <div className="flex flex-col gap-[18px] justify-start mb-[25px] md:w-[100%] w-[48%]">
                                  <div className="flex items-start justify-start px-[8px] md:w-[100%] w-[23%]">
                                    <Img
                                      src="images/img_tixid1_1.png"
                                      className="h-[88px] md:h-[auto] object-cover w-[88px]"
                                      alt="tixidOne"
                                    />
                                  </div>
                                  <div className="flex flex-col md:gap-[40px] gap-[61px] items-start justify-start md:ml-[0] ml-[14px] md:w-[100%] w-[98%]">
                                    <Text
                                      className="font-bold leading-[48.00px] text-black_900 text-left w-[100%]"
                                      variant="body4"
                                    >
                                      SEWA/BELI FILM dan SERIAL di TIX ID
                                      sekarang!
                                    </Text>
                                    <div className="flex flex-row items-start justify-start md:w-[100%] w-[31%]">
                                      <Img
                                        src="images/img_globe.svg"
                                        className="h-[12px] w-[12px]"
                                        alt="globe"
                                      />
                                      <Text
                                        className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
                                        variant="body18"
                                      >
                                        www.tix.id
                                      </Text>
                                      <Img
                                        src="images/img_camera.svg"
                                        className="h-[12px] ml-[21px] w-[12px]"
                                        alt="camera"
                                      />
                                      <Text
                                        className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
                                        variant="body18"
                                      >
                                        tix_id
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex md:ml-[0] ml-[147px] md:mt-[0] mt-[72px] relative md:w-[100%] w-[31%]">
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
                            <Img
                              src="images/img_poster2.svg"
                              className="h-[304px] w-[auto]"
                              alt="PosterTwo"
                            />
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
                                alt="arrowleft Six"
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
                                alt="arrowright Four"
                              />
                            </Button>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer rounded-[50%] h-[8px] bg-gray_701 w-[8px]" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-[8px] bg-gray_700_4c w-[8px]"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    activeIndex={sliderState1}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      1050: { items: 4 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState1(e?.item);
                    }}
                    activeSlideCSS="scale-[0.36] mt-[-NaNpx] z-[1]"
                    magnifiedIndex={1}
                    centerMode
                    ref={sliderRef1}
                    className="mt-[-11px] mx-[auto] w-[100%] z-[1]"
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="h-[304px] md:h-[628px] mx-[10px] relative">
                          <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[95%]">
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-center w-[1%] md:w-[100%]">
                                      <Img
                                        src="images/img_rectangle174.png"
                                        className="h-[10px] sm:h-[auto] md:mt-[0] mt-[62px] object-cover w-[100%]"
                                        alt="Rectangle174 One"
                                      />
                                      <Img
                                        src="images/img_image5.png"
                                        className="h-[32px] sm:h-[auto] md:ml-[0] ml-[760px] md:mt-[0] mt-[212px] object-cover w-[100%]"
                                        alt="imageFive One"
                                      />
                                      <Text
                                        className="font-normal md:ml-[0] ml-[659px] md:mt-[0] mt-[145px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body10"
                                      >
                                        Download Sekarang!
                                      </Text>
                                      <div className="h-[31px] md:ml-[0] ml-[539px] md:mt-[0] mt-[212px] w-[100%]"></div>
                                      <Img
                                        src="images/img_image4_122x1.png"
                                        className="h-[122px] sm:h-[auto] md:ml-[0] ml-[528px] md:mt-[0] mt-[30px] object-cover w-[100%]"
                                        alt="imageFour One"
                                      />
                                      <Line className="bg-bluegray_901 md:h-[1px] h-[304px] md:ml-[0] ml-[502px] md:w-[100%] w-[1px]" />
                                    </div>
                                    <div className="font-roboto h-[304px] relative w-[100%]">
                                      <Img
                                        src="images/img_pexelscottonbro3945317.png"
                                        className="h-[304px] m-[auto] object-cover w-[100%]"
                                        alt="pexelscottonbro3945317 One"
                                      />
                                      <div className="absolute bottom-[10%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[49%]">
                                        <Text
                                          className="text-center text-white_A700 w-[auto]"
                                          as="h6"
                                          variant="h6"
                                        >
                                          Pesan Tiket Film di TIX ID
                                        </Text>
                                        <Text
                                          className="font-normal mt-[16px] not-italic text-center text-white_A700 w-[auto]"
                                          variant="body11"
                                        >
                                          #BebasAntri
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_poster1.svg"
                              className="h-[304px] w-[auto]"
                              alt="PosterOne"
                            />
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
                                alt="arrowleft Nine"
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
                                alt="arrowright Seven"
                              />
                            </Button>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px]" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_75 w-[8px]"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <List
                className="flex-col font-roboto gap-[126px] md:gap-[40px] grid items-center mb-[250px] w-[99%]"
                orientation="vertical"
              >
                <div className="md:h-[1743px] h-[856px] relative w-[100%]">
                  <div className="absolute flex md:flex-col flex-row md:gap-[40px] gap-[80px] h-[100%] inset-[0] items-center justify-center m-[auto] pb-[5px] w-[83%]">
                    <div className="flex flex-col gap-[49px] items-center justify-start md:w-[100%] w-[47%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_ghostbustersafterlife_707x500.png"
                          className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="GhostbustersAfterlife Two"
                        />
                      </div>
                      <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="text-bluegray_900 text-center w-[auto]"
                          variant="body5"
                        >
                          Ghostbusters: Afterlife
                        </Text>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[35px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="GradientOrange200Lime700"
                          >
                            XXI
                          </Button>
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
                    <div className="flex flex-col gap-[49px] items-center justify-start md:w-[100%] w-[47%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_houseofgucci_707x500.png"
                          className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="HouseofGucci"
                        />
                      </div>
                      <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="text-bluegray_900 text-center w-[auto]"
                          variant="body5"
                        >
                          House of Gucci
                        </Text>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[35px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="GradientOrange200Lime700"
                          >
                            XXI
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[76px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillIndigo900"
                          >
                            CINÉPOLIS
                          </Button>
                        </div>
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
                        alt="arrowleft Twelve"
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
                        alt="arrowright Ten"
                      />
                    </Button>
                  </div>
                </div>
                <div className="md:h-[1741px] h-[856px] relative w-[100%]">
                  <div className="absolute flex md:flex-col flex-row md:gap-[40px] gap-[75px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[83%]">
                    <div className="flex flex-col gap-[49px] items-center justify-start md:w-[100%] w-[47%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_houseofgucci_707x500.png"
                          className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="HouseofGucci Two"
                        />
                      </div>
                      <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="text-bluegray_900 text-center w-[auto]"
                          variant="body5"
                        >
                          House of Gucci
                        </Text>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[35px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="GradientOrange200Lime700"
                          >
                            XXI
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[76px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillIndigo900"
                          >
                            CINÉPOLIS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[52px] items-center justify-start md:w-[100%] w-[47%]">
                      <div className="h-[707px] relative w-[100%]">
                        <Img
                          src="images/img_image2.png"
                          className="h-[707px] m-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="imageTwo One"
                        />
                        <Text
                          className="absolute bg-bluegray_900_ab flex font-bold h-[32px] items-center justify-center right-[6%] rounded-[50%] text-center text-white_A700 top-[5%] w-[32px]"
                          variant="body13"
                        >
                          1
                        </Text>
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[35px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="GradientOrange200Lime700"
                          >
                            XXI
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[76px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillIndigo900"
                          >
                            CINÉPOLIS
                          </Button>
                        </div>
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
                        alt="arrowleft Thirteen"
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
                        alt="arrowright Eleven"
                      />
                    </Button>
                  </div>
                </div>
                <div className="md:h-[1742px] h-[856px] relative w-[100%]">
                  <div className="absolute flex md:flex-col flex-row md:gap-[40px] gap-[76px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[83%]">
                    <div className="flex flex-col gap-[52px] items-center justify-start md:w-[100%] w-[47%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_image2.png"
                          className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="imageTwo Two"
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[35px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="GradientOrange200Lime700"
                          >
                            XXI
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[76px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillIndigo900"
                          >
                            CINÉPOLIS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[50px] items-center justify-start pl-[3px] md:w-[100%] w-[47%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_yowisben_707x495.png"
                          className="h-[707px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="YowisBen Two"
                        />
                      </div>
                      <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="text-bluegray_900 text-center w-[auto]"
                          variant="body5"
                        >
                          Yowis Ben Finale
                        </Text>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[auto]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[35px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="GradientOrange200Lime700"
                          >
                            XXI
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
                            className="cursor-pointer font-bold leading-[normal] min-w-[76px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillIndigo900"
                          >
                            CINÉPOLIS
                          </Button>
                        </div>
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
                        alt="arrowleft Fourteen"
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
                        alt="arrowright Twelve"
                      />
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrototypePage;
