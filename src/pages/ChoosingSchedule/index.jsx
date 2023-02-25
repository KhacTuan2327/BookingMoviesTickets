import React from "react";

import { Text, Img, Line, Button, List, Input } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const ChoosingSchedulePage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="md:h-[104px] h-[145px] md:px-[20px] relative w-[100%]">
            <Text
              className="absolute bottom-[0] left-[5%] text-bluegray_900 text-left w-[auto]"
              variant="body5"
            >
              TIMETABLE
            </Text>
            <header className="absolute bg-white_A700 flex flex-row md:gap-[40px] h-[104px] md:h-[auto] inset-x-[0] items-center justify-between mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] top-[0] w-[100%]">
              <div
                className="common-pointer flex items-start justify-start px-[8px] w-[9%]"
                onClick={() => navigate("/homepageone")}
              >
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
                <li className="mt-[13px] mb-[12px] sm:w-[100%] sm:my-[10px] w-[13%]">
                  <div className="flex items-start justify-start">
                    <a
                      className="cursor-pointer font-medium text-[18px] text-bluegray_900 text-center hover:text-indigo_800 w-[auto]"
                      href="javascript:"
                    >
                      My Ticket
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
                    Log In
                  </Button>
                </li>
              </ul>
            </header>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[72px] mt-[21px] not-italic text-bluegray_600 text-left w-[auto]"
            variant="body13"
          >
            Choose the cinema schedule that you will watch
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1192px] mt-[4px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[42px] items-center justify-start md:mt-[0] mt-[26px] md:w-[100%] w-[55%]">
              <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                  <div className="h-[82px] px-[6px] relative md:w-[100%] w-[98%]">
                    <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[86%]">
                      <div className="flex md:flex-col flex-row gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                        <List
                          className="sm:flex-col flex-row gap-[24px] grid grid-cols-2 md:w-[100%] w-[38%]"
                          orientation="horizontal"
                        >
                          <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              15 Dec
                            </Text>
                            <Text
                              className="font-black text-bluegray_900 text-left w-[auto]"
                              variant="body11"
                            >
                              SAT
                            </Text>
                          </div>
                          <div className="bg-bluegray_901 flex flex-col gap-[4px] items-center justify-center p-[18px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                              variant="body13"
                            >
                              16 Dec
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body11"
                            >
                              KAM
                            </Text>
                          </div>
                        </List>
                        <List
                          className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-5 w-[100%]"
                          orientation="horizontal"
                        >
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
                              TUE
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
                              WED
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
                              THU
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
                              FRI
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
                              SAT
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="absolute flex flex-row sm:gap-[40px] h-[max-content] inset-[0] items-center justify-between m-[auto] md:w-[100%] w-[610px]">
                      <div className="flex h-[32px] items-center justify-start rounded-[4px] w-[32px]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="h-[32px] rounded-[4px] w-[32px]"
                          alt="arrowleft"
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
                  </div>
                  <Line className="bg-gray_400 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-start w-[auto]">
                    <Img
                      src="images/img_location_bluegray_900_32x32.svg"
                      className="h-[32px] w-[32px]"
                      alt="location"
                    />
                    <div className="flex flex-row gap-[8px] items-center justify-start pr-[16px] py-[8px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body11"
                      >
                        HO CHI MINH CITY
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[32px] rounded-[4px] w-[32px]"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[41px] items-end justify-between w-[100%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="flex-1 font-normal gap-[17px] not-italic p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                      wrapClassName="flex md:w-[100%] sm:w-[100%] w-[54%]"
                      name="SearchBar"
                      placeholder="Hung Vuong Plaza"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#333333"
                          />
                        ) : (
                          <Img
                            src="images/img_search_bluegray_900.svg"
                            className="cursor-pointer ml-[35px] mr-[12px] rounded-[4px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                      shape="srcRoundedBorder6"
                      size="smSrc"
                      variant="srcOutlineBluegray600"
                    ></Input>
                    <div className="flex md:flex-1 flex-row items-center justify-end md:mt-[0] mt-[10px] pr-[3px] md:w-[100%] w-[41%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Studio
                          </Text>
                          <Img
                            src="images/img_18chevrondown.svg"
                            className="h-[18px] rounded-[4px] w-[18px]"
                            alt="18chevrondown"
                          />
                        </div>
                      </div>
                      <div className="flex items-start justify-start ml-[4px] w-[auto]">
                        <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Sort
                          </Text>
                          <Img
                            src="images/img_18chevrondown.svg"
                            className="h-[18px] rounded-[4px] w-[18px]"
                            alt="18chevrondown One"
                          />
                        </div>
                      </div>
                      <div className="flex items-start justify-start ml-[13px] w-[auto]">
                        <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] shadow-bs3 w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            variant="body15"
                          >
                            Cinema
                          </Text>
                          <Img
                            src="images/img_18chevrondown.svg"
                            className="h-[18px] rounded-[4px] w-[18px]"
                            alt="18chevrondown Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between max-w-[638px] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <Button
                          className="flex h-[32px] items-center justify-center rounded-[50%] w-[32px]"
                          size="smIcn"
                          variant="icbFillBluegray901"
                        >
                          <Img
                            src="images/img_star.svg"
                            className="h-[19px]"
                            alt="star"
                          />
                        </Button>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body10"
                        >
                          HUNG VUONG PLAZA CGV
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[40px] text-[12px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRed600"
                      >
                        CGV
                      </Button>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body13"
                    >
                      Floor 7, 126 Hung Vuong Street, 5 District, HCM City
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[36px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                      <div className="md:h-[29px] h-[32px] relative w-[362px]">
                        <Text
                          className="absolute font-medium h-[max-content] inset-y-[0] left-[0] my-[auto] text-bluegray_600 text-left w-[auto]"
                          variant="body10"
                        >
                          REGULAR 2D
                        </Text>
                        <div className="absolute flex h-[max-content] inset-y-[0] items-end justify-start my-[auto] p-[2px] right-[0] w-[auto]">
                          <Text
                            className="font-normal mr-[7px] not-italic text-bluegray_600 text-right w-[auto]"
                            variant="body12"
                          >
                            Price: 45.000 - 50.000 VND
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex-col gap-[16px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_300 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray300"
                          >
                            11:00
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_300 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray300"
                          >
                            13:45
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillBluegray901"
                          >
                            14:40
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            15:40
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            17:15
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            18:15
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            20:00
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            21:00
                          </Button>
                        </div>
                      </List>
                    </div>
                    <List
                      className="flex-col gap-[36px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-row items-center justify-between w-[362px]">
                          <Text
                            className="font-medium text-bluegray_600 text-left w-[auto]"
                            variant="body10"
                          >
                            GOLD CLASS 2D
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_600 text-right w-[auto]"
                            variant="body12"
                          >
                            Price: 100.000 VND
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_300 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray300"
                          >
                            12:40
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            15:40
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            18:35
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            17:10
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-row items-center justify-between w-[362px]">
                          <Text
                            className="font-medium text-bluegray_600 text-left w-[auto]"
                            variant="body10"
                          >
                            VELVET 2D
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_600 text-right w-[auto]"
                            variant="body12"
                          >
                            Price: 100.000 VND
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[18px] items-start justify-start w-[362px]">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_300 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray300"
                          >
                            12:15
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_300 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillGray300"
                          >
                            13:45
                          </Button>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[77px] text-[14px] text-bluegray_900 text-center w-[auto]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineBluegray300"
                          >
                            14:50
                          </Button>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[36%]">
              <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_image2_364x413.png"
                      className="h-[364px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="imageTwo"
                    />
                  </div>
                  <Text
                    className="font-medium mt-[48px] text-bluegray_900 text-left w-[auto]"
                    variant="body10"
                  >
                    SPIDERMAN : NO WAY HOME
                  </Text>
                  <div className="flex flex-row gap-[43px] items-start justify-start mt-[21px] md:w-[100%] w-[64%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Genre
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Duration
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Director
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Age Rating
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Action
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        2 houes 28 minutes
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Jon Watts
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        SU
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[36px] h-[333px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[40px] rounded-[12px] sm:w-[100%] w-[418px]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      variant="body8"
                    >
                      HUNG VUONG PLAZA CGV
                    </Text>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-[auto]"
                        variant="body12"
                      >
                        Thursday, 16 Desember 2021
                      </Text>
                      <div className="flex flex-row items-start justify-between sm:w-[100%] w-[370px]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body10"
                        >
                          REGULAR 2D{" "}
                        </Text>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body10"
                        >
                          14:40
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                    variant="body18"
                  >
                    *Seat selection can be made after this
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[368px]"
                  shape="RoundedBorder8"
                  size="2xl"
                  variant="FillBluegray901"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
          <footer className="bg-white_A700 flex items-center justify-center mt-[429px] md:px-[20px] w-[100%]">
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
                        Companu
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
                            alt="camera"
                          />
                          <Img
                            src="images/img_twitter.svg"
                            className="h-[24px] w-[24px]"
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="h-[24px] w-[24px]"
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

export default ChoosingSchedulePage;
