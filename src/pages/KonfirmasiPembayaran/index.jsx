import React from "react";

import { Text, Line, Img, Button } from "components";

const KonfirmasiPembayaranPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-start justify-end mx-[auto] p-[72px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start mb-[18px] mt-[23px] md:w-[100%] w-[73%]">
          <Text
            className="text-bluegray_900 text-left w-[auto]"
            variant="body5"
          >
            Konfirmasi Pembayaran
          </Text>
          <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[69px] md:w-[100%] w-[78%]">
            <Text
              className="font-medium mb-[2px] text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              Detail Jadwal
            </Text>
            <Text
              className="font-medium mt-[2px] text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              Ringkasan Order
            </Text>
          </div>
          <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[34px] md:w-[100%] w-[73%]">
            <Text
              className="font-normal mt-[4px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body12"
            >
              Judul Film
            </Text>
            <Text
              className="font-medium mb-[4px] text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Detail Transaksi
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[6px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[4px] md:w-[100%] w-[auto]">
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                variant="body10"
              >
                SPIDERMAN NO WAY HOME
              </Text>
              <Text
                className="font-normal mt-[44px] not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                Tanggal
              </Text>
              <Text
                className="font-medium mt-[10px] text-bluegray_900 text-left w-[auto]"
                variant="body10"
              >
                SENIN, 23 OKTOBER 2021
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[42%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal mb-[3px] not-italic text-black_900 text-left w-[auto]"
                  variant="body13"
                >
                  REGULAR SEAT
                </Text>
                <Text
                  className="font-normal sm:ml-[0] ml-[172px] sm:mt-[0] mt-[3px] not-italic text-black_900 text-right w-[auto]"
                  variant="body13"
                >
                  Rp. 70.000
                </Text>
                <Text
                  className="font-bold mb-[3px] sm:ml-[0] ml-[12px] text-gray_500 text-left w-[auto]"
                  variant="body13"
                >
                  x3
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[8px] w-[100%]">
                <Text
                  className="font-normal mb-[3px] not-italic text-black_900 text-left w-[auto]"
                  variant="body13"
                >
                  BIAYA LAYANAN
                </Text>
                <Text
                  className="font-normal sm:ml-[0] ml-[173px] sm:mt-[0] mt-[3px] not-italic text-black_900 text-right w-[auto]"
                  variant="body13"
                >
                  Rp. 3.000
                </Text>
                <Text
                  className="font-bold mb-[3px] sm:ml-[0] ml-[12px] text-gray_500 text-left w-[auto]"
                  variant="body13"
                >
                  x3
                </Text>
              </div>
              <Line className="bg-gray_400 h-[1px] mt-[15px] w-[100%]" />
              <Text
                className="font-medium mt-[19px] text-black_900 text-left w-[auto]"
                variant="body12"
              >
                Promo & Voucher
              </Text>
              <div className="flex flex-row items-start justify-between mt-[18px] w-[100%]">
                <Text
                  className="font-normal mb-[3px] not-italic text-black_900 text-left w-[auto]"
                  variant="body13"
                >
                  VOUCHER DANA
                </Text>
                <Text
                  className="font-normal mt-[3px] not-italic text-black_900 text-right w-[auto]"
                  variant="body13"
                >
                  - Rp. 70.000
                </Text>
              </div>
              <Line className="bg-gray_400 h-[1px] mt-[15px] w-[100%]" />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[10px] w-[100%]">
            <Text
              className="font-normal mb-[6px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body12"
            >
              Kelas
            </Text>
            <Text
              className="font-normal mb-[5px] sm:ml-[0] ml-[183px] not-italic text-bluegray_900 text-left w-[auto]"
              variant="body12"
            >
              Jam
            </Text>
            <Text
              className="font-medium sm:ml-[0] ml-[284px] sm:mt-[0] mt-[5px] text-black_900 text-left w-[auto]"
              variant="body12"
            >
              Total Bayar
            </Text>
            <Text
              className="font-medium sm:ml-[0] ml-[211px] sm:mt-[0] mt-[6px] text-black_900 text-right w-[auto]"
              variant="body12"
            >
              Rp. 70.000
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[4px] w-[100%]">
            <Text
              className="font-medium text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              GOLD CLASS 2D
            </Text>
            <Text
              className="font-medium sm:ml-[0] ml-[51px] text-bluegray_900 text-left w-[auto]"
              variant="body10"
            >
              14:40
            </Text>
            <Line className="bg-gray_400 h-[1px] mb-[19px] sm:ml-[0] ml-[259px] sm:mt-[0] mt-[8px] w-[42%]" />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between mt-[16px] w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[10px] items-start justify-start sm:mt-[0] mt-[27px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                variant="body12"
              >
                Tiket (3)
              </Text>
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                variant="body10"
              >
                C8, C9, C10
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[42%]">
              <div className="flex flex-row items-center justify-between w-[100%]">
                <Text
                  className="font-medium text-black_900 text-left w-[auto]"
                  variant="body12"
                >
                  Metode Pembayaran
                </Text>
                <Text
                  className="font-bold text-black_900 text-right w-[auto]"
                  variant="body18"
                >
                  Lihat Semua
                </Text>
              </div>
              <div className="flex flex-row gap-[14px] items-start justify-start mt-[15px] md:w-[100%] w-[21%]">
                <div className="flex h-[24px] items-center justify-start p-[3px] rounded-[4px] w-[24px]">
                  <Img
                    src="images/img_star1.svg"
                    className="h-[18px] rounded-[1px] w-[18px]"
                    alt="StarOne"
                  />
                </div>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body13"
                >
                  DANA
                </Text>
              </div>
              <Line className="bg-gray_400 h-[1px] md:ml-[0] ml-[3px] mt-[15px] w-[100%]" />
              <Text
                className="font-normal mt-[25px] not-italic text-bluegray_300 text-left w-[auto]"
                variant="body18"
              >
                *Pembelian tiket tidak bisa dibatalkan
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] mt-[29px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-deep_orange_50 w-[389px]"
                shape="RoundedBorder8"
                size="2xl"
                variant="FillGray501"
              >
                BELI TIKET
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KonfirmasiPembayaranPage;
