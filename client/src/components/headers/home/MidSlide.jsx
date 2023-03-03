import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  width: 82%;
`;

const RightComponent = styled(Box)`
  background: #fff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 5px;
  width: 17%;
  text-align : center;
`;

const MidSlide = ({ products, title, timer }) => {
  const adUrl =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adUrl} alt="ad url" style={{width : 227}} />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
