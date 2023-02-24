import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const PopupmessageModal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[43%]"
        overlayClassName="bg-gray_900_7c fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-start mb-[209px] p-[24px] md:px-[20px] rounded-[4px] md:w-[100%] w-[auto]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between sm:w-[100%] w-[566px]">
              <Text
                className="font-medium text-bluegray_900 text-left w-[auto]"
                variant="body10"
              >
                Want to go back?
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer h-[32px] w-[32px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <Text
              className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[447px] not-italic text-bluegray_600 text-left"
              variant="body13"
            >
              The seat you previously selected will be canceled and you will
              have to re-select
            </Text>
            <div className="flex flex-row gap-[20px] items-start justify-end sm:w-[100%] w-[566px]">
              <Button
                className="common-pointer cursor-pointer font-normal leading-[normal] min-w-[79px] not-italic text-[16px] text-bluegray_600 text-center w-[auto]"
                onClick={() => navigate("/choosingseats")}
                shape="RoundedBorder4"
                size="sm"
                variant="OutlineBluegray600_1"
              >
                Return
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[99px] text-[16px] text-amber_A400 text-center w-[auto]"
                onClick={() => navigate("/confirmpayment")}
                shape="RoundedBorder4"
                size="sm"
                variant="FillBluegray901"
              >
                Canceled
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default PopupmessageModal;
