import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/dist/SimpleLineIcons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import FeatherIcon from "react-native-vector-icons/dist/Feather";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function SideBar(props) {
  return (
    <Rect>
      <Insurl>Insurl</Insurl>
      <Button>
        <ButtonOverlay>
          <Icon6Row>
            <MaterialCommunityIconsIcon
              name="view-dashboard-outline"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 36,
                height: 40,
                width: 35
              }}
            ></MaterialCommunityIconsIcon>
            <Dashboard>Dashboard</Dashboard>
          </Icon6Row>
        </ButtonOverlay>
      </Button>
      <Icon1Row>
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
      </Icon1Row>
      <Icon2Row>
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
      </Icon2Row>
      <Icon3Row>
        <FontAwesomeIcon
          name="credit-card"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 25,
            height: 25,
            width: 26
          }}
        ></FontAwesomeIcon>
        <Withdrawal>Withdrawal</Withdrawal>
      </Icon3Row>
      <Icon4Row>
        <MaterialCommunityIconsIcon
          name="human-greeting"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 27,
            height: 29,
            width: 28
          }}
        ></MaterialCommunityIconsIcon>
        <Support>Support</Support>
      </Icon4Row>
      <Icon5Row>
        <FeatherIcon
          name="settings"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 25,
            height: 25,
            width: 25
          }}
        ></FeatherIcon>
        <Settings>Settings</Settings>
      </Icon5Row>
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
        <Logout>Logout</Logout>
      </Icon7Row>
    </Rect>
  );
}

const Rect = styled.div`
  display: flex;
  width: 354px;
  height: 700px;
  background-color: rgba(48,57,96,1);
  flex-direction: column;
  margin-top: -3px;
  margin-left: -11px;
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
  font-size: 50px;
  margin-top: 56px;
  margin-left: 106px;
`;

const Button = styled.div`
  width: 243px;
  height: 55px;
  background-color: rgba(248,134,0,1);
  border-radius: 8px;
  flex-direction: row;
  display: flex;
  margin-top: 41px;
  margin-left: 56px;
  border: none;
`;

const Dashboard = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 7px;
  margin-top: 6px;
`;

const Icon6Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 61px;
  margin-left: 27px;
  margin-top: 6px;
`;

const Policies = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 11px;
`;

const Icon1Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 17px;
  margin-left: 96px;
  margin-right: 148px;
`;

const Profile = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 11px;
`;

const Icon2Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 34px;
  margin-left: 99px;
  margin-right: 161px;
`;

const Withdrawal = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 8px;
  margin-top: 2px;
`;

const Icon3Row = styled.div`
  height: 26px;
  flex-direction: row;
  display: flex;
  margin-top: 37px;
  margin-left: 93px;
  margin-right: 127px;
`;

const Support = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 16px;
`;

const Icon4Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 41px;
  margin-left: 89px;
  margin-right: 141px;
`;

const Settings = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 18px;
`;

const Icon5Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  margin-top: 40px;
  margin-left: 89px;
  margin-right: 141px;
`;

const Logout = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 8px;
  margin-top: 10px;
`;

const Icon7Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 74px;
  margin-left: 89px;
  margin-right: 165px;
`;

export default SideBar;
