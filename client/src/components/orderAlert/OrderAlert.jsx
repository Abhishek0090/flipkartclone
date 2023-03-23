import React from "react";
import "./orderAlert.css";

const orderAlert = () => {
  return (
    <>
      <div class="container d-flex justify-content-center mt-100">
        <div class="row d-flex justify-content-center">
          <div class="col-md-4">
            {" "}
            <button
              type="button"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#myModal"
            >
              Open Modal
            </button>{" "}
          </div>
        </div>
      </div>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="card">
            <div class="card-img">
              {" "}
              <img
                class="img-fluid"
                src="https://i.imgur.com/d0Jfn62.png"
                alt="icon"
              />{" "}
            </div>
            <div class="card-title">
              <p>Success!</p>
            </div>
            <div class="card-text">
              <p>
                Yay! It's a nice order! <br />
                It will arrive soon.
              </p>
            </div>{" "}
            <button class="btn">Track delivery</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default orderAlert;
