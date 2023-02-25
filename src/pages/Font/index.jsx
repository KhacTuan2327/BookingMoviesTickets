import React from "react";

import { Text } from "components";

const FontPage = () => {
  return (
    <>
      <div className="bg-gray_200 flex font-roboto items-start justify-start mx-[auto] p-[72px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start mb-[119px] md:ml-[0] ml-[16px] md:w-[100%] w-[92%]">
          <Text
            className="font-bold text-bluegray_900 text-left w-[auto]"
            variant="body10"
          >
            Header
          </Text>
          <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-start mt-[22px] w-[100%]">
            <Text
              className="font-normal sm:mt-[0] mt-[38px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Header H1
            </Text>
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-end justify-start mt-[26px] md:w-[100%] w-[69%]">
            <Text
              className="font-normal mb-[4px] md:mt-[0] mt-[19px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Header H2
            </Text>
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              variant="body5"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-[38px] items-end justify-start mt-[27px] md:w-[100%] w-[51%]">
            <Text
              className="font-normal mb-[3px] sm:mt-[0] mt-[6px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Header H3
            </Text>
            <Text
              className="font-medium text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex flex-row gap-[37px] items-start justify-start mt-[23px] md:w-[100%] w-[41%]">
            <Text
              className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Header H4
            </Text>
            <Text
              className="font-medium text-bluegray_900 text-left w-[auto]"
              variant="body12"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex flex-row gap-[38px] items-center justify-start mt-[25px] md:w-[100%] w-[38%]">
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Header H5
            </Text>
            <Text
              className="font-medium text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex flex-row gap-[37px] items-start justify-start mt-[22px] md:w-[100%] w-[32%]">
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Header H6
            </Text>
            <Text
              className="font-bold mt-[3px] text-bluegray_900 text-left w-[auto]"
              variant="body18"
            >
              This is the font for the website
            </Text>
          </div>
          <Text
            className="font-bold mt-[73px] text-bluegray_900 text-left w-[auto]"
            variant="body10"
          >
            Body
          </Text>
          <div className="flex sm:flex-col flex-row gap-[27px] items-end justify-start mt-[10px] md:w-[100%] w-[48%]">
            <Text
              className="font-normal sm:mt-[0] mt-[5px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Body Extra Large
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body11"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex flex-row gap-[67px] items-start justify-start mt-[21px] md:w-[100%] w-[45%]">
            <Text
              className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Body Large
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body12"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex flex-row gap-[56px] items-start justify-start mt-[25px] md:w-[100%] w-[42%]">
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Body Default
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              This is the font for the website
            </Text>
          </div>
          <div className="flex flex-row gap-[67px] items-center justify-start mt-[20px] md:w-[100%] w-[36%]">
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body13"
            >
              Body Small
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
              variant="body18"
            >
              This is the font for the website
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FontPage;
