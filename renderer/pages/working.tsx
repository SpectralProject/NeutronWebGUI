import Window from "../components/Window"
import Draggable from "react-draggable"
import { Button, Card } from "react-bootstrap"
import { Box } from "@chakra-ui/react"
import { useState } from "react"
import ScrollBlock from "../components/ScrollBlock"

const content = `
A network interface controller (NIC, also known as a network interface card,[3] network adapter, LAN adapter or physical network interface,[4] and by similar terms) is a computer hardware component that connects a computer to a computer network.[5]

Early network interface controllers were commonly implemented on expansion cards that plugged into a computer bus. The low cost and ubiquity of the Ethernet standard means that most newer computers have a network interface built into the motherboard, or is contained into a USB-connected dongle.

Modern network interface controllers offer advanced features such as interrupt and DMA interfaces to the host processors, support for multiple receive and transmit queues, partitioning into multiple logical interfaces, and on-controller network traffic processing such as the TCP offload engine. 
`
const title = "Network Interface"

export default () => {
  const [blockScroll, allowScroll] = ScrollBlock()

  blockScroll()

  const handleAllow = () => {
    allowScroll()
  }

  const handleDisallow = () => {
    blockScroll()
  }

  const [shouldShow, setShow] = useState(true)

  return (
    <Box backgroundColor="blue">
      <Button onClick={handleAllow}>ALLOW SCROLLING</Button>
      <Button onClick={handleDisallow}>DISALLOW SCROLLING</Button>

      <Box h="100vh" w="50vw" backgroundColor="red" axis="both">
        <Draggable>
          <div>
            <Window content={content} title={title} show={shouldShow}/>
          </div>
        </Draggable>
      </Box>
    </Box>
  )
}