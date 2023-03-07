import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import FlashOn from "@mui/icons-material/FlashOn"; 
import { useState } from 'react';
  
import { useNavigate } from 'react-router-dom'; 
 
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/action/cartActions";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));
const Image = styled("img")({
  padding: "15px 10px",
  border: "0.5px solid #f0f0f0",
  width: "90%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "47%",
  borderRadius: "2px",
  height: "50px",
  color: "#fff",

}));

const ActionItem = ({ product }) => {


  const navigate = useNavigate();
  const { id } = product;
      
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
}

  const buyNow = () => {

  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <ShoppingCartIcon /> Add to Cart
      </StyledButton>
      <StyledButton
        style={{ background: "#fb641b" }}
        variant="contained"
        onClick={() => buyNow()}
      >
        <FlashOn /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
