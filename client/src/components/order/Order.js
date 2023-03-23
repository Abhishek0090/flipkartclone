import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Grid,
  styled,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/action/cartActions"; 
import TotalView from "../cart/TotalView"; 
import EmptyCart from "../cart/EmptyCart"; 
import { post } from "../../utils/paytm";
import { payUsingPaytm } from "../../Service/api";
import { CheckBox } from "@mui/icons-material";
import "../orderAlert/orderAlert.css";
import Flipkart from '../../assets/flipkart.png'


const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Order = () => {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "palabhishek411@gmail.com",
    });
    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  const [orderAlert, setOrderAlert] = useState(false);

  const Alert = () => (
 
    <div class="modal fade show d-flex mt-100"  id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="card">
          <div class="card-img">
            {" "}
            <img
              class="img-fluid"
              src={Flipkart}
              alt="icon"
            />{" "}
          </div>
          <div class="card-title text-center">
            <p>Success!</p>
          </div>
          <div class="card-text">
            <p>
              Yay! It's a nice order! <br />
              It will arrive soon.
            </p>
          </div>{" "}
          <Link to="/">
          <button class="btn" onClick={removeItemFromCart}>
            Go to HomePage
          </button>
          </Link>
        </div>
      </div>
    </div> 
  );

  return (
    <>
 {orderAlert ? <Alert/>:
      <>{cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                Shipping Address
              </Typography>
            </Header>

            <Grid
              container
              style={{ padding: "15px 24px", background: "#fff" }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <CheckBox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid> */}
            </Grid>

            <BottomWrapper>
              {/* <Link to={`/order/${id}`}> */}

              <StyledButton
                variant="contained"
                onClick={() => {
                  setOrderAlert(true);
                }}
              >
                Confirm Order
              </StyledButton>
              {/* </Link> */}
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )} 
      </>
      }
    </>
  );
};

export default Order;
