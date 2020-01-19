import React, { Component } from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";


const BarStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: ${props => props.height};
  border: none;
  border-radius: 0px 10px 0px 10px;
  background-color: ${props => props.variant};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: flex-start;
  align-items: flex-start;
  user-select: none;
`;

export default class NotificationThrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.switchVariant(props.variant).color,
      toggle: false
    };
  }

  switchVariant = variant => {
    let color = "";
    let message = "";

    switch (variant) {
      case "error":
        color = "#FF5252";
        break;

      case "success":
        color = "#43CD49";
        break;

      case "warning":
        color = "#F5B34F";
        break;

      case "info":
        color = "#61D0E9";
        break;

      default:
        color = "#0D1823";
        break;
    }
    let buf = {
      color: color
    };
    return buf;
  };

  changeHeight = () => {
    let toggle = !this.state.toggle;
    this.setState({
      toggle: toggle
    });
  };

  render() {
    return (
      <BarStyle
        variant={this.state.type}
        animate={{ height: this.state.toggle ? "auto" : "37px" }}
        transition={{ duration: 0.2 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
            fontSize: "25px",
            userSelct:"none"
          }}
        >
          <ErrorOutlineOutlinedIcon
            style={{ color: "rgba(254, 251, 251, 0.75)" ,margin:"3px"}}
          />
          <div
            style={{
              color: "black",
              fontFamily: "Montserrat",
              justifyContent:"flex-start",
              alignItems:"center",
              fontWeight: "600",
              fontSize: "14px",
              opacity: "0.8",
              margin: "5px",
              width: "230px"
            }}
          >
            {this.props.header}
          </div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            onTap={() => {
              this.changeHeight();
            }}
            animate={{ rotate: this.state.toggle ? 180 : 0 }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <ArrowDropDownOutlinedIcon />
          </motion.div>
        </div>
        {this.state.toggle ? (
          <div
            style={{
              display: "flex",
              fontSize: "13px",
              fontWeight: "600",
              fontFamily: "Montserrat",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "2%",
              padding: "10px"
            }}
          >
            {this.props.sub_header}
          </div>
        ) : (
          <div></div>
        )}
      </BarStyle>
    );
  }
}
