import React from 'react'
import { Div,
  Text,
  Button,
  Icon
} from "atomize";

const Homepage = () => {
  return (
    <Div
    textAlign="center"
    m = "auto"
    fontFamily="primary"
    >
      <Text textSize="display3" textWeight="700" p={{t:'1em', b:'0.4em'}}>Khoa Nguyễn</Text>
      <Text textSize="subheader" textWeight="500" maxW="36rem" textAlign="center" m='auto' textColor="grey500" p={{b:'2em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Div 
      d={{ xs: "block", md: "flex" }}
      margin="auto"
      justify="center"
      >
        <Button w = {{ xs: "70%", md: "auto"}} bg="info700" p={{l:"2em", r :"2em"}} hoverBg="info600">Get in touch</Button>
        <Button w = {{ xs: "70%", md: "auto"}} bg="white" border="1px solid" hoverBg="gray200" textColor="dark" borderColor="light" p={{l:"1em", r :"2em",}} m={{l:'1em'}}><Icon name="Download" size="1em" m="10px" />Download CV</Button>
      </Div>
    </Div>
  )
}

export default Homepage