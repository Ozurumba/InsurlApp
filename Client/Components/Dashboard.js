import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
// import SimpleLineIconsIcon from "react-native-vector-icons/dist/SimpleLineIcons";
// import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
// import FeatherIcon from "react-native-vector-icons/dist/Feather";
// import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function Dashboard(props) {
  return (
    <Container>
      <RectRow>
        <Rect>
          <Insurl>Insurl</Insurl>
          <Button2>
            <ButtonOverlay>
              <IconRow>
                <MaterialCommunityIconsIcon
                  name="view-dashboard-outline"
                  style={{
                    color: "rgba(255,255,255,1)",
                    fontSize: 36,
                    height: 40,
                    width: 35
                  }}
                ></MaterialCommunityIconsIcon>
                <Text>Dashboard</Text>
              </IconRow>
            </ButtonOverlay>
          </Button2>
          <Icon2Row>
            <SimpleLineIconsIcon
              name="book-open"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 25,
                height: 28,
                width: 25
              }}
            ></SimpleLineIconsIcon>
            <Policies>Policies</Policies>
          </Icon2Row>
          <Icon3Row>
            <FontAwesomeIcon
              name="user-o"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 26,
                height: 26,
                width: 23
              }}
            ></FontAwesomeIcon>
            <Profile>Profile</Profile>
          </Icon3Row>
          <Icon4Row>
            <FontAwesomeIcon
              name="credit-card"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 25,
                height: 25,
                width: 26,
                marginTop: 2
              }}
            ></FontAwesomeIcon>
            <Withdrawal>Withdrawal</Withdrawal>
          </Icon4Row>
          <Icon5Row>
            <MaterialCommunityIconsIcon
              name="human-greeting"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 27,
                height: 29,
                width: 26,
                marginTop: 1
              }}
            ></MaterialCommunityIconsIcon>
            <Support>Support</Support>
          </Icon5Row>
          <Icon6Row>
            <FeatherIcon
              name="settings"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 25,
                height: 25,
                width: 25,
                marginTop: 2
              }}
            ></FeatherIcon>
            <Settings>Settings</Settings>
          </Icon6Row>
          <Icon7Row>
            <IoniconsIcon
              name="ios-log-out"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 35,
                height: 40,
                width: 29
              }}
            ></IoniconsIcon>
            <LogOut>Log Out</LogOut>
          </Icon7Row>
        </Rect>
        <HelloConfidenceColumn>
          <HelloConfidence>Hello Confidence</HelloConfidence>
          <LoremIpsum>You currently have no policies</LoremIpsum>
          <Button>
            <ButtonOverlay>
              <GetAPolicy>Get a policy</GetAPolicy>
            </ButtonOverlay>
          </Button>
        </HelloConfidenceColumn>
        <Rect2></Rect2>
      </RectRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(244,248,251,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect = styled.div`
  width: 303px;
  height: 768px;
  background-color: rgba(48,57,96,1);
  flex-direction: column;
  display: flex;
`;

const Insurl = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 50px;
  margin-top: 53px;
  margin-left: 74px;
`;

const Button2 = styled.div`
  width: 212px;
  height: 51px;
  background-color: rgba(248,134,0,1);
  border-radius: 8px;
  flex-direction: row;
  display: flex;
  margin-top: 56px;
  margin-left: 46px;
  border: none;
`;

const Text = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 6px;
  margin-top: 5px;
`;

const IconRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 50px;
  margin-left: 8px;
  margin-top: 5px;
`;

const Policies = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 20px;
`;

const Icon2Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 59px;
  margin-right: 129px;
`;

const Profile = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 19px;
`;

const Icon3Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 23px;
  margin-left: 63px;
  margin-right: 138px;
`;

const Withdrawal = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 20px;
`;

const Icon4Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 59px;
  margin-right: 83px;
`;

const Support = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 21px;
`;

const Icon5Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 18px;
  margin-left: 59px;
  margin-right: 118px;
`;

const Settings = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 17px;
`;

const Icon6Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 17px;
  margin-left: 60px;
  margin-right: 121px;
`;

const LogOut = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 7px;
  margin-top: 5px;
`;

const Icon7Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 176px;
  margin-left: 67px;
  margin-right: 125px;
`;

const HelloConfidence = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,33,73,1);
  font-size: 45px;
`;

const LoremIpsum = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(129,123,123,1);
  font-size: 30px;
  margin-top: 225px;
  margin-left: 207px;
`;

const Button = styled.div`
  width: 201px;
  height: 52px;
  background-color: rgba(248,134,0,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 29px;
  margin-left: 317px;
  border: none;
`;

const GetAPolicy = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 14px;
  margin-left: 45px;
`;

const HelloConfidenceColumn = styled.div`
  width: 655px;
  flex-direction: column;
  display: flex;
  margin-left: 92px;
  margin-top: 107px;
  margin-bottom: 242px;
`;

const Rect2 = styled.div`
  width: 364px;
  height: 735px;
  background-color: #E6E6E6;
  margin-left: 286px;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-top: -14px;
  margin-left: -17px;
  margin-right: -413px;
`;

export default Dashboard;
