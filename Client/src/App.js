import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import  Styles from './styles';



function App(props) {
  return (
    <>
      <RectStackStackStack>
        <RectStackStack>
          <RectStack>
            <Rect>
              <InsurlRow>
                <Insurl>Insurl</Insurl>
                <About>About</About>
                <Services>Services</Services>
                <Button>
                  <ButtonOverlay>
                    <Login>Login</Login>
                  </ButtonOverlay>
                </Button>
              </InsurlRow>
              <LoremIpsum>
                Ever wondered how to take control of your life?
              </LoremIpsum>
              <LoremIpsum2Stack>
                <LoremIpsum2>
                  Insurl offers you the very best of insurance policies with a
                  plan
                </LoremIpsum2>
                <LoremIpsum3>
                  system that doesn’t stress your finances and yet provides the
                </LoremIpsum3>
                <SecurityYouNeed>security you need.</SecurityYouNeed>
              </LoremIpsum2Stack>
              <Button2>
                <ButtonOverlay>
                  <SignUp>Sign Up</SignUp>
                </ButtonOverlay>
              </Button2>
            </Rect>
            <Rect4></Rect4>
            <Image src={require('./about.png')}></Image>
          </RectStack>
          <Rect5Stack>
            <Rect5></Rect5>
            <Rect6></Rect6>
            <Rect7></Rect7>
          </Rect5Stack>
          <NothingShouldJust>“Nothing should just</NothingShouldJust>
          <HappenToYou>happen to you...</HappenToYou>
          <TakeControl>Take control!”</TakeControl>
        </RectStackStack>
        <LoremIpsum4Stack>
          <LoremIpsum4>Insurl is an insurance company</LoremIpsum4>
          <LoremIpsum5>consistently goes the extra mile to</LoremIpsum5>
          <LoremIpsum6>improve the financial security of our</LoremIpsum6>
          <Consumers>consumers.</Consumers>
        </LoremIpsum4Stack>
        <LoremIpsum7Stack>
          <LoremIpsum7>With innovation and ingenuity as our</LoremIpsum7>
          <LoremIpsum8>guiding principles, we provide a range</LoremIpsum8>
          <LoremIpsum9>of avenues through which our</LoremIpsum9>
          <LoremIpsum10>consumers can access secure</LoremIpsum10>
          <LoremIpsum11>financial services that enable</LoremIpsum11>
        </LoremIpsum7Stack>
      </RectStackStackStack>
      <Rect2>
        <OurPolicies>Our Policies</OurPolicies>
        <Rect8Row>
          <Rect8>
            <LifeInsuranceRow>
              <LifeInsurance>Life Insurance</LifeInsurance>
              <MaterialCommunityIconsIcon
                name="human-handsup"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 40,
                  height: 43,
                  width: 40,
                  marginLeft: 22
                }}
              ></MaterialCommunityIconsIcon>
            </LifeInsuranceRow>
            <LoremIpsum12>Life insurance is a combination of</LoremIpsum12>
            <LoremIpsum13Stack>
              <LoremIpsum13>caring, commitment and common</LoremIpsum13>
              <Sense>Sense.</Sense>
            </LoremIpsum13Stack>
            <LearnMore>Learn More &gt;</LearnMore>
          </Rect8>
          <Rect9>
            <HealthInsuranceRow>
              <HealthInsurance>Health Insurance</HealthInsurance>
              <MaterialCommunityIconsIcon
                name="heart-pulse"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 40,
                  height: 43,
                  width: 40,
                  marginLeft: 21
                }}
              ></MaterialCommunityIconsIcon>
            </HealthInsuranceRow>
          </Rect9>
          <Rect10>
            <CarInsuranceRow>
              <CarInsurance>Car Insurance</CarInsurance>
              <IoniconsIcon
                name="ios-car"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 40,
                  height: 44,
                  width: 32,
                  marginLeft: 52
                }}
              ></IoniconsIcon>
            </CarInsuranceRow>
          </Rect10>
        </Rect8Row>
      </Rect2>
      <LoremIpsum14>What People Are Saying</LoremIpsum14>
      <EllipseRow>
        <svg
          viewBox="0 0 68.5 76"
          style={{
            width: 69,
            height: 76,
            marginTop: 2
          }}
        >
          <ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={34}
            cy={38}
            rx={34}
            ry={38}
          ></ellipse>
        </svg>
        <Rect11></Rect11>
        <svg
          viewBox="0 0 68.5 78"
          style={{
            width: 69,
            height: 78,
            marginLeft: 170
          }}
        >
          <ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={34}
            cy={39}
            rx={34}
            ry={39}
          ></ellipse>
        </svg>
      </EllipseRow>
      <Rect12>
        <LoremIpsum15Row>
          <LoremIpsum15>(+234) 0909 100 0000</LoremIpsum15>
          <LoremIpsum16>10, Insurl Street, Gbagada,</LoremIpsum16>
          <InfoInsurlCom>info@insurl.com</InfoInsurlCom>
        </LoremIpsum15Row>
        <Lagos>Lagos</Lagos>
        <LoremIpsum17>© Copyright 2020 Insurl - All</LoremIpsum17>
        <RightsReserved>Rights Reserved</RightsReserved>
      </Rect12>
    </>
  );
}

const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 324px;
  position: absolute;
  background-color: rgba(48,57,96,1);
  flex-direction: column;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Insurl = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 45px;
`;

const About = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 722px;
  margin-top: 21px;
`;

const Services = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 42px;
  margin-top: 21px;
`;

const Button = styled.div`
  width: 96px;
  height: 44px;
  background-color: rgba(248,134,0,1);
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
  margin-top: 11px;
  border: none;
`;

const Login = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 7px;
  margin-left: 0px;
`;

const InsurlRow = styled.div`
  height: 68px;
  flex-direction: row;
  display: flex;
  margin-top: 17px;
  margin-left: 55px;
  margin-right: 141px;
`;

const LoremIpsum = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 24px;
  margin-top: 32px;
  margin-left: 54px;
`;

const LoremIpsum2 = styled.span`
  font-family: Poppins;
  top: 0px;
  left: 1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 18px;
`;

const LoremIpsum3 = styled.span`
  font-family: Poppins;
  top: 27px;
  left: 1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const SecurityYouNeed = styled.span`
  font-family: Poppins;
  top: 56px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const LoremIpsum2Stack = styled.div`
  width: 611px;
  height: 86px;
  margin-top: 11px;
  margin-left: 53px;
  position: relative;
`;

const Button2 = styled.div`
  width: 98px;
  height: 43px;
  background-color: rgba(248,134,0,1);
  flex-direction: column;
  display: flex;
  margin-top: 9px;
  margin-left: 60px;
  border: none;
`;

const SignUp = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 18px;
  margin-top: 7px;
  margin-left: 0px;
`;

const Rect4 = styled.div`
  top: 126px;
  left: 850px;
  width: 375px;
  height: 368px;
  position: absolute;
  background-color: rgba(217,239,255,1);
  border-radius: 38px;
`;

const Image = styled.img`
  top: 117px;
  left: 886px;
  width: 319px;
  height: 377px;
  position: absolute;
  object-fit: contain;
`;

const RectStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 494px;
  position: absolute;
`;

const Rect5 = styled.div`
  top: 0px;
  left: 0px;
  width: 209px;
  height: 116px;
  position: absolute;
  background-color: rgba(248,134,0,1);
`;

const Rect6 = styled.div`
  top: 58px;
  left: 110px;
  width: 300px;
  height: 181px;
  position: absolute;
  background-color: rgba(48,57,96,1);
`;

const Rect7 = styled.div`
  top: 152px;
  left: 259px;
  width: 301px;
  height: 188px;
  position: absolute;
  background-color: #E6E6E6;
`;

const Rect5Stack = styled.div`
  top: 378px;
  left: 123px;
  width: 560px;
  height: 340px;
  position: absolute;
`;

const NothingShouldJust = styled.span`
  font-family: Poppins;
  top: 505px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
`;

const HappenToYou = styled.span`
  font-family: Poppins;
  top: 535px;
  left: 24px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
`;

const TakeControl = styled.span`
  font-family: Poppins;
  top: 566px;
  left: 24px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
`;

const RectStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 718px;
  position: absolute;
`;

const LoremIpsum4 = styled.span`
  font-family: Poppins;
  top: 0px;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum5 = styled.span`
  font-family: Poppins;
  top: 25px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum6 = styled.span`
  font-family: Poppins;
  top: 50px;
  left: 0px;
  position: absolute;
  color: #121212;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const Consumers = styled.span`
  font-family: Poppins;
  top: 72px;
  left: 2px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum4Stack = styled.div`
  top: 500px;
  left: 871px;
  width: 359px;
  height: 102px;
  position: absolute;
`;

const LoremIpsum7 = styled.span`
  font-family: Poppins;
  top: 0px;
  left: 2px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum8 = styled.span`
  font-family: Poppins;
  top: 26px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum9 = styled.span`
  font-family: Poppins;
  top: 48px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum10 = styled.span`
  font-family: Poppins;
  top: 71px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum11 = styled.span`
  font-family: Poppins;
  top: 92px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum7Stack = styled.div`
  top: 617px;
  left: 873px;
  width: 379px;
  height: 122px;
  position: absolute;
`;

const RectStackStackStack = styled.div`
  width: 1366px;
  height: 739px;
  margin-top: -6px;
  position: relative;
`;

const Rect2 = styled.div`
  width: 1366px;
  height: 268px;
  background-color: rgba(244,248,251,1);
  flex-direction: column;
  display: flex;
  margin-top: 19px;
`;

const OurPolicies = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(48,57,96,1);
  font-size: 30px;
  margin-top: 16px;
  margin-left: 600px;
`;

const Rect8 = styled.div`
  width: 328px;
  height: 174px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const LifeInsurance = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,33,73,1);
  font-size: 24px;
  margin-top: 7px;
`;

const LifeInsuranceRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 29px;
  margin-right: 66px;
`;

const LoremIpsum12 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 17px;
  margin-left: 29px;
`;

const LoremIpsum13 = styled.span`
  font-family: Poppins;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
`;

const Sense = styled.span`
  font-family: Poppins;
  top: 19px;
  left: 1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
`;

const LoremIpsum13Stack = styled.div`
  width: 278px;
  height: 42px;
  margin-top: 1px;
  margin-left: 27px;
  position: relative;
`;

const LearnMore = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(248,134,0,1);
  text-decoration-line: underline;
  margin-top: 20px;
  margin-left: 27px;
`;

const Rect9 = styled.div`
  width: 328px;
  height: 174px;
  background-color: rgba(255,255,255,1);
  flex-direction: row;
  display: flex;
  margin-left: 136px;
`;

const HealthInsurance = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,33,73,1);
  font-size: 24px;
  margin-top: 1px;
`;

const HealthInsuranceRow = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 23px;
  margin-left: 33px;
  margin-top: 8px;
`;

const Rect10 = styled.div`
  width: 328px;
  height: 174px;
  background-color: rgba(255,255,255,1);
  flex-direction: row;
  display: flex;
  margin-left: 107px;
`;

const CarInsurance = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,33,73,1);
  font-size: 24px;
  margin-top: 6px;
`;

const CarInsuranceRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 50px;
  margin-left: 20px;
  margin-top: 2px;
`;

const Rect8Row = styled.div`
  height: 174px;
  flex-direction: row;
  display: flex;
  margin-top: 8px;
  margin-left: 75px;
  margin-right: 64px;
`;

const LoremIpsum14 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,33,73,1);
  font-size: 25px;
  margin-top: 25px;
  margin-left: 548px;
`;

const Rect11 = styled.div`
  width: 5px;
  height: 282px;
  background-color: #E6E6E6;
  margin-left: 226px;
  margin-top: 16px;
`;

const EllipseRow = styled.div`
  height: 298px;
  flex-direction: row;
  display: flex;
  margin-top: 27px;
  margin-left: 403px;
  margin-right: 424px;
`;

const Rect12 = styled.div`
  width: 1366px;
  height: 190px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  margin-top: 46px;
`;

const LoremIpsum15 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum16 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-left: 370px;
  margin-top: 6px;
`;

const InfoInsurlCom = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-left: 317px;
  margin-top: 6px;
`;

const LoremIpsum15Row = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 30px;
  margin-left: 42px;
  margin-right: 41px;
`;

const Lagos = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-top: 2px;
  margin-left: 678px;
`;

const LoremIpsum17 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(98,100,102,1);
  font-size: 20px;
  margin-top: 14px;
  margin-left: 580px;
`;

const RightsReserved = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(98,100,102,1);
  font-size: 20px;
  margin-left: 649px;
`;

export default App;
