import React from "react";

import { Text, Img, Button } from "components";

const TIXIDNewsOnePage = () => {
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] p-[70px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[55px] items-center justify-start max-w-[1298px] mb-[491px] mt-[112px] mx-[auto] w-[100%]">
          <div className="flex flex-col items-start justify-start md:w-[100%] w-[67%]">
            <div className="flex flex-col gap-[32px] items-start justify-start max-w-[858px] w-[100%]">
              <Text
                className="leading-[70.00px] text-black_900 text-left"
                as="h3"
                variant="h3"
              >
                Trailer Terbaru Spider-Man : <br />
                No Way Home Kembali Hebohkan Warga Net
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body10"
              >
                17 Nov 2021 | TIX ID
              </Text>
            </div>
            <div className="bg-gray_400 h-[447px] mt-[66px] rounded-[12px] w-[100%]"></div>
            <Text
              className="font-normal leading-[30.00px] mt-[67px] not-italic text-black_900 text-left"
              variant="body12"
            >
              <span className="text-black_900 text-[18px] font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
                quis vitae molestie eleifend in. Proin volutpat id congue diam.
                Gravida lorem augue senectus nunc et, sagittis in mattis
                feugiat. Pharetra eleifend eget pellentesque faucibus laoreet.
                Fames amet hac quis suscipit proin amet. Neque rutrum nam
                parturient ac. Egestas ut vestibulum ac diam odio malesuada
                potenti. Donec vitae consequat consequat ornare ante et
                pulvinar. Diam vitae neque ridiculus diam at posuere volutpat.
                Donec in pellentesque diam congue.
                <br />
                <br />
                Ultrices malesuada diam condimentum risus. In velit justo eu ac
                amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus
                nam at cras nisi, vitae. Eleifend mollis sem odio morbi
                faucibus. Adipiscing in libero pharetra odio quam. Suspendisse
                tortor, viverra odio ultrices.
                <br />
                Eu arcu odio neque malesuada ut blandit sit.
              </span>
              <span className="text-black_900 text-[18px] font-roboto font-bold">
                {" "}
                In justo, suspendisse sit faucibus morbi egestas ut facilisis
                egestas.
              </span>
              <span className="text-black_900 text-[18px] font-roboto">
                {" "}
                Turpis non amet massa a, elit, in. Lectus at elementum, a nullam
                in. Commodo magna senectus malesuada ut rhoncus in. Placerat
                arcu congue faucibus auctor purus, fringilla praesent maecenas
                <br />
                <br />
                Quis sed lobortis sed amet nec eu, dolor. Elementum in integer
                sagittis tellus scelerisque imperdiet felis sit mauris.
                Scelerisque nunc, nullam malesuada leo odio malesuada lobortis
                egestas. Neque at fringilla morbi nulla facilisi tellus sit
                lobortis cursus. Venenatis at aliquet auctor ut elit, urna.
                Consequat quis risus turpis amet.
              </span>
            </Text>
            <Text
              className="font-medium mt-[60px] text-black_900 text-left w-[auto]"
              variant="body10"
            >
              Share this article
            </Text>
            <div className="flex flex-row gap-[16px] items-center justify-start mt-[22px] md:w-[100%] w-[8%]">
              <Img
                src="images/img_twitter_black_900.svg"
                className="common-pointer h-[24px] w-[24px]"
                onClick={handleNavigate2}
                alt="twitter"
              />
              <Img
                src="images/img_facebook_black_900.svg"
                className="common-pointer h-[24px] w-[24px]"
                onClick={handleNavigate3}
                alt="facebook"
              />
            </div>
            <Text
              className="font-medium md:ml-[0] ml-[307px] mt-[123px] text-black_900 text-center w-[auto]"
              variant="body6"
            >
              See Other Article
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="bg-gray_400 h-[237px] rounded-[12px] w-[33%]"></div>
              <div className="bg-gray_400 h-[237px] rounded-[12px] w-[33%]"></div>
              <div className="bg-gray_400 h-[237px] rounded-[12px] w-[33%]"></div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[2px] mt-[43px] md:w-[100%] w-[74%]">
              <Button
                className="cursor-pointer font-normal min-w-[72px] not-italic text-[12px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="OutlineBlack900"
              >
                Spotlight
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[72px] md:ml-[0] ml-[366px] not-italic text-[12px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="OutlineBlack900"
              >
                Spotlight
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[72px] md:ml-[0] ml-[369px] not-italic text-[12px] text-black_900 text-center w-[auto]"
                size="sm"
                variant="OutlineBlack900"
              >
                Spotlight
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:ml-[0] ml-[2px] mt-[12px] md:w-[100%] w-[98%]">
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
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[3px] mt-[15px] md:w-[100%] w-[79%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                17 Nov 2021 | TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[293px] not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                17 Nov 2021 | TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[296px] not-italic text-black_900 text-left w-[auto]"
                variant="body13"
              >
                17 Nov 2021 | TIX ID
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TIXIDNewsOnePage;
