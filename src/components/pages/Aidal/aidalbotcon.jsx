import React from "react";
import drop from "../../../assets/grommet.svg";
import { InputWrap, ReviewWrap, TitelWrap } from "./style";
import { campcar } from "../caravan/mock/motor";

const AidalBotCon = () => {
  const data = campcar.maindata;
  console.log(data);
  return (
    <ReviewWrap>
      <TitelWrap>
        <b>
          Premium Review<span>{data.length}</span>
        </b>
      </TitelWrap>
      <InputWrap>
        <input type="text" placeholder="Best"/>
        <img src={drop} alt="drop" />
      </InputWrap>
    </ReviewWrap>
  );
};

export default AidalBotCon;
