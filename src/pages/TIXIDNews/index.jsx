import React from "react";

import { Text, Img, Button } from "components";

const TIXIDNewsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] p-[72px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start max-w-[1296px] mb-[545px] mt-[20px] mx-[auto] w-[100%]">
          <Text className="text-black_900 text-left w-[auto]" variant="body5">
            TIX ID News
          </Text>
          <Text
            className="font-normal mt-[19px] not-italic text-black_900 text-left w-[auto]"
            variant="body13"
          >
            Berita tentang dunia perfilman terbaru untuk anda!
          </Text>
          <div className="h-[43px] md:h-[77px] mt-[34px] relative sm:w-[100%] w-[39%]">
            <Text
              className="font-normal ml-[24px] my-[auto] not-italic text-gray_400 text-left w-[auto]"
              variant="body13"
            >
              Search Post
            </Text>
            <div className="absolute border-[1px] border-gray_400 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[10px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_search.svg"
                className="h-[21px] mr-[6px] w-[auto]"
                alt="search"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start mt-[31px] md:w-[100%] w-[60%]">
            <Button
              className="cursor-pointer font-normal min-w-[122px] not-italic text-[16px] text-black_900_99 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBlack90099"
            >
              Spider-Man
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[89px] not-italic text-[16px] text-black_900_99 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBlack90099"
            >
              Marvel
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[113px] not-italic text-[16px] text-black_900_99 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBlack90099"
            >
              Adventure
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[89px] not-italic text-[16px] text-black_900_99 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBlack90099"
            >
              Fiction
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[113px] not-italic text-[16px] text-black_900_99 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBlack90099"
            >
              Superhero
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[163px] not-italic text-[16px] text-black_900_99 text-center w-[auto]"
              shape="RoundedBorder23"
              size="xl"
              variant="OutlineBlack90099"
            >
              Novel Adaptation
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[70px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start mb-[61px] md:w-[100%] w-[46%]">
              <div className="flex flex-col gap-[181px] md:gap-[40px] items-start justify-start w-[100%]">
                <div className="bg-gray_400 h-[410px] rounded-[12px] w-[100%]"></div>
                <Button
                  className="cursor-pointer font-normal min-w-[120px] not-italic text-[20px] text-center text-gray_600 w-[auto]"
                  size="xl"
                  variant="OutlineGray600"
                >
                  Spotlight
                </Button>
              </div>
              <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[527px]">
                <Text
                  className="font-medium leading-[50.00px] md:max-w-[100%] max-w-[527px] text-black_900 text-left"
                  variant="body2"
                >
                  Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan
                  Warga Net
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body10"
                >
                  17 Nov 2021 | TIX ID
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[73px] md:w-[100%] w-[50%]">
              <Button
                className="cursor-pointer font-normal min-w-[120px] not-italic text-[20px] text-center text-gray_600 w-[auto]"
                size="xl"
                variant="OutlineGray600"
              >
                Spotlight
              </Button>
              <div className="flex flex-col gap-[32px] items-start justify-start mt-[20px] sm:w-[100%] w-[506px]">
                <Text
                  className="font-medium leading-[50.00px] md:max-w-[100%] max-w-[506px] text-black_900 text-left"
                  variant="body2"
                >
                  Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan
                  Warga Net
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body10"
                >
                  17 Nov 2021 | TIX ID
                </Text>
              </div>
              <div className="bg-gray_400 h-[410px] md:ml-[0] ml-[63px] mt-[169px] rounded-[12px] w-[91%]"></div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between mt-[113px] w-[100%]">
            <div className="bg-gray_400 h-[237px] rounded-[12px] w-[33%]"></div>
            <div className="bg-gray_400 h-[237px] rounded-[12px] w-[33%]"></div>
            <div className="bg-gray_400 h-[237px] rounded-[12px] w-[33%]"></div>
          </div>
          <div className="flex flex-row items-center justify-between ml-[auto] mt-[43px] md:w-[100%] w-[40%]">
            <Button
              className="cursor-pointer font-normal min-w-[72px] not-italic text-[12px] text-black_900 text-center w-[auto]"
              size="sm"
              variant="OutlineBlack900"
            >
              Spotlight
            </Button>
            <Button
              className="cursor-pointer font-normal min-w-[72px] not-italic text-[12px] text-black_900 text-center w-[auto]"
              size="sm"
              variant="OutlineBlack900"
            >
              Spotlight
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[12px] md:w-[100%] w-[98%]">
            <Text
              className="font-medium leading-[32.00px] text-black_900 text-left w-[auto]"
              variant="body10"
            >
              Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan Warga
              Net
            </Text>
            <Text
              className="font-medium leading-[32.00px] text-black_900 text-left w-[auto]"
              variant="body10"
            >
              Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan Warga
              Net
            </Text>
            <Text
              className="font-medium leading-[32.00px] text-black_900 text-left w-[auto]"
              variant="body10"
            >
              Trailer Terbaru Spider-Man : No Way Home Kembali Hebohkan Warga
              Net
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[15px] md:w-[100%] w-[80%]">
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body13"
            >
              17 Nov 2021 | TIX ID
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[294px] not-italic text-black_900 text-left w-[auto]"
              variant="body13"
            >
              17 Nov 2021 | TIX ID
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[295px] not-italic text-black_900 text-left w-[auto]"
              variant="body13"
            >
              17 Nov 2021 | TIX ID
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default TIXIDNewsPage;
