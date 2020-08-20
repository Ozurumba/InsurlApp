import React from 'react';

const BeneficiaryDetailsPage = () => {

<div className="container-fluid">
      <div
        className="row"
        style={{
          height: "1024px",
          width: "1146",
          fontFamily: "poppins",
          color: "white",
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
          className="col-9"
          style={{ fontSize: "", backgroundColor: "white" }}
        >
          
  
  <h1 className="text-center mt-5 mb-3" style={{color:"black"}}>Beneficiary 1</h1>
  <div className="row ml-5">

   <div className="col ml-5" style={{backgroundColor:""}}>
      
      <h2 style={{color:"black"}}>Personal Details</h2>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      
    </div>

    <div className="col ml-5" style={{backgroundColor:""}}>
    
      <h2 style={{color:"black"}}>Banking Details</h2>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-5" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>

    </div>
    <div className="col ml-5" style={{backgroundColor:""}}>

    <h2 style={{color:"black"}}>Address Details</h2>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-2" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>
      <p className="mb-5" style={{ fontSize: "20px", color: "Midnightblue" }}>Firstname: tttttt</p>

    </div>

  </div>



              
  <div className="form-group" mx-3>
                <p className="float-right mt-5">
                  <Link to= '/EnterDetails' className="text-warning text-center px-5 mt-5" style={{color:"white", fontSize:"20px"}}>
                              + Add New Beneficiary
                  </Link>
              <button className="btn btn-warning px-5" style={{color:"white", fontSize:"20px"}}> Make payment</button>
                   
                  </p>
              </div>

                
        </div>
      </div>
    </div>
}

export default BeneficiaryDetailsPage;