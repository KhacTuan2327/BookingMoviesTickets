import React from "react";

import { Text, List, Line, Img, Button } from "components";

const HeaderandFooterPage = () => {
  function handleNavigate34() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate35() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-start justify-start mx-[auto] p-[79px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[117px] md:gap-[40px] justify-start mb-[52px] md:ml-[0] ml-[58px] md:w-[100%] w-[78%]">
          <div className="flex sm:flex-col flex-row gap-[46px] items-start justify-start md:ml-[0] ml-[72px] md:w-[100%] w-[34%]">
            <div className="flex flex-col gap-[37px] items-start justify-start sm:mt-[0] mt-[84px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Bold
              </Text>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Regular
              </Text>
            </div>
            <div className="flex flex-col gap-[42px] items-center justify-start sm:w-[100%] w-[79%]">
              <div className="flex flex-row items-start justify-between md:w-[100%] w-[89%]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  Default
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  Hover
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  While Pressing
                </Text>
              </div>
              <div className="border-[2px] border-deep_purple_A200 border-solid flex items-start justify-start p-[21px] sm:px-[20px] rounded-[5px] w-[100%]">
                <div className="flex flex-col gap-[32px] items-center justify-start mb-[38px] md:w-[100%] w-[87%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-center w-[auto]"
                        variant="body12"
                      >
                        Button
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-[40px] gap-[83px] grid grid-cols-2 w-[62%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-center w-[auto]"
                          variant="body12"
                        >
                          Button
                        </Text>
                        <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                      </div>
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-center text-indigo_800 w-[auto]"
                          variant="body12"
                        >
                          Button
                        </Text>
                        <Line className="bg-indigo_800 h-[1px] w-[100%]" />
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-row items-start justify-between md:w-[100%] w-[99%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                        variant="body13"
                      >
                        Button
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-[40px] gap-[89px] grid grid-cols-2 w-[61%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                          variant="body13"
                        >
                          Button
                        </Text>
                        <div className="bg-bluegray_900 h-[1px] w-[100%]"></div>
                      </div>
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-center text-indigo_800 w-[auto]"
                          variant="body13"
                        >
                          Button
                        </Text>
                        <div className="bg-indigo_800 h-[1px] w-[100%]"></div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[129px] md:gap-[40px] justify-start w-[100%]">
            <List
              className="flex-col gap-[24px] grid mr-[72px] w-[96%]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1440px] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] w-[100%]">
                <div className="flex md:flex-1 items-start justify-start px-[8px] md:w-[100%] w-[9%]">
                  <Img
                    src="images/img_tixid1_2.png"
                    className="h-[88px] md:h-[auto] object-cover w-[88px]"
                    alt="tixidOne"
                  />
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row gap-[48px] items-center justify-end md:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      Tiket Saya
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      TIX ID News
                    </Text>
                  </div>
                  <Line className="bg-bluegray_300 h-[24px] md:h-[2px] md:w-[100%] w-[2px]" />
                  <Img
                    src="images/img_notification.svg"
                    className="h-[32px] w-[32px]"
                    alt="notification"
                  />
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-[18px] text-center text-orange_200 w-[101px]"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillBluegray901"
                  >
                    Masuk
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1440px] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] w-[100%]">
                <div className="flex md:flex-1 items-start justify-start px-[8px] md:w-[100%] w-[9%]">
                  <Img
                    src="images/img_tixid1.png"
                    className="h-[88px] md:h-[auto] object-cover w-[88px]"
                    alt="tixidOne One"
                  />
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-end sm:w-[100%] w-[auto]">
                  <div className="flex font-roboto items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex font-roboto items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      Tiket Saya
                    </Text>
                  </div>
                  <div className="flex font-roboto items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      TIX ID News
                    </Text>
                  </div>
                  <Img
                    src="images/img_notification.svg"
                    className="h-[32px] w-[32px]"
                    alt="notification One"
                  />
                  <Text
                    className="bg-gradient3  flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[40px]"
                    variant="body12"
                  >
                    A
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1440px] sm:px-[20px] md:px-[40px] px-[72px] py-[8px] w-[100%]">
                <div className="flex md:flex-1 items-start justify-start px-[8px] md:w-[100%] w-[9%]">
                  <Img
                    src="images/img_tixid1_2.png"
                    className="h-[88px] md:h-[auto] object-cover w-[88px]"
                    alt="tixidOne Two"
                  />
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-end sm:w-[100%] w-[auto]">
                  <div className="flex font-roboto items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex font-roboto items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      Tiket Saya
                    </Text>
                  </div>
                  <div className="flex font-roboto items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-center w-[auto]"
                      variant="body12"
                    >
                      TIX ID News
                    </Text>
                  </div>
                  <div className="font-roboto md:h-[32px] h-[34px] relative sm:w-[100%] w-[8%]">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                      alt="notification Two"
                    />
                    <div className="absolute bg-amber_A400 flex h-[21px] items-start justify-end right-[0] rounded-[10px] top-[0] w-[21px]">
                      <div className="flex items-center justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_900 text-center w-[auto]"
                          variant="body15"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="bg-gradient3  flex font-medium font-poppins h-[40px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[40px]"
                    variant="body12"
                  >
                    A
                  </Text>
                </div>
              </div>
            </List>
            <div className="bg-white_A700 flex items-center justify-start md:ml-[0] ml-[72px] pb-[79px] md:w-[100%] w-[96%]">
              <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                <Line className="bg-bluegray_200 h-[1px] w-[100%]" />
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[31px] md:w-[100%] w-[85%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                    <Img
                      src="images/img_tixid1_96x130.png"
                      className="h-[96px] md:h-[auto] object-cover w-[100%]"
                      alt="tixidOne Three"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[96px] items-start justify-start md:mt-[0] mt-[26px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_900 text-center w-[auto]"
                        variant="body12"
                      >
                        Perusahaan
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-[auto]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                            variant="body13"
                          >
                            Kontak Kami
                          </Text>
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                            variant="body13"
                          >
                            Tentang
                          </Text>
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                            variant="body13"
                          >
                            Partner
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-[40px] gap-[96px] grid grid-cols-2 sm:w-[100%] w-[64%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-center w-[auto]"
                          variant="body12"
                        >
                          Seputar
                        </Text>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[auto]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              TIX ID News
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Bioskop
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Tiket Saya
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Pembayaran
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Cicilan
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-center w-[auto]"
                          variant="body12"
                        >
                          Dukungan
                        </Text>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[auto]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Pusat Bantuan
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Kebijakan Privasi
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              FAQ
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Syarat dan Ketentuan
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                              variant="body13"
                            >
                              Update Covid-19
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col gap-[36px] items-center justify-start md:mt-[0] mt-[26px] md:w-[100%] w-[241px]">
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
                            onClick={handleNavigate34}
                            alt="twitter"
                          />
                          <Img
                            src="images/img_facebook.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate35}
                            alt="facebook"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body12"
                        >
                          Download Aplikasi TIX ID
                        </Text>
                        <div className="flex flex-row gap-[21px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_googleplay.png"
                            className="h-[33px] md:h-[auto] object-cover w-[auto]"
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
                      2021 TIX ID - PT Nusantara Elang Sejahtera.
                    </Text>
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

export default HeaderandFooterPage;
