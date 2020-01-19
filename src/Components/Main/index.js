import React, {Component} from "react"; 
import styled from "styled-components";
import { motion } from "framer-motion";
import { withSnackbar } from 'notistack';


import Notify from "../Notify";


const Button = styled(motion.div)`
  width         : 200px;
  height        : 50px;
  border-radius : 3px;
  display       : flex;
  margin        : 10px;
  background-color: ${props => props.backgroundColor};
  justify-content : center;
  align-items   : center;
  user-select   : none;
`;


const Container = styled.div`
  width : 100%;
  height : 500px;
  display: flex;
  justify-content : center;
  align-items: center;
  flex-direction: row;
`;


const ButtonNames = [
  {
    "id" : 1,
    "title" : "Info",
    "color" : "#2beedc",
    "variant": "info"
  },
  {
    "id" : 2,
    "title" : "Warning",
    "color" : "#dc9a62",
    "variant" : "warning"
  },
  {
    "id" : 3,
    "title" : "Success",
    "color" : "#8ce886",
    "variant" : "success"
  },
  {
    "id" : 4,
    "title" : "error",
    "color" : "#ff4949",
    "variant" : "error"
  }
];

class Main extends Component {
  constructor() {
      super();
  }

  throwNotiff = config => {
    this.props.enqueueSnackbar("", {
      anchorOrigin: {
        vertical: config.vertical,
        horizontal: config.horizontal,
        persist  : true
      },
      children: key => (
        <Notify
          id={key}
          variant={config.variant}
          header={config.header}
          sub_header={config.sub_header}
        />
      )
    });
  };



  handleNotify = ( data ) => {
    let config = {
      "vertical"   : "top",
      "horizontal" : "left",
      "variant"    : data.variant,
      "header"     : data.header,
      "sub_header" : data.sub_header,
      
    };

    this.throwNotiff( config );
  }

  render(){
    document.body.style.backgroundColor = "#2a2c39";
      return(
          <Container>
            {
              ButtonNames.map((value, index)=> (
                <Button 
                  
                  key={index}
                  whileHover={{opacity:0.89}}
                  whileTap={{scale:0.88}}
                  transition={{duration:0.1}}
                  backgroundColor={value.color}
                  onClick={(  )=>{
                    this.handleNotify({ 
                                        variant   : value.variant, 
                                        header    :"Important Information", 
                                        sub_header:"This is some detailed information."})
                                      }}
                  >
                  {value.title}
                </Button>
              ))
            }
          </Container>
      )
  }
}

export default withSnackbar(Main);