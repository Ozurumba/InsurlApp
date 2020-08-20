import React from 'react';
import { Link } from 'react-router-dom';


const BeneficiaryDetails = () => {

    return (
        <div className="container-fluid">
          <div
            className="row"
            style={{
              height: "1024px",
              width: "1146",
              fontFamily: "poppins",
              color: "",
            }}
          >
            <div
              className="col-3 text-center"
              style={{
                fontSize: "",
                backgroundColor: "MidnightBlue",
              }}
            >
              <div
                className="mt-0 mb-5"
                style={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {" "}
                Insurl{" "}
              </div>
    
              <div
                className="container "
                style={{
                  fontSize: "30px",
                  fontWeight: "normal",
                }}
              >
                <ul className="nav nav-pills flex-column text-left" style={{}}>
                  <li className="">
                    {" "}
                    <a class="nav-link   mt-5  text-white " href="#">
                      <span className=" mr-4">
                        <i class="fas fa-qrcode fa-xs"></i>
                      </span>
                      <span className="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a class="nav-link    text-white " href="#">
                      <span className=" mr-4">
                        {" "}
                        <i class="far fa-address-card fa-xs"></i>
                      </span>{" "}
                      <span className="mr-5">Policies</span>
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a class="nav-link    text-white" href="#">
                      <span className=" mr-4">
                        <i class="fas fa-user fa-xs mr-1"></i>
                      </span>{" "}
                      <span className="mr-5">Profile</span>
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a class="nav-link   text-white" href="#">
                      <span className=" mr-4">
                        {" "}
                        <i class="far fa-id-badge fa-xs mr-2 "></i>
                      </span>{" "}
                      <span className="mr-5">Claim</span>
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a class="nav-link   text-white" href="#">
                      {" "}
                      <span className=" mr-4">
                        <i class="far fa-id-badge fa-xs mr-2 "></i>
                      </span>{" "}
                      <span className="mr-5">Support</span>
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a class="nav-link   mb-5 text-white" href="#">
                      {" "}
                      <span className=" mr-4">
                        {" "}
                        <i class="fas fa-cog fa-xs mr-2"></i>
                      </span>
                      <span className="mr-5">Setting</span>
                    </a>
                  </li>
                </ul>
    
                <div
                  className="mt-5 align-self-baseline"
                  style={{
                    fontSize: "30px",
                    fontWeight: "normal",
                  }}
                >
                  <ul className="nav nav-pills flex-column text-left">
                    <li className="">
                      {" "}
                      <a class="nav-link   mb-5 text-white" href="#">
                        {" "}
                        <span className=" mr-4">
                          {" "}
                          <i class="fas fa-sign-out-alt fa-xs mr-2"></i>
                        </span>
                        <span className="mr-5">Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div
              className="col-9 container"
              style={{ fontSize: "12px", backgroundColor: "white", color: "black" }}
            >
              <div className="row mt-5">
                <div className="col">
                  <h2 className="mt-5">Personal details</h2>
    
                  <form className="">
                    <div className="row">
                      <div className="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          First name
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="firstname"
                          placeholder="First name"
                          name="firstname"
                        />
                      </div>
    
                      <div class="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Last name
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="lastname"
                          placeholder="Last name"
                          name="lastname"
                        />
                      </div>
    
                      <div className="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Middle name
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="middlename"
                          placeholder="Middle name"
                          name="middlename"
                        />
                      </div>
                    </div>
                  </form>
    
                  <form className="mt-5">
                    <div className="row">
                      <div className="col-2">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Date of Birth
                        </span>
    
                        <div className="input-group mt-2">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Date of Birth"
                          />
                          <div className="input-group-append">
                            {/* <span className="input-group-text"> <i className="fa fa-calendar" style={{fontSize: "23px", color: "white"}}></i></span> */}
                          </div>
                        </div>
                      </div>
    
                      <div className="col-2">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Gender
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="gender"
                          placeholder="Gender"
                          name="gender"
                        />
                      </div>
    
                      <div className="col-4">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Phone number
                        </span>
    
                        <div class="input-group mt-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text">+234</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone number"
                          />
                        </div>
                        
                      </div>
    
                      <div className="col-4">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Email address
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                  </form>
    
                  <h2 className="mt-5">Financial details</h2>
                  <form className="">
                    <div className="row">
                      <div className="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          BVN
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="bvn"
                          placeholder="BVN"
                          name="bvn"
                        />
                      </div>
    
                      <div class="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Bank
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="bank"
                          placeholder="Bank"
                          name="bank"
                        />
                      </div>
    
                      <div class="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Account number
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="accountnumber"
                          placeholder="Account number"
                          name="accountnumber"
                        />
                      </div>
                    </div>
                  </form>
    
                  <h2 className="mt-5">Address</h2>
                  <form className="">
                    <div className="row">
                      <div className="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          Street name
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="streetname"
                          placeholder="Street name"
                          name="streetname"
                        />
                      </div>
    
                      <div class="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          City
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="city"
                          placeholder="City"
                          name="city"
                        />
                      </div>
    
                      <div class="col">
                        <span
                          className="mb-5"
                          style={{ fontSize: "20px", color: "Midnightblue" }}
                        >
                          {" "}
                          State
                        </span>
    
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="state"
                          placeholder="State"
                          name="state"
                        />
                      </div>
                    </div>
                    <div className="m-5" style={{ fontSize: "25px", color: "white" }}>
                    <label for="myfile" style={{ fontSize: "25px", color: "black" }}>
                      Upload Passport : 
                    </label>
                    <input className="bg-warning " type="file" id="myfile" name="myfile"  /> 

                    
                      <button
                        type="button"
                        className=" btn btn-warning float-right px-5"
                        style={{ fontSize: "25px", color: "white" }}
                      >
                        Proceed
                      </button>
                    </div>
                  </form>
    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
      );
    }


export default BeneficiaryDetails;