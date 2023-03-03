import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { imageURL } from "../../constants/data";

const Wrapper = styled(Grid)`
  margin-top: 10px;
`;

const Image = styled('img')({
    marginTop  : '10',
    width  : '100%',
    display: 'flex',
    justifyContent:'center'
})

const MidSection = () => {

    const imgUrl = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
      <Wrapper lg={12} md={12} sm={12} xs={12} container>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="image" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
      <Image src={imgUrl} alt="covid"/>
    </>
  );
};

export default MidSection;
