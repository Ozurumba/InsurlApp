import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    return(

        <div className= "container-fluid" id="container" style={{backgroundColor:"rgb(247, 243, 243)"}}>
     <div className="row">
    <section className="col align-self-center  d-block h-100" 
             style={{backgroundColor: "rgb(247, 243, 243)"}}>
      <h1 className= "text-center" style={{color: "MidnightBlue", fontSize: "5rem"}}>Insurl</h1>
      <h6 className= "text-center" style={{color: "MidnightBlue"}}>...we got you covered</h6>
    
    </section>
    <div className="col" style={{backgroundColor: "white" }}>
       <span> 
       <i className="fas fa-long-arrow-alt-left" style={{fontSize: "12px" , color: "MidnightBlue"}}> Go Home</i>
       </span>
  
      <form action="" className="h-100 m-5 p-5 align-self-center ">
        
              <div className=" form-group mb-3 d-block">
                <input
                  type="text"
                  placeholder="First name"  
                  className="form-control"/>
              </div>
              
              <div className=" form-group mb-3">
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                />
              
              </div>
              <div className=" form-group mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              
              <div className=" form-group mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              
                
         <div className="form-group form-check">
        <label className="form-check-label">
            <input className="form-check-input" 
                type="checkbox"/> Remember me          
        </label>
           
           <label className ="form-check-label">
             <span className=" ml-5 pl-5">
                  <a
                    id="forgot-password"
                    href="#"
                    className="text-warning "
                  >
                    <strong className="ml-5">Forgot password ?</strong>
                  </a>
                </span>
           </label>
                
        </div>
             
        
        
        <button type="button" className="btn btn-primary btn-block mt-4">
              <strong> Sign Up</strong>
        </button>
        
         <button type="button" className="btn btn-danger btn-block mt-4">
                <strong> Sign Up with Google</strong>
              </button>

              <div className="form-group" mx-3>
                <p className="text-center mt-5">
                  <strong>Already have an account ?</strong>
                  
                  <Link to= '/LoginPage' className='text-warning'>
                  <strong className="ml-1">Log In</strong>
                  </Link>
                 
                   
                  
                </p>
              </div>
            </form>
    
    </div>
    
  </div>
          
   </div>
                                                        
        
    )
}

export default SignUp;