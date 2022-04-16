import React from 'react'
import { Div,
  Text,
  Button,
  Input,
  Row, Col,
  Textarea
} from "atomize";

const ContactForm = () => {
  return (
   <Div
   m={{t:'2em', b:'2em', l:'auto', r:'auto'}}
   align="center"
   textAlign="center"
   bg="gray300"
   w="60%"
   p='1em'
   rounded="xl"
   >
        <Text textSize="display1" textWeight="600" p={{t:'0.4em'}}>Contact me</Text>
    <Row>
        <Col size="5">
            <Div p="1rem">
            <Text textSize="subheader">Name</Text>
            <Input placeholder="Your name" />
            <Text textSize="subheader">Email</Text>
            <Input placeholder="Your email" />
            <Text textSize="subheader">Subject</Text>
            <Input placeholder="Subject" />
            </Div>
            </Col>
            <Col size="7">
            <Div p="1rem">
            <Text textSize="subheader">Message</Text>
            <Textarea placeholder="Message" maxH="8em"/>
            <Text m="0.5em"><i>Warning: The function is working, so dont spam.</i></Text>
            <Button w="30%" bg="info700" p={{l:"2em", r :"2em"}} hoverBg="info600" m="auto">Send</Button>
            </Div>
        </Col>
    </Row>
   </Div>
  )
}

export default ContactForm