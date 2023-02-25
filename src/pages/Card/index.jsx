import React from "react";

import { Text, Input, Line, Img, Button, List } from "components";

const CardPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-start justify-center mx-[auto] p-[202px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start mb-[23px] mt-[18px] md:w-[100%] w-[94%]">
          <Text
            className="md:ml-[0] ml-[13px] text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Login and Sign Up Card
          </Text>
          <div className="border-[3px] border-deep_purple_A200 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[90px] p-[20px] rounded-[5px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end p-[38px] sm:px-[20px] md:w-[100%] w-[29%]">
              <Text
                className="md:ml-[0] ml-[41px] mt-[57px] text-black_900 text-left w-[auto]"
                variant="body5"
              >
                Masuk ke TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                E-MAIL
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[41px] mt-[13px] sm:w-[100%] w-[423px]">
                <div className="flex items-center justify-start w-[100%]">
                  <Input
                    className="font-normal leading-[normal] not-italic text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    type="email"
                    name="Group135"
                    placeholder="Enter your e-mail"
                  ></Input>
                </div>
                <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
              </div>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[42px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                PASSWORD
              </Text>
              <Input
                className="font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="flex md:ml-[0] ml-[41px] mt-[13px] sm:ml-[0] sm:w-[100%] w-[73%]"
                name="TextInput"
                placeholder="Masukkan Input"
                suffix={
                  <Img
                    src="images/img_eye.svg"
                    className="ml-[35px] mr-[0] rounded-[4px] my-[auto]"
                    alt="eye"
                  />
                }
                size="md"
                variant="UnderLineBluegray300"
              ></Input>
              <div className="flex items-center justify-start md:ml-[0] ml-[41px] mt-[14px] w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Forgot password? Reset Password
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] md:ml-[0] ml-[41px] mt-[37px] text-[20px] text-center text-white_A700 w-[423px]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillBluegray901"
              >
                Masuk Sekarang
              </Button>
              <Text
                className="font-normal md:ml-[0] ml-[201px] mt-[24px] not-italic text-bluegray_600 text-center w-[auto]"
                variant="body18"
              >
                Belum punya akun?{" "}
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] md:ml-[0] ml-[41px] mt-[6px] text-[20px] text-bluegray_901 text-center w-[423px]"
                shape="RoundedBorder4"
                size="xl"
                variant="OutlineBluegray600_1"
              >
                Daftar Sekarang
              </Button>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[108px] not-italic text-black_900 text-left w-[auto]"
                variant="body18"
              >
                2021 TIX ID - PT Nusantara Elang Sejahtera.
              </Text>
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[120px] p-[38px] sm:px-[20px] md:w-[100%] w-[29%]">
              <Text
                className="md:ml-[0] ml-[41px] mt-[57px] text-black_900 text-left w-[auto]"
                variant="body5"
              >
                Daftar TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                NAMA LENGKAP
              </Text>
              <Input
                className="font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="md:ml-[0] ml-[41px] mt-[13px] sm:ml-[0] sm:w-[100%] w-[423px]"
                name="TextInput One"
                placeholder="Masukkan Input"
                size="lg"
                variant="UnderLineBluegray300"
              ></Input>
              <Text
                className="font-normal md:ml-[0] ml-[38px] mt-[28px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                PASSWORD
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[41px] mt-[11px] sm:w-[100%] w-[423px]">
                <div className="md:h-[32px] h-[37px] relative w-[100%]">
                  <div className="absolute flex inset-x-[0] items-center justify-end mx-[auto] top-[0] sm:w-[100%] w-[423px]">
                    <Input
                      className="font-normal leading-[normal] not-italic text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                      wrapClassName="sm:w-[100%] w-[90%]"
                      name="Group136"
                      placeholder="Enter Input"
                    ></Input>
                  </div>
                  <Img
                    src="images/img_eye.svg"
                    className="absolute bottom-[0] h-[32px] right-[0] rounded-[4px] w-[32px]"
                    alt="eye One"
                  />
                </div>
                <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
              </div>
              <Text
                className="font-normal md:ml-[0] ml-[38px] mt-[30px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                NOMOR HANDPHONE
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[38px] mt-[11px] sm:w-[100%] w-[423px]">
                <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                    variant="body11"
                  >
                    +62
                  </Text>
                  <Line className="bg-bluegray_300 h-[18px] w-[1px]" />
                  <Text
                    className="flex-1 font-normal not-italic text-bluegray_300 text-left w-[auto]"
                    variant="body11"
                  >
                    Masukkan Nomor Handphone
                  </Text>
                </div>
                <Line className="bg-bluegray_300 h-[1px] w-[100%]" />
              </div>
              <div className="flex items-center justify-start md:ml-[0] ml-[41px] mt-[16px] w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                  variant="body18"
                >
                  Lupa password? Reset Password
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] md:ml-[0] ml-[38px] mt-[33px] text-[20px] text-center text-white_A700 w-[423px]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillBluegray901"
              >
                Daftar Sekarang
              </Button>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[115px] not-italic text-black_900 text-left w-[auto]"
                variant="body18"
              >
                2021 TIX ID - PT Nusantara Elang Sejahtera.{" "}
              </Text>
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[184px] p-[38px] sm:px-[20px] md:w-[100%] w-[29%]">
              <Text
                className="md:ml-[0] ml-[41px] mt-[57px] text-black_900 text-left w-[auto]"
                variant="body5"
              >
                Daftar TIX ID
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                ALAMAT EMAIL
              </Text>
              <Input
                className="font-normal leading-[normal] not-italic p-[0] text-[20px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="md:ml-[0] ml-[41px] mt-[13px] sm:ml-[0] sm:w-[100%] w-[423px]"
                name="TextInput Two"
                placeholder="Masukkan Input"
                size="lg"
                variant="UnderLineBluegray300"
              ></Input>
              <Button
                className="cursor-pointer font-medium leading-[normal] md:ml-[0] ml-[41px] mt-[66px] text-[20px] text-center text-white_A700 w-[423px]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillBluegray901"
              >
                Daftar Sekarang
              </Button>
              <div className="flex items-center justify-start md:ml-[0] ml-[41px] mt-[24px] w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                  variant="body18"
                >
                  *Dengan mendaftar saya menyetujui kebijakan dari TIX ID
                </Text>
              </div>
              <Text
                className="font-normal md:ml-[0] ml-[41px] mt-[282px] not-italic text-black_900 text-left w-[auto]"
                variant="body18"
              >
                2021 TIX ID - PT Nusantara Elang Sejahtera.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[47px] items-start justify-start md:ml-[0] ml-[13px] mt-[124px] md:w-[100%] w-[73%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[52%]">
              <Text
                className="font-bold mb-[4px] text-black_900 text-left w-[auto]"
                variant="body2"
              >
                Schedule Details
              </Text>
              <Text
                className="font-bold sm:mt-[0] mt-[4px] text-black_900 text-left w-[auto]"
                variant="body2"
              >
                My Tickets
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[43px] md:w-[100%] w-[40%]">
                <div className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex flex-col gap-[36px] h-[333px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[40px] rounded-[12px] sm:w-[100%] w-[418px]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        variant="body8"
                      >
                        GRAND INDONESIA CGV
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_600 text-left w-[auto]"
                          variant="body12"
                        >
                          Senin, 23 Desember 2021
                        </Text>
                        <div className="flex flex-row items-start justify-between sm:w-[100%] w-[370px]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body10"
                          >
                            GOLD CLASS 2D{" "}
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
                      * Pemilihan kursi dapat dilakukan setelah ini
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[368px]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="FillBluegray901"
                  >
                    BUTTON
                  </Button>
                </div>
                <Text
                  className="font-bold mt-[171px] text-black_900 text-left w-[auto]"
                  variant="body2"
                >
                  Order Summary
                </Text>
                <div className="bg-white_A700 border-[1px] border-gray_400 border-solid flex items-center justify-start mt-[40px] p-[27px] sm:px-[20px] rounded-[13px] shadow-bs3 md:w-[100%] w-[75%]">
                  <div className="flex flex-col items-start justify-start mb-[21px] md:w-[100%] w-[95%]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body10"
                    >
                      Ringkasan Order
                    </Text>
                    <Text
                      className="font-bold mt-[29px] text-bluegray_900 text-left w-[auto]"
                      variant="body13"
                    >
                      Detail Transaksi
                    </Text>
                    <List
                      className="flex-col gap-[3.5px] grid items-center mt-[16px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[419px]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body13"
                        >
                          REGULAR SEAT
                        </Text>
                        <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                            variant="body13"
                          >
                            Rp. 70.000
                          </Text>
                          <Text
                            className="font-bold text-bluegray_700 text-right w-[auto]"
                            variant="body13"
                          >
                            X3
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-bluegray_600 w-[100%]" />
                      <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[419px]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          variant="body13"
                        >
                          BIAYA LAYANAN
                        </Text>
                        <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                            variant="body13"
                          >
                            Rp.3.000
                          </Text>
                          <Text
                            className="font-bold text-bluegray_700 text-right w-[auto]"
                            variant="body13"
                          >
                            X3
                          </Text>
                        </div>
                      </div>
                    </List>
                    <Text
                      className="font-bold mt-[59px] text-bluegray_900 text-left w-[auto]"
                      variant="body13"
                    >
                      Promo & Voucher
                    </Text>
                    <div className="flex flex-row items-start justify-between mt-[16px] sm:w-[100%] w-[419px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        PROMO TIX ID
                      </Text>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                          variant="body13"
                        >
                          - Rp. 70.000
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[46px] sm:w-[100%] w-[419px]">
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Total Bayar
                      </Text>
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Rp. 149.000
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[50px] sm:w-[100%] w-[419px]">
                      <Text
                        className="font-bold text-bluegray_900 text-left w-[auto]"
                        variant="body13"
                      >
                        Metode Pembayaran
                      </Text>
                      <Text
                        className="font-bold text-blue_600 text-left w-[auto]"
                        variant="body18"
                      >
                        Lihat Semua
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[16px] items-start justify-start mt-[24px] md:w-[100%] w-[30%]">
                      <Img
                        src="images/img_logodanapng2160p.png"
                        className="h-[16px] md:h-[auto] object-cover w-[48%]"
                        alt="LogoDANAPNG2160p"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body12"
                      >
                        DANA
                      </Text>
                    </div>
                    <Text
                      className="font-normal mt-[28px] not-italic text-left text-red_300 w-[auto]"
                      variant="body18"
                    >
                      *Pembelian tiket tidak dapat dibatalkan
                    </Text>
                    <Button
                      className="cursor-pointer font-medium mt-[22px] sm:text-[20px] md:text-[22px] text-[24px] text-amber_A400 text-center w-[419px]"
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="FillBluegray901"
                    >
                      BELI TIKET
                    </Button>
                  </div>
                </div>
                <Text
                  className="font-bold md:ml-[0] ml-[32px] mt-[167px] text-black_900 text-left w-[auto]"
                  variant="body2"
                >
                  Movie Ticket
                </Text>
                <div className="h-[492px] md:ml-[0] ml-[32px] mt-[51px] relative rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] md:w-[100%] w-[96%]">
                  <div className="bg-bluegray_901 flex items-start justify-start mb-[-22px] mx-[auto] p-[32px] sm:px-[20px] w-[100%] z-[1]">
                    <div className="flex flex-col gap-[29px] items-start justify-start my-[10px] md:w-[100%] w-[73%]">
                      <Text
                        className="font-medium text-left text-orange_200 w-[auto]"
                        variant="body10"
                      >
                        Spiderman: No Way Home
                      </Text>
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <div className="flex flex-col gap-[33px] items-start justify-start w-[auto]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_300 text-left w-[auto]"
                              variant="body13"
                            >
                              Lokasi
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              Grand Indonesia CGV
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_300 text-left w-[auto]"
                              variant="body13"
                            >
                              Tanggal
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              16 December 2021
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start mt-[84px] w-[auto]">
                          <Text
                            className="font-medium text-bluegray_300 text-left w-[auto]"
                            variant="body13"
                          >
                            Jam
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            14:40
                          </Text>
                        </div>
                        <Line className="bg-bluegray_300 h-[136px] w-[1px]" />
                        <div className="flex flex-col gap-[30px] items-start justify-start w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_300 text-left w-[auto]"
                              variant="body13"
                            >
                              Kelas
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              Regular 2D
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_300 text-left w-[auto]"
                              variant="body13"
                            >
                              Studio
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body12"
                            >
                              Studio 1
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex h-[234px] items-start justify-start mt-[auto] mx-[auto] p-[32px] sm:px-[20px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group80.svg')" }}
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between mb-[43px] mt-[29px] md:w-[100%] w-[92%]">
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[55%]">
                        <div className="flex flex-row gap-[32px] items-center justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body13"
                          >
                            Kode Booking{" "}
                          </Text>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            037491740184392
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start mt-[14px] md:w-[100%] w-[68%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body13"
                          >
                            Password Key{" "}
                          </Text>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            147294
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[95px] items-start justify-start mt-[15px] md:w-[100%] w-[75%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body13"
                          >
                            Kursi
                          </Text>
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body12"
                          >
                            C8, C9, 10
                          </Text>
                        </div>
                      </div>
                      <div className="border-[3px] border-bluegray_900 border-solid flex h-[80px] items-center justify-start sm:mt-[0] mt-[15px] p-[8px] w-[80px]">
                        <Img
                          src="images/img_download.svg"
                          className="h-[64px] w-[64px]"
                          alt="download"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[80px] justify-start md:w-[100%] w-[61%]">
                <div className="flex flex-col gap-[127px] md:gap-[40px] items-start justify-start w-[100%]">
                  <List
                    className="border-[4px] border-deep_purple_A200 border-solid flex-col md:gap-[40px] gap-[83px] grid items-center p-[20px] rounded-[5px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[723px] ml-[12px] mr-[244px] my-[0] w-[100%]">
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start sm:w-[100%] w-[auto]">
                        <div className="flex items-center justify-start sm:w-[100%] w-[29%]">
                          <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_spidermannoway_202x135.png"
                              className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="SpidermanNoWay One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              variant="body10"
                            >
                              Spiderman: No Way Home
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                              variant="body13"
                            >
                              Kamis, 16 Desember 2021, 14:40{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                            <Img
                              src="images/img_location_bluegray_300.svg"
                              className="h-[32px] w-[32px]"
                              alt="location"
                            />
                            <Text
                              className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                              variant="body13"
                            >
                              Grand Indonesia CGV
                            </Text>
                            <Text
                              className="font-medium text-bluegray_700 text-left w-[auto]"
                              variant="body13"
                            >
                              ( Regular 2D)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[107px] text-[16px] text-center text-gray_300 w-[auto]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlue600"
                      >
                        Berhasil
                      </Button>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[48px] items-center justify-start max-w-[712px] ml-[23px] mr-[244px] my-[0] w-[100%]">
                      <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[19%]">
                        <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                          <Img
                            src="images/img_spidermannoway_202x135.png"
                            className="h-[202px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="SpidermanNoWay Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body10"
                          >
                            Spiderman: No Way Home
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            variant="body13"
                          >
                            Kamis, 16 Desember 2021, 14:40{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_location_bluegray_300.svg"
                            className="h-[32px] w-[32px]"
                            alt="location One"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                            variant="body13"
                          >
                            Grand Indonesia CGV
                          </Text>
                          <Text
                            className="font-medium text-bluegray_700 text-left w-[auto]"
                            variant="body13"
                          >
                            ( Regular 2D)
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <Text
                    className="font-bold text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    FILM WILL News Card
                  </Text>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[6px] sm:w-[100%] w-[auto]">
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
                        Spider-Man: No Way Home Rilis Trailer Terbaru.
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_600 text-left w-[auto]"
                        variant="body13"
                      >
                        17 Nov 2021 | FILM WILL
                      </Text>
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

export default CardPage;
