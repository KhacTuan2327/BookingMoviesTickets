import React from "react";

import { Text, Input } from "components";

const ColorPage = () => {
  return (
    <>
      <div className="bg-gray_200 flex font-roboto items-center justify-end mx-[auto] p-[70px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start max-w-[1197px] mb-[71px] mt-[93px] mx-[auto] w-[100%]">
          <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[57%]">
            <Text
              className="font-bold text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              Main Color
            </Text>
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              variant="body10"
            >
              Brand Color
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[29px] md:w-[100%] w-[65%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[6%]">
              <div className="bg-bluegray_901 h-[40px] w-[40px]"></div>
              <div className="bg-amber_A400 h-[40px] mt-[41px] w-[40px]"></div>
              <div className="bg-red_300 h-[40px] mt-[34px] w-[40px]"></div>
              <div className="bg-blue_600 h-[40px] mt-[35px] w-[40px]"></div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[18px] md:w-[100%] w-[30%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <div className="flex flex-row gap-[12px] items-start justify-between w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 text-left w-[auto]"
                      variant="body18"
                    >
                      Royal Blue
                    </Text>
                    <Text
                      className="font-light text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      #1A2C50
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left"
                    as="h1"
                    variant="h1"
                  >
                    Primary color for button,
                    <br />
                    and other object
                  </Text>
                </div>
                <div className="bg-white_A700 h-[40px] shadow-bs1 w-[40px]"></div>
              </div>
              <div className="flex flex-row items-start justify-start mt-[3px] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-medium text-bluegray_901 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    (220, 51%, 21%)
                  </Text>
                  <Text
                    className="font-bold mt-[25px] text-bluegray_900 text-left w-[auto]"
                    variant="body18"
                  >
                    Sunshine Yellow
                  </Text>
                  <Text
                    className="font-normal mt-[6px] not-italic text-bluegray_900 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Color for text in button
                  </Text>
                  <Text
                    className="font-medium mt-[6px] text-bluegray_901 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    (45, 100%, 50%)
                  </Text>
                </div>
                <Text
                  className="font-light ml-[4px] mt-[38px] text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #FFBE00
                </Text>
                <div className="bg-orange_200 h-[40px] mb-[15px] ml-[59px] mt-[30px] w-[40px]"></div>
              </div>
              <div className="flex flex-row gap-[7px] items-center justify-start mt-[24px] md:w-[100%] w-[44%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Sweet Red
                </Text>
                <Text
                  className="font-light text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #FF6B6B
                </Text>
              </div>
              <Text
                className="font-normal mt-[6px] not-italic text-bluegray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Color for error
              </Text>
              <Text
                className="font-medium mt-[6px] text-bluegray_901 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                (0, 100%, 71%)
              </Text>
              <div className="flex flex-row gap-[8px] items-start justify-start mt-[26px] md:w-[100%] w-[40%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Sky blue
                </Text>
                <Text
                  className="font-light text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #118EEA
                </Text>
              </div>
              <Text
                className="font-normal mt-[5px] not-italic text-bluegray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Color for some icon, link, and some input
              </Text>
              <Text
                className="font-medium mt-[8px] text-bluegray_901 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                (205, 86%, 49%)
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[16%]">
              <div className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[65%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  White
                </Text>
                <Text
                  className="font-light text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #FFFFFF
                </Text>
              </div>
              <Text
                className="font-normal mt-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Apps background and button
              </Text>
              <Text
                className="font-medium mt-[5px] text-bluegray_901 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                (0, 0%, 100%)
              </Text>
              <div className="flex flex-row gap-[8px] items-start justify-between mt-[28px] w-[100%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Pastel Yellow
                </Text>
                <Text
                  className="font-light text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #F2C46F
                </Text>
              </div>
              <Text
                className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Color of ticket
              </Text>
              <Text
                className="font-medium mt-[6px] text-bluegray_901 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                (39, 83%, 69%)
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[117px] md:w-[100%] w-[6%]">
              <div className="bg-red_600 h-[40px] w-[40px]"></div>
              <div className="bg-gradient3  h-[40px] mt-[34px] w-[40px]"></div>
              <div className="bg-indigo_900 h-[40px] mt-[41px] w-[40px]"></div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[23%]">
              <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[58%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  CGV Red
                </Text>
                <Text
                  className="font-light text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #EC1E2B
                </Text>
              </div>
              <Text
                className="font-normal mt-[2px] not-italic text-bluegray_900 text-left"
                as="h1"
                variant="h1"
              >
                Primary color for button,
                <br />
                and other object
              </Text>
              <Text
                className="font-medium mt-[5px] text-bluegray_901 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                (356, 84%, 52%)
              </Text>
              <div className="flex flex-row items-start justify-between mt-[17px] w-[100%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  XXI Gradient
                </Text>
                <Text
                  className="font-light mt-[3px] text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #F2C46F
                </Text>
                <Text
                  className="font-light mt-[3px] text-bluegray_900 text-center w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  &
                </Text>
                <Text
                  className="font-light mt-[3px] text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #C6943F
                </Text>
              </div>
              <Text
                className="font-normal mt-[4px] not-italic text-bluegray_900 text-left"
                as="h1"
                variant="h1"
              >
                Primary color for button,
                <br />
                and other object
              </Text>
              <div className="flex flex-row gap-[9px] items-start justify-start mt-[6px] md:w-[100%] w-[82%]">
                <Text
                  className="font-medium text-bluegray_901 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  (39, 83%, 69%)
                </Text>
                <Text
                  className="font-medium text-bluegray_901 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  &
                </Text>
                <Text
                  className="font-medium text-bluegray_901 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  (38, 54%, 51%)
                </Text>
              </div>
              <div className="flex flex-row gap-[7px] items-start justify-start mt-[22px] md:w-[100%] w-[69%]">
                <Text
                  className="font-bold text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Cinépolis Blue
                </Text>
                <Text
                  className="font-light text-bluegray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  #000E62
                </Text>
              </div>
              <Text
                className="font-normal mt-[3px] not-italic text-bluegray_900 text-left"
                as="h1"
                variant="h1"
              >
                Primary color for button,
                <br />
                and other object
              </Text>
              <Text
                className="font-medium mt-[6px] text-bluegray_901 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                (231, 100%, 19%)
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-[70px] md:w-[100%] w-[38%]">
            <Text
              className="font-bold text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              State Button
            </Text>
            <Text
              className="font-bold text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              Shade
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[13px] md:w-[100%] w-[56%]">
            <Text
              className="font-bold md:mt-[0] mt-[8px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              Default
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[57px] md:mt-[0] mt-[9px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              Hover
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[65px] md:mt-[0] mt-[9px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              While Pressed
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[103px] not-italic text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Mainly used for text color but also used in some components like
              button
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[10px] md:w-[100%] w-[99%]">
            <Input
              className="h-[40px] w-[100%]"
              wrapClassName="flex h-[40px] mb-[2px] md:w-[100%] sm:w-[100%] w-[40px]"
              name="Default One"
              placeholder=""
              variant="FillBluegray901"
            ></Input>
            <Input
              className="h-[40px] w-[100%]"
              wrapClassName="flex h-[40px] mb-[2px] md:ml-[0] md:w-[100%] ml-[57px] sm:ml-[0] sm:w-[100%] w-[40px]"
              name="Hover One"
              placeholder=""
              variant="FillIndigo901"
            ></Input>
            <Input
              className="h-[40px] w-[100%]"
              wrapClassName="flex h-[40px] mb-[2px] md:ml-[0] md:w-[100%] ml-[57px] sm:ml-[0] sm:w-[100%] w-[40px]"
              name="WhilePressed One"
              placeholder=""
              variant="FillIndigo800"
            ></Input>
            <div className="bg-bluegray_900 h-[40px] md:ml-[0] ml-[141px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-bluegray_800 h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-bluegray_700 h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-bluegray_600 h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-bluegray_301 h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-bluegray_300 h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-bluegray_200 border-[1px] border-gray_700 border-solid h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-gray_300 border-[1px] border-gray_700 border-solid h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
            <div className="bg-white_A700 border-[1px] border-gray_700 border-solid h-[40px] md:ml-[0] ml-[56px] md:mt-[0] mt-[2px] w-[40px]"></div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[10px] md:w-[100%] w-[98%]">
            <Text
              className="font-light md:mt-[0] mt-[3px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #1A2C50
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[61px] md:mt-[0] mt-[3px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #282764
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[61px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #383782
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[145px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              900
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              800
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              700
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              600
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              500
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              400
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              300
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              200
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[75px] text-black_900 text-left w-[auto]"
              variant="body18"
            >
              100
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[4px] md:w-[100%] w-[99%]">
            <Text
              className="font-medium mb-[3px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (205, 86%, 49%)
            </Text>
            <Text
              className="font-medium mb-[3px] md:ml-[0] ml-[34px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (241, 44%, 27%)
            </Text>
            <Text
              className="font-medium mb-[3px] md:ml-[0] ml-[33px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (241, 41%, 36%)
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[117px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #333333
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[60px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #333D58
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[59px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #414A62
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[59px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #5A637A
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[59px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #8F98AA
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[59px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #9DA8BE
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[58px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #BDC5D4
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[57px] md:mt-[0] my-[2px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #DADFE8
            </Text>
            <Text
              className="font-light md:ml-[0] ml-[58px] md:mt-[0] mt-[3px] text-bluegray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              #FFFFFF
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] mt-[9px] md:w-[100%] w-[69%]">
            <Text
              className="font-medium text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (0, 0%, 20%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[47px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (224, 27%, 27%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (224, 20%, 32%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (223, 15%, 42%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (220, 14%, 61%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (220, 20%, 68%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (219, 21%, 79%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (219, 23%, 88%)
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[32px] text-bluegray_901 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              (0, 0%, 100%)
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPage;
