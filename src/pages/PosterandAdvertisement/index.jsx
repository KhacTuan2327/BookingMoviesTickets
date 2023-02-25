import React from "react";

import { Text, List, Img } from "components";

const PosterandAdvertisementPage = () => {
  function handleNavigate33() {
    window.location.href = "www.tix.id";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-start justify-start mx-[auto] p-[226px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start mb-[830px] mt-[30px] md:w-[100%] w-[94%]">
          <Text className="text-black_900 text-left w-[auto]" variant="body17">
            Movie Posters
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[163px] md:w-[100%] w-[84%]">
            <List
              className="sm:flex-col flex-row gap-[238px] md:gap-[40px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[49%]"
              orientation="horizontal"
            >
              <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                <Img
                  src="images/img_spidermannoway.png"
                  className="h-[1143px] md:h-[auto] object-cover w-[100%]"
                  alt="SpidermanNoWay"
                />
              </div>
              <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                <Img
                  src="images/img_yowisben_1143x800.png"
                  className="h-[1143px] md:h-[auto] object-cover w-[100%]"
                  alt="YowisBen"
                />
              </div>
            </List>
            <div className="flex items-center justify-start md:ml-[0] ml-[238px] md:w-[100%] w-[20%]">
              <Img
                src="images/img_ghostbustersafterlife.png"
                className="h-[1024px] md:h-[auto] object-cover w-[100%]"
                alt="GhostbustersAfterlife"
              />
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[257px] md:w-[100%] w-[19%]">
              <Img
                src="images/img_houseofgucci.png"
                className="h-[1024px] md:h-[auto] object-cover w-[100%]"
                alt="HouseofGucci"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[569px] w-[100%]">
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[22%]">
              <Img
                src="images/img_residentevil_1318x985.png"
                className="h-[1318px] md:h-[auto] object-cover w-[100%]"
                alt="ResidentEvil"
              />
            </div>
            <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[238px] md:w-[100%] w-[21%]">
              <Img
                src="images/img_thematrixresurrections.png"
                className="h-[1352px] md:h-[auto] object-cover w-[100%]"
                alt="TheMatrixResurrections"
              />
            </div>
            <div className="flex md:flex-1 items-center justify-start mb-[17px] md:ml-[0] ml-[300px] md:w-[100%] w-[22%]">
              <Img
                src="images/img_swordartonline_1368x965.png"
                className="h-[1368px] md:h-[auto] object-cover w-[100%]"
                alt="SwordArtOnline"
              />
            </div>
            <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[210px] md:w-[100%] w-[20%]">
              <Img
                src="images/img_tenet.png"
                className="h-[1335px] md:h-[auto] object-cover w-[100%]"
                alt="Tenet"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[369px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[61%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[84%]">
                <div className="flex items-center justify-start md:w-[100%] w-[44%]">
                  <Img
                    src="images/img_johnwickchapter.png"
                    className="h-[1518px] md:h-[auto] object-cover w-[100%]"
                    alt="JohnWickChapter"
                  />
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[46%]">
                  <Img
                    src="images/img_avengersendgame.png"
                    className="h-[1518px] md:h-[auto] object-cover w-[100%]"
                    alt="AvengersEndgame"
                  />
                </div>
              </div>
              <Text
                className="mt-[498px] text-black_900 text-left w-[auto]"
                variant="body17"
              >
                TIX ID News Picture
              </Text>
              <List
                className="border-[9px] border-deep_purple_A200 border-solid sm:flex-col flex-row gap-[109px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-[145px] p-[71px] sm:px-[20px] md:px-[40px] rounded-[5px] w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Img
                    src="images/img_image13.png"
                    className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="imageThirteen"
                  />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Img
                    src="images/img_image13_237x419.png"
                    className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="imageThirteen One"
                  />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Img
                    src="images/img_image13_2.png"
                    className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="imageThirteen Two"
                  />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Img
                    src="images/img_image13_3.png"
                    className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="imageThirteen Three"
                  />
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <Img
                    src="images/img_image13_1.png"
                    className="h-[237px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="imageThirteen Four"
                  />
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-[167px] md:gap-[40px] justify-start md:mt-[0] mt-[175px] md:w-[100%] w-[29%]">
              <Text
                className="md:ml-[0] ml-[7px] text-black_900 text-left w-[auto]"
                variant="body17"
              >
                Advertisements
              </Text>
              <div className="flex flex-col font-lato gap-[113px] md:gap-[40px] items-center justify-start w-[100%]">
                <div className="bg-gray_100 flex items-start justify-start pt-[42px] sm:px-[20px] md:px-[40px] px-[42px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[61px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col md:gap-[40px] gap-[61px] items-start justify-start mb-[25px] md:w-[100%] w-[47%]">
                      <div className="h-[160px] relative w-[100%]">
                        <div className="flex items-start justify-start mb-[-24px] px-[8px] w-[24%] z-[1]">
                          <Img
                            src="images/img_tixid1_88x88.png"
                            className="h-[88px] md:h-[auto] object-cover w-[88px]"
                            alt="tixidOne"
                          />
                        </div>
                        <Text
                          className="font-bold leading-[48.00px] mt-[auto] mx-[auto] text-black_900 text-left w-[100%]"
                          variant="body4"
                        >
                          SEWA/BELI FILM dan SERIAL di TIX ID sekarang!
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start md:w-[100%] w-[31%]">
                        <Img
                          src="images/img_globe_gray_900.svg"
                          className="h-[12px] w-[12px]"
                          alt="globe"
                        />
                        <Text
                          className="common-pointer font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
                          variant="body18"
                          onClick={handleNavigate33}
                        >
                          www.tix.id
                        </Text>
                        <Img
                          src="images/img_camera_black_900.svg"
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
                    <div className="flex md:mt-[0] mt-[30px] relative md:w-[100%] w-[32%]">
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
                <div className="bg-bluegray_901 flex items-center justify-start p-[30px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[29px] md:w-[100%] w-[24%]">
                    <div className="h-[122px] relative w-[100%]">
                      <Img
                        src="images/img_image4.png"
                        className="h-[122px] m-[auto] object-cover w-[100%]"
                        alt="imageFour"
                      />
                      <div className="absolute bg-white_A700 h-[10px] left-[6%] top-[26%] w-[6%]"></div>
                    </div>
                    <Text
                      className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body10"
                    >
                      Download Sekarang!
                    </Text>
                    <div className="flex flex-row gap-[24px] items-center justify-between mt-[26px] md:w-[100%] w-[82%]">
                      <Img
                        src="images/img_googleplay.png"
                        className="h-[32px] md:h-[auto] object-cover w-[auto]"
                        alt="imageFive"
                      />
                      <div className="h-[31px] relative w-[45%]">
                        <div className="bg-white_A700 h-[23px] ml-[6px] my-[auto] rounded-[11px] w-[24%]"></div>
                        <Img
                          src="images/img_image6.png"
                          className="absolute h-[31px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                          alt="imageSix"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex font-roboto items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="h-[304px] relative w-[100%]">
                      <Img
                        src="images/img_pexelscottonbro3945317.png"
                        className="h-[304px] m-[auto] object-cover w-[100%]"
                        alt="pexelscottonbro3945317"
                      />
                      <div className="absolute flex flex-col gap-[16px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[auto]">
                        <Text
                          className="text-center text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Pesan Tiket Film di TIX ID
                        </Text>
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PosterandAdvertisementPage;
