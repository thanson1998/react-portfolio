import { Div,
        Text,
        Button,
        Icon
} from "atomize";


const Navbar = () => {
  return (
    <Div
    bg="white"
    d="flex"
    align="center"
    p="1em"
    justify="space-between"
    w = "90%"
    m = "auto"
  >
    <Div
        d="flex"
        align="center"
        m="0 1rem"
        textAlign="left"
        textWeight="700"
        textSize="title"
    >
        Khoa Nguyen
    </Div>
    <Div
    align="center"
    textAligh="right"
    textSize="title"
    textWeight="500"
    justify="flex-end"
    d={{ xs: "none", md: "flex" }}
    >
        <Text m={{r: '2em'}}>About</Text>
        <Text m={{r: '2em'}}>Work</Text>
        <Text m={{r: '2em'}}>Social media</Text>
        <Button p="1em" bg="gray300" textColor="medium">Contact Me</Button>
    </Div>
    <Button bg="transparent" d={{ xs: "block", md: "none" }}><Icon name="Menu" align="center"></Icon></Button>
  </Div>
  )
}

export default Navbar