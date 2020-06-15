import React from 'react';
import { Link } from 'react-router-dom';
// import { col, row } from 'react-bootstrap';
import Images from './Images/men.jpg';

import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='policy'>
        <div className='innerpolicy'>
          <div className='container'>
            <h2 className='text'>Our Policies</h2>
            <div className='row'>
              <div className='col'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <h5 className='h5'>
                        Life Insurance<i className="child icon icon2" ></i>
                      </h5>
                      <p className='paragram'>
                        Life insurance is a combination of caring, commitment
                        and common sense
                      </p>
                     
                      <Link to='/' className='link'>
                        Learn more >
                      </Link>

                    </div>
                    <div className='flip-card-back'>
                      <h5 className='h5'>
                        Life Insurance <i className="child icon icon3"></i>
                      </h5>
                      <p className='paragram1'>
                        Life insurance is a combination of caring, commitment
                        and common sense
                      </p>
                     
                      <Link to='/' className='link'>
                        Learn more >
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <h5 className='h5'>
                        Health Insurance<i className="heartbeat icon icon2"></i>
                      </h5>
                      <p className='paragram'>
                        Healthcare should make you good not stressed. Let us
                        make this your reality
                      </p>
                      {/* <br /> */}
                      <Link to='/' className='link'>
                        Learn more >
                      </Link>
                    </div>
                    <div className='flip-card-back'>
                      <h5 className='h5'>
                        Health Insurance <i className="heartbeat icon icon3"></i>
                      </h5>
                      <p className='paragram1'>
                        Healthcare should make you good not stressed. Let us
                        make this your reality
                      </p>
                      {/* <br /> */}
                      <Link to='/' className='link'>
                        Learn more >
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <h5 className='h5'>
                        Motor Insurance<i className="car icon icon2"></i>
                      </h5>
                      <p className='paragram'>
                        Never get stranded again, drive happy
                      </p>
                      <br />

                      <Link to='/' className='link'>
                        Learn more >
                      </Link>
                    </div>
                    <div className='flip-card-back'>
                      <h5 className='h5'>
                        Motor Insurance <i className="car icon icon3"></i>
                      </h5>
                      <p className='paragram1'>
                        Never get stranded again, drive happy
                      </p>
                      <br />
                      <Link to='/' className='link'>
                        Learn more >
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='container '>
        <h2 className='text'>What people are saying</h2>

        <div className=' wrapper'>
          <div className=' plaintext '>
            <img className='img' src={Images} alt='woman' />
            <p className='parag '>
              This is by far the best insurance company I have ever been with. I
              started using Insurl insurance when I moved into the country.
              Insurl has been so great in taking care of all my insurance needs.
              I must mention my account manager is so amamzing. I highly
              recommend Insurl.
            </p>
            <p className='parag '>- Katherine</p>
           
          </div>
          <div className= 'plaintext line'></div>
          
          <div className=' plaintext'>
            <img className='img' src={Images} alt='men' />
            <p className='parag parag2'>
              You guys at Insurl are the BEST! Very professional and it is
              always a pleasure to dealing with you guys. My account manager
              always has the answers for me and is quick to respond to my emails
              and phone calls. This is one reason I remain a loyal customer. I
              can’t be more pleased.
            </p>
            <br />
            <br />
            
            <p className='parag'>- Emmanuel</p>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='subfooter'>
          <p>(+324) 09091000000</p>
          <p>
            10 Insurl Street, Gbagada <br />
            <span className='span'>Lagos</span>
          </p>
          <p>info@insurl.com</p>
        </div>
        <p className='lastfooter'>
          &copy;Copyright2020Insurl-All <br /> Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
